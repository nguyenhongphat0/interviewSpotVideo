/*
 * Login Page
 */
import React from 'react';
import { Helmet } from 'react-helmet';
import { nth, myFormatDate } from 'utils/helper';
import Img from 'components/Img';
import { FormattedMessage } from 'react-intl';

export default class InterviewQuestion extends React.Component {
  constructor(props) {
    super(props)
    
  }
  componentDidMount() {
    
  }
  doPrepare(e){
    e.preventDefault();
    if(typeof this.props.doPrepare == 'function'){
        //console.log('doPrepare');
        this.props.doPrepare();
    }
  }
  render() {
    const {sessionData, qNum, isPractice, messages} = this.props
    let number = qNum + 1

    let deadline = isPractice ? 'Not Applicable' : myFormatDate('dd-mm-yyyy', sessionData.deadline)
    let readingTimeLimit = sessionData.answers[qNum].readingTimeLimit
    let answerTimeLimit = Math.round(sessionData.answers[qNum].answerTimeLimit/60)
    let title = sessionData.title

    // if(isPractice){
    //     deadline = 'Not Applicable'
    //     if(!practice){       
    //         readingTimeLimit = session.practice.answers[qNum].readingTimeLimit
    //         answerTimeLimit = Math.round(session.practice.answers[qNum].answerTimeLimit/60)
    //         title = session.practice.title
    //     } else {
    //         readingTimeLimit = practice.answers[qNum].readingTimeLimit
    //         answerTimeLimit = Math.round(practice.answers[qNum].answerTimeLimit/60)
    //         title = practice.title
    //     }
    // } 
    return (
        <div className="central-wrap">
            <Helmet>
                <title>{title}</title>
                <meta name="description" content={title} />
            </Helmet>
            <div className="container">
                <div className="content-wrapper">
                    <h2 className="page-ttl">{title}</h2>
                    <div className="page-desc">
                        <p><FormattedMessage
                            {...messages.questionStartMessage1}
                            values={{
                              readingTimeLimit: readingTimeLimit,
                            }}
                          /></p>
                        <p><FormattedMessage
                            {...messages.questionStartMessage2}
                            values={{
                              numQuestions: sessionData.answers.length,
                              answerTimeLimit: answerTimeLimit,
                            }}
                          /></p>
                        <p><FormattedMessage
                            {...messages.questionStartMessage3}/></p>
                    </div>
                    <div className="btn-wrap">
                        <div className="time-submiss">
                            {'Submission Deadline: ' + deadline} 
                        </div>
                        <a onClick={(e) => this.doPrepare(e)} className="btn btn-green uppercase">next</a>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}
