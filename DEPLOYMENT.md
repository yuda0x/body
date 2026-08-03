# Deployment Guide

## Deploy to Vercel (Recommended)

### Option 1: Using GitHub (Easiest)

1. **Create a GitHub repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Web3 Explorer"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/web3-explorer.git
   git push -u origin main
   ```

2. **Import on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Select "Import Git Repository"
   - Paste your GitHub repo URL
   - Click "Import"
   - Vercel will auto-detect Next.js
   - Click "Deploy"

### Option 2: Using Vercel CLI

```bash
# Install Vercel CLI globally
npm i -g vercel

# Deploy from your project directory
cd web3-explorer
vercel

# Follow the prompts and your site will be live!
```

### Option 3: Deploy from Git with GitHub Pages (Alternative)

You can also use GitHub Pages, but Vercel is recommended for Next.js apps.

## After Deployment

### Custom Domain
1. Go to your Vercel project settings
2. Navigate to "Domains"
3. Add your custom domain
4. Update DNS records as instructed

### Environment Variables
1. Go to project "Settings" → "Environment Variables"
2. Add any variables needed (currently none required)
3. Redeploy if needed

### Preview Deployments
Every push to a branch creates a preview deployment automatically.

### Production Domain
The `main` branch automatically deploys to your production domain.

## Local Development

```bash
# Development server with hot reload
npm run dev

# Build for production
npm run build

# Start production server locally
npm start

# Check for linting errors
npm run lint
```

## Troubleshooting

### Build fails
- Check Node.js version: `node --version` (should be 18+)
- Clear cache: `rm -rf .next node_modules` then `npm install`
- Check for TypeScript errors: `npm run build`

### Styling issues
- Tailwind CSS should auto-compile
- If styles don't load, try hard refresh (Ctrl+Shift+R or Cmd+Shift+R)

### Performance
- Vercel automatically optimizes images
- Edge caching is enabled by default
- ISR (Incremental Static Regeneration) ready

## Analytics & Monitoring

Vercel provides:
- Real-time analytics
- Performance metrics
- Error tracking
- Usage analytics

Access via Vercel Dashboard → Your Project → Analytics

## Cost

Vercel's free tier includes:
- Unlimited deployments
- Automatic HTTPS
- Edge caching
- Preview deployments
- Perfect for this project!

---

**Questions?** Check [Vercel Docs](https://vercel.com/docs) or reach out to [@0xqorii](https://twitter.com/0xqorii)
