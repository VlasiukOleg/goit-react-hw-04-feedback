import React, { useState } from 'react';

import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification/Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = option => {
    switch (option) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;

      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    let totalFeedBack = good + neutral + bad;
    return totalFeedBack;
  };

  const countPositiveFeedbackPercentage = () => {
    let positiveFeedBackPercentage = 0;
    positiveFeedBackPercentage = (good / countTotalFeedback()) * 100;
    let normilizedFeedBackPercentage = Math.round(positiveFeedBackPercentage);
    return normilizedFeedBackPercentage;
  };

  return (
    <Section title="Please leave feedback">
      <FeedbackOptions
        options={{ good, neutral, bad }}
        onLeaveFeedback={onLeaveFeedback}
      />
      {countTotalFeedback() === 0 ? (
        <Notification message="There is no feedback" />
      ) : (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback}
          positivePercentage={countPositiveFeedbackPercentage}
        />
      )}
    </Section>
  );
};
