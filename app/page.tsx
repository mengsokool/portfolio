"use client";

import Image from "next/image";
import {
  Code,
  Laptop,
  Mail,
} from "lucide-react";
import ProjectCard from "@/components/project-card";
import { projects } from "@/data/projects";
import { skills } from "@/data/skills";
import { contactChannels } from "@/data/contact-chanels";
import GridPattern from "@/components/ui/grid-pattern";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <main className="relative">
      {/* Profile Cover */}
      <div className="relative h-48 w-full">
        <div className="object-cover bg-gradient-to-b from-violet-500/50 to-transparent w-full h-full" />
        <GridPattern
          width={20}
          height={20}
          x={-1}
          y={-1}
          className={cn(
            "[mask-image:linear-gradient(to_bottom,white,transparent,transparent)] "
          )}
        />
      </div>

      <div className="container mx-auto max-w-4xl px-4 py-8 relative">
        {/* Profile Picture - positioned to overlap cover */}
        <div className="absolute -top-16 md:-top-20 left-4">
          <Image
            alt="เม้ง"
            src="/images/meng.png"
            width={150}
            height={150}
            className="rounded-full border-4 border-white size-32 md:size-40"
          />
        </div>

        {/* Content shifted to accommodate profile picture */}
        <section className="flex gap-8 mb-12 flex-col mt-20 md:mt-24">
          <div>
            <h1 className="text-3xl font-bold">สวัสดี! ผมชื่อเหม่ง 👋</h1>
            <p className="text-xl text-gray-600">Software Developer</p>
          </div>
        </section>

        <section className="mb-12">
          <p className="md:text-lg text-neutral-800">
            ผมเข้าใจว่าการเขียนโค้ดอาจจะเป็นเรื่องที่ท้าทายและซับซ้อนตั้งแต่เริ่มต้น
            แต่ผมพร้อมที่จะเรียนรู้และเผชิญกับทุกความท้าทายที่มาพร้อมกับการพัฒนาทักษะในการเขียนโค้ด
            ผมเชื่อว่าการเรียนรู้เป็นระยะเวลายาวนานและการฝึกฝนอย่างต่อเนื่องเป็นสิ่งสำคัญที่จะทำให้เราเติบโตและเป็นมืออาชีพที่เก่งในอนาคต
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 flex items-center">
            <Code className="mr-2" /> ทักษะ
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {skills.map((skill) => (
              <div key={skill.name} className="bg-white border p-4 rounded-lg">
                <h3 className="font-medium line-clamp-1">{skill.name}</h3>
                <p className="text-sm text-gray-600 line-clamp-1">
                  {skill.level}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 flex items-center">
            <Laptop className="mr-2" /> โปรเจ็คที่ผ่านมา
          </h2>
          <div className="space-y-4">
            {projects.map((project) => (
              <div key={project.name}>
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold mb-4 flex items-center">
            <Mail className="mr-2" /> ช่องทางการติดต่อ
          </h2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {contactChannels.map((channel) => (
              <a
                key={channel.name}
                href={channel.link}
                target="_blank"
                rel="noopener noreferrer"
                className="border bg-white p-4 rounded-lg flex items-center justify-center hover:bg-gray-200 transition"
              >
                <channel.icon className="mr-2" />
                <span>{channel.name}</span>
              </a>
            ))}
          </div>
        </section>
      </div>
      <div className="absolute -z-10 bottom-0 left-0 right-0 h-64 w-full">
        <div className="object-cover bg-gradient-to-t from-violet-500/20 to-transparent w-full h-full" />
        <GridPattern
          width={20}
          height={20}
          x={-1}
          y={-1}
          className={cn(
            "[mask-image:linear-gradient(to_top,white,transparent,transparent)] "
          )}
        />
      </div>
    </main>
  );
}
