import React, { useState } from 'react';

import { Section } from './components/Section/Section';
import { FeedbackOptions } from './components/FeedbackOptions/FeedbackOptions';
import { Notification } from './components/Notification/Notification';
import { Statistics } from './components/Statistics/Statistics';
import s from './App.module.css';

export default function FeedBack() {
  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0);

  const LeaveFeedback = option => {
    switch (option) {
      case 'good':
        return setGood(good => good + 1);

      case 'bad':
        return setBad(bad => bad + 1);

      case 'neutral':
        return setNeutral(neutral => neutral + 1);

      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };
  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / countTotalFeedback()) * 100);
  };

  return (
    <div className={s.container}>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'bad', 'neutral']}
          onLeaveFeedback={LeaveFeedback}
        />
      </Section>
      {countTotalFeedback() === 0 ? (
        <Notification notifyMessage="No feedback given" />
      ) : (
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positiveInTotal={countPositiveFeedbackPercentage()}
          />
        </Section>
      )}
    </div>
  );
}
