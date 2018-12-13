export default {
  items: [
    {
      title: true,
      name: 'Waifus',
      wrapper: {            // optional wrapper object
        element: '',        // required valid HTML5 element tag
        attributes: {}        // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
      },
      class: ''             // optional class names space delimited list for title item ex: "text-center"
    },
    {
      name: 'Auction',
      url: '/auction',
      icon: 'icon-graph',
      badge: {
        variant: 'info',
        text: 'BETA',
      },
    },
    {
      name: 'Waifus released',
      url: '/waifushistory',
      icon: 'icon-graph',
    },
    {
      title: true,
      name: 'Me',
      wrapper: {
        element: '',
        attributes: {},
      },
    },
    {
      name: 'My waifus',
      url: '/wallet',
      icon: 'icon-lock',
    },
    {
      name: 'History bid',
      url: '/historybid',
      icon: 'icon-lock',
    },
    {
      title: true,
      name: 'Waifuchain',
      wrapper: {
        element: '',
        attributes: {},
      },
    },
    {
      name: 'Roadmap',
      url: '/roadmap',
      icon: 'icon-target',
    },
    {
      name: 'More',
      url: '/icons',
      icon: 'icon-magnifier',
      children: [
        {
          name: 'Waifu Wiki',
          url: 'https://waifu.wiki',
          badge: {
            variant: 'info',
            text: 'NEW',
          },
        },
        {
          url: '/waifubot',
          name: 'WaifuBot',
          badge: {
            variant: 'secondary',
            text: 'SOON'
          },
        },
        {
          url: '/aichatbot',
          name: 'AI chatbot',
          badge: {
            variant: 'secondary',
            text: 'SOON',
          },
        },
      ],
    },
    
  ],
};
