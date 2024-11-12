
const quizdata = [
    {
        question: "What does HTML stand for?",
        a: "Hyperlinks and Text Markup Language",
        b:  "Home Tool Markup Language",
        c: "HyperText Markup Language",
        d:  "HyperText Machine Language",
        correct: "c"
    },
    {
        question: "Which HTML element is used to define the title of a document?",
        a: "<title>",
        b: "<head>",
        c: "<meta>",
        d: "<header>",
        correct: "a"
    },
    {
        question: "Which HTML tag is used to display an image?",
        a: "<image>",
        b: "<img>",
        c: "<src>",
        d: "<picture></picture>",
        correct: "b"
    },
    {
        question: "What does CSS stand for?",
        a: "Computer Style Sheets",
        b: "Creative Style Sheets",
        c: "Cascading Style Sheets",
        d: "Colorful Style Sheets",
        correct: "c"
    },
    {
        question: "How do you make text bold in CSS?",
        a: "font-weight: bold;",
        b: "font-style: bold;",
        c: "text-bold: true;",
        d: "text-weight: bold;",
        correct: "a"
    }
];

const quiz = document.getElementById("quiz");
const resultEle = document.getElementById("results");
const question = document.getElementById("question");
const answer = document.querySelectorAll(".answer");
const label = document.querySelectorAll(".opt_label");

const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");

const prevbtn = document.getElementById("prev");
const nextbtn = document.getElementById("next");
const submitbtn = document.getElementById("submit");
const scoreEle = document.getElementById("score");
const reloadbtn = document.getElementById("reload");

let currentQue = 0;
let answered = 0;
let submitted = false;
const userSelected = [];

loadQuest();

function loadQuest() {
    question.innerText = quizdata[currentQue].question;
    a_text.innerText = quizdata[currentQue].a;
    b_text.innerText = quizdata[currentQue].b;
    c_text.innerText = quizdata[currentQue].c;
    d_text.innerText = quizdata[currentQue].d;
    deselectanswer();

    if (userSelected[currentQue] !== undefined) {
        let selected = userSelected[currentQue];
        let selectedElement = document.getElementById(selected);
        if (selectedElement) {
            selectedElement.checked = true;
        }
    }

    if (currentQue === quizdata.length - 1) {
        nextbtn.style.display = "none";
        submitbtn.style.display = "block";
    }

    if (submitted) {
        let actualAns = quizdata[currentQue].correct;
        let userinput = userSelected[currentQue];
        label.forEach((label) => {
            label.classList.remove('correct');
            label.classList.remove('wrong');
        });

        if (actualAns === userinput) {
            let opt = actualAns + "_text";
            document.getElementById(opt).classList.add('correct');
        } else {
            let correctOpt = actualAns + "_text";
            document.getElementById(correctOpt).classList.add('correct');
            let wrongOpt = userinput + "_text";
            document.getElementById(wrongOpt).classList.add('wrong');
        }
    }
}

function deselectanswer() {
    answer.forEach((res) => {
        res.checked = false;
    });
}

function getanswer() {
    let result;
    answer.forEach((res) => {
        if (res.checked) {
            result = res.id;
            userSelected[currentQue] = result;
        }
    });
    return result;
}

nextbtn.addEventListener('click', () => {
    let selectedAnswer = getanswer();
    if (!submitted) {
        if (selectedAnswer) {
            if (selectedAnswer === quizdata[currentQue].correct) {
                answered++;
            }
            currentQue++;
        } else {
            alert("Please select an option to proceed.");
        }

        if (currentQue < quizdata.length) {
            loadQuest();
        }
    } else {
        currentQue++;
        loadQuest();
    }
});

prevbtn.addEventListener('click', () => {
    if (currentQue > 0) {
        currentQue--;
        loadQuest();
    }
});

submitbtn.addEventListener('click', () => {
    let selectedAnswer = getanswer();
    if (selectedAnswer === quizdata[currentQue].correct) {
        answered++;
    }

    submitted = true;
    quiz.style.display = "none";
    resultEle.style.display = "block";

    scoreEle.innerText = "Your Score: " + answered + "/" + quizdata.length;
    scoreEle.style.color = "Green";
    scoreEle.style.fontWeight = "bold";

    reloadbtn.style.display = "block";  // Show the reload button after submission
});

reloadbtn.addEventListener('click', function() {
    location.reload();  // Reload the page
});

function showAnswer() {
    currentQue = 0;
    quiz.style.display = "block";
    resultEle.style.display = "none";

    // Disable answer options
    answer.forEach((res) => {
        res.disabled = true;
    });

    submitbtn.style.display = "none";
    nextbtn.style.display = "block";
    loadQuest();
}
