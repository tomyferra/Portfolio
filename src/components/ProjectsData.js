import { v4 as uuidv4 } from 'uuid';

export const ProjectsData = [
{
  name: 'Crypto Converter',
  summary: 'This is a project where you input an amount of BTC and ig tives you the equivalence in other coins as well as the total price',
  url: 'https://tomyferra.github.io/cryptoconverter/',
  urlgithub: 'https://github.com/tomyferra/cryptoconverter',
  id: uuidv4()
},
{
  name: 'WineMe',
  summary: `This web app lets users rate wines from Argentina based on personal preferences. The wine list comes from a constantly updated MongoDB database, and the app provides wine details, such as origin and grape variety. Users can explore the list and rate wines via an easy-to-use interface.`,
  url: 'https://tomyferra.github.io/wineapp/',
  urlgithub: 'https://github.com/tomyferra/wineapp',
  id: uuidv4()
},
{
  name: '[Site in construction] Futbol Argentino',
  summary: 'This is a simple game where you can try guessing which team has the biggest stadium.',
  url: 'https://futbolargentino.onrender.com',
  urlgithub: 'https://github.com/tomyferra/FutbolArgentino/',
  id: uuidv4()
},

];