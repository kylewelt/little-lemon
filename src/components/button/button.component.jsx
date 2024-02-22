import "./button.styles.scss";

const Button = ({ children, isLoading, ...otherProps }) => {
  return (
    <button className="button-container" disabled={isLoading} {...otherProps}>
      {isLoading ? <div className="spinner-container"></div> : children}
    </button>
  );
};

export default Button;
