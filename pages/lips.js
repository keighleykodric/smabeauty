import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";
import { Header } from "../components/Header";
import { Menu } from "../components/Menu";
import { Divider } from "../components/Divider";
import { Care } from "../components/Care";
import { Copyright } from "../components/Copyright/Copyright";
import { Faq } from "../components/Faq";
import { ServiceList } from "../components/ServiceList";
import { Card } from "../components/Card";

import styles from "../styles/Home.module.scss";

export default function Home() {
  const [menu, showMenu] = useState(false);
  return (
    <>
      <Head>
        <title>SMAbeauty - Lips</title>
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
          <motion.div className="title-1">Lips</motion.div>
          <Card
            title="Lip Blush"
            img="/images/lip-blush.png"
            description={`Using a cosmetic tattoo machine to create a natural all over lip colour. This procedure can add upto 2mm in lip shape, and create fuller natural looking lips.`}
            actions
          >
            <div className="title-3">First Session - $300</div>
            <div className="title-3">Second Session - $300</div>
            <div className="title-3">1 year Refesh - $250</div>
            <div className="title-3">2 year Refesh - $300</div>
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
