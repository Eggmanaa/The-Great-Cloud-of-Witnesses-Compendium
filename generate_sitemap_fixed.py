#!/usr/bin/env python3
from datetime import datetime

# Read all saint IDs
with open('/tmp/saint-ids.txt', 'r') as f:
    saint_ids = [line.strip() for line in f if line.strip()]

# Current date
current_date = datetime.now().strftime('%Y-%m-%d')

# Create sitemap XML content manually with proper formatting
sitemap_content = '''<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://great-cloud-witnesses.pages.dev/</loc>
    <lastmod>{}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://great-cloud-witnesses.pages.dev/api/saints</loc>
    <lastmod>{}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://great-cloud-witnesses.pages.dev/api/health</loc>
    <lastmod>{}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.3</priority>
  </url>'''.format(current_date, current_date, current_date)

# Add individual saint API endpoints
for saint_id in saint_ids:
    saint_entry = '''
  <url>
    <loc>https://great-cloud-witnesses.pages.dev/api/saints/{}</loc>
    <lastmod>{}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>'''.format(saint_id, current_date)
    sitemap_content += saint_entry

# Close the urlset tag
sitemap_content += '\n</urlset>'

# Write to file
with open('/home/user/webapp/public/sitemap.xml', 'w', encoding='UTF-8') as f:
    f.write(sitemap_content)

print(f"Fixed sitemap generated with {len(saint_ids) + 3} URLs")
print(f"Saint pages included: {len(saint_ids)}")