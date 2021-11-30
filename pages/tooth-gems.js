import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";
import { Header } from "../components/Header";
import { Menu } from "../components/Menu";
import { Divider } from "../components/Divider";
import { Copyright } from "../components/Copyright/Copyright";
import { ServiceList } from "../components/ServiceList";
import { Card } from "../components/Card";

import styles from "../styles/Home.module.scss";

export default function Home() {
  const [menu, showMenu] = useState(false);
  return (
    <>
      <Head>
        <title>SMAbeauty - Tooth Gems</title>
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
          <motion.div className="title-1">Tooth Gems</motion.div>
          <Card title="Tooth Gems" img="/images/tooth-gems.png" actions>
            <div className="title-3">One Gem - $50</div>
            <div className="title-3">Two Gems - $75</div>
          </Card>
          <Divider />
          <ServiceList />
          <Copyright />
        </div>
      </div>
    </>
  );
}
