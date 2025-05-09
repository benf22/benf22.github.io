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
  },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-talks",
          title: "talks",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/talks/";
          },
        },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
      
        title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
      section: "Posts",
      handler: () => {
        
          window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
        
      },
    },{id: "post-displaying-external-posts-on-your-al-folio-blog",
      
        title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
        
      },
    },{id: "news-i-started-my-ph-d-studies-sparkles-more-to-come-soon-smile",
          title: 'I started my Ph.D studies! :sparkles: More to come, soon… :smile:',
          description: "",
          section: "News",},{id: "news-my-webinar-evaluation-of-ai-models-and-algorithms-was-accepted-to-the-imvc-pre-conferance-webinar-series-see-you-on-march-11-2025",
          title: 'My webinar “Evaluation of AI models and Algorithms” was accepted to the IMVC...',
          description: "",
          section: "News",},{id: "news-my-talk-bringing-ai-to-production-was-accepted-to-imvc-see-you-there-april-1-2025",
          title: 'My talk “Bringing AI to Production” was accepted to IMVC. See you there...',
          description: "",
          section: "News",},{id: "news-my-lecture-from-imvc-2025-bringing-ai-to-production-is-now-live-you-can-now-watch-the-full-video-and-check-out-the-slide-deck-from-the-talk-click-here",
          title: 'My lecture from IMVC 2025, “Bringing AI to Production,” is now live. You...',
          description: "",
          section: "News",},{id: "talks-prosodic-feature-criterion",
          title: 'Prosodic Feature Criterion',
          description: "",
          section: "Talks",handler: () => {
              window.location.href = "/talks/pfc-amazonday/";
            },},{id: "talks-prosodic-feature-criterion",
          title: 'Prosodic Feature Criterion',
          description: "",
          section: "Talks",handler: () => {
              window.location.href = "/talks/pfc-weizman/";
            },},{id: "talks-prosodic-feature-criterion",
          title: 'Prosodic Feature Criterion',
          description: "",
          section: "Talks",handler: () => {
              window.location.href = "/talks/pfc-ee-seminar/";
            },},{id: "talks-panel-about-ai",
          title: 'Panel about AI',
          description: "",
          section: "Talks",handler: () => {
              window.location.href = "/talks/pfc-experts-panel/";
            },},{id: "talks-extracting-multi-modal-insights-from-media-content",
          title: 'Extracting multi-modal insights from media content',
          description: "",
          section: "Talks",handler: () => {
              window.location.href = "/talks/vi-talk/";
            },},{id: "talks-a-bit-of-ai",
          title: 'A Bit of AI',
          description: "",
          section: "Talks",handler: () => {
              window.location.href = "/talks/a-bit-of-ai/";
            },},{id: "talks-evaluation-of-ai-models",
          title: 'Evaluation of AI Models',
          description: "",
          section: "Talks",handler: () => {
              window.location.href = "/talks/imvc-25-webinar/";
            },},{id: "talks-bringing-ai-to-production-intro",
          title: 'Bringing AI to Production - Intro',
          description: "",
          section: "Talks",handler: () => {
              window.location.href = "/talks/imvc-25-ai-to-production/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%62%65%6E%66%32%32@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/benf22", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/ben--fishman", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=Fu7FYe0AAAAJ", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/benfish22", "_blank");
        },
      },];
