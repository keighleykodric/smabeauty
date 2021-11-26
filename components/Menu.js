import Link from "next/link";
// import { Button } from "./Button";

// Smart Components
import Button from "https://framer.com/m/Button-v2hH.js@4tkWJXqtGg11ECDenDba";

export function Menu({ children, close }) {
  return (
    <div onClick={close} className="menu">

        <Button
          href="/"
          label="Home"
          variant="button-primary-text"
        >
          Home
        </Button>

        <Button
          href="/brows"
          label="Brows"
          variant="button-primary-text"
        />

        <Button
          href="/eyes"
          label="Eyes"
          variant="button-primary-text"
        />

        <Button
          href="/lips"
          label="Lips"
          variant="button-primary-text"
        />

        <Button
          href="/freckles"
          label="Freckles"
          variant="button-primary-text"
        />

        <Button
          href="/tooth-gems"
          label="Tooth Gems"
          variant="button button-primary-text"
        />

        <Button
          href="/tiny-tattoos"
          label="Tiny Tattoos"
          variant="button button-primary-text"
        />

        <Button
          href="/scar-camoflauge"
          label="Scar Camoflauge"
          variant="button button-primary-text"
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
        variant="button-primary"
      />
      <Button
        href="/"
        click={close}
        label="Close Menu"
        variant="button-secondary"
      />
    </div>
  );
}

Menu.defaultProps = {
};
