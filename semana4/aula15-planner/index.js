function taskCompleted(element) {
  element.innerHTML = `<span class="taskCompleted">${element.innerHTML}</span>`
}

function createTask(task, dayOfWeek, timeOfDay) {
  let fatherContainer = document.getElementById(dayOfWeek)
  let time = document.getElementById(timeOfDay)

  if (time !== null) {
    let container = document.getElementById(`${timeOfDay}-${dayOfWeek}`)
    container.innerHTML += `<p onclick="taskCompleted(this)">${task}</p>`
  } else {
    let title = ''
    if (timeOfDay === '01') { title = 'hora' } else { title = 'horas' }
    fatherContainer.innerHTML += `
      <div value="${timeOfDay}" id="${timeOfDay}" class="time">
        <p>${timeOfDay} ${title}</p>
        <div id="${timeOfDay}-${dayOfWeek}">
          <p onclick="taskCompleted(this)">${task}</p>
        </div>
      </div>`
  }
}

function newTask() {
  let task = document.getElementById('tarefa')

  if (task.value !== '') {
    const dayOfWeek = document.getElementById('dias-semana').value
    const timeOfDay = document.getElementById('horas-dia').value

    createTask(task.value, dayOfWeek, timeOfDay)
    task.value = ''
    task.focus()
  } else {
    alert('Input vazio, digite uma nova tarefa para adicionar ao planer')
  }
}

function clearTask() {
  if (confirm('Deseja realmente apagar todas as tarefas?\nDepios que fizer essa ação não tera como reverte!')) {
    let daysOfWeek = ['domingo', 'segunda', 'terca', 'quarta', 'quinta', 'sexta', 'sabado']

    for (let day of daysOfWeek) {
      let container = document.getElementById(day)
      container.innerHTML = ''
    }
  }
}