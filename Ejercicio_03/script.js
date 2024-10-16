const name = document.getElementById('name')
const quote = document.getElementById('quote')
const quoteOutput = document.getElementById('quote-output')

function getquote() {
    if (name.value && quote.value) {
        quoteOutput.textContent = `${name.value} says: "${quote.value}"`
    }
}

