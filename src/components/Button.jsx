import PropTypes from "prop-types";

const RegisterButton = ({
  children,
  position,
  navigate,
  width,
  fontSize,
  fontWeight,
}) => {
  return (
    <>
      <button
        className={`${position} rounded-1 lime-green border border-0 button ${
          width && fontSize && fontWeight
            ? "w-100 fs-6 fw-medium"
            : ""
        }`}
        type="button"
        onClick={navigate}
      >
        {children}
      </button>
    </>
  );
};

RegisterButton.propTypes = {
  children: PropTypes.string,
  position: PropTypes.string,
  navigate: PropTypes.func,
  width: PropTypes.string,
  fontSize: PropTypes.string,
  fontWeight: PropTypes.string,
};

export default RegisterButton;
