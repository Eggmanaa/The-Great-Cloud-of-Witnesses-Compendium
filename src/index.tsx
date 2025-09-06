import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { getSaintsSortedByDate } from './data/saints'

const app = new Hono()

// Enable CORS for API routes
app.use('/api/*', cors())

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

// Health check endpoint
app.get('/api/health', (c) => {
  return c.json({ 
    status: 'ok',
    message: 'The Great Cloud of Witnesses Compendium is running',
    timestamp: new Date().toISOString()
  });
});

// Note: Static files (HTML, JS, CSS) are served directly by Cloudflare Pages
// The root route "/" and "/static/*" are handled by the files in the public/ directory

export default app