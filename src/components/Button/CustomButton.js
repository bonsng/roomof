import classNames from "classnames";
import styles from "./CustomButton.module.css";

function CustomButton({ variant, className, as, ...restProps }) {
  if (as === "div") {
    return (
      <div
        {...restProps}
        className={classNames(
          styles.button,
          variant && styles[variant],
          className
        )}
      />
    );
  }

  return (
    <button
      {...restProps}
      className={classNames(
        styles.button,
        variant && styles[variant],
        className
      )}
    />
  );
}

export default CustomButton;
