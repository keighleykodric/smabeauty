import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";
import { Header } from "../components/Header";
import { Menu } from "../components/Menu";
import { Divider } from "../components/Divider";
import { Care } from "../components/Care";
import { Copyright } from "../components/Copyright";
import { Faq } from "../components/Faq";
import { ServiceList } from "../components/ServiceList";
import { Card } from "../components/Card";

import styles from "../styles/Home.module.scss";

export default function Home() {
  const [menu, showMenu] = useState(false);
  return (
    <>
      <Head>
        <title>SMAbeauty - Eyes</title>
        <meta
          name="description"
          content="Vancouver Island's Cosmetic Tattoo Specialist"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <motion.div className={menu ? "" : styles["hide-menu"]}>
        <Menu close={() => showMenu(false)} />
      </motion.div>

      <motion.div className={menu ? "" : ""}>
        <Header menu={() => showMenu(!menu)} />
      </motion.div>
      <motion.div className={styles["main"]}>
        <motion.div className={menu ? "" : styles.content}>
          <motion.div className="title-1">Eyes</motion.div>
          <Card
            title="Lash Enhancement"
            img="/images/lash-enhancement.png"
            description={`Using a cosmetic tattoo machine to create a soft shading technique throughout the eyelash area. This technique can create density and give the appearance of a fuller eyelash base. Very natural and suitable for clients that aren't wanting to commit to eyeliner.`}
            actions
          >
            <motion.div className="title-3">First Session - $150</motion.div>
            <motion.div className="title-3">Second Session - $125</motion.div>
            <motion.div className="title-3">1 year Refesh - $150</motion.div>
            <motion.div className="title-3">2 year Refesh - $200</motion.div>
          </Card>
          <Card
            title="Top Liner"
            img="/images/top-liner.png"
            description={`Using a cosmetic tattoo machine to create a liquid liner look. Thickness and style( wing or no wing) will be decided during the consultation.`}
            actions
          >
            <motion.div className="title-3">First Session - $200</motion.div>
            <motion.div className="title-3">Second Session - $200</motion.div>
            <motion.div className="title-3">1 year Refesh - $200</motion.div>
            <motion.div className="title-3">2 year Refesh - $300</motion.div>
          </Card>
          <Card
            title="Bottom Liner"
            img="/images/blade.png"
            description={`Using a cosmetic tattoo machine to create a soft powder liner.`}
            actions
          >
            <motion.div className="title-3">First Session - $100</motion.div>
            <motion.div className="title-3">Second Session - $100</motion.div>
            <motion.div className="title-3">1 year Refesh - $100</motion.div>
            <motion.div className="title-3">2 year Refesh - $150</motion.div>
          </Card>
          <Card
            title="Combo Liner"
            img="/images/combo-liner.png"
            description={`Same technique approach as the top liner procedure, adding on the bottom liner procedure during the same session.`}
            actions
          >
            <motion.div className="title-3">First Session - $250</motion.div>
            <motion.div className="title-3">Second Session - $200</motion.div>
            <motion.div className="title-3">1 year Refesh - $250</motion.div>
            <motion.div className="title-3">2 year Refesh - $300</motion.div>
          </Card>
          <Divider />
          <Faq />
          <Care />
          <Divider />
          <ServiceList />
          <Copyright />
        </motion.div>
      </motion.div>
    </>
  );
}
