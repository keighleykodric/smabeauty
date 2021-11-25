import Link from "next/link";

// Smart Components
import Button from "https://framer.com/m/Button-v2hH.js@4tkWJXqtGg11ECDenDba";

export function Menu({ children, close }) {
  return (
    <div onClick={close} className="menu">
      <Link href="/">
        <Button label="Home" icon={false} variant="Text-Primary" />
      </Link>
      <Link href="/brows">
        <Button label="Brows" icon={false} variant="Text-Primary" />
      </Link>
      <Link href="/eyes">
        <Button label="Eyes" icon={false} variant="Text-Primary" />
      </Link>
      <Link href="/lips">
        <Button label="Lips" icon={false} variant="Text-Primary" />
      </Link>
      <Link href="/freckles">
        <Button label="Freckles" icon={false} variant="Text-Primary" />
      </Link>
      <Link href="/tooth-gems">
        <Button label="Tooth Gems" icon={false} variant="Text-Primary" />
      </Link>
      <Button id={"0002"} label="Book Now!" icon={false} variant="Primary" />
      <Button
        click={close}
        icon={false}
        label="Close Menu"
        variant="Text-Default"
      />
    </div>
  );
}
