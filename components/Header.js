import { motion } from "framer-motion";
import Link from "next/link";
import Button from "https://framer.com/m/Button-v2hH.js@4tkWJXqtGg11ECDenDba";

export function Header({ menu }) {
  return (
    <motion.div className="header">
      <Link href="/">
        <Button
          icon={false}
          icon1="send"
          label="SMAbeauty"
          label1={true}
          variant="Primary"
        />
      </Link>
      <Button
        // Using default values:
        click={menu}
        icon={false}
        icon1="send"
        label="Menu"
        label1={true}
        variant="Primary"
      />
    </motion.div>
  );
}
