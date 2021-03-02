import React from 'react';
import Question from './Question';
/* eslint-disable */

const Display = (props) => (
  <div>
    {props.display.results
      ? props.display.results.map((result, i) => (
        <Question question={result.question_body} answer={result.answers} key={i} />
      ))
      : 'Loading Questions...'}
    <br></br>
  </div>
);

export default Display;