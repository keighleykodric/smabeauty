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
        <title>SMAbeauty - Tooth Gems</title>
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
            title="Tooth Gems"
            img="/images/tooth-gems.png"
          >
            <div className="title-3">One Gem - $50</div>
            <div className="title-3">Two Gems - $75</div>
          </Services>

          {/* <FAQ />
          <div className="card">
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
          </div> */}
          <ServiceList />
          <Copyright />
        </div>
      </div>
    </>
  );
}
