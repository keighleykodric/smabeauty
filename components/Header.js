import { motion } from "framer-motion";
import Link from "next/link";
// import Button from "https://framer.com/m/Button-v2hH.js@4tkWJXqtGg11ECDenDba";

import { Button } from "./Button";

export function Header({ menu }) {
  return (
    <motion.div className="header">
      <Link href="/">
        <Button
          // Using default values:
          click={menu}
          label="SMAbeauty"

        />
      </Link>
      <Button
        // Using default values:
        click={menu}
        label="Menu"
      />
    </motion.div>
  );
}
