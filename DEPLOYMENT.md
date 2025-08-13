# Deployment Guide

This guide covers how to deploy the ConnecTouch Platform to various hosting providers.

## 🚀 Quick Deploy

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/connectouch/connectouch-platform)

### Netlify
1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify
3. Set up continuous deployment from GitHub

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add deploy script to package.json:
   ```json
   "scripts": {
     "deploy": "gh-pages -d dist"
   }
   ```
3. Run: `npm run build && npm run deploy`

## ⚙️ Build Configuration

### Environment Variables
Create a `.env` file for local development:
```env
VITE_APP_TITLE=ConnecTouch Platform
VITE_API_URL=https://api.connectouch.com
```

### Build Optimization
The project is configured with:
- Vite for fast builds and hot reload
- TypeScript for type checking
- Tailwind CSS for optimized styles
- Tree shaking for smaller bundles

### Performance
- Images are optimized and lazy-loaded
- Components are code-split
- CSS is purged and minified
- JavaScript is minified and compressed

## 🔧 Custom Deployment

### Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "preview"]
```

### Manual Deployment
1. Build: `npm run build`
2. Upload `dist` folder to your server
3. Configure your web server to serve the files
4. Set up proper redirects for SPA routing

## 📊 Monitoring

Consider setting up:
- Error tracking (Sentry)
- Analytics (Google Analytics, Plausible)
- Performance monitoring (Web Vitals)
- Uptime monitoring

## 🔒 Security

- Enable HTTPS
- Set up proper CSP headers
- Configure CORS if needed
- Regular security updates

## 🚨 Troubleshooting

### Common Issues
- **Build fails**: Check Node.js version (18+)
- **Styles missing**: Ensure Tailwind CSS is configured
- **Routes not working**: Configure SPA redirects
- **Images not loading**: Check asset paths

### Support
- Check the GitHub Issues
- Review the documentation
- Contact the development team