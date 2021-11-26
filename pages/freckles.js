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
        <title>SMAbeauty - Freckles</title>
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
          <motion.div className="title-1">Freckles</motion.div>
          <Services title="Beautymark" img="/images/beautymark.png">
            <div className="title-3">First Session - $75</div>
            <div className="title-3">Second Session - $25</div>
          </Services>
          <Services title="Sunkissed Face" img="/images/sunkissed-face.png">
            <div className="title-3">First Session - $150</div>
            <div className="title-3">Second Session - $50</div>
          </Services>
          <Services title="Sunkissed nose" img="/images/sunkissed-nose.png">
            <div className="title-3">First Session - $100</div>
            <div className="title-3">Second Session - $50</div>
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
