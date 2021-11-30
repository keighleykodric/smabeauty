import { motion } from "framer-motion";
import { Button } from "../Button";
import styles from "./Card.module.scss";

const CardHeader = ({ title, description, className }) => {
  let cardClassName = styles.card;

  if (className) {
    cardClassName = `${cardClassName} ${className}`;
  }
  return (
    <motion.div className={styles.cardHeader}>
      <motion.div className={styles.cardTitle}>
        <motion.div className={"title-2"}>{title}</motion.div>
        <motion.div className="body">{description}</motion.div>
      </motion.div>
      <motion.div className={styles.divider}></motion.div>
    </motion.div>
  );
};

const CardImage = ({ title, img }) => {
  return (
    <motion.div className={styles.serviceItemImageContainer}>
      <motion.img className={styles.serviceItemImage} src={img} alt={title} />
    </motion.div>
  );
};

const CardContent = ({ children, title, description, ...rest }) => {
  return <motion.div className={styles.cardContent}>{children}</motion.div>;
};

const CardActions = ({ children, label, url, ...rest }) => {
  return (
    <motion.div className={styles.cardActions}>
      <Button click={() => window.open(url, "_blank")} label={label} />
      {children}
    </motion.div>
  );
};

export function Card({
  children,
  title,
  description,
  img,
  url,
  actionLabel,
  actions,
  ...rest
}) {
  return (
    <motion.div className={styles.card}>
      {img === "" ? null : <CardImage title={title} img={img} />}
      <CardHeader title={title} description={description} />
      <CardContent>{children}</CardContent>
      {actions ? <CardActions label={actionLabel} url={url} /> : null}
    </motion.div>
  );
}

Card.defaultProps = {
  img: "",
  title: "Service Name",
  description: "",
  actions: false,
  actionLabel: "Book Now",
  url: "https://booking.appointy.com/en-US/smabeauty/bookings/service",
};

export default Card;
