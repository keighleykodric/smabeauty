import Link from "next/link";
import { motion } from "framer-motion";
// import Button from "https://framer.com/m/Button-v2hH.js@Ov6Fct6PQvBgEbCDFQRF";
import { Button } from "../Button";

import styles from "./Menu.module.scss";

export const Menu = ({ close, ...rest }) => {
  return (
    <div {...rest} onClick={close} className={styles.menu}>
      <Link href="/brows" passHref>
        <Button href="/brows" label="Brows" variant="Text-Primary" />
      </Link>
      <Link href="/eyes" passHref>
        <Button label="Eyes" variant="Text-Primary" />
      </Link>
      <Link href="/lips" passHref>
        <Button label="Lips" variant="Text-Primary" />
      </Link>
      <Link href="/freckles" passHref>
        <Button label="Freckles" variant="Text-Primary" />
      </Link>
      <Link href="/tooth-gems" passHref>
        <Button label="Tooth Gems" variant="Text-Primary" />
      </Link>
      <Link href="/tiny-tattoos" passHref>
        <Button label="Tiny Tattoos" variant="Text-Primary" />
      </Link>
      <Link href="/scar-camouflage" passHref>
        <Button label="Scar Camouflage" variant="Text-Primary" />
      </Link>
      <Button
        click={() =>
          window.open(
            "https://booking.appointy.com/en-US/smabeauty/bookings/service",
            "_blank"
          )
        }
        label="Book Now!"
      />
      <Button click={close} label="Close Menu" variant="Text-Default" />
    </div>
  );
};

Menu.defaultProps = {};
