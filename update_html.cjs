const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// Extract style
const styleMatch = html.match(/<style>([\s\S]*?)<\/style>/);
let styleContent = styleMatch ? styleMatch[1] : '';

// Remove style
html = html.replace(/<style>[\s\S]*?<\/style>/, '');

// Remove tailwind script
html = html.replace(/<script src="https:\/\/cdn\.tailwindcss\.com\?plugins=typography"><\/script>/, '');

// Remove tailwind config script
html = html.replace(/<script>\s*tailwind\.config = [\s\S]*?<\/script>/, '');

fs.writeFileSync('index.html', html);

let cssContent = `@import "tailwindcss";

@theme {
  --breakpoint-xs: 475px;
}

` + styleContent;

fs.writeFileSync('index.css', cssContent);
