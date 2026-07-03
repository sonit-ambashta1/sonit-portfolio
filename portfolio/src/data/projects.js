export const projects = [
  {
    id: 1,
    title: 'Feedback Memo',
    description:
      'Full-stack feedback aggregation system for ingesting, categorizing, and summarizing feedback across multiple domains.',
    problem:
      'Feedback from multiple sources is scattered and hard to act on systematically without a structured way to organize and analyze it.',
    solution:
      'Built a full-stack app with a FastAPI backend and React frontend, backed by a normalized PostgreSQL schema with aggregation queries for dashboards. Deployed as independent services (Vercel, Render, Neon Postgres) to separate database, backend, and frontend components.',
    results:
      'Produces evidence-based insights from aggregated feedback; independent deployment ensures reliability and scalability across components.',
    technologies: ['Python', 'FastAPI', 'React', 'PostgreSQL'],
    image: '/projects/feedback-memo.png',
    link: 'https://github.com/csdoge22/FeedbackMemoSite',
  },
  {
    id: 2,
    title: 'CarTools',
    description:
      'An automobile diagnostic intelligence app that uses an On-Board Diagnostics II (OBD2) scanner to inform you about your car\'s data and suggest solutions to any issues.',
    problem:
      'Vehicle diagnostics are often inaccessible to everyday drivers, requiring specialized tools and professional mechanics to interpret engine and system issues. While OBD-II scanners expose large amounts of vehicle telemetry and diagnostic trouble codes (DTCs), the information is rarely presented in a user-friendly or actionable format.',
    solution:
      'Built a vehicle diagnostic platform that connects to an OBD-II scanner and streams real-time car telemetry to a web dashboard using WebSockets. The application aggregates vehicle statistics, visualizes system performance, and retrieves DTC codes to help users identify potential mechanical issues. The design also lays the foundation for AI-assisted diagnostics through Gemini-powered explanations and repair recommendations.',
    results:
      'Successfully integrated OBD-II hardware with a full-stack application despite limited testing opportunities and hardware constraints. Achieved responsive real-time telemetry updates through WebSocket communication. Developed an interactive dashboard that visualizes vehicle health and diagnostic information in a more accessible format than raw scanner outputs. Established a framework for future AI-powered diagnosis and severity assessment of vehicle issues.',
    technologies: ['Python', 'HuggingFace', 'DistilBERT', 'scikit-learn'],
    image: '/projects/task-prioritization.png',
    link: 'https://github.com/csdoge22/RockPebbleStoneSite',
  },
  {
    id: 3,
    title: 'Task Prioritization Model',
    description:
      'Fine-tuned DistilBERT model that classifies task urgency to help users focus on what matters most.',
    problem:
      'Task descriptions often contain cues about urgency, but extracting and prioritizing those signals manually becomes difficult as task volume grows.',
    solution:
      'Fine-tuned DistilBERT on 2,000+ labeled task samples and diagnosed misclassifications using confusion matrix analysis to improve dataset balance and reduce false negatives.',
    results:
      'Achieved 86% F1-score on the held-out test set; improved dataset balance measurably reduced false negatives.',
    technologies: ['Python', 'HuggingFace', 'DistilBERT', 'scikit-learn'],
    image: '/projects/task-prioritization.png',
    link: 'https://github.com/csdoge22/RockPebbleStoneSite',
  },
  {
    id: 4,
    title: 'Swar Perfect',
    description:
      'Automated audio-to-video pipeline that generates synchronized lyric videos published to YouTube.',
    problem:
      'Creating lyric videos requires tedious manual synchronization of audio timing with on-screen text.',
    solution:
      'Implemented beat detection and audio segmentation using Librosa to align lyric timing with song structure in a fully automated workflow using FFmpeg for video rendering.',
    results:
      'Reduced lyric synchronization effort from a fully manual process to a largely automated pipeline, with manual timing corrections needed only for rare alignment anomalies.',
    technologies: ['Python', 'Librosa', 'Matplotlib', 'FFmpeg'],
    image: '/projects/swar-perfect.png',
    link: 'https://github.com/sonit-ambashta1',
  },
];
