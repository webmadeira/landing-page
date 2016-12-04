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
    talks: '8 talks',
  },
  Topics: [  // TODO: Use the same structure for all translations and extract the fields that aren't multilanguage (eg: image)
    {
      image: 'angular.png',
      theme: 'Angular Universal',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      speakers: [{
        author: 'Miguel Quintal',
        position: 'Senior Front End Developer',
        company: 'William Hill',
      }],
    },
    {
      image: 'atomicdesign.svg',
      theme: 'Atomic PostCSS',
      description: 'Joining the best from Atomic Design and PostCSS. Let’s take a overview of how to create and maintain design systems, allowing you to roll out higher quality, more consistent UIs faster than ever before.',
      speakers: [
        {
          author: 'Rodolfo Gonçalves',
          position: 'Front End Developer',
          company: 'Exictos',
        },
        {
          author: 'Rúben Freitas',
          position: 'Front End Developer',
          company: 'EAE',
        },
      ],
    },
    {
      image: 'webdesign.png',
      theme: 'Designing with developer in mind',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      speakers: [{
        author: 'João Camacho',
        position: 'Senior Web Designer',
        company: 'Exictos',
      }],
    },
    {
      image: 'elasticsearch.png',
      theme: 'Elasticsearch',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      speakers: [{
        author: 'Cristian Gonçalves',
        position: 'Senior Web Developer',
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
      }],
    },
    {
      image: 'react.png',
      theme: 'React + Redux',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      speakers: [{
        author: 'Diogo Cardoso',
        position: 'Senior Front End Developer',
        company: 'Exictos',
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
      }],
    },
    {
      image: 'webpack.png',
      theme: 'Webpack',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      speakers: [{
        author: 'Vítor Camacho',
        position: 'Front End Developer',
        company: 'Exictos',
      }],
    },
  ],
  Sponsors: {
    title: 'Sponsors',
  },
}
