const questions = ["what is the 1", 
                    "what is the 2", 
                    "what is the 3"];

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
let coor = 0;

next.style.display = "none";
divButons.style.display = "none";
back.style.display = "none";

start.addEventListener("click", startQuiz);
next.addEventListener("click", nextQuestions);
back.addEventListener("click", backQuestion);




function startQuiz(){
    while (yourAnswers.length > 0) {
        yourAnswers.pop();
    }
    console.log(yourAnswers);
    start.style.display ="none";
    next.style.display = "block";
    divButons.style.display = "block";
    back.style.display = "block"
    nextQuestions();
}



 
 function result() {
     question.innerText = "you score is" + yourAnswers.length*100
     divButons.style.display = "none";
     start.style.display= "block";
     back.style.display = "none";
     next.style.display = "none";
 }

function nextQuestions(){
    let i = 0;
    question.innerText = questions[index];
        buttons.forEach(element => {
            if (index < questions.length ) {
                 element.innerText = answers[index][i];
                i++;
            }else{
                result();
            }

        });
    if(index < questions.length){
        index++;
    }else{
        index = 0
    }
    console.log(index);
}

count();

function count(){
    let i = 0;
    buttons.forEach(e => {
        e.addEventListener("click", function(){
            yourAnw = e.innerText;
            console.log("this wwhat I touche" + e.innerText);
            if(e.innerText == currectanwers[index -1]  && e.innerText !== yourAnswers[index -1]){
                yourAnswers.push(e.innerText)
                console.log("your answwer is correct");
                console.log(yourAnswers)
                
            }
        });
    });
}


function backQuestion() {
    let i = 0;
    index--;

    yourAnswers.pop();
    count()

    if (index == 0) {
        startQuiz();
    }
    
    question.innerText = questions[index-1];
    buttons.forEach(element => { 
            element.innerText = answers[index-1][i];
        i++;       
    });


}




    
