const questions = ["what is the 1", 
                    "what is the 2", 
                    "what is the 3",
                    "show result"];

const answers = [['younes', 'anw2', 'anw3','anw4'],
                 ['youssef', '1anw2', '1anw3','1anw4'],
                 ['rajix', '2anw2', '2anw3','2anw4'],
                ];
const currectanwers = ["younes", "youssef", "rajix"];
let yourAnswers = [];












const next = document.getElementById('next');
const buttons = document.querySelectorAll('.btn');
const question = document.querySelector('#title');
const back = document.querySelector('#back');
const start = document.querySelector('#start');
const divButons = document.getElementById('html-answers');

let index = 0;
let yourAnw;
let score = 0;

next.style.display = "none";
divButons.style.display = "none";

start.addEventListener("click", startQuiz);
next.addEventListener("click", nextQuestions);


function startQuiz(){
    start.style.display ="none";
    next.style.display = "block";
    divButons.style.display = "block";
    nextQuestions();

}

function nextQuestions(){
    question.innerText = questions[index];
    let i = 0;
        buttons.forEach(element => {
            element.innerText = answers[index][i];
            i++
        });
        index++;
}
conter()

function conter(){
    let i = 0;
    buttons.forEach(e => {
        e.addEventListener("click", function(){
            yourAnw = e.innerText;
            console.log("this wwhat I touche" + e.innerText);
            if(e.innerText == currectanwers[index -1]  && e.innerText !== yourAnswers[index -1]){
                yourAnswers.push(e.innerText)
                console.log("your answwer is correct");
                console.log("your score " + yourAnswers.length);
            }
        });
    });
}


function showResult (){
    if (next == questions.length) {
        next.innerText = "result";
    }

}





