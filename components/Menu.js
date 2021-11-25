import Link from "next/link";
import { Button } from "./Button";

// Smart Components
// import Button from "https://framer.com/m/Button-v2hH.js@4tkWJXqtGg11ECDenDba";

export function Menu({ children, close }) {
  return (
    <div onClick={close} className="menu">
      <Link href="/" passHref>
        <Button href="/" label="Home"  variant="button button-primary-text" icon={false}>
          Home
        </Button>
      </Link>
      <Link href="/brows" passHref>
        <Button href="/" label="Brows" icon={false} variant="Text-Primary" />
      </Link>
      <Link href="/eyes" passHref>
        <Button href="/" label="Eyes" icon={false} variant="Text-Primary" />
      </Link>
      <Link href="/lips" passHref>
        <Button href="/" label="Lips" icon={false} variant="Text-Primary" />
      </Link>
      <Link href="/freckles" passHref>
        <Button href="/" label="Freckles" icon={false} variant="Text-Primary" />
      </Link>
      <Link href="/tooth-gems" passHref>
        <Button href="/" label="Tooth Gems" icon={false} variant="Text-Primary" />
      </Link>
      <Button href="/" id={"0002"} label="Book Now!" icon={false} variant="Primary" />
      <Button href="/"
        click={close}
        icon={false}
        label="Close Menu"
        variant="Text-Default"
      />
    </div>
  );
}

Menu.defaultProps = {
};
