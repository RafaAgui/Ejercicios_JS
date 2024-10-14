
let name = document.querySelector('#name')
let nameOutput = document.querySelector('#name-output')

name.addEventListener('input', (event) => {
  if (event.target.value) {
    nameOutput.textContent = event.target.value
  }
})


