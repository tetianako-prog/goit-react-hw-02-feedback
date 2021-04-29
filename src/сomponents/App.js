import React, { Component } from 'react';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Notification from './Notification/Notification';
import Statistics from './Statistics/Statistics';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  clickHandler = name => {
    this.setState(prevState => {
      return {
        ...prevState,
        [name]: prevState[name] + 1,
      };
    });
  };
  render() {
    const buttonNames = Object.keys(this.state);
    const { good, neutral, bad } = this.state;
    const total = Object.values(this.state).reduce((acc, i) => acc + i, 0);
    const positive =
      total === 0 ? 0 : Math.round((this.state.good / total) * 100);

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={buttonNames}
            onLeaveFeedback={this.clickHandler}
          />
        </Section>
        <Section title="Statistics">
          {total ? (
            <Statistics
              title="Statistics"
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positive}
            />
          ) : (
            <Notification message="No feedback given"></Notification>
          )}
        </Section>
      </>
    );
  }
}

export default App;
