// Selecting
const quoteText = document.querySelector('.quote');
const quoteBtn = document.querySelector('button');
const authorName = document.querySelector('.author .name');
const soundBtn = document.querySelector('.speech');
const copyBtn = document.querySelector('.copy');
const twitterBtn = document.querySelector('.twitter');

//Random Quote Function
function randomQuote() {
    quoteBtn.classList.add('loading');
    quoteBtn.innerText = 'Loading quote....';
    fetch('https://api.quotable.io/random')
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            quoteText.innerText = data.content;
            authorName.innerText = data.author;
            quoteBtn.innerText = 'Next Quote';
            quoteBtn.classList.remove('loading');
        });
}
// Work On Sound
soundBtn.addEventListener('click', () => {
    speechSynthesis.speak(
        new SpeechSynthesisUtterance(`${quoteText.innerText} by ${authorName.innerText}`)
    );
});

// Work On Copy Button
copyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(quoteText.innerText);
});

// Work On Share On Twitter
twitterBtn.addEventListener('click', () => {
    let tweetURL = `https://twitter.com/intent/tweet?url=${quoteText.innerText}`;
    window.open(tweetURL, '_blank');
});

quoteBtn.addEventListener('click', randomQuote);
