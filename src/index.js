import React, { Component } from 'react';
import {render} from 'react-dom';
import './assets/style.css'
import quizService from './quizService/index';

// const App = () => {
//     return(
//         <div>Hello World</div>
//     )
// }

// render(<App />, document.getElementById('root'))

// Class component

class QuizBee extends Component {
    state = {
        questionBank : []
    };
    getQuestions = () =>{
        quizService().then(question => {
            this.setState({
                questionBank: question
            })
        })
    };
    componentDidMount(){
        this.getQuestions()
    }
    render(){
        return(
            <div className="container">
                <div className="title"> QuizBee </div>
                { this.state.questionBank.length > 0 && this.state.questionBank.map(
                    ({question, answers, correct, questionId}) => <h4>{question}</h4>)}
            </div>
        )
    }
}

render(<QuizBee />, document.getElementById('root'))