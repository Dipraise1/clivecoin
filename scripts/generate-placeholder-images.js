const fs = require('fs');
const path = require('path');

// Create directory if it doesn't exist
const directory = path.join(process.cwd(), 'public/images/merch');
if (!fs.existsSync(directory)) {
  fs.mkdirSync(directory, { recursive: true });
  console.log('Created directory:', directory);
}

// Create SVG placeholder images
const products = [
  'tshirt', 
  'hoodie', 
  'cap', 
  'mug', 
  'poster', 
  'stickers'
];

products.forEach(product => {
  const svgContent = `
<svg width="500" height="500" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="#FFFF00" />
  <rect x="10" y="10" width="480" height="480" fill="black" fill-opacity="0.1" rx="10" ry="10" />
  <text x="50%" y="50%" font-family="Arial" font-size="32" font-weight="bold" fill="black" text-anchor="middle">CLIVE ${product.toUpperCase()}</text>
  <text x="50%" y="58%" font-family="Arial" font-size="24" fill="black" text-anchor="middle">Coming Soon</text>
</svg>
  `;
  
  const filePath = path.join(directory, `${product}-placeholder.png`);
  fs.writeFileSync(filePath, svgContent);
  console.log('Created placeholder image:', filePath);
});

console.log('All placeholder images have been generated!'); 