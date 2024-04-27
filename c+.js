// quiz questions and answers

const quizData=[
    {
        question:"Which of the following is true about reference variables in C++?",
        options:[
            "A reference must be initialized when declared",
            "References can be reassigned to refer to another object after initialization",
            "References can be declared without initialization",
            "References are allocated memory on the heap",
        ],
        correct:0,
    },

    {
        question:"Which operator is used to allocate memory dynamically in C++?",
        options:[
            "alloc",
            "malloc",
            "new",
            "alloc_ptr",
        ],
        correct:2,
    },
    {
        question:"What is the result of the expression sizeof(char) in C++?",
        options:[
            "1",
            "2",
            "4",
            "Compiler Dependant",

        ],
        correct:0,
    },
    {
        question:"Which of the following correctly declares a pure virtual function in C++?",
        options:[
            "virtual void func() = 0;",
            "virtual void func() { }",
            "void func() = 0;",
            "void func() { }",
        ],
        correct:0,
    },

    {
        question:"What does the typeid operator return in C++?",
        options:[
            "Size of the object",
            "Type of the object",
            "Address of the object",
            "Class of the object",
        ],
        correct:1,
    },
    {
        question:"Which of the following is true about the const member function in C++?",
        options:[
            "It cannot modify any data members of the class",
            "It cannot be called on const objects",
            "It can modify mutable data members of the class",
            "It cannot have a return type",
        ],
        correct:2,
    },
    {
        question:"What is the difference between delete and delete[] operators in C++?",
        options:[
            "delete[] is used for deleting single objects, whereas delete is used for arrays",
            "delete[] is used for deleting arrays, whereas delete is used for single objects",
            "Both are same, used interchangeably",
            "delete is used for stack-allocated objects, delete[] is used for heap-allocated objects",
        ],
        correct:1,
    },
    {
        question:"hich of the following statements regarding virtual functions in C++ is true?",
        options:[
            "Virtual functions can be static",
            "Virtual functions must be defined in the base class",
            "Virtual functions cannot be overridden in derived classes",
            "Virtual functions can be private",
        ],
        correct:3,
    },
    {
        question:"In C++, which one of the following is true about the virtual destructor?",
        options:[
            "It cannot be overridden in derived classes",
            "It should be declared with the override keyword in derived classes",
            "It ensures that the destructor of the base class is called before the destructor of the derived class",
            "It is not recommended to use virtual destructors",
        ],
        correct:2,
    },
    {
        question:"Which of the following is true about C++ exceptions?",
        options:[
            "C++ exceptions must be caught by a try-catch block to avoid program termination",
            "Exceptions in C++ can only be thrown from within functions",
            "It is mandatory for C++ functions to specify the exceptions they might throw",
            "C++ exceptions are always caught by the catch (...) block",
        ],
        correct:0,
    },
    {
        question:"What is the correct way to declare a friend function of a class in C++?",
        options:[
            "friend void functionName();",
            "friend functionName();",
            "friend void functionName() const;",
            "friend void functionName() { };",
        ],
        correct:0,
    },
    {
        question:"Which of the following best describes the purpose of the typeid operator in C++?",
        options:[
            "It returns the size of the object",
            "It returns the address of the object",
            "It returns the type of the object",
            "It returns the class of the object",
        ],
        correct:2,
    },
    {
        question:"Which of the following is NOT true about pure virtual functions in C++?",
        options:[
            "A class with at least one pure virtual function is an abstract class",
            "Pure virtual functions must be defined in the base class",
            "Pure virtual functions can have a body in the base class",
            "A class with pure virtual functions cannot be instantiated",
        ],
        correct:2,
    },
    {
        question:"What does the volatile keyword indicate in C++?",
        options:[
            "The variable can be modified by multiple threads",
            "The variable cannot be modified",
            "The variable may be changed unexpectedly",
            "The variable is constant",
        ],
        correct:2,
    },
    {
        question:"Which of the following is true about function overloading in C++?",
        options:[
            "Overloaded functions must have the same return type",
            "Overloaded functions must have the same number of parameters",
            "Overloaded functions must have different names",
            "Overloaded functions must have the same access level",
        ],
        correct:2,
    },
    {
        question:"Which of the following is true about the std::move function in C++?",
        options:[
            "It moves the data from one object to another without copying",
            "It creates a deep copy of the data",
            "It invalidates the source object",
            "It is only applicable to primitive data types",
        ],
        correct:0,
    },
    {
        question:"Which of the following is NOT a valid storage class specifier in C++?",
        options:[
            "auto",
            "static",
            "dynamic",
            "extern",
        ],
        correct:2,
    },
    {
        question:"What is the difference between malloc() and new in C++?",
        options:[
            "malloc() allocates memory for primitive data types, new allocates memory for objects",
            "malloc() is a keyword, new is an operator",
            "malloc() returns a pointer to void, new returns a pointer to the allocated type",
            "There is no difference, they both perform the same operation",
        ],
        correct:2,
    },
    {
        question:"What does the this pointer refer to in C++?",
        options:[
            "Address of the current object",
            "Address of the current member function",
            "Address of the parent object",
            "Address of the derived object",
        ],
        correct:0,
    },
    {
        question:"Which of the following correctly defines a constructor in C++?",
        options:[
            "void constructor();",
            "Constructor();",
            "~Constructor();",
            "Constructor() { };",
        ],
        correct:3,
    },
    {
        question:"What is the purpose of the const keyword in C++?",
        options:[
            "It indicates that a variable cannot be modified",
            "It indicates that a function cannot modify its arguments",
            "It indicates that a function cannot modify member variables",
            "All of the above",
        ],
        correct:3,
    },
    {
        question:"Which of the following statements about multiple inheritance in C++ is true?",
        options:[
            "A class cannot inherit from more than one class",
            "Constructors are not called in the order of inheritance",
            "Diamond problem occurs due to multiple inheritance",
            "Multiple inheritance can lead to virtual function ambiguity",
        ],
        correct:3,
    },
    {
        question:"Which of the following correctly defines a pure virtual function in C++?",
        options:[
            "virtual void func() { } = 0;",
            "virtual void func() = 0;",
            "void func() = 0;",
            "void virtual func() = 0;",
        ],
        correct:1,
    },
    {
        question:"Which of the following correctly declares a destructor in C++?",
        options:[
            "~Destructor() { }",
            "Destructor() { }",
            "void Destructor() { }",
            "virtual ~Destructor() { }",
        ],
        correct:0,
    },
    {
        question:"Which of the following correctly defines a copy constructor in C++?",
        options:[
            "Constructor(const Constructor& obj) { }",
            "Constructor(Constructor obj) { }",
            "Constructor() { }",
            "~Constructor() { }",
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
    body.style.backgroundColor="rgb(48, 138, 211";
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