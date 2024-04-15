// quiz questions and answers

const quizData=[
    {
        question:"Which HTML5 element is used to define navigation links?",
        options:[
            "<nav>",
            "<header>",
            "<menu>",
            "<section>",
        ],
        correct:0,
    },

    {
        question:"In HTML, which attribute is used to specify the media for the linked document?",
        options:[
            "media",
            "src",
            "rel",
            "type",
        ],
        correct:0,
    },
    {
        question:"What is the purpose of the HTML <figure> element?",
        options:[
            "To define a section that contains navigation links",
            "To represent an image or a graphical illustration",
            "To define a group of navigation links",
            "To define a caption for a <figcaption> element",

        ],
        correct:1,
    },
    {
        question:"Which HTML tag is used to define the structure of a table?",
        options:[
            "<table>",
            "<tbody>",
            "<tr>",
            "<td>",
        ],
        correct:0,
    },

    {
        question:"What does the HTML attribute 'draggable' do?",
        options:[
            "Specifies whether an element is resizable or not",
            "Specifies whether an element can be dragged or not",
            "Specifies whether an element is visible or not",
            "Specifies whether an element is clickable or not",
        ],
        correct:1,
    },
    {
        question:"Which of the following elements is used to create a hyperlink in HTML?",
        options:[
            "<link>",
            "<a>",
            "<href>",
            "<url>",
            

        ],
        correct:1,
    },
    {
        question:"n HTML, which attribute is used to specify the alternate text for an image?",
        options:[
            "alt",
            "title",
            "description",
            "caption",
        ],
        correct:0,
    },
    {
        question:"Which HTML element is used to define the structure of an unordered list?",
        options:[
            "al",
            "li",
            "ul",
            "ol",
        ],
        correct:2,
    },
    {
        question:"What is the purpose of the HTML <iframe> element?",
        options:[
            "To display a video file",
            "To embed another document within the current HTML document",
            "To create a floating image",
            "To create a resizable container",
        ],
        correct:1,
    },
    {
        question:"Which HTML attribute specifies the URL of the page the link goes to?",
        options:[
            "hrc",
            "src",
            "href",
            "url",
        ],
        correct:2,
    },
    {
        question:"What does the HTML <abbr> element represent?",
        options:[
            "A hyperlink reference",
            "An abbreviation or an acronym",
            "A block of code",
            "A comment",
        ],
        correct:1,
    },
    {
        question:"What's the HTML attribute for hinting the expected input value in a field?",
        options:[
            " placeholder",
            "value",
            "hint",
            "description",
        ],
        correct:0,
    },
    {
        question:"Which HTML element is used to define the main content of the document?",
        options:[
            "<content>",
            "<body>",
            "<main>",
            "<section>",
        ],
        correct:2,
    },
    {
        question:"What does the HTML <meta> element provide information about?",
        options:[
            "The character encoding of the document",
            "The primary content of the webpage",
            "The background color of the webpage",
            "The font size of the text",
        ],
        correct:0,
    },
    {
        question:"Which HTML attribute is used to define the keyboard shortcut for an element?",
        options:[
            "key",
            "shortcut",
            "accesskey",
            "hotkey",
        ],
        correct:2,
    },
    {
        question:" What is the purpose of the HTML <header> element?",
        options:[
            "To define the main content of the document",
            "To define introductory content at the beginning of a section",
            "To define a container for navigation links",
            "To define a header for a document or a section",
        ],
        correct:3,
    },
    {
        question:"Which HTML attribute is used to specify the language of the text within a webpage?",
        options:[
            "lang",
            "language",
            "text-lang",
            "content-lang",
        ],
        correct:0,
    },
    {
        question:"What is the purpose of the HTML <blockquote> element?",
        options:[
            "To define a block of code",
            "To define a quotation from another source",
            "To create a floating container",
            "To define a bulleted list",
            ,
        ],
        correct:1,
    },
    {
        question:"Which HTML element is used to group together related form elements?",
        options:[
            " <group>",
            "<fieldset>",
            "<section>",
            "<formgroup>",,
        ],
        correct:1,
    },
    {
        question:"What does the HTML <canvas> element provide?",
        options:[
            "A container for SVG graphics",
            "A container for video content",
            "A container for interactive graphics",
            "A container for audio content",
        ],
        correct:2,
    },
    {
        question:"Which HTML element is used to define the footer for a document or a section?",
        options:[
            "<footer>",
            "<bottom>",
            "<end>",
            "<last>",
        ],
        correct:0,
    },
    {
        question:"What does the HTML attribute 'contenteditable' do?",
        options:[
            "Specifies whether the content can be edited or not",
            "Specifies the content of the element",
            "Specifies the content type of the element",
            "Specifies whether the content is visible or not",
        ],
        correct:0,
    },
    {
        question:"Which HTML element defines document metadata?",
        options:[
            "<meta>",
            "<head>",
            "<title>",
            "<link>",
        ],
        correct:1,
    },
    {
        question:"What is the purpose of the HTML <mark> element?",
        options:[
            "To highlight text",
            "To define a section that contains navigation links",
            "To create a bulleted list",
            "To define a block of code",
        ],
        correct:0,
    },
    {
        question:"What does the HTML <progress> element represent?",
        options:[
            "A progress bar",
            "A container for video content",
            "A container for interactive graphics",
            "A container for audio content",
        ],
        correct:0,
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
    body.style.backgroundColor="orange";
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