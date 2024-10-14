
let name = document.querySelector('#name')
let nameOutput = document.querySelector('#name-output')
let nameLength = document.querySelector('#name-length')

name.addEventListener('input', (event) => {
  if (event.target.value) {
    nameOutput.textContent = event.target.value
  }

  nameLength.textContent = event.target.value.length
})


