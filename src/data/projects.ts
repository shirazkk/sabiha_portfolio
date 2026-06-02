export interface MediaItem {
  type: "video" | "image";
  url: string;
  thumbnail?: string;
}

export interface ProcessStep {
  title: string;
  description: string;
}

export interface Project {
  slug: string;
  title: string;
  category: string;
  description: string;
  // New Fields
  overview: string;
  challenge: string;
  process: ProcessStep[];
  deliverables: string[];
  // Existing
  gallery: MediaItem[];
  techStack: string[];
}

export const projects: Project[] = [
  {
    slug: "ai-character-building",
    title: "AI Character Building",
    category: "AI Influencer",
    description:
      "Developed a unique AI character from concept to personality implementation using advanced AI tools and prompt engineering.",
    overview:
      "The goal was to create an AI character that could engage users in natural conversations, provide accurate information, and maintain a consistent personality. The character is designed for a futuristic brand assistant.",
    challenge:
      "Building an AI character that feels human-like, maintains consistency in responses, and aligns with the brand's values was the main challenge. It required advanced prompt engineering and iterative testing.",
    process: [
      {
        title: "Concept & Research",
        description:
          "Defined character purpose, target audience and key personality traits.",
      },
      {
        title: "Prompt Engineering",
        description:
          "Crafted advanced prompts and behavior rules for natural conversations.",
      },
      {
        title: "Knowledge Base",
        description:
          "Built a structured knowledge base using Notion and documents.",
      },
      {
        title: "Testing & Refinement",
        description:
          "Ran multiple tests and refined responses for consistency and accuracy.",
      },
      {
        title: "Final Integration",
        description:
          "Integrated voice, visuals and final touches to complete the character.",
      },
    ],
    deliverables: [
      "Character Concept & Design",
      "Personality Development",
      "Knowledge Base Creation",
      "Prompt Engineering",
      "Voice & Visual Integration",
      "Testing & Optimization",
    ],
    gallery: [
      {
        type: "video",
        url: "https://res.cloudinary.com/dv5ic5hc0/video/upload/f_auto,q_auto:good/v1780435095/hyper_realistic_ai_influncer_ozjcn5.mp4",
        thumbnail:
          "https://res.cloudinary.com/dv5ic5hc0/video/upload/v1780435095/hyper_realistic_ai_influncer_ozjcn5.jpg",
      },
    ],
    techStack: ["ChatGPT", "Midjourney", "Runway", "ElevenLabs"],
  },
  {
    slug: "ai-commercial-video",
    title: "Premium AI Influencer",
    category: "AI Commercial",
    description:
      "AI character brought to life with cinematic backgrounds and natural lip sync animation.",
    overview:
      "Creating a high-end commercial video featuring an AI character in a cinematic setting.",
    challenge:
      "Achieving natural lip sync animation and seamless background integration.",
    process: [
      { title: "Animation", description: "Lip sync and motion refinement." },
      {
        title: "Compositing",
        description: "Cinematic background integration.",
      },
    ],
    deliverables: ["Video Editing", "Motion Graphics"],
    gallery: [
      {
        type: "video",
        url: "https://res.cloudinary.com/dv5ic5hc0/video/upload/f_auto,q_auto:good/v1780435112/ai_influncer_dejba4.mp4",
        thumbnail:
          "https://res.cloudinary.com/dv5ic5hc0/video/upload/v1780435112/ai_influncer_dejba4.jpg",
      },
    ],
    techStack: ["Runway", "Premiere Pro", "After Effects"],
  },
  {
    slug: "brand-promo",
    title: "Raw to Final Edit",
    category: "Video Editing",
    description:
      "Unedited raw footage transformed into a scroll-stopping final edit with color grading and motion.",
    overview: "Transforming raw footage into a professional promo video.",
    challenge: "Optimizing pace and color grading for engagement.",
    process: [
      { title: "Editing", description: "Pacing and narrative structuring." },
      { title: "Color Grading", description: "Enhancing visuals." },
    ],
    deliverables: ["Color Grading", "Voice Generation"],
    gallery: [
      {
        type: "video",
        url: "https://res.cloudinary.com/dv5ic5hc0/video/upload/f_auto,q_auto:good/v1780435117/reel_edit_houhl1.mp4",
        thumbnail:
          "https://res.cloudinary.com/dv5ic5hc0/video/upload/v1780435117/reel_edit_houhl1.jpg",
      },
    ],
    techStack: ["Premiere Pro", "Photoshop"],
  },
  {
    slug: "ai-generated-lifestyle-ad",
    title: "AI-Generated Lifestyle Ad",
    category: "AI Production",
    description: "End-to-end AI character workflow for FMCG product marketing.",
    overview:
      "A fully AI-generated product advertisement for 'Organic and Pure Multi Grain Flour'. The creative approach is a day-in-the-life lifestyle narrative built around a consistent AI character, replacing real-world talent, location shoots, and product photography with AI-generated equivalents.",
    challenge:
      "Maintaining character consistency across scenes, achieving photorealistic motion without artifacts, ensuring cultural authenticity, and compressing a complex narrative into 18 seconds.",
    process: [
      {
        title: "Character Design",
        description:
          "Designing and locking a base character for consistent visual identity.",
      },
      {
        title: "Scene Generation",
        description:
          "Generating diverse scenes (outdoor/office) with consistent lighting and props.",
      },
      {
        title: "Voice & Overlay",
        description: "Generating narration and adding branded motion graphics.",
      },
    ],
    deliverables: [
      "Platform-ready vertical ad",
      "Reusable AI brand character",
      "AI product photography integration",
      "Animated subtitle layer",
      "CTA end card",
    ],
    gallery: [
      {
        type: "video",
        url: "https://res.cloudinary.com/dv5ic5hc0/video/upload/f_auto,q_auto:good/v1780435115/ai_character_editing_wxh13e.mp4",
        thumbnail:
          "https://res.cloudinary.com/dv5ic5hc0/video/upload/f_auto,q_auto:good/v1780435115/ai_character_editing_wxh13e.jpg",
      },
    ],
    techStack: [
      "Midjourney",
      "Runway",
      "Pika Labs",
      "ElevenLabs",
      "Adobe Premiere Pro",
      "Adobe Photoshop",
    ],
  },
  {
    slug: "ai-character-concept",
    title: "AI Character Concept",
    category: "AI Production",
    description:
      "A professional AI character design package for a luxury fashion model.",
    overview:
      "This is a professional AI character design package for a fictional luxury fashion model — a complete brand-shoot-ready asset set built without any real-world photography or talent. The project consists of three distinct deliverables: a hero character render, a comprehensive character design & breakdown document, and a multi-angle reference sheet.",
    challenge:
      "Maintaining 360° identity consistency, achieving proportional accuracy, and ensuring fashion-grade fabric realism while managing professional document layout.",
    process: [
      {
        title: "Sketch-to-render",
        description:
          "Developing a concept sketch phase before photorealistic output.",
      },
      {
        title: "Identity Seeding",
        description: "Ensuring 360° consistency across all character angles.",
      },
      {
        title: "Document Layout",
        description:
          "Assembling measurements and callouts into a cohesive reference document.",
      },
    ],
    deliverables: [
      "Hero character render",
      "Character design & breakdown document",
      "4-angle reference sheet",
      "Full-sketch illustration set",
      "Color palette & mood definition",
    ],
    gallery: [
      {
        type: "image",
        url: "https://res.cloudinary.com/dv5ic5hc0/image/upload/v1780435129/character_gwf9on.jpg",
      },
      {
        type: "image",
        url: "https://res.cloudinary.com/dv5ic5hc0/image/upload/v1780435153/diffrent_form_of_character_yj5gib.jpg",
      },
      {
        type: "image",
        url: "https://res.cloudinary.com/dv5ic5hc0/image/upload/v1780435141/charcter_design_and_breakdown_ivnxsv.jpg",
      },
    ],
    techStack: [
      "Midjourney v6",
      "Stable Diffusion XL",
      "ComfyUI",
      "Procreate",
      "Figma",
      "Adobe Photoshop",
    ],
  },
  {
    slug: "adobe-reel-edit",
    title: "Adobe Reel Edit",
    category: "Video Production",
    description:
      "Professional reel editing focusing on seamless transitions and brand alignment.",
    overview:
      "This project involved creating a high-impact reel for Adobe, focusing on showcasing creative workflows and professional editing techniques through dynamic visual storytelling.",
    challenge:
      "Maintaining a fast-paced narrative while ensuring all key creative features were clearly demonstrated.",
    process: [
      {
        title: "Storyboarding",
        description: "Mapping out the flow of the reel for maximum impact.",
      },
      {
        title: "Editing & Transitions",
        description:
          "Executing seamless cuts and transitions between key creative features.",
      },
    ],
    deliverables: [
      "Professional promotional reel",
      "Social media optimized edit",
    ],
    gallery: [
      {
        type: "video",
        url: "https://res.cloudinary.com/dv5ic5hc0/video/upload/f_auto,q_auto:good/v1780435118/adobe_reel_edit_aelfdl.mp4",
        thumbnail:
          "https://res.cloudinary.com/dv5ic5hc0/video/upload/f_auto,q_auto:good/v1780435118/adobe_reel_edit_aelfdl.jpg",
      },
    ],
    techStack: ["Adobe Premiere Pro", "Adobe After Effects"],
  },
];
