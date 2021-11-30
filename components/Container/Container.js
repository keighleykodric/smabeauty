import { motion } from "framer-motion";
import styles from "./Container.module.scss";

export const Container = ({ children, className, ...rest }) => {
  let containerClassName = styles.container;

  if (className) {
    containerClassName = `${containerClassName} ${className}`;
  }

  return (
    <motion.div {...rest} className={containerClassName}>
      {children}
    </motion.div>
  );
};

Container.defaultProps = {};
