import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export function ServiceItem({ img, click, title, description }) {
  const [hover, isHover] = useState(true);

  return (
    <motion.div
      onClick={click}
      className="service-item"
      onMouseOver={() => isHover(true)}
      onMouseOut={() => isHover(false)}
    >
      <motion.div className="service-item-image-container">
        <motion.img
          className="service-item-image"
          src={img}
          width={hover ? "64px" : "48px"}
          height={hover ? "64px" : "48px"}
        />
        {/* <Image
          src={img}
          alt={title}
          width={hover ? "64px" : "48px"}
          height={hover ? "64px" : "48px"}
        /> */}
      </motion.div>
      <motion.div className="service-item-content">
        <motion.div className="service-item-title">{title}</motion.div>
        <motion.div className="service-item-desciption">
          {description}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
