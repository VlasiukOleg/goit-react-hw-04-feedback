import { OptionsBtn, OptionsBtnWrapper } from './FeedbackOptions.styled.';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  return (
    <OptionsBtnWrapper>
      {Object.keys(options).map(option => (
        <OptionsBtn
          key={option}
          option={option}
          type="button"
          onClick={() => {
            onLeaveFeedback(option);
          }}
        >
          {option}
        </OptionsBtn>
      ))}
    </OptionsBtnWrapper>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.exact({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }),
  onLeaveFeedback: PropTypes.func,
};
