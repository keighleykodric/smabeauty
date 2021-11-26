import Link from "next/link";
import Image from "next/image";

export function Divider({ children }) {
  return (
    
          <Image
            src="/images/sma-logo.png"
            alt="Mapping"
            layout="fixed"
            sizes="100vw"
            width="36px"
            height="36px"
          />
  );
}

Divider.defaultProps = {
  // href: "",
};