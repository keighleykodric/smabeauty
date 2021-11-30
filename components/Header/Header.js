import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "../Button";

import styles from "./Header.module.scss";

export const Header = ({ menu, className, ...rest }) => {
  let headerClassName = styles.header;

  if (className) {
    headerClassName = `${headerClassName} ${className}`;
  }

  return (
    <motion.div {...rest} className={headerClassName}>
      <Link href="/" passHref>
        <Button label="SMAbeauty" />
      </Link>
      <Button click={menu} label="Menu" variant="Text-Primary" />
    </motion.div>
  );
};

Header.defaultProps = {};
