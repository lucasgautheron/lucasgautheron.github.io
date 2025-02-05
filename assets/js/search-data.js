// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications-amp-talks",
          title: "publications &amp; talks",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "Teaching materials I created or contributed to.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-la-démocratie-comme-machine-épistémique-comprendre-la-prospérité-d-39-athènes",
      
        title: "La démocratie comme machine épistémique: comprendre la prospérité d&#39;Athènes",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/posts/2022/09/epistemic-democracy/";
        
      },
    },{id: "post-le-nucléaire-39-plus-intermittent-39-que-l-39-éolien",
      
        title: "Le nucléaire, &#39;plus intermittent&#39; que l&#39;éolien?",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/posts/2022/08/eolien-nucleaire-intermittent/";
        
      },
    },{id: "post-notes-on-social-epistemology-essential-readings",
      
        title: "Notes on Social Epistemology: Essential Readings",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2022/social-epistemology-post/";
        
      },
    },{id: "post-l-39-esprit-public-une-émission-privatisée-sur-france-culture",
      
        title: "L&#39;Esprit Public, une émission privatisée sur France Culture",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/posts/2018/05/lesprit-public-une-emission-privatisee-sur-france-culture/";
        
      },
    },{id: "projects-history-of-cosmology",
          title: 'History of Cosmology',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-n-body-simulation-for-the-solar-system",
          title: 'N-body simulation for the solar system',
          description: "An educative program for predicting and visualizing planetary motion",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-rocket-science",
          title: 'Rocket science',
          description: "Automated water-rocket launch-pad",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-optimizing-battery-charge-for-reduced-carbon-dioxyde-emissions",
          title: 'Optimizing battery charge for reduced carbon dioxyde emissions',
          description: "Includes electronics, microcontrollers, system modeling, convex optimization",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-barnes-hut",
          title: 'Barnes-Hut',
          description: "Barnes-Hut algorithm in C++ in real-time with a graphical interface",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-information-foraging",
          title: 'Information foraging',
          description: "MAB foraging.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{
        id: 'social-bluesky',
        title: 'Bluesky',
        section: 'Socials',
        handler: () => {
          window.open("https://bsky.app/profile/lucasgautheron.bsky.social", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6C%75%63%61%73.%67%61%75%74%68%65%72%6F%6E@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/lucasgautheron", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0002-3776-3373# your ORCID ID", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=oyl_rgUAAAAJ", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/lucasgautheron", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
