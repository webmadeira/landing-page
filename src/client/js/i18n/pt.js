export default {
  Language: {
    en: 'EN',
    pt: 'PT',
  },
  Headline: {
    title: 'Palestras de desenvolvimento web na Madeira',
    description: 'Uma conferência sem fins lucrativos de 4 horas pela comunidade e para a comunidade sobre o desenvolvimento web',
    location: 'Auditório da Casa do Povo - Serra de Água',
  },
  Info: {
    date: '27 Dez 19h',
    talks: '8 temas',
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
        github: 'https://github.com/mquintal',
      }],
    },
    {
      image: 'atomicdesign.svg',
      theme: 'Atomic PostCSS',
      description: 'Juntando o melhor do Design Atómico e PostCSS. Vamos dar uma visão geral de como criar e manter sistemas de design, permitindo que você desenvolva UIs de alta qualidade e consistentes mais rápido do que nunca.',
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
      image: 'webdesign.png',
      theme: 'Design a pensar no desenvolvimento',
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
      description: 'Porquê Elm? Frameworks e bibliotecas de JavaScript desaparecem e morrem, grandes ferramentas e habilidades adquiridas não!',
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
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      speakers: [{
        author: 'Diogo Cardoso',
        position: 'Senior Front End Developer',
        company: 'Exictos',
        github: 'https://github.com/dpcardoso',
      }],
    },
    {
      image: 'agile.png',
      theme: 'Trabalhando num ambiente ágil',
      description: 'Vamos descobrir o que significa ter uma abordagem ágil no desenvolvimento de software e como podemos entregar o produto certo de forma rápida, fácil e sem erros. No caminho, vamos comparar o ágil com outras mentalidades de desenvolvimento de software e explorar o scrum - uma das frameworks ágeis mais populares.',
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
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      speakers: [{
        author: 'Vítor Camacho',
        position: 'Front End Developer',
        company: 'Exictos',
        github: 'https://github.com/vitorcamachoo',
      }],
    },
  ],
  Sponsors: {
    title: 'Apoios',
  },
}
