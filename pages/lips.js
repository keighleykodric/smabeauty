import { useState } from "react";
import Head from "next/head";
import { Header } from "../components/Header";
import { Menu } from "../components/Menu";
import { Copyright } from "../components/Copyright";
import { FAQ } from "../components/FAQ";
import { ServiceList } from "../components/ServiceList";
import { Services } from "../components/Services";

// Smart Components
import Service from "https://framer.com/m/Service-ukmH.js@gGeHTNEyEanrfRPN0A4K";
import Button from "https://framer.com/m/Button-v2hH.js@4tX8nO4PmAUzaEc23X23";

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