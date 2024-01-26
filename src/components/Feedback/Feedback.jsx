import css from "./Feedback.module.css"

function Feedback({ options, leaveFeedback }) {
  return (
    <ul className={css.feedbackList}>
      {options.map(option => {
        return (
          <li key={option} className={css.option}>
            <button
              name={option}
              onClick={leaveFeedback}
              type="button"
              className={css.btnFeedback}
            >
              {option}
            </button>
          </li>
        );
      })}
    </ul>
  );
}

export default Feedback;
