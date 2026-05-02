
# 🎁 BoxIt

A web app for building personalized gift baskets — set your budget, browse items, and curate the perfect gift box with ease.

🔗 **Live Demo:** [box-it-one.vercel.app](https://box-it-one.vercel.app)

---

## Features

- Set a budget before you start shopping
- Add and remove items to build your custom gift basket
- Real-time budget tracking so you never go over
- Clean, responsive UI built with React and Tailwind CSS
- Smooth animations powered by Motion

---

## Tech Stack

| Technology | Purpose |
|---|---|
| React 19 | Frontend UI |
| TypeScript | Type-safe development |
| Vite | Build tool & dev server |
| Tailwind CSS v4 | Styling |
| Motion | Animations |
| Express | Backend server |
| SQLite (better-sqlite3) | Local database |
| Google Generative AI | AI features |
| Lucide React | Icons |

---

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Mad-iii/BoxIt.git
   cd BoxIt
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env
   ```
   Then open `.env` and fill in your API keys.

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and go to `http://localhost:3000`

---

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server on port 3000 |
| `npm run build` | Build for production |
| `npm run preview` | Preview the production build |
| `npm run lint` | Run TypeScript type checking |
| `npm run clean` | Remove the dist folder |

---

## Project Structure

```
BoxIt/
├── src/           # Source files (components, pages, logic)
├── index.html     # Entry HTML file
├── .env.example   # Environment variable template
├── package.json   # Dependencies and scripts
├── tsconfig.json  # TypeScript configuration
└── vite.config.ts # Vite configuration
```

---

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## Author

**Mad-iii** — [github.com/Mad-iii](https://github.com/Mad-iii)

---

## License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.
