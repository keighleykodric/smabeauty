import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Header } from "../components/Header";
import { Menu } from "../components/Menu";
import { Divider } from "../components/Divider";
import { Card } from "../components/Card";
import { Copyright } from "../components/Copyright/Copyright";
import { ServiceList } from "../components/ServiceList";
import { Phone, Envelope, MapPin } from "phosphor-react";

import styles from "../styles/Home.module.scss";

export default function Home() {
  const [menu, showMenu] = useState(false);
  return (
    <>
      <Head>
        <title>SMAbeauty</title>
        <meta
          name="description"
          content="Vancouver Island's Cosmetic Tattoo Specialist"
        />
        <meta name="theme-color" content="#ffebed" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <div className={menu ? styles.menu : styles["hide-menu"]}>
        <Menu close={() => showMenu(false)} />
      </div>

      <div className={menu ? "" : ""}>
        <Header menu={() => showMenu(!menu)} />
      </div>
      <div className={styles.main}>
        {/* <div className={menu ? "hide-content" : "banner"}>
          <Image
            src="/images/banner.png"
            alt="Mapping"
            layout="fixed"
            sizes="100vw"
            width="1920px"
            height="1281px"
          /> 
          <Banner />
        </div> */}
        <div className={menu ? "hide-content" : styles.content}>
          <Image
            src="/images/sma-logo.png"
            alt="Mapping"
            layout="fixed"
            sizes="100vw"
            width="256px"
            height="256px"
          />
          <motion.div className="title-1 center">{`Vancouver Island's Cosmetic Tattoo Specialist`}</motion.div>
          <ServiceList />
          <Divider />
          <Card title="About">
            <motion.div className={styles["image-container"]}>
              <Image
                src="/images/shan.png"
                alt="Shan"
                height="239px"
                width="137px"
              />
            </motion.div>
            Hands down the best on the island, just ask our clients. We approach
            every <b>cosmetic tattoo</b> procedure with the up most care and
            professionalism. Our artist at SMA Beauty work with you to create a
            customized and professional experience. Our knowledgeable team of
            cosmetic tattoo artist use their creative and technical skills to
            offer a realistic cosmetic tattoo that will enhance your natural
            facial feature and personal style.
          </Card>
          <Divider />
          <Card title="Contact">
            <ul>
                <li>
                  <a href="tel:250-616-0854">
                    <Phone color="#FF445C" weight="fill" size={24} />
                    250-616-0854
                  </a>
                </li>
                <li>
                  <a href="mailto:smabeautybar@gmail.com">
                    <Envelope color="#FF445C" weight="fill" size={24} />
                    smabeautybar@gmail.com
                  </a>
                </li>
                <li>
                  <MapPin color="#FF445C" weight="fill" size={24} />
                  <address>
                    1420 Quadra St #202, <br></br>Victoria, BC, Canada <br></br>
                    V8W 2L1
                  </address>
                </li>
              </ul>
          </Card>
          <Copyright />
        </div>
      </div>
    </>
  );
}
