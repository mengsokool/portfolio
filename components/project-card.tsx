import { Project } from "@/types/project";
import Image from "next/image";
import Link from "next/link";

const ProjectCard = ({ project }: { project: Project }) => {
  const Content = (
    <div
      className={`bg-white border rounded-lg ${
        project.link ? "hover:bg-gray-100 cursor-pointer" : ""
      }`}
    >
      {project.coverImage && (
        <div className="w-full border-b h-auto aspect-video overflow-hidden rounded-lg">
          <Image
            src={project.coverImage}
            alt={project.name}
            quality={60}
            width={1920}
            height={1080}
            className="w-full h-full hover:scale-105 transition-all duration-500 object-cover object-top"
          />
        </div>
      )}
      <div className="p-4">
        <h3 className="font-medium text-lg">{project.name}</h3>
        <p className="text-gray-600 mb-2">{project.description}</p>
        <div className="flex space-x-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );

  return project.link ? (
    <Link href={project.link} target="_blank" rel="noopener noreferrer">
      {Content}
    </Link>
  ) : (
    Content
  );
};

export default ProjectCard;
