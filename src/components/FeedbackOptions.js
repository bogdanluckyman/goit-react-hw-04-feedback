export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      {options.map(option => (
        <Button
          key={option}
          updateClics={onLeaveFeedback}
          buttonText={option.charAt(0).toUpperCase() + option.slice(1)}
        />
      ))}
    </div>
  );
};

const Button = ({ updateClics, buttonText }) => {
  return (
    <button onClick={() => updateClics(buttonText.toLowerCase())}>
      {buttonText}
    </button>
  );
};
