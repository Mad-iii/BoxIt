import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Gift,
  ChevronRight,
  X,
  ArrowLeft,
  Plus,
  Send,
  MessageCircle,
  Mail,
  CheckCircle2,
  Heart,
  ShoppingBag,
  Truck
} from 'lucide-react';

// --- DATA ---
const catalogueData: any = {
  female: {
    1000: [
      {
        id: "sweet", title: "Something Sweet", emoji: "🍫",
        options: ["Ferrero Rocher", "Galaxy Bar", "Homemade Cake", "Macarons", "Mixed Snack Bag", "Brownie Box"]
      },
      {
        id: "heart", title: "A Little Gesture", emoji: "💌",
        options: ["Handwritten Card", "Mini Flower Bunch", "Scented Candle", "Custom Keychain"]
      }
    ],
    3000: [
      {
        id: "sweet", title: "Something Sweet", emoji: "🍫",
        options: ["Chocolate Box", "Macaron Pack", "Mini Cake", "Snack Bundle"]
      },
      {
        id: "fashion", title: "Fashion Pick", emoji: "👛",
        options: ["Mini Wallet", "Sunglasses", "Hair Accessories Set", "Scrunchie Bundle"]
      },
      {
        id: "heart", title: "From the Heart", emoji: "💌",
        options: ["Greeting Card", "Scented Candle", "Flower Bunch", "Custom Keychain"]
      }
    ],
    5000: [
      {
        id: "sweet", title: "Something Sweet", emoji: "🍫",
        options: ["Ferrero Rocher Box", "Galaxy Chocolate", "Homemade Cake", "Macarons", "Mixed Snack Bag", "Brownie Box"]
      },
      {
        id: "fashion", title: "Fashion Pick", emoji: "👜",
        options: ["Mini Purse", "Fancy Sandals", "Silk Clutch", "Tote Bag", "Bucket Hat", "Velvet Hair Clip Set"]
      },
      {
        id: "wear", title: "Something to Wear", emoji: "🧣",
        options: ["Printed Shirt", "Floral Scarf", "Cashmere Shawl", "Embroidered Dupatta", "Cozy Hoodie", "Silk Pyjama Set"]
      },
      {
        id: "heart", title: "From the Heart", emoji: "💌",
        options: ["Handwritten Letter", "Printed Photo Book", "Custom Mug", "Dried Flower Bunch", "Scented Candle", "Personalised Keychain"]
      }
    ],
    10000: [
      {
        id: "sweet", title: "Gourmet Treat", emoji: "🎂",
        options: ["Imported Chocolate Box", "Premium Macaron Set", "Gourmet Cake Slice Box", "Cheese & Crackers Hamper"]
      },
      {
        id: "fashion", title: "Fashion Pick", emoji: "👜",
        options: ["Branded Purse", "Luxury Scarf", "Designer Sunglasses", "Gold-Tone Earrings"]
      },
      {
        id: "wear", title: "Premium Wear", emoji: "👗",
        options: ["Silk Kurta", "Embroidered Co-ord Set", "Cashmere Wrap", "Linen Dress"]
      },
      {
        id: "beauty", title: "Beauty & Self Care", emoji: "✨",
        options: ["Skincare Gift Set", "Perfume", "Bath Salts & Robe", "Makeup Palette"]
      },
      {
        id: "heart", title: "Keepsake", emoji: "💌",
        options: ["Photo Album", "Personalised Jewellery", "Star Map Print", "Custom Letter Box"]
      }
    ],
    25000: [
      {
        id: "luxury", title: "Luxury Treat", emoji: "🥂",
        options: ["Premium Chocolate Hamper", "Imported Candy Collection", "Gourmet Basket", "Artisan Bakery Box"]
      },
      {
        id: "fashion", title: "Designer Piece", emoji: "💎",
        options: ["Branded Handbag", "Silver Jewellery Set", "Designer Shades", "Luxury Perfume"]
      },
      {
        id: "beauty", title: "Premium Self Care", emoji: "🌸",
        options: ["Premium Skincare Set", "Spa Gift Basket", "Luxury Candle Set", "Hair Care Bundle"]
      },
      {
        id: "wear", title: "Fashion Statement", emoji: "✨",
        options: ["Embroidered Formal Outfit", "Silk Loungewear Set", "Branded Athleisure Set", "Luxury Pyjama Set"]
      },
      {
        id: "heart", title: "Unforgettable Touch", emoji: "💌",
        options: ["Personalised Jewellery Box", "Custom Portrait", "Memory Book", "Engraved Necklace"]
      }
    ],
    50000: [
      {
        id: "luxury", title: "Luxury Indulgence", emoji: "🍾",
        options: ["Premium Hamper", "Fine Dining Voucher", "Gourmet Truffle Box", "Artisan Gift Basket"]
      },
      {
        id: "fashion", title: "Designer Collection", emoji: "💍",
        options: ["Branded Bag", "Fine Jewellery Piece", "Designer Watch", "Premium Perfume Set"]
      },
      {
        id: "beauty", title: "Luxury Beauty", emoji: "🌹",
        options: ["High-End Skincare Bundle", "Luxury Spa Set", "Premium Fragrance Duo", "Beauty Subscription Box"]
      },
      {
        id: "wear", title: "Couture Pick", emoji: "👑",
        options: ["Custom-Made Outfit", "Designer Formal Dress", "Luxury Athleisure", "Premium Sleepwear Set"]
      },
      {
        id: "heart", title: "Priceless Keepsake", emoji: "💎",
        options: ["Fine Jewellery Piece", "Personalized Art Print", "Heirloom Memory Box", "Sterling Silver Keepsake"]
      }
    ],
    100000: [
      {
        id: "ultimate", title: "Ultimate Experience", emoji: "🏆",
        options: ["Bespoke Hamper", "Fine Dining for Two", "Luxury Hotel Voucher", "Spa Day Package"]
      },
      {
        id: "fashion", title: "Luxury Fashion", emoji: "💎",
        options: ["Branded Luxury Bag", "Fine Diamond Jewellery", "Luxury Watch", "Designer Outfit"]
      },
      {
        id: "beauty", title: "Premium Beauty", emoji: "🌟",
        options: ["Complete Luxury Skincare Set", "Premium Perfume Collection", "VIP Beauty Treatment Voucher", "Luxury Gift Hamper"]
      },
      {
        id: "heart", title: "Once in a Lifetime", emoji: "✨",
        options: ["Customized Jewellery", "Private Experience Voucher", "Luxury Memory Box", "Heirloom Piece"]
      }
    ]
  },
  male: {
    1000: [
      {
        id: "snacks", title: "Fuel Up", emoji: "🍟",
        options: ["Chips Variety Pack", "Juice + Snack Bundle", "Energy Drink Pack", "Nut Mix Bag"]
      },
      {
        id: "fun", title: "Fun & Games", emoji: "🎮",
        options: ["Card Game", "Mini Puzzle", "Scratch-Off Ticket", "Fidget Toy"]
      }
    ],
    3000: [
      {
        id: "snacks", title: "Snack Pack", emoji: "🍟",
        options: ["Chips Bundle", "Instant Noodle Kit", "Energy Drinks Pack", "Jerky + Nuts Combo"]
      },
      {
        id: "gear", title: "Everyday Gear", emoji: "🎒",
        options: ["Phone Stand", "Pocket Notebook", "Mini Bluetooth Speaker", "Cable Organiser"]
      },
      {
        id: "heart", title: "Bro Moment", emoji: "🤝",
        options: ["Funny Greeting Card", "Custom Keychain", "Mini Sports Poster", "Personalised Bottle"]
      }
    ],
    5000: [
      {
        id: "snacks", title: "Snack Stash", emoji: "🍟",
        options: ["Chips Variety Box", "Imported Snack Bundle", "Energy Drinks Pack", "Protein Bar Set", "Mixed Nuts Jar"]
      },
      {
        id: "gear", title: "Everyday Carry", emoji: "🎒",
        options: ["Leather Wallet", "Sunglasses", "Watch Band", "Cap", "Socks Bundle", "Phone Grip Stand"]
      },
      {
        id: "wear", title: "Something to Wear", emoji: "👕",
        options: ["Graphic Tee", "Polo Shirt", "Joggers", "Hooded Sweatshirt", "Cargo Shorts"]
      },
      {
        id: "heart", title: "Personal Touch", emoji: "🤝",
        options: ["Custom Mug", "Engraved Keychain", "Mini Trophy", "Personalised Bottle", "Framed Photo"]
      }
    ],
    10000: [
      {
        id: "snacks", title: "Premium Snack Haul", emoji: "🍕",
        options: ["Imported Snack Box", "Gourmet Nut Collection", "Premium Energy Drink Set", "Artisan Coffee Bundle"]
      },
      {
        id: "gear", title: "Upgraded Carry", emoji: "⌚",
        options: ["Branded Wallet", "Premium Sunglasses", "Smart Watch Band", "Portable Charger"]
      },
      {
        id: "wear", title: "Premium Wear", emoji: "👟",
        options: ["Branded Polo Shirt", "Premium Joggers", "Sports Shoes", "Branded Cap"]
      },
      {
        id: "gadget", title: "Tech & Gadgets", emoji: "🎧",
        options: ["Wireless Earbuds", "Bluetooth Speaker", "Phone Stand + Cable Kit", "Mini Projector Key Light"]
      },
      {
        id: "heart", title: "Personal Touch", emoji: "🤝",
        options: ["Engraved Flask", "Custom Jersey", "Personalised Mug Set", "Name Plaque"]
      }
    ],
    25000: [
      {
        id: "luxury", title: "Premium Treats", emoji: "🥩",
        options: ["Imported Snack Hamper", "Gourmet Coffee + Biscuit Set", "Premium Chocolates Box", "BBQ Gift Bundle"]
      },
      {
        id: "gear", title: "Style Upgrade", emoji: "💼",
        options: ["Branded Leather Wallet", "Premium Shades", "Luxury Watch", "Branded Belt + Wallet Set"]
      },
      {
        id: "wear", title: "Wardrobe Level Up", emoji: "👔",
        options: ["Branded Formal Shirt", "Premium Jogger Set", "Sports Shoes", "Luxury Pyjama Set"]
      },
      {
        id: "gadget", title: "Tech Pick", emoji: "🎧",
        options: ["Premium Earbuds", "Portable Speaker", "Smartwatch", "Gaming Accessory"]
      },
      {
        id: "heart", title: "Bro Code", emoji: "🏆",
        options: ["Personalised Trophy", "Custom Leather Journal", "Engraved Hip Flask", "Name Embossed Wallet"]
      }
    ],
    50000: [
      {
        id: "luxury", title: "Luxury Hamper", emoji: "🥂",
        options: ["Premium Import Hamper", "Fine Dining Voucher", "Gourmet BBQ Kit", "Artisan Coffee Bundle"]
      },
      {
        id: "gear", title: "Premium Accessories", emoji: "💎",
        options: ["Luxury Leather Wallet", "Designer Sunglasses", "Premium Watch", "Gold-Tone Cufflinks"]
      },
      {
        id: "wear", title: "Wardrobe Statement", emoji: "👑",
        options: ["Branded Suit Shirt", "Premium Sneakers", "Luxury Loungewear", "Designer Cap"]
      },
      {
        id: "gadget", title: "Tech Splurge", emoji: "🎮",
        options: ["Premium Earbuds", "Portable Projector", "Smart Home Gadget", "Gaming Controller"]
      },
      {
        id: "heart", title: "Legacy Gift", emoji: "🏅",
        options: ["Engraved Watch", "Custom Leather Duffel", "Personalised Whiskey Set", "Name Cufflink Box"]
      }
    ],
    100000: [
      {
        id: "ultimate", title: "The Experience", emoji: "🏆",
        options: ["Luxury Hotel Voucher", "Fine Dining for Two", "Sports Event Tickets", "Adventure Activity Package"]
      },
      {
        id: "gear", title: "Signature Accessories", emoji: "💎",
        options: ["Luxury Watch", "Designer Wallet + Belt Set", "Fine Sunglasses", "Premium Leather Bag"]
      },
      {
        id: "wear", title: "Power Wardrobe", emoji: "👑",
        options: ["Bespoke Formal Shirt", "Designer Sneakers", "Premium Suit Accessories", "Luxury Athleisure Set"]
      },
      {
        id: "gadget", title: "Ultimate Tech", emoji: "🚀",
        options: ["Premium Wireless Earbuds", "Smart Speaker", "High-End Portable Charger", "Premium Gaming Gear"]
      },
      {
        id: "heart", title: "Once in a Lifetime", emoji: "✨",
        options: ["Custom Engraved Timepiece", "Personalised Leather Duffel", "Bespoke Cufflink Set", "Luxury Keepsake Box"]
      }
    ]
  },
  neutral: {
    1000: [
      {
        id: "sweet", title: "Sweet Treat", emoji: "🍬",
        options: ["Chocolate Mix", "Candy Bundle", "Snack Pack", "Biscuit Box"]
      },
      {
        id: "heart", title: "Kind Gesture", emoji: "💛",
        options: ["Greeting Card", "Mini Plant", "Scented Candle", "Custom Keychain"]
      }
    ],
    3000: [
      {
        id: "sweet", title: "Sweet Treat", emoji: "🍫",
        options: ["Chocolate Box", "Macaron Pack", "Snack Bundle", "Cookie Assortment"]
      },
      {
        id: "gear", title: "Useful Pick", emoji: "🎒",
        options: ["Notebook Set", "Reusable Bag", "Mug", "Mini Succulent"]
      },
      {
        id: "heart", title: "Personal Touch", emoji: "💛",
        options: ["Personalised Keychain", "Candle", "Flower Bunch", "Custom Card"]
      }
    ],
    5000: [
      {
        id: "sweet", title: "Gourmet Treats", emoji: "🍫",
        options: ["Imported Chocolate Box", "Macaron Set", "Artisan Cookies", "Snack Hamper"]
      },
      {
        id: "lifestyle", title: "Lifestyle Pick", emoji: "🌿",
        options: ["Scented Candle Set", "Mini Succulent Pot", "Essential Oil Roller", "Cozy Blanket"]
      },
      {
        id: "gear", title: "Everyday Useful", emoji: "🎒",
        options: ["Premium Notebook", "Reusable Bottle", "Tote Bag", "Desk Organiser"]
      },
      {
        id: "heart", title: "Personal Touch", emoji: "💛",
        options: ["Custom Mug", "Personalised Keychain", "Photo Frame", "Handwritten Letter Kit"]
      }
    ],
    10000: [
      {
        id: "sweet", title: "Premium Treats", emoji: "🎂",
        options: ["Luxury Chocolate Hamper", "Gourmet Cake", "Imported Snack Box", "Artisan Biscuit Tin"]
      },
      {
        id: "lifestyle", title: "Lifestyle Gift", emoji: "🌿",
        options: ["Premium Candle Set", "Wellness Kit", "Quality Blanket", "Indoor Plant Bundle"]
      },
      {
        id: "gear", title: "Quality Everyday", emoji: "✏️",
        options: ["Leather Notebook", "Premium Water Bottle", "Quality Backpack", "Desk Set"]
      },
      {
        id: "beauty", title: "Self Care", emoji: "✨",
        options: ["Skincare Starter Set", "Aromatherapy Kit", "Bath Essentials", "Spa at Home Pack"]
      },
      {
        id: "heart", title: "Keepsake", emoji: "💛",
        options: ["Custom Photo Book", "Personalised Mug Set", "Star Map Print", "Memory Box"]
      }
    ],
    25000: [
      {
        id: "luxury", title: "Luxury Treats", emoji: "🥂",
        options: ["Premium Hamper", "Gourmet Gift Basket", "Artisan Food Bundle", "Luxury Chocolate Set"]
      },
      {
        id: "lifestyle", title: "Premium Lifestyle", emoji: "🌿",
        options: ["Luxury Candle Collection", "Wellness Bundle", "Cashmere Throw", "Premium Home Diffuser"]
      },
      {
        id: "fashion", title: "Style Pick", emoji: "👒",
        options: ["Premium Tote Bag", "Quality Watch", "Branded Accessory", "Luxury Scarf"]
      },
      {
        id: "heart", title: "Memorable Keepsake", emoji: "💛",
        options: ["Custom Portrait", "Personalised Jewellery", "Memory Book", "Engraved Gift"]
      }
    ],
    50000: [
      {
        id: "luxury", title: "Luxury Hamper", emoji: "🍾",
        options: ["Bespoke Gift Hamper", "Fine Dining Voucher", "Premium Food Curation", "Artisan Luxury Bundle"]
      },
      {
        id: "lifestyle", title: "Luxury Lifestyle", emoji: "🌸",
        options: ["Premium Wellness Set", "Luxury Home Fragrance", "Designer Throw Blanket", "Spa Day Voucher"]
      },
      {
        id: "fashion", title: "Luxury Style", emoji: "💎",
        options: ["Designer Accessory", "Luxury Watch", "Premium Bag", "Fine Jewellery Piece"]
      },
      {
        id: "heart", title: "Priceless Gift", emoji: "✨",
        options: ["Custom Artwork", "Personalised Jewellery Box", "Engraved Piece", "Luxury Memory Box"]
      }
    ],
    100000: [
      {
        id: "ultimate", title: "The Experience", emoji: "🏆",
        options: ["Luxury Hotel Voucher", "Fine Dining Experience", "Spa Weekend", "Adventure Package"]
      },
      {
        id: "luxury", title: "Luxury Curation", emoji: "💎",
        options: ["Bespoke Hamper", "Designer Gift Set", "Luxury Watch", "Fine Jewellery"]
      },
      {
        id: "heart", title: "Once in a Lifetime", emoji: "✨",
        options: ["Custom Commissioned Art", "Engraved Luxury Piece", "Personalised Heirloom", "VIP Experience"]
      }
    ]
  }
};

// --- COMPONENTS ---

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      const target = e.target as HTMLElement;
      setIsPointer(window.getComputedStyle(target).cursor === 'pointer');
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);


  return (
    <>
      <div className="cursor-dot" style={{ left: position.x, top: position.y }} />
      <div
        className="fixed w-10 h-10 border border-near-black/20 pointer-events-none z-[10000] -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-out"
        style={{
          left: position.x,
          top: position.y,
          transform: `translate(-50%, -50%) scale(${isPointer ? 1.5 : 1}) rotate(${isPointer ? 45 : 0}deg)`,
        }}
      />
    </>
  );
};

const Box3D = () => (
  <div className="box-container">
    <div className="box-3d">
      <div className="box-face front"></div>
      <div className="box-face back"></div>
      <div className="box-face right"></div>
      <div className="box-face left"></div>
      <div className="box-face top"></div>
      <div className="box-face bottom"></div>
    </div>
  </div>
);

const Toast = ({ message, visible }: { message: string, visible: boolean }) => (
  <AnimatePresence>
    {visible && (
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        className="fixed bottom-10 left-1/2 -translate-x-1/2 bg-near-black text-white px-10 py-5 border border-white/10 shadow-2xl z-[1000] flex items-center gap-4"
      >
        <div className="w-6 h-6 bg-accent-dark flex items-center justify-center">
          <CheckCircle2 size={14} className="text-white" />
        </div>
        <span className="font-serif italic text-lg tracking-wider">{message}</span>
      </motion.div>
    )}
  </AnimatePresence>
);

// --- MAIN APP ---

export default function App() {
  const [view, setView] = useState<'home' | 'customize'>('home');
  const [budget, setBudget] = useState<number | null>(null);
  const [gender, setGender] = useState<'female' | 'male' | 'neutral' | null>(null);
  const [showGenderOverlay, setShowGenderOverlay] = useState(false);
  const [selections, setSelections] = useState<Record<string, string>>({});
  const [customInputs, setCustomInputs] = useState<Record<string, string>>({});
  const [occasion, setOccasion] = useState<string>('');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    notes: '',
    location: ''
  });
  const [errors, setErrors] = useState<Record<string, boolean>>({});
  const [toast, setToast] = useState({ visible: false, message: '' });

  const catalogueRef = useRef<HTMLDivElement>(null);
  const howItWorksRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const getSessionId = () => {
      const existing = sessionStorage.getItem("sid");
      if (existing) return existing;
      const id = crypto.randomUUID();
      sessionStorage.setItem("sid", id);
      return id;
    };

    const page = view === 'home' ? '/' : `/customize/${gender}-${budget}`;

    fetch(`${import.meta.env.VITE_PORTAL_URL}/api/ingest`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-ingest-secret": import.meta.env.VITE_INGEST_SECRET,
      },
      body: JSON.stringify({
        type: "PAGE_VISIT",
        storeId: import.meta.env.VITE_STORE_ID,
        data: { page, sessionId: getSessionId() },
      }),
    }).catch(() => { });
  }, [view]);

  const priceTiers = [
    { value: 1000, label: "Under 1,000", desc: "Thoughtful tokens that make a big impact.", color: 'bg-rose/60', hover: 'hover:bg-rose/70' },
    { value: 3000, label: "Under 3,000", desc: "Perfect for birthdays and small celebrations.", color: 'bg-lavender/60', hover: 'hover:bg-lavender/70' },
    { value: 5000, label: "Under 5,000", desc: "Our most popular range for a full experience.", popular: true, color: 'bg-peach/60', hover: 'hover:bg-peach/70' },
    { value: 10000, label: "Under 10,000", desc: "Premium curation for special milestones.", color: 'bg-lemon/60', hover: 'hover:bg-lemon/70' },
    { value: 25000, label: "Under 25,000", desc: "Luxury items for those who deserve the best.", color: 'bg-rose/60', hover: 'hover:bg-rose/70' },
    { value: 50000, label: "Under 50,000", desc: "Ultimate indulgence and designer picks.", color: 'bg-steel/60', hover: 'hover:bg-steel/70' },
    { value: 100000, label: "Under 1,00,000", desc: "Once-in-a-lifetime bespoke experiences.", color: 'bg-lavender/60', hover: 'hover:bg-lavender/70' },
  ];

  const occasions = [
    "Birthday 🎂", "Anniversary 💍", "Eid 🌙", "Just Because 💛",
    "New Baby 👶", "Graduation 🎓", "Get Well Soon 🌸", "Other ✨"
  ];

  const showToast = (message: string) => {
    setToast({ visible: true, message });
    setTimeout(() => setToast({ visible: false, message: '' }), 4000);
  };

  const handlePriceClick = (val: number) => {
    setBudget(val);
    setShowGenderOverlay(true);
  };

  const handleGenderSelect = (g: 'female' | 'male' | 'neutral') => {
    setGender(g);
    setShowGenderOverlay(false);
    setView('customize');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBack = () => {
    setView('home');
    setSelections({});
    setCustomInputs({});
    setOccasion('');
    setGender(null);
    setBudget(null);
    // Scroll back to catalogue after a short delay to allow the exit animation to start
    setTimeout(() => {
      catalogueRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 300);
  };

  const toggleSelection = (categoryId: string, option: string) => {
    setSelections(prev => ({
      ...prev,
      [categoryId]: prev[categoryId] === option ? '' : option
    }));
  };

  const handleAddCustom = (categoryId: string) => {
    const val = customInputs[categoryId];
    if (val && val.trim()) {
      setSelections(prev => ({ ...prev, [categoryId]: val.trim() }));
      setCustomInputs(prev => ({ ...prev, [categoryId]: '' }));
    }
  };

  const validate = () => {
    const newErrors: Record<string, boolean> = {};
    if (!formData.name) newErrors.name = true;
    if (!formData.phone) newErrors.phone = true;
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const getOrderSummary = () => {
    const genderLabel = gender === 'female' ? 'Her' : gender === 'male' ? 'Him' : 'Anyone';
    const items = catalogueData[gender!][budget!]
      .map((cat: any) => `• ${cat.emoji} ${cat.title}: ${selections[cat.id] || 'Not selected'}`)
      .join('\n');

    return `🎁 *New BOXIT Order*
  
👤 *Name:* ${formData.name}
📱 *Phone:* ${formData.phone}
📧 *Email:* ${formData.email || 'N/A'}

💰 *Budget:* Rs. ${budget?.toLocaleString()}
👥 *For:* ${genderLabel}
🎉 *Occasion:* ${occasion || 'Not specified'}
📍 *Location:* ${formData.location || 'Not specified'}

📦 *Selected Items:*
${items}

💬 *Notes:* ${formData.notes || 'None'}`;
  };

  const handleWhatsApp = () => {
    if (!validate()) return;
    const msg = getOrderSummary();

    // Track the order in portal
    fetch(`${import.meta.env.VITE_PORTAL_URL}/api/ingest`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-ingest-secret": import.meta.env.VITE_INGEST_SECRET,
      },
      body: JSON.stringify({
        type: "ORDER_CREATED",
        storeId: import.meta.env.VITE_STORE_ID,
        data: {
          orderNumber: `BOXIT-${Date.now()}`,
          total: budget ?? 0,
          customerName: formData.name,
          customerEmail: formData.email || undefined,
          items: catalogueData[gender!][budget!].map((cat: any) => ({
            name: `${cat.title}: ${selections[cat.id] || 'Not selected'}`,
            quantity: 1,
            price: 0, // price is the total budget, not per item
          })),
        },
      }),
    }).catch(() => { });

    window.open(`https://wa.me/923396200771?text=${encodeURIComponent(msg)}`, '_blank');
    showToast("✓ WhatsApp opened! Send the message to complete your order.");
  };

  const handleEmail = () => {
    if (!validate()) return;
    const msg = getOrderSummary();

    // Track the order in portal
    fetch(`${import.meta.env.VITE_PORTAL_URL}/api/ingest`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-ingest-secret": import.meta.env.VITE_INGEST_SECRET,
      },
      body: JSON.stringify({
        type: "ORDER_CREATED",
        storeId: import.meta.env.VITE_STORE_ID,
        data: {
          orderNumber: `BOXIT-${Date.now()}`,
          total: budget ?? 0,
          customerName: formData.name,
          customerEmail: formData.email || undefined,
          items: catalogueData[gender!][budget!].map((cat: any) => ({
            name: `${cat.title}: ${selections[cat.id] || 'Not selected'}`,
            quantity: 1,
            price: 0,
          })),
        },
      }),
    }).catch(() => { });

    window.location.href = `mailto:boxit.pk.officia@gmail.com?subject=New BOXIT Order — Rs.${budget}&body=${encodeURIComponent(msg)}`;
    showToast("✓ Email client opened! Send to complete your order.");
  };

  const themeClass = gender === 'female' ? 'theme-female' : gender === 'male' ? 'theme-male' : 'theme-neutral';

  return (
    <div className={`theme-container ${themeClass}`}>
      <div className="sticker-bg" />
      <div className="noise-overlay" />
      <CustomCursor />
      <Toast message={toast.message} visible={toast.visible} />

      <div className="relative z-10">
        {/* --- NAVIGATION --- */}
        <nav className="fixed top-0 left-0 w-full z-50 px-6 py-6 flex justify-between items-center bg-white/80 backdrop-blur-md pointer-events-none border-b border-near-black/10">
          <div
            className="text-2xl md:text-4xl font-serif italic pointer-events-auto cursor-pointer tracking-tighter"
            onClick={() => {
              if (view === 'home') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              } else {
                setView('home');
                window.scrollTo({ top: 0 });
              }
            }}
          >
            <span className="text-near-black">BOX</span><span className="text-accent-dark">IT</span>
          </div>
          <div className="hidden md:flex gap-12 text-[10px] font-bold tracking-[0.3em] uppercase pointer-events-auto">
            <button
              onClick={() => {
                if (view !== 'home') {
                  setView('home');
                  setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100);
                } else {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
              className="hover:text-accent-dark transition-colors text-near-black/60"
            >
              Home
            </button>
            <button
              onClick={() => {
                if (view !== 'home') {
                  setView('home');
                  setTimeout(() => catalogueRef.current?.scrollIntoView({ behavior: 'smooth' }), 100);
                } else {
                  catalogueRef.current?.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="hover:text-accent-dark transition-colors text-near-black/60"
            >
              Catalogue
            </button>
            <button
              onClick={() => {
                if (view !== 'home') {
                  setView('home');
                  setTimeout(() => howItWorksRef.current?.scrollIntoView({ behavior: 'smooth' }), 100);
                } else {
                  howItWorksRef.current?.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="hover:text-accent-dark transition-colors text-near-black/60"
            >
              How It Works
            </button>
          </div>
        </nav>

        <AnimatePresence mode="wait">
          {view === 'home' ? (
            <motion.div
              key="home"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* --- HERO SECTION --- */}
              <section className="relative min-h-screen flex items-center px-6 md:px-20 overflow-hidden pt-20">
                {/* Background Shapes */}
                <div className="absolute top-20 left-10 w-64 h-64 bg-rose/50 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-lavender/50 rounded-full blur-3xl pointer-events-none" />

                <div className="grid md:grid-cols-2 gap-16 items-center w-full z-10 py-20">
                  <div className="space-y-12">
                    <div className="space-y-6">
                      <motion.p
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        className="font-sans font-bold tracking-[0.4em] text-[10px] md:text-xs text-near-black/40 uppercase"
                      >
                        Premium Gifting Service
                      </motion.p>
                      <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="text-7xl md:text-[10rem] font-serif leading-[0.85] text-near-black tracking-tighter"
                      >
                        Open <br /> the <br /> Box.
                      </motion.h1>
                      <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                        className="text-xl md:text-2xl font-serif italic text-near-black/60 max-w-md"
                      >
                        Thoughtfully curated gifts that showcase elegance and fun in every detail.
                      </motion.p>
                    </div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.9 }}
                      className="flex flex-wrap gap-6"
                    >
                      <button
                        onClick={() => catalogueRef.current?.scrollIntoView({ behavior: 'smooth' })}
                        className="bg-near-black text-white px-12 py-5 font-serif italic text-xl tracking-wider hover:bg-accent-dark transition-all flex items-center gap-2 shadow-2xl rounded-full button-3d"
                      >
                        Explore Gifts <ChevronRight size={20} />
                      </button>
                      <button className="border border-near-black/10 px-12 py-5 font-serif italic text-xl tracking-wider hover:bg-near-black hover:text-white transition-all text-near-black rounded-full shadow-sm">
                        Starting Rs. 1,000
                      </button>
                    </motion.div>
                  </div>

                  <div className="hidden md:flex justify-end items-center">
                    <div className="relative">
                      <div className="absolute -inset-10 border border-near-black/5 pointer-events-none" />
                      <Box3D />
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-near-black/20 font-serif italic tracking-widest text-sm">
                  Rs 1,000 — Rs 1,00,000
                </div>
              </section>

              {/* --- HOW IT WORKS --- */}
              <section ref={howItWorksRef} className="py-32 bg-transparent px-6 md:px-20 relative border-y border-near-black/5">
                <div className="max-w-6xl mx-auto">
                  <div className="text-center space-y-4 mb-24">
                    <p className="font-sans font-bold tracking-[0.4em] text-[10px] text-near-black/30 uppercase">
                      The Process
                    </p>
                    <h2 className="text-5xl md:text-7xl font-serif italic text-near-black tracking-tighter">
                      How it Works
                    </h2>
                  </div>

                  <div className="grid md:grid-cols-3 gap-8">
                    {[
                      { step: "01", icon: "💰", title: "Pick Your Budget", desc: "Choose a price tier that fits your needs. We curate magic at every level.", color: 'bg-rose/60', hover: 'hover:bg-rose/70' },
                      { step: "02", icon: "📦", title: "Build Your Box", desc: "Select items category by category. Personalize it with custom requests.", color: 'bg-lavender/60', hover: 'hover:bg-lavender/70' },
                      { step: "03", icon: "✨", title: "We Deliver Magic", desc: "Confirm via WhatsApp. We handle the rest and deliver across Karachi.", color: 'bg-peach/60', hover: 'hover:bg-peach/70' }
                    ].map((item, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        whileHover={{ y: -5 }}
                        transition={{
                          duration: 0.6,
                          delay: i * 0.1,
                          ease: [0.22, 1, 0.36, 1]
                        }}
                        viewport={{ once: true }}
                        className={`relative group text-center space-y-8 pt-24 pb-12 px-12 ${item.color} ${item.hover} container-3d group-hover:border-near-black/30 transition-all transition-colors duration-300`}
                      >
                        <div className="absolute -top-16 left-1/2 -translate-x-1/2 text-9xl font-serif italic text-near-black/30 group-hover:text-near-black/80 transition-colors z-10">
                          {item.step}
                        </div>
                        <div className="text-5xl drop-shadow-sm opacity-70 group-hover:opacity-100 transition-opacity">{item.icon}</div>
                        <div className="space-y-4">
                          <h3 className="text-2xl font-serif italic text-near-black tracking-wider">{item.title}</h3>
                          <p className="text-near-black/60 group-hover:text-near-black/90 leading-relaxed font-light text-sm transition-colors">{item.desc}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </section>

              {/* --- CATALOGUE --- */}
              <section ref={catalogueRef} className="py-32 px-6 md:px-20">
                <div className="max-w-7xl mx-auto">
                  <div className="text-center space-y-4 mb-24">
                    <p className="font-sans font-bold tracking-[0.4em] text-[10px] text-near-black/30 uppercase">
                      Catalogue
                    </p>
                    <h2 className="text-5xl md:text-7xl font-serif italic text-near-black tracking-tighter">
                      Pick Your Price
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {priceTiers.map((tier, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        whileHover={{ y: -10, scale: 1.02 }}
                        transition={{
                          duration: 0.5,
                          delay: i * 0.05,
                          ease: "easeOut"
                        }}
                        viewport={{ once: true }}
                        onClick={() => handlePriceClick(tier.value)}
                        className={`group relative ${tier.color} ${tier.hover} container-3d p-12 cursor-pointer transition-all duration-300`}
                      >
                        {tier.popular && (
                          <div className="absolute top-6 right-6 bg-near-black text-white text-[8px] font-bold px-3 py-1 uppercase tracking-[0.2em] z-20 shadow-sm">
                            Popular
                          </div>
                        )}
                        <div className="relative z-10 space-y-6">
                          <div className="text-5xl font-serif italic text-near-black">
                            Rs. {tier.value.toLocaleString()}
                          </div>
                          <div className="text-[10px] font-sans font-bold tracking-[0.2em] text-near-black/40 uppercase">
                            {tier.label}
                          </div>
                          <p className="text-sm text-near-black/50 font-light leading-relaxed">
                            {tier.desc}
                          </p>
                          <div className="flex items-center gap-2 font-serif italic tracking-widest text-sm pt-4 text-near-black/80">
                            Select Range <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </section>

              {/* --- GENDER OVERLAY --- */}
              <AnimatePresence>
                {showGenderOverlay && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-near-black/60 backdrop-blur-xl"
                  >
                    <motion.div
                      initial={{ scale: 0.95, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.95, opacity: 0 }}
                      className="relative max-w-2xl w-full bg-white container-3d p-12 md:p-20 shadow-2xl"
                    >
                      <button
                        onClick={() => setShowGenderOverlay(false)}
                        className="absolute top-8 right-8 text-near-black/20 hover:text-near-black transition-colors"
                      >
                        <X size={24} />
                      </button>

                      <div className="text-center space-y-12">
                        <div className="space-y-4">
                          <p className="font-sans font-bold tracking-[0.4em] text-[10px] uppercase text-near-black/30">
                            Personalizing Your Box
                          </p>
                          <h2 className="text-5xl md:text-6xl font-serif italic text-near-black tracking-tighter">Who's it for?</h2>
                          <p className="text-near-black/60 font-light">We'll curate the perfect options for them.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                          {[
                            { id: 'female', label: 'For Her', icon: '🎀', hint: 'Elegant & Chic', color: 'hover:bg-rose/20' },
                            { id: 'male', label: 'For Him', icon: '🎁', hint: 'Bold & Practical', color: 'hover:bg-blue-500/20' },
                            { id: 'neutral', label: 'For Anyone', icon: '✨', hint: 'Versatile & Kind', color: 'hover:bg-lavender/20' }
                          ].map((item) => (
                            <button
                              key={item.id}
                              onClick={() => handleGenderSelect(item.id as any)}
                              className={`group p-8 container-3d transition-all text-center space-y-6 ${item.color}`}
                            >
                              <div className="text-5xl group-hover:scale-110 transition-transform">{item.icon}</div>
                              <div>
                                <div className="font-serif italic text-2xl tracking-wider text-near-black">{item.label}</div>
                                <div className="text-[8px] uppercase tracking-[0.3em] text-near-black/30 font-bold mt-2">{item.hint}</div>
                              </div>
                            </button>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ) : (
            /* --- CUSTOMIZATION PAGE --- */
            <motion.div
              key="customize"
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="pt-32 pb-20 px-6 md:px-20 max-w-5xl mx-auto"
            >
              <button
                onClick={handleBack}
                className="fixed top-24 left-8 z-[60] flex items-center gap-2 text-near-black hover:bg-near-black hover:text-white transition-all font-serif italic tracking-widest text-sm bg-white px-8 py-4 border border-near-black/10 shadow-2xl rounded-full"
              >
                <ArrowLeft size={16} /> Back to Catalogue
              </button>

              <div className="space-y-16">
                <header className="text-center space-y-8">
                  <p className="font-sans font-bold tracking-[0.4em] text-[10px] uppercase text-near-black/30">
                    Curating for {gender === 'female' ? 'Her' : gender === 'male' ? 'Him' : 'Anyone'}
                  </p>
                  <h1 className="text-6xl md:text-9xl font-serif leading-tight text-near-black tracking-tighter">
                    Build Your Box
                  </h1>
                  <div className="inline-block border border-near-black/10 px-8 py-3 text-xs font-serif italic tracking-widest text-near-black/60 rounded-full shadow-sm">
                    Budget: <span className="font-bold text-near-black">Rs. {budget?.toLocaleString()}</span>
                  </div>
                </header>

                {/* Categories */}
                <div className="space-y-16">
                  {catalogueData[gender!][budget!].map((cat: any, i: number) => {
                    const colorPairs = [
                      { base: 'from-rose/60 to-lavender/60', hover: 'hover:from-rose/70 hover:to-lavender/70' },
                      { base: 'from-steel/60 to-rose/60', hover: 'hover:from-steel/70 hover:to-rose/70' },
                      { base: 'from-lavender/60 to-steel/60', hover: 'hover:from-lavender/70 hover:to-steel/70' },
                      { base: 'from-peach/60 to-rose/60', hover: 'hover:from-peach/70 hover:to-rose/70' },
                      { base: 'from-rose/60 to-steel/60', hover: 'hover:from-rose/70 hover:to-steel/70' },
                      { base: 'from-steel/60 to-lavender/60', hover: 'hover:from-steel/70 hover:to-lavender/70' }
                    ];
                    const color = colorPairs[i % colorPairs.length];

                    return (
                      <motion.div
                        key={cat.id}
                        initial={{ opacity: 0, y: 40, scale: 0.98 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        whileHover={{ y: -8, scale: 1.01 }}
                        transition={{
                          duration: 0.8,
                          delay: i * 0.1,
                          ease: [0.22, 1, 0.36, 1]
                        }}
                        viewport={{ once: true, margin: "-50px" }}
                        className={`space-y-10 p-12 bg-gradient-to-br ${color.base} ${color.hover} container-3d transition-all duration-300`}
                      >
                        <div className="flex items-center gap-4">
                          <span className="text-3xl">{cat.emoji}</span>
                          <h3 className="text-3xl font-serif italic tracking-wider text-near-black">{cat.title}</h3>
                        </div>

                        <div className="flex flex-wrap gap-4">
                          {cat.options.map((opt: string) => (
                            <button
                              key={opt}
                              onClick={() => toggleSelection(cat.id, opt)}
                              className={`px-8 py-4 border text-sm transition-all font-serif italic ${selections[cat.id] === opt
                                ? 'bg-near-black text-white border-near-black shadow-lg'
                                : 'bg-white border-near-black/10 hover:border-near-black text-near-black/60'
                                }`}
                            >
                              {opt}
                            </button>
                          ))}
                        </div>

                        <div className="flex gap-2 max-w-md">
                          <input
                            type="text"
                            placeholder="Something else? Type it here..."
                            maxLength={60}
                            value={customInputs[cat.id] || ''}
                            onChange={(e) => setCustomInputs(prev => ({ ...prev, [cat.id]: e.target.value }))}
                            className="flex-1 bg-white border border-near-black/10 px-6 py-4 text-sm rounded-full focus:outline-none focus:border-near-black transition-all text-near-black placeholder:text-near-black/20 shadow-inner"
                          />
                          <button
                            onClick={() => handleAddCustom(cat.id)}
                            className="bg-near-black text-white px-6 py-4 hover:bg-accent-dark transition-all shadow-lg rounded-full"
                          >
                            <Plus size={20} />
                          </button>
                        </div>
                        <p className="text-[10px] italic text-near-black/30 font-serif">
                          * Custom items subject to availability — we'll confirm on WhatsApp
                        </p>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Occasion */}
                <div className="pt-20 border-t border-near-black/10 space-y-10">
                  <h3 className="text-3xl font-serif italic tracking-wider text-near-black">
                    Select Occasion
                  </h3>
                  <div className="flex flex-wrap gap-4">
                    {occasions.map((occ, i) => {
                      const colorPairs = [
                        { base: 'bg-rose/60', hover: 'hover:bg-rose/70' },
                        { base: 'bg-lavender/60', hover: 'hover:bg-lavender/70' },
                        { base: 'bg-peach/60', hover: 'hover:bg-peach/70' },
                        { base: 'bg-lemon/60', hover: 'hover:bg-lemon/70' },
                        { base: 'bg-steel/60', hover: 'hover:bg-steel/70' },
                        { base: 'bg-gold/60', hover: 'hover:bg-gold/70' }
                      ];
                      const color = colorPairs[i % colorPairs.length];
                      return (
                        <button
                          key={occ}
                          onClick={() => setOccasion(occ)}
                          className={`px-8 py-4 border text-sm transition-all font-serif italic duration-300 ${occasion === occ
                            ? 'bg-near-black text-white border-near-black shadow-lg'
                            : `border-near-black/10 ${color.base} ${color.hover} hover:border-near-black text-near-black/60`
                            }`}
                        >
                          {occ}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Form */}
                <div className="pt-20 border-t border-near-black/10 space-y-16">
                  <div className="space-y-4">
                    <h2 className="text-4xl md:text-6xl font-serif italic text-near-black tracking-tighter">
                      Almost Done — Tell us about you
                    </h2>
                    <p className="text-near-black/40 font-light">We'll reach out to finalize the details.</p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                      <div className="space-y-3">
                        <label className="text-[10px] font-sans font-bold tracking-[0.4em] text-near-black/30 uppercase">Your Name *</label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                          className={`w-full bg-white border ${errors.name ? 'border-red-500 shake' : 'border-near-black/10'} px-6 py-5 rounded-2xl focus:outline-none focus:border-near-black transition-all text-near-black shadow-inner`}
                        />
                      </div>
                      <div className="space-y-3">
                        <label className="text-[10px] font-sans font-bold tracking-[0.4em] text-near-black/30 uppercase">Phone / WhatsApp *</label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                          className={`w-full bg-white border ${errors.phone ? 'border-red-500 shake' : 'border-near-black/10'} px-6 py-5 rounded-2xl focus:outline-none focus:border-near-black transition-all text-near-black shadow-inner`}
                        />
                      </div>
                      <div className="space-y-3">
                        <label className="text-[10px] font-sans font-bold tracking-[0.4em] text-near-black/30 uppercase">Email Address (Optional)</label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                          className="w-full bg-white border border-near-black/10 px-6 py-5 rounded-2xl focus:outline-none focus:border-near-black transition-all text-near-black shadow-inner"
                        />
                      </div>
                    </div>

                    <div className="space-y-8">
                      <div className="space-y-3">
                        <label className="text-[10px] font-sans font-bold tracking-[0.4em] text-near-black/30 uppercase">Delivery Location (Karachi Only)</label>
                        <input
                          type="text"
                          placeholder="e.g. DHA Phase 5, Karachi"
                          value={formData.location}
                          onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
                          className="w-full bg-white border border-near-black/10 px-6 py-5 rounded-2xl focus:outline-none focus:border-near-black transition-all text-near-black shadow-inner"
                        />
                      </div>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <label className="text-[10px] font-sans font-bold tracking-[0.4em] text-near-black/30 uppercase">Special Message or Notes</label>
                          <span className="text-[10px] text-near-black/20">{formData.notes.length}/300</span>
                        </div>
                        <textarea
                          maxLength={300}
                          rows={5}
                          value={formData.notes}
                          onChange={(e) => setFormData(prev => ({ ...prev, notes: e.target.value }))}
                          className="w-full bg-white border border-near-black/10 px-6 py-5 rounded-2xl focus:outline-none focus:border-near-black transition-all resize-none text-near-black shadow-inner"
                        />
                      </div>
                      <p className="text-[10px] text-near-black/30 italic font-serif">
                        Currently serving Karachi. Delivery timing discussed on WhatsApp after order.
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row gap-6 pt-12">
                    <button
                      onClick={handleWhatsApp}
                      className="flex-1 bg-near-black text-white py-8 font-serif italic text-2xl tracking-widest hover:bg-accent-dark transition-all flex items-center justify-center gap-4 shadow-2xl rounded-full button-3d"
                    >
                      <MessageCircle size={28} /> Send via WhatsApp
                    </button>
                    <button
                      onClick={handleEmail}
                      className="flex-1 bg-white border border-near-black/10 text-near-black py-8 font-serif italic text-2xl tracking-widest hover:bg-near-black hover:text-white transition-all flex items-center justify-center gap-4 shadow-2xl rounded-full button-3d"
                    >
                      <Mail size={28} /> Send via Email
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* --- FOOTER --- */}
        <footer className="bg-near-black py-32 px-6 md:px-20">
          <div className="max-w-7xl mx-auto space-y-20">
            <div className="flex flex-col md:flex-row justify-between items-start gap-16">
              <div className="space-y-8">
                <div className="text-6xl font-serif italic text-white tracking-tighter">
                  BOXIT
                </div>
                <p className="text-white/40 text-sm font-serif italic max-w-xs leading-relaxed">
                  Thoughtfully curated gifts delivered across Karachi. Elevating the art of giving.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-20">
                <div className="space-y-6">
                  <h4 className="text-[10px] font-bold tracking-[0.4em] text-white/20 uppercase">Contact</h4>
                  <div className="space-y-4 text-white/60 font-serif italic text-lg">
                    <p>+92 339 6200771</p>
                    <p>Karachi, Pakistan</p>
                  </div>
                </div>
                <div className="space-y-6">
                  <h4 className="text-[10px] font-bold tracking-[0.4em] text-white/20 uppercase">Social</h4>
                  <div className="space-y-4 text-white/60 font-serif italic text-lg">
                    <p className="hover:text-white cursor-pointer transition-colors">Instagram</p>
                    <p className="hover:text-white cursor-pointer transition-colors">Facebook</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-20 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="text-[10px] text-white/20 uppercase tracking-[0.4em] font-bold">
                © 2026 BOXIT. ALL RIGHTS RESERVED.
              </div>
              <div className="text-[10px] text-white/20 uppercase tracking-[0.4em] font-bold">
                Gifts That Hit Different
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}


