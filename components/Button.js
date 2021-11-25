// import Button from "https://framer.com/m/Button-v2hH.js@rYlmgq5P8chVTWz7pDIy";
import Link from "next/link";

export function Button({ children, label, click, href, variant, iconLeft }) {
  return (
    <Link href={href} passHref>
      <button onClick={click} className={`button ${variant}`}>
        {iconLeft}
        {label}
      </button>
    </Link>
  );
}

Button.defaultProps = {
  href: "",
  lable: "button",
  variant: "button-primary-text",
};