const promptFrame = document.querySelector('#prompts');
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
]

function make(item) { return document.createElement(item.toString()); }

for (let section of prompts) {
    let column = make('section');
    column.classList.add('container', 'vertical')
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
    console.log(e.submitter.value);
})
