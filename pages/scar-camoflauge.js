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
// import Button from "https://framer.com/m/Button-v2hH.js@4tX8nO4PmAUzaEc23X23";

export default function Home() {
  const [menu, showMenu] = useState(false);
  return (
    <>
      <Head>
        <title>SMAbeauty - Scar Camoflauge</title>
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
            title="Eye Liner"
            img="/images/micro.png"
            description={`Microblading is a tattooing technique that mimics your natural
            hair. It's preformed using a special tool to add pigment to your
            skin. The pigment is semi-permanent and will need annual upkeep.`}
          >
            <div className="title-3">First Session - $225</div>
            <div className="title-3">Second Session - $225</div>
            <div className="title-3">1 year Refesh - $150</div>
            <div className="title-3">2 year Refesh - $250</div>
          </Services>
          <Services
            title="Ombre"
            img="/images/ombre.png"
            description={`We create our Ombre brows using soft shading technique in the eyebrow area. This technique adds density to the brow area. And will result in z fuller makeup styled brow.`}
          >
            <div className="title-3">First Session - $200</div>
            <div className="title-3">Second Session - $200</div>
            <div className="title-3">1 year Refesh - $200</div>
            <div className="title-3">2 year Refesh - $300</div>
          </Services>
          <Services
            title="Blade & Shade"
            img="/images/blade.png"
            description={`Blade & shade is a combination of microblading with machine powdered shading. We recommended this technique for clients with minimal to no brow hair. Covering up previous cosmetic tattoos works well with this technique.`}
          >
            <div className="title-3">First Session - $275</div>
            <div className="title-3">Second Session - $275</div>
            <div className="title-3">1 year Refesh - $175</div>
            <div className="title-3">2 year Refesh - $275</div>
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
