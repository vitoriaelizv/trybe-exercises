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
      let button = document.createElement('button');
      button.id = 'btn-holiday';
      button.innerText = buttonName;
      divButtonsContainer.appendChild(button);
    };
    createButton('Feriados');

// exercício 3 - Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday"
    function displayHolidays() {
      let getHolidayButton = document.querySelector('#btn-holiday');
      let getHolidays = document.querySelectorAll('.holiday')
      let backgroundColor = 'rgb(238,238,238)';
      let setNewColor = 'white';
      
      getHolidayButton.addEventListener('click', function() {
      for (let index = 0; index < getHolidays.length; index += 1) {
        if (getHolidays[index].style.backgroundColor === setNewColor) {
          getHolidays[index].style.backgroundColor = backgroundColor;
        } else {
          getHolidays[index].style.backgroundColor = setNewColor;
        };
      };
      });
      };
      displayHolidays();

  // exercícios 4 - Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um botão com o nome "Sexta-feira"
      function createButton2(string) {
        let divButtonsContainer = document.getElementsByClassName('buttons-container')[0]
        let fridayButton = document.createElement('button');
        fridayButton.id = 'btn-friday';
        fridayButton.innerText = string;
        divButtonsContainer.appendChild(fridayButton);
      };
      createButton2('Sexta-feira');

// exercício 5 - Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica o texto exibido nos dias que são Sexta-feira
    function displayFridays(fridaysArray) {
      let getFridayButton = document.querySelector('#btn-friday')
      let fridays = document.getElementsByClassName('friday')
      let newFridayText = 'SEXTOU o/'

      getFridayButton.addEventListener('click', function() {
      for (let index = 0; index < fridays.length; index += 1) {
      if (fridays[index].innerHTML !== newFridayText) {
          fridays[index].innerHTML = newFridayText;
      } else {
          fridays[index].innerHTML = fridaysArray[index];
          };
      };
      });
    };

    let dezFridays = [ 4, 11, 18, 25 ];
    displayFridays(dezFridays);

// exercício 6 - Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original
    function dayMouseOver() {
      let days = document.querySelector('#days');
      
      days.addEventListener('mouseover', function(event) {
        event.target.style.fontSize = '30px';
        event.target.style.fontWeight = '600';
      })
      };
      
      function dayMouseOut() {
      let days = document.querySelector('#days');
      
      days.addEventListener('mouseout', function(event) {
        event.target.style.fontWeight = '200';
        event.target.style.fontSize = '20px';
      })
      };
      
      dayMouseOver();
      dayMouseOut();

// exercício 7 - Implemente uma função que adiciona uma tarefa personalizada ao calendário. A função deve receber como parâmetro a string com o nome da tarefa (ex: "cozinhar") e criar dinamicamente um elemento com a tag <span> contendo a tarefa
    function addtask(tarefa) {
      let = divMyTasks = document.querySelector('.my-tasks');
      let task = document.createElement('span');
      task.innerHTML = tarefa;
      divMyTasks.appendChild(task);
      };
      addtask('cozinhar');

// exercício 8 - Implemente uma função que adiciona uma legenda com cor para a tarefa criada no exercício anterior. Esta função deverá receber como parâmetro uma string ("cor") e criar dinamicamente um elemento de tag <div> com a classe task
    function addTaskColor(color) {
      let = divMyTasks = document.querySelector('.my-tasks');
      let newTask = document.createElement('div');
      newTask.className = 'task';
      newTask.style.backgroundColor = color;
      divMyTasks.appendChild(newTask);
      };
      addTaskColor('green');
  
// exercício 9 - Implemente uma função que adiciona um evento que, ao clicar no elemento com a tag <div> referente a cor da sua tarefa, atribua a este elemento a classe task selected, ou seja, quando sua tarefa possuir a classe task selected, ela estará selecionada
    let newTask = document.querySelector('.task');
    newTask.addEventListener('click', function() {
    if (newTask.className === 'task') {
      newTask.className = 'task selected';
    } else {
      newTask.className = 'task';
    };
    });