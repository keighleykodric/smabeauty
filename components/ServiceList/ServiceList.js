import { motion } from "framer-motion";
import Link from "next/link";
import { Card } from "../Card";
import Service from "https://framer.com/m/Service-O9oU.js@GDB3hFGVUPnhlFKq4p8l";

import styles from "./ServiceList.module.scss";

export const ServiceList = ({ children, className, ...rest }) => {
  let serviceListClassName = styles.serviceList;

  if (className) {
    serviceListClassName = `${serviceListClassName} ${className}`;
  }

  return (
    <motion.div className={serviceListClassName} {...rest}>
      <Card title="ServiceList">
        <Link href="/brows" passHref>
          <Service className={styles.service} />
        </Link>
        <Link href="/eyes" passHref>
          <Service className={styles.service} variant="Eyes" />
        </Link>
        <Link href="/lips" passHref>
          <Service className={styles.service} variant="Lips" />
        </Link>
        <Link href="/tooth-gems" passHref>
          <Service className={styles.service} variant="Tooth Gems" />
        </Link>
        <Link href="/tiny-tattoos" passHref>
          <Service className={styles.service} variant="Tiny Tattoos" />
        </Link>
        <Link href="/scarcamouflage" passHref>
          <Service className={styles.service} variant="Scar Camouflage" />
        </Link>
      </Card>
    </motion.div>
  );
};

ServiceList.defaultProps = {};
