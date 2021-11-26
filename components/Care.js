import { Button } from "./Button";
import { motion } from "framer-motion";

export function Care({ children, title, description, img, url }) {
  return (
    <motion.div className="care">
      <div className="card">
        {/* <Image src="/images/banner.png" alt="banner" width="512px" height="320px" /> */}
        <div className="card-header">
          <div className="card-title">
            <div className="title-2">Pre Care</div>
            <div className="body">{`description`}</div>
          </div>
          <div className="divider"></div>
        </div>

        <div className="card-content">
          <Button
            // click={() =>
            //   window.open(
            //     "https://booking.appointy.com/en-US/smabeauty/bookings/service",
            //     "_blank"
            //   )
            // }
            label="Learn More"
            variant="button-secondary"
          />
        </div>
      </div>
      <div className="card">
        <div className="card-header">
          <div className="card-title">
            <div className="title-2">After Care</div>
            <div className="body">{`description`}</div>
          </div>
          <div className="divider"></div>
        </div>

        <div className="card-content">
          <Button
            // click={() =>
            //   window.open(
            //     "https://booking.appointy.com/en-US/smabeauty/bookings/service",
            //     "_blank"
            //   )
            // }
            label="Learn More"
            variant="button-secondary"
          />
        </div>
      </div>
    </motion.div>
  );
}

Care.defaultProps = {
  img: "/images/banner.png",
  title: "Service Name",
  description: "",
  href: "",
};