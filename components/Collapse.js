import { useState } from "react";
import { motion } from "framer-motion";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { CaretRight, CaretDown } from "phosphor-react";
import useCollapse from "react-collapsed";

export function Collapse({ children, title, description, img, url }) {
  const [isExpanded, setExpanded] = useState(false);
  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });
  return (
    <motion.div className="panel">
      <motion.div
        className="panel-header"
        {...getToggleProps({
          onClick: () => setExpanded((prevExpanded) => !prevExpanded),
        })}
      >
      <motion.div className="panel-icon">
        {isExpanded ? <CaretDown size={24} /> : <CaretRight size={24} />}
      </motion.div>
        {title}
      </motion.div>
      <motion.div className="panel-content" {...getCollapseProps()}>
        {children}
      </motion.div>
    </motion.div>
  );
}

Collapse.defaultProps = {
  title: "Collapsable Row",
};