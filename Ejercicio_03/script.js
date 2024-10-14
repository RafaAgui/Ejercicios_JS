let name = document.getElementById('name')
let quote = document.getElementById('quote')
let quoteOutput = document.getElementById('quote-output')

function getquote() {
    if (name.value && quote.value) {
        quoteOutput.textContent = `${name.value} says: "${quote.value}"`
    }
}

