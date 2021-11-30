import { useState } from "react";
import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
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
        <title>SMAbeauty - Scar Camouflage</title>
        <meta
          name="description"
          content="Vancouver Island's Cosmetic Tattoo Specialist"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <div className={menu ? "" : styles["hide-menu"]}>
        <Menu close={() => showMenu(false)} />
      </div>

      <div className={menu ? "" : ""}>
        <Header menu={() => showMenu(!menu)} />
      </div>
      <div className="main">
        <div className={menu ? "" : styles.content}>
          <motion.div className="title-1">Scar Camoflauge</motion.div>
          <Card
            title="Scar Camoflauge"
            img="/images/micro.png"
            description={`Microblading is a tattooing technique that mimics your natural
            hair. It's preformed using a special tool to add pigment to your
            skin. The pigment is semi-permanent and will need annual upkeep.`}
            actions
          >
            <div className="title-3">First Session - $225</div>
            <div className="title-3">Second Session - $225</div>
            <div className="title-3">1 year Refesh - $150</div>
            <div className="title-3">2 year Refesh - $250</div>
          </Card>
          <Divider />
          <Faq />
          <Care />
          <Divider />
          <ServiceList />
          <Copyright />
        </div>
      </div>
    </>
  );
}
