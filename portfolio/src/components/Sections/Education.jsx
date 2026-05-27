import Section from '../UI/Section';
import { educationData } from '../../data/education';

export default function Education() {
  return (
    <Section
      id="education"
      title="Education"
      subtitle="B.S. in Computer Science and Applied Mathematics (Expected 2027) at The College of New Jersey"
    >
      <div className="relative overflow-hidden rounded-xl border border-glass-border bg-glass-bg p-8 shadow-primary backdrop-blur-md">
        <h3 className="mb-8 text-center font-space-grotesk text-2xl font-bold text-primary">
          Relevant Coursework
        </h3>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {educationData.map((course, index) => (
            <div
              key={index}
              className="rounded-lg border border-glass-border bg-[rgba(25,27,60,0.7)] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-[rgba(30,32,68,0.85)] hover:shadow-secondary"
            >
              <h4 className="mb-2 font-space-grotesk text-xl font-bold text-primary">
                {course.code}
              </h4>
              <p className="text-text-secondary">{course.title}</p>
              {course.link && (
                <a
                  href={course.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-primary transition-colors hover:text-text-primary"
                >
                  Course Details →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
