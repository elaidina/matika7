const quizData = [
    {
        question: "3 . 25 = 100",
        a: "pravda",
        b: "lež",
        
        correct: "b",
    },
    {
      question: "22 + 15 = 50",
      a: "pravda",
      b: "lež",
      
      correct: "b",
  },
  {
    question: "100 - 92 = 10",
    a: "pravda",
    b: "lež",
    
    correct: "b",
},
{
  question: "32 + 12 = 44",
  a: "pravda",
  b: "lež",
  
  correct: "a",
},{
  question: "0,5 + 0,5 +0,5 = 1,5",
  a: "pravda",
  b: "lež",
  
  correct: "a",
},
{
question: "8 . 7 = 60",
a: "pravda",
b: "lež",

correct: "b",
},{
  question: "30 - 21 = 7",
  a: "pravda",
  b: "lež",
  
  correct: "b",
},
{
question: "81 : 9 = 9",
a: "pravda",
b: "lež",

correct: "a",
},{
  question: "5 . 6 = 20",
  a: "pravda",
  b: "lež",
  
  correct: "b",
},
{
question: "10 . 20 = 200",
a: "pravda",
b: "lež",

correct: "a",
},{
  question: "11 + 12 = 23",
  a: "pravda",
  b: "lež",
  
  correct: "a",
},
{
question: "12 + 19 = 31",
a: "pravda",
b: "lež",

correct: "a",
},{
  question: "13. 3 = 39",
  a: "pravda",
  b: "lež",
  
  correct: "a",
},
{
question: "8 + 18 = 26",
a: "pravda",
b: "lež",

correct: "a",
},{
  question: "9 + 8 = 17",
  a: "pravda",
  b: "lež",
  
  correct: "a",
},
{
question: "20 + 99 = 119",
a: "pravda",
b: "lež",

correct: "a",
},{
  question: "17 -9 = 8",
  a: "pravda",
  b: "lež",
  
  correct: "a",
},
{
question: "18 : 2 = 7",
a: "pravda",
b: "lež",

correct: "b",
},{
  question: " 25 . 5 = 125",
  a: "pravda",
  b: "lež",
  
  correct: "a",
},
{
question: "20 : 5 = 4",
a: "pravda",
b: "lež",

correct: "a",
},
    
  ];
  
  const quiz = document.getElementById('quiz')
  const answerEls = document.querySelectorAll('.answer')
  const questionEl = document.getElementById('question')
  const result = document.getElementById('resultquestion')
  const a_text = document.getElementById('a_text')
  const b_text = document.getElementById('b_text')
  
  const submitBtn = document.getElementById('submit')
  
  let currentQuiz = 0
  let score = 0
  
  loadQuiz()
  
  function loadQuiz() {
    deselectAnswers()
  
    const currentQuizData = quizData[currentQuiz]
  
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
   
  }
  
  function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
  }
  
  function getSelected() {
    let answer
  
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
  
    return answer
  }
  let answers= []; 
  submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    
    if(answer) { answers.push(answer);
            console.log(answers);}
  
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++;
            
            
        }
        
        currentQuiz++;
        
  
        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            
            
  /* 
  */
           let results= quizData.map ((question,i) => 
           
           
           ` 
                <div class="${quizData[i].correct===answers[i]?
                    "correct": "false" } quiz-header ">
                <h2 id="question">${question.question}</h2>
                <ul id="resultquestion"  >
                  <li >
                    <input type="radio" name="answer" id="a" class="answer">
                    <label for="a" id="a_text">${question.a}</label>
                  </li>
        
                  <li>
                    <input type="radio" name="answer" id="b" class="answer">
                    <label for="b" id="b_text">${question.b}</label>
                  </li>
        
                  
                  <li>
                  <h4>Správná odpověď: ${question[quizData[i].correct]}</h4>
                <h4>Vybral jsi: ${question[answers[i]]}</h4>
  
                
                  </li>
                  
                </ul>
              </div>`
                
                )
  
  //                 result.classList.add("correct")
  // /* 
                
  
                /* quizData.forEach ((question,i) =>
                 quizData[i].correct===answers[i]?
                  result.classList.add("correct")  : result.classList.add("false") 
                 ) */
            
         
  
  
            quiz.innerHTML = `
                <h2>Získal jsi ${score} bodů z ${quizData.length}.</h2>
               
  
                
                
               
    
                ${results}
  
  
                
  
                <button onclick="location.reload()">Znovu zkusit</button>
            `
        
        
        }
    }
  })