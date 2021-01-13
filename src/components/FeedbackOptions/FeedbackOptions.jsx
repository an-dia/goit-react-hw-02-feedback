import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

function FeedbackOptions({ onLeaveFeedback }) {
  return (
    <>
      <button
        className={s.button}
        type="button"
        id="good"
        onClick={onLeaveFeedback}
      >
        Good
      </button>
      <button
        className={s.button}
        type="button"
        id="neutral"
        onClick={onLeaveFeedback}
      >
        Neutral
      </button>
      <button
        className={s.button}
        type="button"
        id="bad"
        onClick={onLeaveFeedback}
      >
        Bad
      </button>
    </>
  );
}

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
