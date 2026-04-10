import fs from 'fs';

const urls = {
  bni: [
    "https://www.instagram.com/reel/DW1Nmz1jvTV/?hl=en",
    "https://www.instagram.com/reel/DW0XwczjZYr/?hl=en",
    "https://www.instagram.com/reel/DW0XN86jUbA/?hl=en",
    "https://www.instagram.com/reel/DW0VWcICV0R/?hl=en",
    "https://www.instagram.com/reel/DW0UvHPgKzq/?hl=en",
    "https://www.instagram.com/reel/DW0UEvDCNIj/?hl=en"
  ],
  savoir: [
    "https://www.instagram.com/reel/DWjJ6sPCGND/?hl=en",
    "https://www.instagram.com/reel/DVs9fzIk2YP/?hl=en",
    "https://www.instagram.com/reel/DUGG14YiFlL/?hl=en",
    "https://www.instagram.com/reel/DT2o0x2k7Kh/?hl=en",
    "https://www.instagram.com/reel/DTuq0J6iIV5/?hl=en",
    "https://www.instagram.com/reel/DWoR5cluKYw/?hl=en"
  ],
  luxe: [
    "https://www.instagram.com/p/DO05ib3k4wq/?hl=en",
    "https://www.instagram.com/p/DPNzdsXj8aH/?hl=en",
    "https://www.instagram.com/p/DP-c1_HCDJv/?hl=en",
    "https://www.instagram.com/p/DPERB_ViOwc/?hl=en",
    "https://www.instagram.com/p/DSsG950EwCF/?hl=en",
    "https://www.instagram.com/p/DRWQ-ljCJ-A/?hl=en"
  ],
  bhadipa: [
    "https://www.instagram.com/reel/DByayE5IpYK/",
    "https://www.instagram.com/reel/DAI7O25Ikex/",
    "https://www.instagram.com/reel/DA8jmcQKPwt/",
    "https://www.instagram.com/reel/DEVEU_jIKLz/",
    "https://www.instagram.com/reel/DCT1mE5Ic14/",
    "https://www.instagram.com/reel/DAqSXP1IfbO/"
  ],
  vishaykhol: [
    "https://www.instagram.com/reel/DC1YbpoT1jk/",
    "https://www.instagram.com/reel/DByZdvDI_Kh/",
    "https://www.instagram.com/reel/DCb1P0oIlV0/",
    "https://www.instagram.com/bhadipavishaykhol/reel/DCZHX5UIN4B/",
    "https://www.instagram.com/reel/DBeBwOXozjG/",
    "https://www.instagram.com/reel/DAWBkP3o7J-/",
    "https://www.instagram.com/reel/C_YO8aQPs26/"
  ],
  puppycuddles: [
    "https://www.instagram.com/reel/DGpWE0woIx9/?hl=en",
    "https://www.instagram.com/reel/DGDkMraIUrB/?hl=en",
    "https://www.instagram.com/reel/DF7EtB4yMsN/?hl=en",
    "https://www.instagram.com/reel/DFpk5zNoV4J/?hl=en",
    "https://www.instagram.com/reel/DF0KcbuoII0/?hl=en",
    "https://www.instagram.com/reel/DF2iu1kSn3p/?hl=en",
    "https://www.instagram.com/reel/DF9kk8Zoi93/?hl=en",
    "https://www.instagram.com/reel/DGVkl6MIuZQ/?hl=en",
    "https://www.instagram.com/reel/DGufse2IZEI/?hl=en"
  ]
};

async function fetchThumb(url: string) {
  try {
    const res = await fetch(`https://api.microlink.io?url=${encodeURIComponent(url)}`);
    const json = await res.json();
    return json.data?.image?.url || "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=400";
  } catch (e) {
    console.error("Failed for", url);
    return "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=400";
  }
}

async function main() {
  const result: any = {};
  for (const [category, list] of Object.entries(urls)) {
    console.log(`Fetching ${category}...`);
    result[category] = [];
    for (const url of list) {
      const thumb = await fetchThumb(url);
      result[category].push({ url, thumb });
      // sleep to avoid rate limits
      await new Promise(r => setTimeout(r, 500));
    }
  }
  fs.writeFileSync('reels_data.json', JSON.stringify(result, null, 2));
  console.log("Done!");
}

main();
