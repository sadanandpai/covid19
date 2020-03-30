import React, { useState } from "react";
import "./App.css";
import Question from "./Question/Question";

function App() {
  var questions = [
    {
      quest: "1. Where did the first COVID-19 outbreak happen?",
      a: "New York, USA",
      b: "Wuhan, China",
      c: "Shanghai, China",
      d: "Beijing, China"
    },
    {
      quest: "2. When did WHO declare COVID-19 as pandemic?",
      a: "17 Mar 2020",
      b: "16 Mar 2020",
      c: "11 Mar 2020",
      d: "9 Mar 2020"
    },
    {
      quest: "3. What is the incubation period for COVID-19?",
      a: "2-14 days",
      b: "1-10 days",
      c: "5-15 days",
      d: "0-15 days"
    },
    {
      quest: "4. What is the minimum distance to be maintained in public places in between 2 people?",
      a: "5 ft",
      b: "3 ft",
      c: "6 ft",
      d: "4 ft"
    },
    {
      quest: "5. Which are the modes of transmission?",
      a: "Air",
      b: "Different surfaces",
      c: "All the above",
      d: "Water"
    },
    {
      quest: "6. How long does the virus stay in air?",
      a: "2 hrs",
      b: "5 hrs",
      c: "4 hrs",
      d: "3 hrs"
    },
    {
      quest: "7. What are the clinical features observed in COVID-19 patients?",
      a: "Dry Cough, Fever, Shortness of breath",
      b: "Pain in abdomen, vomitting, diarrhea",
      c: "Fever, vomitting, fatigue",
      d: "Fever, cold, cough"
    },
    {
      quest: "8. What is helpline number to report about COVID-19 symptoms given by Government of India?",
      a: "1075 / +91-11-23978046",
      b: "1075 / +91-11-2197707",
      c: "1075 / +91-11-2309009",
      d: "1075 / +91-11-23458791"
    },
    { 
      quest: "9. Which is the recommended mask for COVID-19?", 
      a: "Surgical mask", 
      b: "FFP1 mask", 
      c: "N95 mask", 
      d: "Cloth mask" 
    },
    {
      quest: "10. What are preventive measures suggested for COVID-19?",
      a: "HANDS-Wash them often, ELBOW-Cough into it, FACE -Don't touch it",
      b: "SPACE-Keep safe distance, HOME-Stay if you can",
      c: "All of the above",
      d: "None of the above"
    }
  ];
  var answersKey = [175667596, -658731874, -1296971367, 1642744, -1521346737, 48156476, 769360365, -174111288, -901403294, -128829340];

  var [state, nextState] = useState({
    id: 0,
    answers: []
  });
  var score;

  function changeQuestionHandler(answer) {
    state.answers.push(answer);

    if (state.id !== answersKey.length - 1) {
      nextState({
        id: state.id + 1,
        answers: state.answers
      });
    } else {
      nextState({
        id: state.id,
        answers: state.answers
      });
    }
  }

  function checkScore() {
    var ans = state.answers.filter((answer, index) => {
      return answersKey[index] === hasher(questions[index][answer]);
    });
    return ans.length;
  }

  function hasher(str) {
    var hash = 0,
      i,
      chr;
    for (i = 0; i < str.length; i++) {
      chr = str.charCodeAt(i);
      hash = (hash << 5) - hash + chr;
      hash |= 0;
    }
    return hash;
  }

  if (state.answers.length === answersKey.length) {
    score = checkScore();
  }

  return (
    <div className="App">
      <h2 className="header">Welcome to COVID-19 quiz <br/>#QuarantineGames</h2>
      <Question question={questions[state.id]} changeQuestionHandler={changeQuestionHandler}>
        {score}
      </Question>
      <img src="virus.png" alt="virus" className="virus1" />
      <img src="virus.png" alt="virus" className="virus2" />
      <img src="virus.png" alt="virus" className="virus3" />
      <div className="bottom-right-fixed">
        Developed in React<br/>
        by <a href="https://www.linkedin.com/in/sadananadpai/" target="_blank" rel="noopener noreferrer">Sadanand Akshay Pai</a>
      </div>
    </div>
  );
}

export default App;
