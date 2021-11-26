import Link from "next/link";
// import { Button } from "./Button";

// Smart Components;
import Button from "https://framer.com/m/Button-v2hH.js@Ov6Fct6PQvBgEbCDFQRF"

export function Menu({ children, close }) {
  return (
    <div onClick={close} className="menu">

        <Button
          href="/"
          label="Home"
          // variant="button-primary-text"
          variant="Text-Primary"
        >
          Home
        </Button>

        <Button
          href="/brows"
          label="Brows"
          variant="Text-Primary"
        />

        <Button
          href="/eyes"
          label="Eyes"
          variant="Text-Primary"
        />

        <Button
          href="/lips"
          label="Lips"
          variant="Text-Primary"
        />

        <Button
          href="/freckles"
          label="Freckles"
          variant="Text-Primary"
        />

        <Button
          href="/tooth-gems"
          label="Tooth Gems"
          variant="Text-Primary"
        />

        <Button
          href="/tiny-tattoos"
          label="Tiny Tattoos"
          variant="Text-Primary"
        />

        <Button
          href="/scar-camoflauge"
          label="Scar Camoflauge"
          variant="Text-Primary"
        />
      <Button
        // href="/"
        click={() =>
          window.open(
            "https://booking.appointy.com/en-US/smabeauty/bookings/service",
            "_blank"
          )
        }
        id={"0002"}
        label="Book Now!"
        // variant="button-primary"
      />
      <Button
        href="/"
        click={close}
        label="Close Menu"
        variant="Text-Default"
      />
    </div>
  );
}

Menu.defaultProps = {
};
