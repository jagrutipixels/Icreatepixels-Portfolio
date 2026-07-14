const fs = require('fs');
let content = fs.readFileSync('components/RecentWorkSection.tsx', 'utf8');

content = content.replace('import reelsData from "../reels_data.json";', 'import React, { useState, useEffect } from "react";');

// In case `import React from "react";` was already there:
content = content.replace(/import React from "react";\nimport React, { useState, useEffect } from "react";/, 'import React, { useState, useEffect } from "react";');


content = content.replace('export const RecentWorkSection: React.FC = () => {', 
`export const RecentWorkSection: React.FC = () => {
  const [reelsData, setReelsData] = useState<Record<string, any> | null>(null);

  useEffect(() => {
    import("../reels_data.json").then((module) => {
      setReelsData(module.default || module);
    });
  }, []);
`);

content = content.replace(/          \{\[\n            "bhadipa",/,
`          {reelsData && [\n            "bhadipa",`);

content = content.replace(/            const reels = \(reelsData as Record<string, any>\)\[key\];/,
`            const reels = (reelsData as Record<string, any>)[key];`);


fs.writeFileSync('components/RecentWorkSection.tsx', content);
