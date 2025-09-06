# The Great Cloud of Witnesses Compendium

## Project Overview
- **Name**: The Great Cloud of Witnesses Compendium
- **Goal**: A sophisticated digital sanctuary presenting Christian saints through sacred art and comprehensive biographies
- **Features**: Interactive gallery of 10 Catholic saints with detailed biographies, miracles, and historical information

## URLs
- **Development**: https://3000-iqqjcnv874dkq8bk1sz5v-6532622b.e2b.dev
- **Production**: https://greatcloudofwitnessescompendium.pages.dev (pending deployment)
- **GitHub**: https://github.com/[username]/GreatCloudOfWitnessesCompendium (pending)

## Features

### Currently Completed Features
- ✅ Dark sanctuary theme with sophisticated religious aesthetic
- ✅ Interactive saints gallery with 10 pivotal Catholic figures
- ✅ Responsive grid layout (1-4 columns based on screen size)
- ✅ Detailed saint cards with portraits, titles, and biographical previews
- ✅ Full biography modal with expanded information
- ✅ Chronologically sorted saints (from St. Agnes 304 AD to St. Carlo Acutis 2006)
- ✅ Click-to-expand image functionality for full-size viewing
- ✅ Miracles and signs section for each saint
- ✅ Elegant typography with serif and sans-serif combinations
- ✅ Gold accent colors and sacred geometric patterns
- ✅ Loading states and error handling
- ✅ RESTful API endpoints for saints data

### Functional Entry URIs

#### Main Pages
- `/` - Main gallery page with all saints
- `/index.html` - Direct HTML access

#### API Endpoints
- `/api/health` - Health check endpoint
- `/api/saints` - Get all saints data (JSON)
- `/api/saints/:id` - Get specific saint by ID
  - Available IDs: `st-agnes`, `st-anthony-padua`, `st-francis-assisi`, `st-catherine-siena`, `st-ignatius-loyola`, `st-teresa-avila`, `our-lady-guadalupe`, `st-padre-pio`, `st-gabriel-archangel`, `st-carlo-acutis`

#### Static Resources
- `/static/app.js` - Main JavaScript application
- `/static/style.css` - Additional styles

## Saints Featured

1. **St. Agnes** (c. 291-304) - Virgin-Martyr of the Early Church
2. **St. Francis of Assisi** (1181-1226) - Founder of Franciscan Order, Stigmatist
3. **St. Anthony of Padua** (1195-1231) - Doctor of the Church, Wonder-Worker
4. **St. Catherine of Siena** (1347-1380) - Doctor of the Church, Mystic
5. **St. Ignatius of Loyola** (1491-1556) - Founder of the Jesuits
6. **Our Lady of Guadalupe** (1531) - Marian Apparition, Patroness of Americas
7. **St. Teresa of Ávila** (1515-1582) - Carmelite Reformer, Doctor of the Church
8. **St. Padre Pio** (1887-1968) - Stigmatist, Mystic Confessor
9. **St. Gabriel the Archangel** - Divine Messenger
10. **St. Carlo Acutis** (1991-2006) - First Millennial Saint, Cyber-Apostle

## Data Architecture
- **Data Models**: Saint interface with comprehensive biographical data
- **Storage Services**: Static data served through Cloudflare Workers
- **Data Flow**: API endpoints serve JSON data to frontend JavaScript application

## User Guide

### Navigating the Gallery
1. **Browse Saints**: Scroll through the gallery grid to see all 10 saints
2. **View Details**: Click on any saint card to open their full biography
3. **Read Biography**: Explore comprehensive life stories, miracles, and legacy
4. **View Full Images**: Click on saint portraits in the modal to see full-size images
5. **Close Modal**: Click the X button or press ESC to return to the gallery

### Features in Detail
- **Feast Day Badges**: Each saint card shows their liturgical feast day
- **Patronage Information**: Learn what each saint is the patron of
- **Chronological Order**: Saints are arranged by their historical dates
- **Miracle Accounts**: Detailed descriptions of miraculous events
- **Responsive Design**: Optimized for desktop, tablet, and mobile viewing

## Technical Stack
- **Framework**: Hono (lightweight web framework)
- **Runtime**: Cloudflare Workers/Pages
- **Frontend**: Vanilla JavaScript with Tailwind CSS
- **Icons**: Font Awesome 6.4
- **Fonts**: Cinzel (headings), Crimson Text (body), Inter (UI)
- **Build Tool**: Vite
- **Deployment**: Cloudflare Pages

## Development

### Prerequisites
- Node.js 18+ and npm
- Wrangler CLI (for Cloudflare deployment)

### Local Development
```bash
# Install dependencies
npm install

# Build the project
npm run build

# Start development server
npm run dev:sandbox

# Or use PM2
pm2 start ecosystem.config.cjs
```

### Deployment to Cloudflare Pages
```bash
# Build for production
npm run build

# Deploy to Cloudflare Pages
npx wrangler pages deploy dist --project-name GreatCloudOfWitnessesCompendium
```

## Project Structure
```
webapp/
├── src/
│   ├── index.tsx         # Main Hono application
│   └── data/
│       └── saints.ts     # Saints data and interfaces
├── public/
│   ├── index.html        # Main HTML page
│   └── static/
│       └── app.js        # Frontend JavaScript
├── dist/                 # Build output
├── ecosystem.config.cjs  # PM2 configuration
├── wrangler.jsonc        # Cloudflare configuration
├── package.json          # Dependencies
└── README.md            # This file
```

## Features Not Yet Implemented
- Search/filter functionality by era or attributes
- Multi-language support
- Audio narration of biographies
- Prayer request submission system
- Social sharing buttons
- Print-friendly biography versions
- Related saints suggestions
- Liturgical calendar integration

## Recommended Next Steps
1. Deploy to Cloudflare Pages for global CDN distribution
2. Add search and filtering capabilities
3. Implement progressive web app (PWA) features
4. Add more saints to expand the collection
5. Create saint feast day notifications
6. Add prayer/novena content for each saint
7. Implement user favorites/bookmarking system
8. Add related scripture passages

## Deployment Status
- **Platform**: Cloudflare Pages
- **Status**: ✅ Ready for deployment
- **Tech Stack**: Hono + TypeScript + Tailwind CSS
- **Last Updated**: September 6, 2025

## Credits
- Saint biographical information from historical Catholic sources
- Images from religious art collections
- Built with Hono framework and Cloudflare Workers