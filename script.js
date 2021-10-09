fetch('https://icanhazdadjoke.com/slack')
    .then(data => data.json())
    .then(jokeData => {
        const jokeText = jokeData.attachments[0].text;
        const jokeelement = document.getElementById('jokeelement');
        const made = document.getElementById('made');
        jokeelement.innerHTML = jokeText;
    })
