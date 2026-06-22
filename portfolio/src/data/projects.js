export const projects = [
  {
    id: 1,
    title: 'Feedback Memo',
    description:
      'Full-stack feedback aggregation system for ingesting, categorizing, and summarizing feedback across multiple domains.',
    problem:
      'Feedback from multiple sources is scattered and hard to act on systematically without a structured way to organize and analyze it.',
    solution:
      'Built a full-stack app with a FastAPI backend and React frontend, backed by a normalized PostgreSQL schema with aggregation queries for dashboards. Deployed as independent services (Vercel, Render, Neon Postgres) and extending with Gemini API for LLM-based summarization.',
    results:
      'Produces evidence-based insights from aggregated feedback; independent deployment ensures reliability and scalability across components.',
    technologies: ['Python', 'FastAPI', 'React', 'PostgreSQL'],
    image: '/projects/feedback-memo.png',
    link: 'https://github.com/csdoge22/FeedbackMemoSite',
  },
  {
    id: 2,
    title: 'Swar Perfect',
    description:
      'Automated audio-to-video pipeline that generates synchronized lyric videos published to YouTube.',
    problem:
      'Creating lyric videos requires tedious manual synchronization of audio timing with on-screen text.',
    solution:
      'Implemented beat detection and audio segmentation using Librosa to align lyric timing with song structure in a fully automated workflow using FFmpeg for video rendering.',
    results:
      'Produces synchronized lyric videos ready for YouTube publication with no manual timing work.',
    technologies: ['Python', 'Librosa', 'Matplotlib', 'FFmpeg'],
    image: '/projects/swar-perfect.png',
    link: 'https://github.com/sonit-ambashta1',
  },
  {
    id: 3,
    title: 'Task Prioritization Model',
    description:
      'Fine-tuned DistilBERT model that classifies task urgency to help users focus on what matters most.',
    problem:
      'Traditional to-do apps treat all tasks equally; users struggle to identify which tasks are truly urgent without intelligent prioritization.',
    solution:
      'Fine-tuned DistilBERT on 2,000+ labeled task samples and diagnosed misclassifications using confusion matrix analysis to improve dataset balance and reduce false negatives.',
    results:
      'Achieved 86% F1-score on the held-out test set; improved dataset balance measurably reduced false negatives.',
    technologies: ['Python', 'HuggingFace', 'DistilBERT', 'scikit-learn'],
    image: '/projects/task-prioritization.png',
    link: 'https://github.com/csdoge22/RockPebbleStoneSite',
  },
];
