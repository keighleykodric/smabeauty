import { motion } from "framer-motion";
import { FacebookLogo, InstagramLogo } from "phosphor-react";

import styles from "./Copyright.module.scss";

export const Copyright = ({ children, className, ...rest }) => {
  const date = new Date().getFullYear();
  
  let copyrightClassName = styles.copyright;
  if (className) {
    copyrightClassName = `${copyrightClassName} ${className}`;
  }

  return (
    <motion.div {...rest} className={copyrightClassName}>
        <motion.div className={styles.social}>
          <FacebookLogo
            color="#FF445C"
            weight="fill"
            size={48}
            onClick={() =>
              window.open("https://facebook.com/smabeauty", "_blank")
            }
          />
          <InstagramLogo
            color="#FF445C"
            weight="fill"
            size={48}
            onClick={() =>
              window.open("https://instagram.com/smabeauty", "_blank")
            }
          />
        </motion.div>
        Copyright SMAbeauty {date}
    </motion.div>
  );
};

Copyright.defaultProps = {};

export default Copyright;
