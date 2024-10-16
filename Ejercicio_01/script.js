
const name = document.getElementById('name')
const nameOutput = document.getElementById('name-output')

name.addEventListener('input', (event) => {
  if (event.target.value) {
    nameOutput.textContent = event.target.value
  }
})


