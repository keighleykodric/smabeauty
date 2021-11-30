import { motion } from "framer-motion";
import PropTypes from "prop-types";
import Link from "next/link";
import FramerButton from "https://framer.com/m/Button-Xr7C.js@FAxi2sXoF6XGxdL2R8nJ";
import styles from "./Button.module.scss";

// const variants = {
//   primary: styles.primary,
//   "primary-text": styles["primary-text"],
//   secondary: styles.secondary,
// };

export const Button = ({
  iconLeft,
  label,
  click,
  href,
  variant
}) => {

  return (
    <Link href={href} passHref>
      <FramerButton label={label} variant={variant} click={click} />
    </Link>


  );
};

Button.propTypes = {
  href: PropTypes.string,
  label: PropTypes.string,
  variant: PropTypes.oneOf([
    "Primary",
    "Text-Primary",
    "Text-Default",
    "Secondary",
  ]),
};

Button.defaultProps = {
  href: "",
  label: "button",
  variant: "Primary",
};

// Button.variants = variants;

export default Button;
