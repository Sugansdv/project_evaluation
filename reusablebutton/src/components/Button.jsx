import React from "react";
import PropTypes from "prop-types";
import "./Button.css";

const Button = ({
  label,
  variant,
  onClick,
  icon,
  iconPosition = "left",
  disabled,
  loading,
}) => {
  const classes = `custom-btn ${variant} ${disabled || loading ? "disabled" : ""}`;

  return (
    <button className={classes} onClick={onClick} disabled={disabled || loading}>
      {loading && <span className="spinner-border spinner-border-sm me-2" />}
      {!loading && icon && iconPosition === "left" && <span className="me-2">{icon}</span>}
      {label}
      {!loading && icon && iconPosition === "right" && <span className="ms-2">{icon}</span>}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  variant: PropTypes.string,
  onClick: PropTypes.func,
  icon: PropTypes.element,
  iconPosition: PropTypes.oneOf(["left", "right"]),
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
};

Button.defaultProps = {
  variant: "primary",
  onClick: () => {},
  icon: null,
  iconPosition: "left",
  disabled: false,
  loading: false,
};

export default Button;
