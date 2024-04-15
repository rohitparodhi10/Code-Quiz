// quiz questions and answers

const quizData=[
    {
        question:"What does the z-index property in CSS control?",
        options:[
            "Text alignment",
            "Element's stacking order",
            "Font size",
            "Box shadow",
        ],
        correct:1,
    },

    {
        question:"Which of the following CSS selectors has the highest specificity?",
        options:[
            "Class selector",
            "ID selector",
            "Element selector",
            "Universal selector",
        ],
        correct:1,
    },
    {
        question:"What does the clearfix class do in CSS?",
        options:[
            "Clears floats",
            "Adds margins",
            "Centers elements",
            "Sets font color",

        ],
        correct:0,
    },
    {
        question:"What is the difference between display: none; and visibility: hidden;?",
        options:[
            "Both hide elements but display: none; removes the element from the document flow",
            "visibility: hidden; removes the element from the document flow but display: none; does not",
            "Both remove elements from the document flow but in different ways",
            "There is no difference",
        ],
        correct:0,
    },

    {
        question:"Which CSS property is used to create rounded corners on an element?",
        options:[
            "border-radius",
            "border-style",
            "border-width",
            "corner-radius",
        ],
        correct:0,
    },
    {
        question:"What is the purpose of the CSS property overflow: hidden;?",
        options:[
            "Hides the element",
            "Clips the element's content that overflows its box",
            "Creates a shadow effect",
            "Centers the element",
            

        ],
        correct:1,
    },
    {
        question:"Which CSS property is used to change the order of flex items?",
        options:[
            "order",
            "flex-order",
            "flex-direction",
            "flex-ordering",
        ],
        correct:0,
    },
    {
        question:"What does the CSS property position: relative; do?",
        options:[
            "Positions the element relative to its parent",
            "Positions the element relative to the viewport",
            "Positions the element absolutely",
            "Centers the element horizontally",
        ],
        correct:0,
    },
    {
        question:"What is the purpose of the CSS property backface-visibility?",
        options:[
            "Determines if the backface of an element should be visible or not",
            "Sets the background color of an element",
            "Determines the visibility of all child elements",
            "None of the above",
        ],
        correct:0,
    },
    {
        question:"Which CSS property is used to specify the space between cells of a table?",
        options:[
            "table-spacing",
            "cell-padding",
            "border-spacing",
            "cell-spacing",
        ],
        correct:2,
    },
    {
        question:"What is the default value of the CSS position property?",
        options:[
            "relative",
            "fixed",
            "static",
            "absolute",
        ],
        correct:2,
    },
    {
        question:"Which of the following is not a valid value for the display property?",
        options:[
            "inline-block",
            "block-inline",
            "inline",
            "none",
        ],
        correct:1,
    },
    {
        question:"What is the purpose of the CSS property will-change?",
        options:[
            "Specifies the transition effect",
            "Hides an element",
            "Informs the browser about properties that are likely to change in the future",
            "Defines a gradient background",
        ],
        correct:2,
    },
    {
        question:"Which CSS property is used to control the spacing between lines of text?",
        options:[
            "line-spacing",
            "spacing-line",
            "line-height",
            "text-spacing",
        ],
        correct:2,
    },
    {
        question:"What does the CSS property flex-grow define?",
        options:[
            "The ability for a flex item to grow if necessary",
            "The maximum width of a flex item",
            "The minimum width of a flex item",
            "The initial width of a flex item",
        ],
        correct:0,
    },
    {
        question:"Which CSS property is used to change the appearance of the cursor when hovered over an element?",
        options:[
            "cursor-type",
            "mouse-cursor",
            "cursor",
            "pointer",
        ],
        correct:2,
    },
    {
        question:"What does the CSS property object-fit do?",
        options:[
            "Adjusts the position of an image within its container",
            "Defines how the content of a replaced element should be resized",
            "Sets the display order of flex items",
            "Specifies the alignment of text within a container",
        ],
        correct:1,
    },
    {
        question:"Which of the following is a valid CSS3 unit of measurement?",
        options:[
            "dp",
            "em",
            "pt",
            "ex",
        ],
        correct:1,
    },
    {
        question:"What does the CSS property mix-blend-mode control?",
        options:[
            "The blending mode between an element and its background",
            "The opacity of an element",
            "The saturation of colors within an element",
            "The size of shadows cast by an element",
        ],
        correct:0,
    },
    {
        question:"What does the CSS property perspective control?",
        options:[
            "The depth of 3D transformed elements",
            "The color of text",
            "The position of elements relative to the viewport",
            "The spacing between letters in text",
        ],
        correct:0,
    },
    {
        question:"Which of the following is true about the CSS :nth-child pseudo-class?",
        options:[
            "It selects elements based on their position in the document tree",
            "It selects elements based on their class names",
            "It selects elements based on their IDs",
            "It selects all child elements of a parent",
        ],
        correct:0,
    },
    {
        question:"What does the CSS property currentColor represent?",
        options:[
            "The current font color",
            "The current background color",
            "The current border color",
            "The current element's color",
        ],
        correct:3,
    },
    {
        question:"Which CSS property is used to add shadows to text?",
        options:[
            "text-shadow",
            "box-shadow",
            "shadow",
            "text-outline",
        ],
        correct:0,
    },
    {
        question:"What is the purpose of the ::before and ::after pseudo-elements in CSS?",
        options:[
            "To select elements that come before and after a specific element",
            "To create elements that appear before and after a specific element",
            "To style the first and last child elements of a parent",
            "To hide elements from the document flow",
        ],
        correct:1,
    },
    {
        question:"Which of the following CSS properties is used to create a transition effect?",
        options:[
            "transition-effect",
            "animation",
            "transition",
            "transform",
        ],
        correct:2,
    }
];

// access all important HTMl tags 
const questions=document.querySelector("#question");
const answers=document.querySelectorAll(".answer");
const [option_1,option_2,option_3,option_4]=document.querySelectorAll("#option_1,#option_2,#option_3,#option_4");
const nextBtn=document.querySelector("#submit");
const quiz=document.querySelector(".quiz");
const prevBtn=document.querySelector("#prevsubmit");
const finalResult=document.querySelector(".result");
const Section=document.querySelector(".quiz-section");
const finalText=document.querySelector("#finalText");
const finalBtn=document.querySelector("#finalBtn");
const body=document.querySelector("body");
const finalScoreTxt=document.querySelector("#finalScoreTxt");
const startQuiz=document.querySelector(".start");
const popup=document.querySelector(".first");
const popupTxt=document.querySelector("#firsttext");
const firstBtn=document.querySelector("#firstBtn");



firstBtn.addEventListener("click",()=>{
    Section.style.display="block";
    popup.style.display="none";
    body.style.backgroundColor="rgb(11, 175, 240)";
});

// create variable

let currentQuiz=0;
let score=0;


// Load Quiz 

const loadQuiz=()=>{
    const{question, options}=quizData[currentQuiz];

    //now we change our h1 with real questions
    questions.innerText=`${currentQuiz+1}. ${question}`;

    // now we change our options with real options

    options.forEach(
        (curOption, index)=>(window[`option_${index+1}`].innerText=curOption)
    );
};

loadQuiz();


// to deselect answer when move to next question

const deselctAnswer=()=>{
    answers.forEach((curQues)=>curQues.checked=false);
}
//next button click 


const getSelectedOptions=()=>{
    let answerIdx;
    answers.forEach((curOption,index)=>{
        if(curOption.checked){
            answerIdx=index;
        };
    });
    return answerIdx;
}
nextBtn.addEventListener("click",()=>{
    const selectedOptionIndex=getSelectedOptions();

    if(selectedOptionIndex===quizData[currentQuiz].correct){
        score=score+1;
    }

    currentQuiz++;

    if(currentQuiz<quizData.length){
        deselctAnswer();
        loadQuiz();
    }else{
        quiz.style.display="none";
        questions.style.display="none";
        nextBtn.style.display="none";
        prevBtn.style.display="none";
        Section.style.backgroundColor="white";
        body.style.background="white";
        finalResultFunc();
        
    }

});


prevBtn.addEventListener("click",()=>{
    previousQuestion();
});
const previousQuestion=()=>{
    currentQuiz--;
    loadQuiz();
};

const finalResultFunc=()=>{
    finalResult.style.display="block";
    finalText.innerHTML=`Your Overall Score <br><br> <mark> ${((score/quizData.length)*100).toFixed(2)}</mark>%`;
    finalScoreTxt.innerHTML=`<br>Your correct answers are <mark id="a">${score}</mark> out of <mark id="a">${quizData.length}</mark>`;
    finalBtn.addEventListener("click",()=>{
        window.location.href='index.html';
    })
}

const StartFun=()=>{
    startQuiz.style.display='block';
    quiz.style.display="none";
    questions.style.display="none";
    nextBtn.style.display="none";
    prevBtn.style.display="none";
    Section.style.backgroundColor="white";
    body.style.background="white";

}