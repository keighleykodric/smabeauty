import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";
import { Header } from "../components/Header";
import { Menu } from "../components/Menu";
import { Divider } from "../components/Divider";
import { Care } from "../components/Care";
import { Copyright } from "../components/Copyright";
import { FAQ } from "../components/FAQ";
import { ServiceList } from "../components/ServiceList";
import { Services } from "../components/Services";

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

      <div className={menu ? "" : "hide-menu"}>
        <Menu close={() => showMenu(false)} />
      </div>

      <div className={menu ? "" : ""}>
        <Header menu={() => showMenu(!menu)} />
      </div>
      <div className="main">
        <div className={menu ? "" : "content"}>
          <motion.div className="title-1">Lips</motion.div>
          <Services
            title="Lip Blush"
            img="/images/lip-blush.png"
            description={`Using a cosmetic tattoo machine to create a natural all over lip colour. This procedure can add upto 2mm in lip shape, and create fuller natural looking lips.`}
          >
            <div className="title-3">First Session - $300</div>
            <div className="title-3">Second Session - $300</div>
            <div className="title-3">1 year Refesh - $250</div>
            <div className="title-3">2 year Refesh - $300</div>
          </Services>
          <Divider />
          <FAQ />
          <Care />
          <Divider />
          <ServiceList />
          <Copyright />
        </div>
      </div>
    </>
  );
}
