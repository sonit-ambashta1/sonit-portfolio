import Section from '../UI/Section';
import TimelineItem from '../UI/TimelineItem';
import { experience } from '../../data/experience';

export default function Experience() {
  return (
    <Section
      id="experience"
      title="Experience"
      subtitle="Professional and research experiences that have shaped my technical and leadership abilities"
    >
      <div className="rounded-xl border border-glass-border bg-glass-bg p-8 shadow-primary backdrop-blur-md">
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute bottom-0 left-1/2 top-0 hidden w-1 -translate-x-1/2 transform bg-gradient-to-b from-primary to-secondary md:block"></div>

          <div className="space-y-8">
            {experience.map((exp, index) => (
              <TimelineItem
                key={index}
                date={exp.date}
                title={exp.title}
                subtitle={exp.organization}
                description={exp.description}
                achievements={exp.achievements}
                isEven={index % 2 === 1}
              />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
