import { motion } from "framer-motion";
import styles from "./Component.module.scss";

export const Component = ({ children, className, ...rest }) => {
  let componentClassName = styles.component;

  if (className) {
    componentClassName = `${componentClassName} ${className}`;
  }

  return (
    <motion.div {...rest} className={componentClassName}>
      {children}
    </motion.div>
  );
};

Component.defaultProps = {};
