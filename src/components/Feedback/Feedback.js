import { Button, StatList, Name, State } from './Feedback.styled';
import { Component } from 'react';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addGoodFeedback = () => {
    this.setState(prevState => {
      return { good: prevState.good + 1 };
    });
  };

  addNeutralFeedback = () => {
    this.setState(prevState => {
      return { neutral: prevState.neutral + 1 };
    });
  };

  addBadFeedback = () => {
    this.setState(prevState => {
      return { bad: prevState.bad + 1 };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    return Math.round((good / (good + neutral + bad)) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <>
        <div>
          <Button onClick={this.addGoodFeedback}>Good</Button>
          <Button onClick={this.addNeutralFeedback}>Neutral</Button>
          <Button onClick={this.addBadFeedback}>Bad</Button>
        </div>

        <h2>Statistics</h2>
        <StatList>
          <li>
            <Name>Good:</Name>
            <State>{good}</State>
          </li>
          <li>
            <Name>Neutral:</Name>
            <State>{neutral}</State>
          </li>
          <li>
            <Name>Bad:</Name>
            <State>{bad}</State>
          </li>
          <li>
            <Name>Total:</Name>
            <State>{this.countTotalFeedback()}</State>
          </li>
          <li>
            <Name>Positive feedback:</Name>
            <State>{this.countPositiveFeedbackPercentage()}%</State>
          </li>
        </StatList>
      </>
    );
  }
}

export { Feedback };
