
const name = document.getElementById('name')
const nameOutput = document.getElementById('name-output')
const nameLength = document.getElementById('name-length')

name.addEventListener('input', (event) => {
  if (event.target.value) {
    nameOutput.textContent = event.target.value
  }

  nameLength.textContent = event.target.value.length
})


