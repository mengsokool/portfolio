import { Project } from '@/types/project';
import Link from 'next/link';

const ProjectCard = ({ project } : { project: Project }) => {
  return (
    <div 
      className={`bg-white border rounded-lg p-4 ${project.link ? 'hover:bg-gray-100 cursor-pointer' : ''}`}
    >
      {project.link ? (
        <Link 
          href={project.link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="block"
        >
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
          <div className="mt-2 text-blue-600 text-sm">
            คลิกเพื่อดูรายละเอียด
          </div>
        </Link>
      ) : (
        <>
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
        </>
      )}
    </div>
  );
};

export default ProjectCard;