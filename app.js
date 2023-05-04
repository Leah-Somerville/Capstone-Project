// Getting HTML elements

// Subject Buttons
const currentEvents = document.querySelector(`#current-events`);
const skillsInfo = document.querySelector(`#skills-info`);
const math = document.querySelector(`#math`);
// Flashcard
const form = document.querySelector(`form`);
const flashcard = document.querySelector(`#flashcard`);

const buzzer = document.querySelector(`#submit`);

// Creating variable to keep up with the number of questions
let questionNum = 0;

// Question Objects
const currentEventQuestions = [
    [`What day did Russian troops invade Ukraine? Enter in month, day, year`, `February, 24, 2022`],
    [`In January of 2023, South Carolina attorney, Alex Murdaugh, was found guilty of murder, on how many counts?`, `2`],
    [`On June 24, 2022, an infamous United State Supreme Court case was repealed, causing protest and outrage across the US. What was the case?`, `Roe v Wade`]
];

const skillsInfoQuestions = [
    [`In the absence of the president, which office member leads the meeting?`, `Vice President`],
    [`Which office is responsible for keeping track of donations and spending?`, `Treasurer`],
    [`How many total SkillsUSA members are there?`,`372,817`]
]

const mathQuestions = [
    [`Add the figures: 85, 24, 56, 28`, '193'],
    [`What is the slope of the line y = 3/2x + 4`, `3/2`],
    [`What are the zeros of the equation: (3x - 2)(5x + 6)`, `2/3, -6/5`]
]

// Function
function askQuestion(questions){
    // Displays the question number
    const numOfQuestion = document.createElement(`h3`)
    numOfQuestion.innerText = `Question ${questionNum}`
    flashcard.prepend(numOfQuestion);

    // 
    const q = document.createElement(`p`);
    let qNum = Math.floor(Math.random() * questions.length);
    q.innerText = questions[qNum][0];
    console.dir(q.innerText);
    flashcard.append(q);

    setTimeout(() => {
        setTimeout(() => {
            const answer = document.createElement(`p`)
            answer.innerText = `\n${questions[qNum][1]}` ;
            q.append(answer);
        }, 3000);
        setTimeout(() => {
            numOfQuestion.remove();
            q.remove();
        }, 6000);
    }, 3000);
}


// When subject button is clicked
currentEvents.addEventListener(`click`, () => {
    questionNum++;
    askQuestion(currentEventQuestions);
})
skillsInfo.addEventListener(`click`, () => {
    questionNum++;
    askQuestion(skillsInfoQuestions);
})
math.addEventListener(`click`, () => {
    questionNum++;
    askQuestion(mathQuestions);
})