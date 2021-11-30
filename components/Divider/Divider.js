import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./Divider.module.scss";

export const Divider = ({ children, className, ...rest }) => {
  let dividerClassName = styles.divider;

  if (className) {
    dividerClassName = `${dividerClassName} ${className}`;
  }

  return (
    <motion.div {...rest} className={dividerClassName}>
      <Image
        src="/images/sma-logo-sm.png"
        alt="SMAbeauty Cosmetic Tattooing"
        layout="fixed"
        sizes="100vw"
        width="36px"
        height="36px"
      />
    </motion.div>
  );
};

export default Divider;
