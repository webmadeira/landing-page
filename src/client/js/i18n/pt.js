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
    talks: '7 temas',
  },
  Topics: [  // TODO: Use the same structure for all translations and extract the fields that aren't multilanguage (eg: image)
    {
      image: 'angular.png',
      theme: 'Angular Universal',
      description: 'Vamos ver como é simples construir uma aplicação isomórfica usando o Angular Universal e como pode melhorar o desempenho da aplicação.',
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
      image: 'elasticsearch.png',
      theme: 'Elastic Stack',
      description: 'Elastic Stack (antigo ELK) é um grupo de produtos open source da Elastic Team, projetado para ajudar os utilizadores a extrair dados de qualquer origem em qualquer formato e pesquisar, analisar e visualizar de forma sofisticada os dados em tempo real. Elastic Stack começa no Filebeat e termina no Kibana. O que está a meio? Você vai descobri-lo no próximo dia 27 de dezembro.',
      speakers: [{
        author: 'Cristian Gonçalves',
        position: 'Back End Developer',
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
      theme: 'React',
      description: 'Vamos fazer uma viagem sobre React, uma biblioteca declarativa e baseada em componentes para a construção de interfaces.',
      speakers: [{
        author: 'Diogo Cardoso',
        position: 'Front End Developer',
        company: 'Exictos',
        github: 'https://github.com/dpcardoso',
      }],
    },
    {
      image: 'react-not-needed.svg',
      theme: 'Não preciso de React',
      description: 'Componentes web, DOM virtual e estruturas de dados imutáveis',
      speakers: [{
        author: 'André Gonçalves',
        position: 'Web Dev Consultant',
        company: 'Freelancer',
        github: 'https://github.com/andregoncalves',
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
      description: 'Estás cansado de perder tempo a gerir os recursos das tuas aplicações? Webpack está aqui para o resgate!',
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
