import React, { useState } from 'react';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';

const App = () => {
  const [goodReviews, setGoodReviews] = useState(0);
  const [neutralReviews, setNeutralReviews] = useState(0);
  const [badReviews, setBadReviews] = useState(0);

  const onLeaveFeedback = option => {
    switch (option) {
      case 'good':
        setGoodReviews(goodReviews + 1);
        break;

      case 'bad':
        setBadReviews(badReviews + 1);
        break;

      case 'neutral':
        setNeutralReviews(neutralReviews + 1);
        break;

      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    const total = goodReviews + badReviews + neutralReviews;
    return total;
  };

  const countPositiveFeedbackPeercentage = () => {
    const positiveFeedbackPercentsge = Math.round(
      (goodReviews / countTotalFeedback()) * 100
    );
    return positiveFeedbackPercentsge;
  };

  return (
    <div className="mainContainer">
      <Section title={'Please leave feedback'}>
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>

      <Section title="Statistics">
        <Statistics
          good={goodReviews}
          bad={badReviews}
          neutral={neutralReviews}
          total={countTotalFeedback()}
          positiveFeedback={countPositiveFeedbackPeercentage()}
        />
      </Section>
    </div>
  );
};

export default App;
