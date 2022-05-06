function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
// Escreva seu código abaixo.

// exercício 1 - Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione como filhos/filhas da tag <ul> com ID "days"
    const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

    function createDaysOfTheMonth() {
        let daysList = document.getElementById('days');
      
        for (let index = 0; index < dezDaysList.length; index += 1) {
          let day = dezDaysList[index];
          let dayItem = document.createElement('li');
      
          if (day === 24 | day === 31) {
            dayItem.className = 'day holiday';
            dayItem.innerHTML = day;
            daysList.appendChild(dayItem);
          } else if (day === 4 | day === 11 | day === 18) {
            dayItem.className = 'day friday';
            dayItem.innerHTML = day;
            daysList.appendChild(dayItem);
          } else if (day === 25) {
            dayItem.className = 'day holiday friday';
            dayItem.innerHTML = day;
            daysList.appendChild(dayItem);
          } else {
            dayItem.innerHTML = day;
            dayItem.className = 'day';
            daysList.appendChild(dayItem);
          }
        };
      };
      createDaysOfTheMonth();

// exercício 2 - Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados"
    function createButton(buttonName) {
      let divButtonsContainer = document.getElementsByClassName('buttons-container')[0];
      let button = document.createElement('button')
      button.id = 'btn-holiday'
      button.innerText = buttonName
      divButtonsContainer.appendChild(button);
    };
    createButton('Feriados');