import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { serveStatic } from 'hono/cloudflare-workers'
import { getSaintsSortedByDate } from './data/saints'

const app = new Hono()

// Enable CORS for API routes
app.use('/api/*', cors())

// Serve static files from public directory
app.use('/static/*', serveStatic({ root: './public' }))
app.use('/favicon.ico', serveStatic({ root: './public' }))

// API route to get all saints
app.get('/api/saints', (c) => {
  const saints = getSaintsSortedByDate();
  return c.json({ 
    saints,
    total: saints.length 
  });
});

// API route to get a specific saint by ID
app.get('/api/saints/:id', (c) => {
  const id = c.req.param('id');
  const saints = getSaintsSortedByDate();
  const saint = saints.find(s => s.id === id);
  
  if (!saint) {
    return c.json({ error: 'Saint not found' }, 404);
  }
  
  return c.json(saint);
});

// Serve the main HTML file for the root route
app.get('/', serveStatic({ path: './public/index.html', root: '.' }))

// Health check endpoint
app.get('/api/health', (c) => {
  return c.json({ 
    status: 'ok',
    message: 'The Great Cloud of Witnesses Compendium is running',
    timestamp: new Date().toISOString()
  });
});

export default app