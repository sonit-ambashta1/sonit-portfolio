import Section from '../UI/Section';
import ProjectCard from '../UI/ProjectCard';
import { projects } from '../../data/projects';

export default function Projects() {
  return (
    <Section
      id="projects"
      title="Projects"
      subtitle="A selection of my technical projects showcasing skills in AI, web development, and systems design"
    >
      <div className="rounded-xl border border-glass-border bg-glass-bg p-8 shadow-primary backdrop-blur-md">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              problem={project.problem}
              solution={project.solution}
              results={project.results}
              technologies={project.technologies}
              image={project.image}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
