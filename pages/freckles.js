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
        <title>SMAbeauty - Freckles</title>
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
          <motion.div className="title-1">Freckles</motion.div>
          <Card title="Beautymark" img="/images/beautymark.png" actions>
            <div className="title-3">First Session - $75</div>
            <div className="title-3">Second Session - $25</div>
          </Card>
          <Card title="Sunkissed Face" img="/images/sunkissed-face.png" actions>
            <div className="title-3">First Session - $150</div>
            <div className="title-3">Second Session - $50</div>
          </Card>
          <Card title="Sunkissed nose" img="/images/sunkissed-nose.png" actions>
            <div className="title-3">First Session - $100</div>
            <div className="title-3">Second Session - $50</div>
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
