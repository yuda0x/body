# Web3 Explorer

An interactive Web3 protocol learning platform inspired by Anatomy Atelier. Explore blockchain protocols like an artist – learn Bitcoin, Ethereum, Solana, Polygon, Arbitrum and more through beautiful, detailed 3D protocol models.

**Live Demo:** [Deploy to Vercel](https://vercel.com/new)

## 🎨 Features

- **Interactive 3D Protocol Viewer** – Rotate, zoom, and explore protocol architectures
- **Detailed Protocol Information** – Key facts, insights, and historical context
- **Beautiful UI** – Cream-colored design with elegant typography
- **Responsive Design** – Works on desktop and mobile devices
- **Learning Resources** – Architecture, comparisons, animations, and use cases
- **Dark/Light Mode Ready** – Extend with theme switching

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone <your-repo-url>
cd web3-explorer
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Run development server**
```bash
npm run dev
# or
yarn dev
```

4. **Open browser**
```
http://localhost:3000
```

## 📦 Build & Deploy

### Build for production
```bash
npm run build
npm start
```

### Deploy to Vercel
The easiest way to deploy is with [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy! 🎉

```bash
# Or use Vercel CLI
npm i -g vercel
vercel
```

## 📁 Project Structure

```
web3-explorer/
├── src/
│   ├── app/
│   │   ├── page.tsx          # Main page
│   │   ├── layout.tsx        # Root layout
│   │   └── globals.css       # Global styles
│   ├── components/
│   │   ├── Header.tsx        # Navigation header
│   │   ├── Sidebar.tsx       # Protocol library
│   │   ├── ProtocolViewer.tsx # 3D viewer area
│   │   ├── InfoPanel.tsx     # Protocol details
│   │   └── LearningCards.tsx # Additional resources
│   └── data/
│       └── protocols.ts      # Protocol data
├── public/                   # Static assets
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

## 🎯 Customization

### Add New Protocols

Edit `src/data/protocols.ts`:

```typescript
export const protocols: Protocol[] = [
  {
    id: 'your-protocol',
    name: 'Your Protocol',
    category: 'Your Category',
    description: '...',
    founded: '2024',
    tvl: '$X.XB',
    features: [...],
    keyFacts: [...],
    medicalNote: '...',
    didYouKnow: '...',
    color: '#yourcolor'
  },
  // ... more protocols
]
```

### Update Colors & Branding

- Modify Tailwind config in `tailwind.config.js`
- Change background colors in `src/app/globals.css`
- Update typography in `src/app/layout.tsx`

### Add 3D Models

Replace the placeholder in `src/components/ProtocolViewer.tsx` with:
- Three.js models
- Babylon.js scenes
- Custom WebGL implementations

## 🔗 Tech Stack

- **Next.js 14** – React framework
- **TypeScript** – Type safety
- **Tailwind CSS** – Styling
- **Lucide Icons** – Icon library
- **Next.js Font** – Google Fonts integration

## 📝 License

This project is open source. Feel free to use it as a template for your own educational platforms.

## 🙌 Credits

- Inspired by [Anatomy Atelier](https://anatomy-livid.vercel.app/)
- Built by [@0xqorii](https://twitter.com/0xqorii)

## 💬 Support

Have questions? Create an issue or reach out on [Twitter](https://twitter.com/0xqorii)

---

**Happy exploring!** 🚀
