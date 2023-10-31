import PropTypes from 'prop-types';

const RegisterButton = ({ text, position }) => {
  return (
    <>
      <button
        className={`${position} rounded-1 lime-green border border-0 button`}
        type="button"
      >
        {text}
      </button>
    </>
  );
};

RegisterButton.propTypes = {
  text: PropTypes.string,
  position: PropTypes.string,
};

export default RegisterButton;
