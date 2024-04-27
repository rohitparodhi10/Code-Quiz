// quiz questions and answers

const quizData=[
    {
        question:"What is Python?",
        options:[
            "A type of snake",
            "A high-level programming language",
            "A data structure",
            "A programming paradigm",
        ],
        correct:1,
    },

    {
        question:"What does the strip() method do in Python?",
        options:[
            "Removes leading and trailing whitespaces",
            "Removes all whitespaces",
            "Removes only trailing whitespaces",
            "Removes only leading whitespaces",
        ],
        correct:0,
    },
    {
        question:"Which of the following is the correct way to declare a list in Python?",
        options:[
            "list = [1, 2, 3]",
            "list(1, 2, 3)",
            "list = (1, 2, 3)",
            "list = {1, 2, 3}",

        ],
        correct:0,
    },
    {
        question:"Which of the following is not a valid method to open a file in Python?",
        options:[
            "open(file.txt,r)",
            "open(file.txt,w+)",
            "open(file.txt,mode=r)",
            "file.open(file.txt, a)",
        ],
        correct:3,
    },
    {
        question:"What does the enumerate() function in Python do?",
        options:[
            "Returns an enumerated list",
            "Returns the index and value of each element in a list",
            "Returns the length of an iterable",
            "Generate index-value tuples for iterable elements",
        ],
        correct:3,
    },
    {
        question:"Which method is used to remove the last element from a list in Python?",
        options:[
            "remove()",
            "delete()",
            "pop()",
            "erase()",
        ],
        correct:2,
    },
    {
        question:"What does the map() function in Python do?",
        options:[
            "Applies function to elements, returns list.",
            "Returns tuples from sequences.",
            "Returns sum of elements.",
            "Returns minimum value.",
        ],
        correct:0,
    },
    {
        question:"What is the correct way to check if a key exists in a dictionary in Python?",
        options:[
            "key in dictionary.keys()",
            "dictionary.containsKey(key)",
            "key in dictionary",
            "dictionary.exists(key)",
        ],
        correct:2,
    },
    {
        question:"Which of the following statements about Python's pass statement is true?",
        options:[
            "It raises an exception",
            "It does nothing and acts as a placeholder",
            "It terminates the current loop",
            "It skips the current iteration of a loop",
        ],
        correct:1,
    },
    {
        question:"What does the filter() function in Python do?",
        options:[
            "True elements in iterable.",
            "Concatenates iterables.",
            "Tuple list from sequences.",
            "Sum of elements.",
        ],
        correct:0,
    },
    {
        question:"Which is the correct way to check if a variable is of a certain type in Python?",
        options:[
            "type(x) == int",
            "typeof(x) == int",
            "x.type() == int",
            "isinstance(x, int)",
        ],
        correct:3,
    },
    {
        question:"What does the sorted() function in Python do?",
        options:[
            "Returns a sorted copy of a list or iterable",
            "Reverses the order of elements in a list",
            "Sorts a list in place",
            "Returns the maximum element of an iterable",
        ],
        correct:0,
    },
    {
        question:"print(round(2.5)) What will be the output?",
        options:[
            "2",
            "3",
            "2.5",
            "3.0",
        ],
        correct:1,
    },
    {
        question:"What does the max() function in Python do?",
        options:[
            "Returns the maximum value of an iterable",
            "Returns the length of an iterable",
            "Returns the index of the maximum value in an iterable",
            "Returns the largest item in an iterable",
        ],
        correct:3,
    },
    {
        question:"Which of the following statements about Python's continue statement is true?",
        options:[
            "It skips the current iteration of a loop",
            "It raises an exception",
            "It restarts the current loop iteration",
            "None of the above",
        ],
        correct:0,
    },
    {
        question:"Which of the following is not a valid Python variable name?",
        options:[
            "my_variable",
            "2variable",
            "_variable",
            "variable_2 ",
        ],
        correct:3,
    },
    {
        question:"What does the join() method in Python do?",
        options:[
            "Splits a string into a list of substrings",
            "Joins list elements into single string with specified delimiter",
            "Reverses the characters of a string",
            "Returns the index of a substring in a string",
        ],
        correct:1,
    },
    {
        question:"What is the correct way to remove an item from a set in Python?",
        options:[
            "set.remove(item)",
            "set.discard(item)",
            "Both a and b",
            "None of the above",
        ],
        correct:2,
    },
    {
        question:"print(bool(0)), What will be the output ?",
        options:[
            "True",
            "False",
            "0",
            "1",
        ],
        correct:1,
    },
    {
        question:"print(2 ** 3 ** 2), What will be the output ?",
        options:[
            "64",
            "512",
            "72",
            "9",
        ],
        correct:1,
    },
    {
        question:"Which of the following statements about Python's global keyword is true?",
        options:[
            "It is used to define global variables inside a function",
            "It is used to declare a variable as global inside a function",
            "It is used to access global variables outside a function",
            "It is used to defines global variables at script's top level",
        ],
        correct:1,
    },
    {
        question:"What does the any() function in Python do?",
        options:[
            "Returns True if all elements in an iterable are True",
            "Returns True if any element in an iterable is True",
            "Returns True if all elements in an iterable are False",
            "Returns True if any element in an iterable is False",
        ],
        correct:1,
    },
    {
        question:"print(isinstance([], list)), What will be the output?",
        options:[
            "True",
            "False",
            "TypeError:isinstance() arg 2 must be a type or tuple of types",
            "SyntaxError:invalid syntax",
        ],
        correct:0,
    },
    {
        question:"Which of the following statements about Python's `with` statement is true?",
        options:[
            "It is used for exception handling",
            "It is used to create anonymous functions",
            "It is used for resource management",
            "It is used to define a block of code",
        ],
        correct:2,
    },
    {
        question:"What does the reduce() function in Python do?",
        options:[
            "Apply function to all iterable elements, return single value.",
            "Reduces the dimensionality of an array",
            "Reverses the elements in an iterable",
            "Removes duplicate elements from an iterable",
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
const check=document.querySelector("#check");
const qq=document.querySelector("#tt");
const lastBtn=document.querySelector("#finalBt");




firstBtn.addEventListener("click",()=>{
    Section.style.display="block";
    popup.style.display="none";
    body.style.backgroundColor="#4e55bc";
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

check.addEventListener("click", ()=>{
    qq.style.display="block";
    lastBtn.style.display="block";
    finalResult.style.display="none";
    let output = '';
    quizData.forEach((obj, index) => {
    output += `Question ${index + 1}: ${obj.question}\n`;
    output += `Options:\n`;
    obj.options.forEach((option, optionIndex) => {
        output += `${String.fromCharCode(65 + optionIndex)}. ${option}\n`;
    });
    // Retrieve the correct answer from the options array using the correct index
    const correctOption = obj.options[obj.correct];
    output += `Correct Answer: ${correctOption}\n\n\n`;
});

// Now set the innerText of your element to the constructed output
    qq.innerText = output;
});

lastBtn.addEventListener("click",()=>{
    window.location.href="index.html";
})