function dispayHighscore(highscore){    
    highscore.forEach(element => {
        console.log(element);
        const name = document.createElement("h1");
        const score = document.createElement("h1");
        document.body.append(name);
        document.body.append(score);
        name.innerText = element.name;
        score.innerText = element.score;
    });
    return highscore;
}

export{dispayHighscore};