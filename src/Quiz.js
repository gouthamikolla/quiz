import React from "react";

export default class Quiz extends component {
  constructor(props) {
    super(props);

    this.state = {
      userAnswer: null,
      currentIndex: 0,
      options: [],
      quizEnd: false,
      score: 0,
      disabled: true,
    };
  }

  loadQuiz = () => {
    const { currentIndex } = this.state;
    this.setState(() => {
      return {
        question: QuizData[currentIndex].question,
        options: Quizdata[currentIndex].options,
        anwser: Quizdata[currentIndex].answer,
      };
    });
  };
  render() {
    return <div>Quiz</div>;
  }
}
