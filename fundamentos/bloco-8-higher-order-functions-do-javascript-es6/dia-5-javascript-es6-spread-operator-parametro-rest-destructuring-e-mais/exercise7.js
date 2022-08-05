// 7 - Escreva uma função shipLength que, dado um objeto representando um navio, retorna o comprimento dele,
// mostrando também a devida unidade de comprimento:

const ships = [
    {
      name: 'Titanic',
      length: 269.1,
      measurementUnit: 'meters',
    },
    {
      name: 'Queen Mary 2',
      length: 1132,
      measurementUnit: 'feet',
    },
    {
      name: 'Yamato',
      length: 256,
      measurementUnit: 'meters',
    },
  ];
  
  // escreva shipLength abaixo
const shipLength = ({name, length, measurementUnit}) => 
    `${name} is ${length} ${measurementUnit} long`
