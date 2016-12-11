export default {
  Language: {
    en: 'EN',
    pt: 'PT',
  },
  Headline: {
    title: 'Web development talks in Madeira',
    description: 'A 4-hours not-for-profit by-the-community and for-the-community conference about web development',
    location: 'Meetings House Auditorium - Serra de Água',
  },
  Info: {
    date: '27 Dez 19h',
    talks: '7 talks',
  },
  Topics: [  // TODO: Use the same structure for all translations and extract the fields that aren't multilanguage (eg: image)
    {
      image: 'angular.png',
      theme: 'Angular Universal',
      description: 'Let\'s see how simple is to build an isomorphic application using Angular Universal and how can you boost your application performance.',
      speakers: [{
        author: 'Miguel Quintal',
        position: 'Front End Developer',
        company: 'William Hill',
        github: 'https://github.com/mquintal',
      }],
    },
    {
      image: 'atomicdesign.svg',
      theme: 'Atomic PostCSS',
      description: 'Joining the best from Atomic Design and PostCSS. Let’s take an overview of how to create and maintain design systems, allowing you to roll out higher quality, more consistent UIs faster than ever before.',
      speakers: [
        {
          author: 'Rodolfo Gonçalves',
          position: 'Front End Developer',
          company: 'Exictos',
          github: 'https://github.com/OrencioRodolfo',
        },
        {
          author: 'Rúben Freitas',
          position: 'Front End Developer',
          company: 'EAE',
          github: 'https://github.com/reabreu',
        },
      ],
    },
    {
      image: 'elasticsearch.png',
      theme: 'Elastic Stack',
      description: 'Elastic Stack (former ELK) is a group of open source products from Elastic Team, designed to help users take data from any type of source in any format and search, analyze, and visualize in a fancy way that data in real time. Elastic Stack starts with Filebeat and ends on Kibana. What is on between? You\'ll find it next December 27th.',
      speakers: [{
        author: 'Cristian Gonçalves',
        position: 'Web Developer',
        company: 'Exictos',
      }],
    },
    {
      image: 'elm-lang.png',
      theme: 'Elm + Functional Programming',
      description: 'Why elm? JavaScript frameworks & libs fade and die, great tools and acquired skills don’t!',
      speakers: [{
        author: 'Diogo Santos',
        position: 'Front End Developer',
        company: 'Exictos',
        github: 'https://github.com/daspinola',
      }],
    },
    {
      image: 'react.png',
      theme: 'React + Redux',
      description: 'Let\'s take a journey into React and Redux, a declarative and component-based library for building user interfaces and a predictable state container for JavaScript apps. Along the way we\'ll learn what\'s so great about these tools and meet the rest of the ecosystem.',
      speakers: [{
        author: 'Diogo Cardoso',
        position: 'Front End Developer',
        company: 'Exictos',
        github: 'https://github.com/dpcardoso',
      }],
    },
    {
      image: 'react-not-needed.svg',
      theme: 'React not needed',
      description: 'Web components, virtual DOM and immutable data structures',
      speakers: [{
        author: 'André Gonçalves',
        position: 'Web Dev Consultant',
        company: 'Freelancer',
        github: 'https://github.com/andregoncalves',
      }],
    },
    {
      image: 'agile.png',
      theme: 'Working in an agile environment',
      description: 'Let’s find out what it means to have an agile approach in software development and how can we deliver the right product quickly, easily and bug free. In the way, we’ll compare agile with other software development mindsets and explore scrum - one of the most popular agile frameworks.',
      speakers: [{
        author: 'Aurélio Pita',
        position: 'Front End Developer',
        company: 'Blip',
        github: 'https://github.com/jaapaurelio',
      }],
    },
    {
      image: 'webpack.png',
      theme: 'Webpack',
      description: 'Are you tired of losing time managing your applications assets? Webpack is here for the rescue!',
      speakers: [{
        author: 'Vítor Camacho',
        position: 'Front End Developer',
        company: 'Exictos',
        github: 'https://github.com/vitorcamachoo',
      }],
    },
  ],
  Sponsors: {
    title: 'Sponsors',
  },
}
