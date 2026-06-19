export interface BlogPost {
  id: string;
  slug: string;
  category: "SEO" | "Production" | "Marketing";
  title: string;
  date: string;
  readTime: string;
  excerpt: string;
  content: string[]; // Splitting into paragraphs for basic rendering
  author: {
    name: string;
    role: string;
  };
  keywords: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "1",
    slug: "navi-mumbai-seo-local-map-pack",
    category: "SEO",
    title: "Navi Mumbai SEO: How to Rank in the Local Map Pack in 2026",
    date: "June 12, 2026",
    readTime: "5 min read",
    excerpt: "Struggling to get local footfall? Learn exactly how local businesses in Navi Mumbai are dominating the Google Map Pack.",
    keywords: "Navi Mumbai SEO, Local SEO, Google Map Pack, SEO Agency Navi Mumbai",
    author: {
      name: "Abhishek Gujar",
      role: "Founder & Creative Director"
    },
    content: [
      "In 2026, simply having a website isn't enough. If your target audience is based in Navi Mumbai, securing a spot in the Google Local Map Pack is the most crucial step for driving foot traffic and local leads.",
      "The Map Pack is the group of three local business listings that appear at the top of Google search results. But how do you get there? It starts with a perfectly optimized Google Business Profile (GBP). Ensure your NAP (Name, Address, Phone Number) consistency is 100% accurate across all directories.",
      "Next, focus on hyper-local content. Create service pages that specifically mention target areas like Vashi, Belapur, and Kharghar. Getting local backlinks from Navi Mumbai news sites, community blogs, and local event sponsorships sends massive authority signals to Google.",
      "Finally, reviews are the engine of local SEO. Implement an automated review generation strategy. Reply to every review—positive or negative—using relevant keywords naturally. At icreatepixels, we've helped numerous Navi Mumbai businesses double their local visibility within 90 days."
    ]
  },
  {
    id: "2",
    slug: "smartphone-video-ads-costing-customers",
    category: "Production",
    title: "Why Your Smartphone Video Ads Are Costing You Customers",
    date: "June 05, 2026",
    readTime: "8 min read",
    excerpt: "Discover the hidden costs of DIY smartphone video campaigns and why high-end production actually yields better ROAS.",
    keywords: "Video Production, Smartphone Video Ads, Commercial Production, Video Agency",
    author: {
      name: "Abhishek Gujar",
      role: "Creative Head"
    },
    content: [
      "We all know the narrative: 'You just need a smartphone and a ring light to go viral.' While this might be true for influencer organic content, applying this to commercial ad campaigns is actively burning your ad spend.",
      "High-converting video ads require more than just 4K resolution. They require intentional lighting, crisp audio, color grading that aligns with brand identity, and psychological pacing. When a potential customer sees a poorly lit, smartphone-shot ad, their brain subconsciously attaches a 'low quality' tag to your actual product.",
      "At icreatepixels, we bridge the gap between cinematic filmmaking and performance marketing. A broadcast-quality commercial signals trust and authority before the viewer even processes your offer. Our data shows that professionally shot and lit ads drastically reduce Cost Per Acquisition (CPA) simply through increased trust.",
      "Stop risking your brand's perception. Invest in production architecture that scales your authority alongside your revenue."
    ]
  },
  {
    id: "3",
    slug: "meta-ads-strategy-scaling",
    category: "Marketing",
    title: "Meta Ads Strategy: Scaling Beyond Zero ROAS",
    date: "April 18, 2026",
    readTime: "10 min read",
    excerpt: "Stop burning budget. Learn the exact testing architecture we use to scale Meta ads profitably.",
    keywords: "Meta Ads, Facebook Ads Strategy, ROAS, Marketing Agency",
    author: {
      name: "Abhishek Gujar",
      role: "Founder & Creative Director"
    },
    content: [
      "The Meta algorithm has changed dramatically. What worked in 2023 will deplete your budget today. The secret to scaling beyond barely breaking even isn't finding a 'hidden audience hack'—it's mastering creative testing architecture.",
      "Your creative is the new targeting. We structure our client accounts using broad targeting and let the ad creative do the heavy lifting. We test 3 variables rapidly: Hook (first 3 seconds), Value Proposition (the core message), and Visual Format (UGC vs. Kinetic Typography vs. High-End Commercial).",
      "Once we identify a winning creative, we don't just increase the budget. We build horizontal variations of that winner. Different hooks, same core message. By feeding the algorithm consistent, high-quality variations, we stabilize the CPA and build a robust, scalable funnel.",
      "If you're stuck in the testing phase, it's time to overhaul your creative strategy. Partner with an agency that understands both the creative production and the technical media buying required to win."
    ]
  }
];
