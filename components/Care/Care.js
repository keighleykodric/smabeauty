import { motion } from "framer-motion";
import { Button } from "../Button/Button";
import { Card } from "../Card/Card";

import styles from "./Care.module.scss";

export const Care = ({ children, className, ...rest }) => {
  let careClassName = styles.care;

  if (className) {
    careClassName = `${careClassName} ${className}`;
  }

  return (
    <motion.div className={careClassName}>
      <Card title="Pre Care">
        <Button
          // click={() =>
          //   window.open(
          //     "https://booking.appointy.com/en-US/smabeauty/bookings/service",
          //     "_blank"
          //   )
          // }
          label="Learn More"
          variant="Secondary"
        />
      </Card>
      <Card title="After Care">
        <Button label="Learn More" variant="Secondary" />
      </Card>
    </motion.div>
  );
};

Care.defaultProps = {};
