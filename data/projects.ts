import { Project } from "@/types/project";

export const projects : Project[] = [
  {
    name: "GearMind",
    description: "เลขาส่วนตัวที่ช่วยจดจำทุกองค์ความรู้ของคุณ มีความแม่นยำ ซื่อสัตย์ และรวดเร็ว",
    technologies: ["Next.js", "LLM", "AI Assistant"],
    link: "https://geworn.cloud",
    coverImage: "/images/projects/gearmind/cover.png"
  },
  {
    name: "คู่หู Charge Point",
    description: "ตัวอย่างการนำปัญญาประดิษฐ์ GearMind ประยุกต์ใช้งานกับ IoT",
    technologies: ["ESP32", "PlatformIO", "IoT"],
    link: "https://geworn.cloud/blog/thamrabbbamrungraksaaechingphyaakrndwy-ai-ngaay/",
    coverImage: "/images/projects/kuuhuu/cover.jpg"
  },
  {
    name: "ทำเว็บบทความด้วย Ghost",
    description: 
      "เว็บบทความที่มีความเร็วสูงและการปรับแต่งง่ายดาย มีความยืดหยุ่นและประสิทธิภาพที่สูง",
    technologies: ["Ghost", "Docker", "Google Compute Engine"],
    link: "https://geworn.cloud/blog/thamrabbbamrungraksaaechingphyaakrndwy-ai-ngaay/",
    coverImage: "/images/projects/ghost-cms/cover.png"
  }  
];
