import React, { useState } from "react";
import "./Question.css";

function Question(props) {
  const [state, newState] = useState({
    selectionClass: "box"
  });

  function selectionHandler(evt) {
    newState({
      selectionClass: "box answer-selected",
      selectionOption: evt.target.value
    });

    evt.persist();
    setTimeout(() => {
      evt.target.checked = false;
      props.changeQuestionHandler(evt.target.value);
    }, 1000);

    setTimeout(() => {
      newState({
        selectionClass: "box"
      });
    }, 2000);
  }

  var childrenClass
  if(props.children !== undefined){
    var visibleClass = 'hidden';
    childrenClass = 'result';
  }
  else{
    childrenClass = 'hidden-display';
  }

  return (
    <div className={state.selectionClass}>
      <img src="corona.png" alt="corona" className="corona-bottom-right" />
      <div className={childrenClass}>
        Thanks for participating in the quiz.<br/>
        Your score is {props.children} out of 10
      </div>

      <div className={visibleClass}>
        <h3 className="no-top-padding-margin">{props.question.quest}</h3>
        <div className="margin-10">
          <div className="align-v-middle w-50 inline-block">
            <input type="radio" name="answer" value="a" onChange={selectionHandler} />
          </div>
          <div className="align-v-middle w-rest inline-block">{props.question.a}</div>
        </div>

        <div className="margin-10">
          <div className="align-v-middle w-50 inline-block">
            <input type="radio" name="answer" value="b" onChange={selectionHandler} />
          </div>
          <div className="align-v-middle w-rest inline-block">{props.question.b}</div>
        </div>

        <div className="margin-10">
          <div className="align-v-middle w-50 inline-block">
            <input type="radio" name="answer" value="c" onChange={selectionHandler} />
          </div>
          <div className="align-v-middle w-rest inline-block">{props.question.c}</div>
        </div>

        <div className="margin-10">
          <div className="align-v-middle w-50 inline-block">
            <input type="radio" name="answer" value="d" onChange={selectionHandler} />
          </div>
          <div className="align-v-middle w-rest inline-block">{props.question.d}</div>
        </div>
      </div>
    </div>
  );
}

export default Question;
