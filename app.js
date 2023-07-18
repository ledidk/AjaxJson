
// function to populate Header

    function populateHeader(obj) {
        const header = document.querySelector('header');
        const myH1 = document.createElement('h1');
        myH1.textContent = obj['reportName'];
        header.appendChild(myH1);

        const myPara = document.createElement('p');
        myPara.textContent = `reportCity: ${obj['reportCity']} // Made On: ${obj['madeOn']}`;
        header.appendChild(myPara);
    }

    // function to populate Rappers

    function populateRappers(obj) {
        const section = document.querySelector('section');
        const heroes = obj['rappers'];

        console.log(heroes)

        for (const hero of heroes) {
            const myArticle = document.createElement('article');
            const myH2 = document.createElement('h2');
            const myPara1 = document.createElement('p');
            const myPara2 = document.createElement('p');
            const myPara3 = document.createElement('p');
            const myList = document.createElement('ul');

            myH2.textContent = hero.name;
            myPara1.textContent = `Secret identity: ${hero.totalAlbums}`;
            myPara2.textContent = `Age: ${hero.age}`;
            myPara3.textContent = 'popularSongs:';
            console.log(hero)

            const superPowers = hero.popularSongs;

            console.log(superPowers)
            for (const power of superPowers) {
                const listItem = document.createElement('li');
                listItem.textContent = power;
                myList.appendChild(listItem);
            }

            myArticle.appendChild(myH2);
            myArticle.appendChild(myPara1);
            myArticle.appendChild(myPara2);
            myArticle.appendChild(myPara3);
            myArticle.appendChild(myList);

            section.appendChild(myArticle);
        }
    }


    async function populate() {

     const requestURL = 'rappers.json';

        // const requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';
        const request = new Request(requestURL);

        const response = await fetch(request);
        const superHeroes = await response.json();
        console.log(superHeroes
        )
        populateHeader(superHeroes);
        populateRappers(superHeroes);

    }

    populate()
