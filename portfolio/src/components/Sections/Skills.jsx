import Section from '../UI/Section';
import SkillCategory from '../UI/SkillCategory';
import { skills } from '../../data/skills';

export default function Skills() {
  return (
    <Section
      id="skills"
      title="Skills"
      subtitle="Technical proficiencies developed through academic projects, research, and professional experience"
    >
      <div className="rounded-xl border border-glass-border bg-glass-bg p-8 shadow-primary backdrop-blur-md">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {skills.map((category, index) => (
            <SkillCategory
              key={index}
              title={category.category}
              skills={category.items.map((skill, index) => (
                <div
                  key={index}
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-lg border border-glass-border bg-[rgba(26,30,46,0.5)] px-4 py-2 text-sm font-medium transition-all duration-200"
                >
                  {skill}
                </div>
              ))}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
