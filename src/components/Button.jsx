import PropTypes from "prop-types";

const Button = ({
  children,
  position,
  onClick,
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
        type="submit"
        onClick={onClick}
      >
        {children}
      </button>
    </>
  );
};

Button.propTypes = {
  children: PropTypes.string,
  position: PropTypes.string,
  navigate: PropTypes.func,
  width: PropTypes.bool,
  fontSize: PropTypes.bool,
  fontWeight: PropTypes.bool,
};

export default Button;
