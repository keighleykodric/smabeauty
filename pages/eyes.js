import { useState } from "react";
import Head from "next/head";
import { Header } from "../components/Header";
import { Menu } from "../components/Menu";
import { Copyright } from "../components/Copyright";
import { FAQ } from "../components/FAQ";
import { ServiceList } from "../components/ServiceList";
import { Services } from "../components/Services";

// Smart Components
import { Button } from "../components/Button";
// import Button from "https://framer.com/m/Button-v2hH.js@4tX8nO4PmAUzaEc23X23";

export default function Home() {
  const [menu, showMenu] = useState(false);
  return (
    <>
      <Head>
        <title>SMAbeauty - Eyes</title>
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
            title="Lash Enhancement"
            img="/images/lash-enhancement.png"
            description={`Using a cosmetic tattoo machine to create a soft shading technique throughout the eyelash area. This technique can create density and give the appearance of a fuller eyelash base. Very natural and suitable for clients that aren't wanting to commit to eyeliner.`}
          >
            <div className="title-3">First Session - $150</div>
            <div className="title-3">Second Session - $125</div>
            <div className="title-3">1 year Refesh - $150</div>
            <div className="title-3">2 year Refesh - $200</div>
          </Services>
          <Services
            title="Top Liner"
            img="/images/top-liner.png"
            description={`Using a cosmetic tattoo machine to create a liquid liner look. Thickness and style( wing or no wing) will be decided during the consultation.`}
          >
            <div className="title-3">First Session - $200</div>
            <div className="title-3">Second Session - $200</div>
            <div className="title-3">1 year Refesh - $200</div>
            <div className="title-3">2 year Refesh - $300</div>
          </Services>
          <Services
            title="Bottom Liner"
            img="/images/blade.png"
            description={`Using a cosmetic tattoo machine to create a soft powder liner.`}
          >
            <div className="title-3">First Session - $100</div>
            <div className="title-3">Second Session - $100</div>
            <div className="title-3">1 year Refesh - $100</div>
            <div className="title-3">2 year Refesh - $150</div>
          </Services>
          <Services
            title="Combo Liner"
            img="/images/combo-liner.png"
            description={`Same technique approach as the top liner procedure, adding on the bottom liner procedure during the same session.`}
          >
            <div className="title-3">First Session - $250</div>
            <div className="title-3">Second Session - $200</div>
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
