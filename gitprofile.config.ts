// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'geoffreygrossthal', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['geoffreygrossthal/my-project1', 'geoffreygrossthal/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['geoffreygrossthal/LeetCode', 'geoffreygrossthal/Algorithms'], // List of repository names to display. example: ['geoffreygrossthal/my-project1', 'geoffreygrossthal/my-project2']
      },
    },
    external: {
      header: '',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: '',
          description:
            '',
          imageUrl:
            '',
          link: '',
        },
        {
          title: '',
          description:
            '',
          imageUrl:
            '',
          link: '',
        },
      ],
    },  },
  seo: {
    title: 'Portfolio of Geoffrey Grossthal',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'geoffrey-grossthal',
    twitter: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: 'https://geoffreygrossthal.github.io/',
    phone: '',
    email: 'geoffreygrossthal@gmail.com',
  },
  resume: {
    fileUrl:
      '', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'C',
    'C++',
    'C#',
    'Java',
    'Python',
    'Swift',
    'SQL',
    'JavaFX',
    'Swift UI',
    'PostgreSQL',
    'Git',
    'JUnit',
    'HTML',
    'CSS',
  ],
  experiences: [
    {
      company: 'Amazon',
      position: 'Operations Management Intern',
      from: 'May 2024',
      to: 'July 2024',
      companyLink: 'https://www.aboutamazon.com/',
    },
    {
      company: 'Mesa Community College',
      position: 'Computer Science Tutor',
      from: 'August 2022',
      to: 'Present',
      companyLink: 'https://www.mesacc.edu/',
    },
    {
      company: 'Amazon',
      position: 'Operations Management Intern',
      from: 'May 2023',
      to: 'July 2023',
      companyLink: 'https://www.aboutamazon.com/',
    },
  ],
  certifications: [
    {
      name: 'Agile Methodology Job Simulation',
      body: '',
      year: 'June 2024',
      link: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Cognizant/ZZswQd6xGydd758vz_Cognizant_4nrtQu2KwbFihq4s5_1718836386714_completion_certificate.pdf',
    },
  ],
  educations: [
    {
      institution: 'Arizona State University',
      degree: 'Computer Science, B.S.',
      from: '2022',
      to: '2024',
    },
    {
      institution: '',
      degree: '',
      from: '',
      to: '',
    },
  ],
  publications: [
    {
      title: '',
      conferenceName: '',
      journalName: '',
      authors: '',
      link: '',
      description:
        '',
    },
    {
      title: '',
      conferenceName: '',
      journalName: '',
      authors: '',
      link: '',
      description:
        '',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: '', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 0, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'dim',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: ``,

  enablePWA: true,
};

export default CONFIG;
