import { ContactChannel } from "@/types/contact-channel";
import { Facebook, Github, Mail, MessageCircle } from "lucide-react";

export const contactChannels: ContactChannel [] = [
    {
      icon: Facebook,
      name: "Facebook",
      link: "https://facebook.com/yourusername",
    },
    {
      icon: Mail,
      name: "Email",
      link: "mailto:youremail@example.com",
    },
    {
      icon: MessageCircle,
      name: "Line",
      link: "https://line.me/ti/p/yourlineid",
    },
    {
      icon: Github,
      name: "GitHub",
      link: "https://github.com/yourusername",
    },
  ];
