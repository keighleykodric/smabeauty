import { useState } from "react";
import Head from "next/head";
import { Header } from "../components/Header";
import { Menu } from "../components/Menu";
import { Button } from "../components/Button";
import { Copyright } from "../components/Copyright";
import { FAQ } from "../components/FAQ";
import { ServiceList } from "../components/ServiceList";
import { Services } from "../components/Services";

// Smart Components
// import Button from "https://framer.com/m/Button-v2hH.js@4tkWJXqtGg11ECDenDba";

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
          <Services
            title="Beautymark"
            img="/images/beautymark.png"
          >
            <div className="title-3">First Session - $75</div>
            <div className="title-3">Second Session - $25</div>
          </Services>
          <Services
            title="Sunkissed Face"
            img="/images/sunkissed-face.png"
          >
            <div className="title-3">First Session - $150</div>
            <div className="title-3">Second Session - $50</div>
          </Services>
          <Services
            title="Sunkissed nose"
            img="/images/sunkissed-nose.png"
          >
            <div className="title-3">First Session - $100</div>
            <div className="title-3">Second Session - $50</div>
          </Services>

          <FAQ />
          <div className="card">
            {/* <Image src="/images/banner.png" alt="banner" width="512px" height="320px" /> */}
            <div className="card-header">
              <div className="card-title">
                <div className="title-2">Pre Care</div>
                <div className="body">{`description`}</div>
              </div>
              <div className="divider"></div>
            </div>

            <div className="card-content">
              <Button
                icon={false}
                icon1="send"
                label="Learn More"
                label1={true}
                variant="Primary"
              />
            </div>
          </div>
          <div className="card">
            {/* <Image src="/images/banner.png" alt="banner" width="512px" height="320px" /> */}
            <div className="card-header">
              <div className="card-title">
                <div className="title-2">After Care</div>
                <div className="body">{`description`}</div>
              </div>
              <div className="divider"></div>
            </div>

            <div className="card-content">
              <Button
                icon={false}
                icon1="send"
                label="Learn More"
                label1={true}
                variant="Primary"
              />
            </div>
          </div>
          <ServiceList />
          <Copyright />
        </div>
      </div>
    </>
  );
}
