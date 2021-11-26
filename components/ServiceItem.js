import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export function ServiceItem({ img, click, title, description, href }) {
  const [hover, isHover] = useState(true);

  return (
    <Link href={href} passHref>
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
            alt={title}
          />
        </motion.div>
        <motion.div className="service-item-content">
          <motion.div className="service-item-title">{title}</motion.div>
          <motion.div className="service-item-description">
            {description}
          </motion.div>
        </motion.div>
      </motion.div>
    </Link>
  );
}

ServiceItem.defaultProps = {
  img: "/images/banner.png",
  title: "Service Name",
  description: "Brief description",
  href: "",
};