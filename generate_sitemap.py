#!/usr/bin/env python3
import xml.etree.ElementTree as ET
from datetime import datetime

# Read all saint IDs
with open('/tmp/saint-ids.txt', 'r') as f:
    saint_ids = [line.strip() for line in f if line.strip()]

# Create the root element
urlset = ET.Element('urlset')
urlset.set('xmlns', 'http://www.sitemaps.org/schemas/sitemap/0.9')
urlset.set('xmlns:image', 'http://www.google.com/schemas/sitemap-image/1.1')

# Current date
current_date = datetime.now().strftime('%Y-%m-%d')

# Add homepage
homepage = ET.SubElement(urlset, 'url')
ET.SubElement(homepage, 'loc').text = 'https://great-cloud-witnesses.pages.dev/'
ET.SubElement(homepage, 'lastmod').text = current_date
ET.SubElement(homepage, 'changefreq').text = 'weekly'
ET.SubElement(homepage, 'priority').text = '1.0'

# Add API endpoint
api_saints = ET.SubElement(urlset, 'url')
ET.SubElement(api_saints, 'loc').text = 'https://great-cloud-witnesses.pages.dev/api/saints'
ET.SubElement(api_saints, 'lastmod').text = current_date
ET.SubElement(api_saints, 'changefreq').text = 'weekly'
ET.SubElement(api_saints, 'priority').text = '0.8'

# Add API health check
api_health = ET.SubElement(urlset, 'url')
ET.SubElement(api_health, 'loc').text = 'https://great-cloud-witnesses.pages.dev/api/health'
ET.SubElement(api_health, 'lastmod').text = current_date
ET.SubElement(api_health, 'changefreq').text = 'monthly'
ET.SubElement(api_health, 'priority').text = '0.3'

# Add individual saint API endpoints
for saint_id in saint_ids:
    saint_api = ET.SubElement(urlset, 'url')
    ET.SubElement(saint_api, 'loc').text = f'https://great-cloud-witnesses.pages.dev/api/saints/{saint_id}'
    ET.SubElement(saint_api, 'lastmod').text = current_date
    ET.SubElement(saint_api, 'changefreq').text = 'monthly'
    ET.SubElement(saint_api, 'priority').text = '0.6'

# Create the tree and write to file
tree = ET.ElementTree(urlset)
ET.indent(tree, space='  ')

# Write with XML declaration
with open('/home/user/webapp/public/sitemap.xml', 'wb') as f:
    tree.write(f, encoding='UTF-8', xml_declaration=True)

print(f"Sitemap generated with {len(saint_ids) + 3} URLs")
print(f"Saint pages included: {len(saint_ids)}")