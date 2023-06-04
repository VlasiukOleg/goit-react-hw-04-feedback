import React, { Component } from 'react';

import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = option => {
    this.setState(prevState => ({ [option]: prevState[option] + 1 }));
  };

  countTotalFeedback = () => {
    const values = Object.values(this.state);
    let totalFeedBack = 0;

    for (const value of values) {
      totalFeedBack += value;
    }
    return totalFeedBack;
  };

  countPositiveFeedbackPercentage = () => {
    let positiveFeedBackPercentage = 0;
    const { good } = this.state;
    positiveFeedBackPercentage = (good / this.countTotalFeedback()) * 100;
    let normilizedFeedBackPercentage = Math.round(positiveFeedBackPercentage);

    return normilizedFeedBackPercentage;
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={this.state}
          onLeaveFeedback={this.onLeaveFeedback}
        />
        {this.countTotalFeedback() === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback}
            positivePercentage={this.countPositiveFeedbackPercentage}
          />
        )}
      </Section>
    );
  }
}
