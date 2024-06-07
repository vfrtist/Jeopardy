const promptFrame = document.querySelector('#prompts');
class player {
    constructor(item) {
        this.display = item.querySelector('.score');
        this.score = 0;
    }
    addScore(points) {
        this.score += parseInt(points);
        this.display.innerText = `${this.score} pt`;
    }
}
const p1 = new player(document.querySelector('#player1'));
const p2 = new player(document.querySelector('#player2'));
const prompts = [{
    title: 'Section 1',
    prompts: ['a', 'b', 'c', 'd', 'e']
},
{
    title: 'Section 2',
    prompts: ['a', 'b', 'c', 'd', 'e']
},
{
    title: 'Section 3',
    prompts: ['a', 'b', 'c', 'd', 'e']
},
{
    title: 'Section 4',
    prompts: ['a', 'b', 'c', 'd', 'e']
},
{
    title: 'Section 5',
    prompts: ['a', 'b', 'c', 'd', 'e']
},
];

function make(item) { return document.createElement(item.toString()); }

for (let section of prompts) {
    let column = make('section');
    column.classList.add('container', 'vertical')
    let title = make('h2')
    title.innerText = section.title
    title.classList.add('title')
    column.append(title)
    promptFrame.append(column)
    for (const [index, card] of section.prompts.entries()) {
        let promptCard = make('button');
        promptCard.classList.add('prompt');
        const score = (index + 1) * 100;
        promptCard.innerText = score;
        promptCard.value = score;
        promptCard.type = 'submit';
        column.append(promptCard);
    }
}

promptFrame.addEventListener('submit', (e) => {
    e.preventDefault();
    p1.addScore(e.submitter.value);
    e.submitter.classList.add('inactive')
})
