import { useState } from "react";
import { motion } from "framer-motion";
import { CaretRight, CaretDown } from "phosphor-react";
import useCollapse from "react-collapsed";

import styles from "./Collapse.module.scss";

export function Collapse({ children, title, description, img, url, ...rest }) {
  const [isExpanded, setExpanded] = useState(false);
  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });

  return (
    <div {...rest} className={styles.panel}>
      <motion.div
        className={styles.panelHeader}
        {...getToggleProps({
          onClick: () => setExpanded((prevExpanded) => !prevExpanded),
        })}
      >
        <motion.div className="panelIcon">
          {isExpanded ? <CaretDown size={24} /> : <CaretRight size={24} />}
        </motion.div>
        {title}
      </motion.div>
      <motion.div className={styles.panelContent} {...getCollapseProps()}>
        {children}
      </motion.div>
    </div>
  );
}

export default Collapse;

Collapse.defaultProps = {
  title: "Collapsible Row",
};
