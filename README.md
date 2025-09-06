# The Great Cloud of Witnesses Compendium

## Project Overview
- **Name**: The Great Cloud of Witnesses Compendium
- **Goal**: A sophisticated digital sanctuary presenting Christian saints through sacred art and comprehensive biographies
- **Features**: Hero banner with "Adoration of the Trinity" artwork, interactive gallery of 20 Catholic saints with detailed biographies, miracles, and historical information

## URLs
- **Production**: https://great-cloud-witnesses.pages.dev
- **Latest Deployment**: https://6e188726.great-cloud-witnesses.pages.dev
- **GitHub**: https://github.com/Eggmanaa/The-Great-Cloud-of-Witnesses-Compendium
- **API Health Check**: https://6e188726.great-cloud-witnesses.pages.dev/api/health

## Features

### Currently Completed Features
- ✅ **Full uncropped hero banner featuring "Adoration of the Trinity"** - Complete majestic artwork welcomes visitors
- ✅ Dark sanctuary theme with sophisticated religious aesthetic
- ✅ Interactive saints gallery with 20 pivotal Catholic figures
- ✅ Responsive grid layout (1-4 columns based on screen size)
- ✅ **Consistent gallery cards** - Portraits cropped to 3:4 aspect ratio for clean grid layout
- ✅ Detailed saint cards with portraits, titles, and biographical previews
- ✅ Full biography modal with expanded information
- ✅ **Full uncropped artwork in modal** - Complete saint portraits visible when clicked
- ✅ **Full-screen image viewer** - Click modal image for immersive full-screen display
- ✅ Chronologically sorted saints (from St. Gabriel the Archangel to St. Maximilian Kolbe 1941)
- ✅ **Updated St. Agnes portrait** - New classical artwork representation
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
  - Original Saints: `st-agnes`, `st-anthony-padua`, `st-francis-assisi`, `st-catherine-siena`, `st-ignatius-loyola`, `st-teresa-avila`, `our-lady-guadalupe`, `st-padre-pio`, `st-gabriel-archangel`, `st-carlo-acutis`
  - New Saints: `st-augustine-hippo`, `st-monica-mother`, `st-patrick-ireland`, `st-hildegard-bingen`, `st-thomas-aquinas`, `st-joan-arc`, `st-francis-xavier-missionary`, `st-john-cross-mystic`, `st-therese-lisieux`, `st-maximilian-kolbe-martyr`

#### Static Resources
- `/static/app.js` - Main JavaScript application
- `/static/style.css` - Additional styles

## Saints Featured (Chronologically Ordered)

### Original Collection
1. **St. Gabriel the Archangel** - Divine Messenger, Archangel
2. **St. Agnes** (c. 291-304) - Virgin-Martyr of the Early Church
3. **St. Anthony of Padua** (1195-1231) - Doctor of the Church, Wonder-Worker
4. **St. Francis of Assisi** (1181-1226) - Founder of Franciscan Order, Stigmatist
5. **St. Catherine of Siena** (1347-1380) - Doctor of the Church, Mystic
6. **St. Ignatius of Loyola** (1491-1556) - Founder of the Jesuits
7. **Our Lady of Guadalupe** (1531) - Marian Apparition, Patroness of Americas
8. **St. Teresa of Ávila** (1515-1582) - Carmelite Reformer, Doctor of the Church
9. **St. Padre Pio** (1887-1968) - Stigmatist, Mystic Confessor
10. **St. Carlo Acutis** (1991-2006) - First Millennial Saint, Cyber-Apostle

### New Additions from "The Great Cloud of Witnesses" Document
11. **St. Augustine of Hippo** (354-430) - Doctor of Grace, Theologian and Philosopher
12. **St. Monica** (c. 331-387) - Mother of St. Augustine, Patron of Mothers
13. **St. Patrick** (c. 385-461) - Apostle of Ireland, Missionary Bishop
14. **St. Hildegard von Bingen** (1098-1179) - Mystic, Composer, Natural Scientist
15. **St. Thomas Aquinas** (c. 1225-1274) - Angelic Doctor, Scholastic Theologian
16. **St. Joan of Arc** (c. 1412-1431) - Maid of Orléans, Military Leader, Martyr
17. **St. Francis Xavier** (1506-1552) - Apostle of the Indies and Japan, Great Missionary
18. **St. John of the Cross** (1542-1591) - Mystic of the Dark Night, Carmelite Reformer
19. **St. Thérèse of Lisieux** (1873-1897) - Little Flower, Little Way Spirituality
20. **St. Maximilian Kolbe** (1894-1941) - Martyr of Charity, Auschwitz Hero

## Data Architecture
- **Data Models**: Saint interface with comprehensive biographical data
- **Storage Services**: Static data served through Cloudflare Workers
- **Data Flow**: API endpoints serve JSON data to frontend JavaScript application

## User Guide

### Navigating the Gallery
1. **Browse Saints**: Scroll through the gallery grid with consistently sized portrait cards
2. **View Details**: Click on any saint card to see the FULL uncropped artwork and biography
3. **Full-Screen Images**: Click on the modal's saint portrait for immersive full-screen viewing
4. **Read Biography**: Explore comprehensive life stories, miracles, and legacy
5. **Navigation**: Use ESC key or click outside image to close full-screen view
6. **Close Modal**: Click the X button or press ESC to return to the gallery

### Features in Detail
- **Gallery Display**: Portrait cards maintain 3:4 aspect ratio for visual consistency
- **Modal View**: Full uncropped artwork displayed when saint card is clicked
- **Full-Screen Mode**: Click modal images to view artwork in immersive full-screen
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
- **Status**: ✅ DEPLOYED and LIVE
- **Tech Stack**: Hono + TypeScript + Tailwind CSS
- **Last Updated**: September 6, 2025
- **Project Name**: great-cloud-witnesses

## Credits
- Saint biographical information from historical Catholic sources
- Images from religious art collections
- Built with Hono framework and Cloudflare Workers