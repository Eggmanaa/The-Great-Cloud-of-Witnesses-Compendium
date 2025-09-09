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

// IndexNow submission endpoint
app.post('/api/indexnow/submit', async (c) => {
  const INDEXNOW_KEY = 'acbeeed8cc084b3a8c3b8050d533ada5';
  const SITE_HOST = 'great-cloud-witnesses.pages.dev';
  
  try {
    // Get URLs to submit (you can customize this based on your needs)
    const { urls } = await c.req.json();
    
    if (!urls || !Array.isArray(urls) || urls.length === 0) {
      return c.json({ error: 'No URLs provided' }, 400);
    }
    
    // Submit to Bing IndexNow
    const bingResponse = await fetch('https://www.bing.com/indexnow', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      },
      body: JSON.stringify({
        host: SITE_HOST,
        key: INDEXNOW_KEY,
        keyLocation: `https://${SITE_HOST}/${INDEXNOW_KEY}.txt`,
        urlList: urls
      })
    });
    
    // Submit to Yandex IndexNow (supports the same protocol)
    const yandexResponse = await fetch('https://yandex.com/indexnow', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      },
      body: JSON.stringify({
        host: SITE_HOST,
        key: INDEXNOW_KEY,
        keyLocation: `https://${SITE_HOST}/${INDEXNOW_KEY}.txt`,
        urlList: urls
      })
    });
    
    return c.json({
      success: true,
      message: 'URLs submitted to IndexNow',
      bing: {
        status: bingResponse.status,
        statusText: bingResponse.statusText
      },
      yandex: {
        status: yandexResponse.status,
        statusText: yandexResponse.statusText
      },
      submittedUrls: urls
    });
    
  } catch (error) {
    return c.json({ 
      error: 'Failed to submit URLs to IndexNow',
      details: error.message 
    }, 500);
  }
});

// Automated IndexNow submission for all saints
app.get('/api/indexnow/submit-all', async (c) => {
  const INDEXNOW_KEY = 'acbeeed8cc084b3a8c3b8050d533ada5';
  const SITE_HOST = 'great-cloud-witnesses.pages.dev';
  
  try {
    const saints = getSaintsSortedByDate();
    
    // Create URL list with homepage and all saint API endpoints
    const urls = [
      `https://${SITE_HOST}/`,
      `https://${SITE_HOST}/api/saints`,
      ...saints.map(saint => `https://${SITE_HOST}/api/saints/${saint.id}`)
    ];
    
    // Submit in batches of 10 to avoid overwhelming the service
    const batchSize = 10;
    const results = [];
    
    for (let i = 0; i < urls.length; i += batchSize) {
      const batch = urls.slice(i, i + batchSize);
      
      const bingResponse = await fetch('https://www.bing.com/indexnow', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=utf-8'
        },
        body: JSON.stringify({
          host: SITE_HOST,
          key: INDEXNOW_KEY,
          keyLocation: `https://${SITE_HOST}/${INDEXNOW_KEY}.txt`,
          urlList: batch
        })
      });
      
      results.push({
        batch: i / batchSize + 1,
        urls: batch.length,
        status: bingResponse.status
      });
      
      // Small delay between batches to be respectful
      await new Promise(resolve => setTimeout(resolve, 100));
    }
    
    return c.json({
      success: true,
      message: 'All URLs submitted to IndexNow',
      totalUrls: urls.length,
      batches: results
    });
    
  } catch (error) {
    return c.json({ 
      error: 'Failed to submit URLs to IndexNow',
      details: error.message 
    }, 500);
  }
});

// Note: Static files (HTML, JS, CSS) are served directly by Cloudflare Pages
// The root route "/" and "/static/*" are handled by the files in the public/ directory

export default app