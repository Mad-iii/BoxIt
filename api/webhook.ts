import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(req: VercelRequest, res: VercelResponse) {
    // Only accept POST requests
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method not allowed" });
    }

    // Verify the request is from Safepay using their webhook secret
    const safepaySecret = req.headers["x-safepay-signature"];
    if (safepaySecret !== process.env.SAFEPAY_WEBHOOK_SECRET) {
        return res.status(401).json({ error: "Unauthorized" });
    }

    const order = req.body;

    try {
        await fetch(`${process.env.PORTAL_URL}/api/ingest`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "x-ingest-secret": process.env.INGEST_SECRET!,
            },
            body: JSON.stringify({
                type: "ORDER_CREATED",
                storeId: process.env.STORE_ID!,
                data: {
                    orderNumber: order.tracker ?? order.id ?? `ORD-${Date.now()}`,
                    total: order.net_amount ?? order.amount ?? 0,
                    customerName: order.customer?.first_name
                        ? `${order.customer.first_name} ${order.customer.last_name}`
                        : undefined,
                    customerEmail: order.customer?.email ?? undefined,
                    items: order.cart?.items?.map((i: any) => ({
                        name: i.name ?? i.product_name,
                        quantity: i.quantity,
                        price: i.unit_price ?? i.price,
                    })) ?? [],
                },
            }),
        });

        return res.status(200).json({ ok: true });
    } catch (err) {
        console.error("Failed to forward to portal:", err);
        // Still return 200 to Safepay so it doesn't retry endlessly
        return res.status(200).json({ ok: true });
    }
}