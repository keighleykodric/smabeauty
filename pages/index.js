import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "../components/Menu";
import { Copyright } from "../components/Copyright";
import { ServiceList } from "../components/ServiceList";
import { Phone, Envelope, MapPin } from "phosphor-react";

// Smart Components
// import Button from "https://framer.com/m/Button-v2hH.js@4tX8nO4PmAUzaEc23X23";
import { Header } from "../components/Header";

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
        <link rel="icon" href="/favicon.png" />
      </Head>

      <div className={menu ? "menu" : "hide-menu"}>
        <Menu close={() => showMenu(false)} />
      </div>

      <div className={menu ? "" : ""}>
        <Header menu={() => showMenu(!menu)} />
        {/* <Link href="/">
          <Button
            icon={false}
            icon1="send"
            label="SMAbeauty"
            label1={true}
            variant="Primary"
          />
        </Link>
        <Button
          // Using default values:
          click={() => showMenu(!menu)}
          icon={false}
          icon1="send"
          label="Menu"
          label1={true}
          variant="Primary"
        /> */}
      </div>
      <div className="main">
        {/* <div className={menu ? "hide-content" : "banner"}>
          <Image
            src="/images/banner.png"
            alt="Mapping"
            layout="fixed"
            sizes="100vw"
            width="1920px"
            height="1281px"
          />
        </div> */}
        <div
          //   style={content}
          className={menu ? "hide-content" : "content"}
        >
          <Image
            src="/images/sma-logo.png"
            alt="Mapping"
            layout="fixed"
            sizes="100vw"
            width="256px"
            height="256px"
          />
          <ServiceList />
          <Image
            src="/images/sma-logo.png"
            alt="Mapping"
            layout="fixed"
            sizes="100vw"
            width="36px"
            height="36px"
          />
          <div className="card">
            <div className="card-header">
              <div className="card-title">
                <div className="title-2">About</div>
              </div>
              <div className="divider"></div>
            </div>

            <div className="card-content">
              <div className="image-container">
                <Image
                  src="/images/shan.png"
                  alt="Shan"
                  height="239px"
                  width="137px"
                />
              </div>
              Hands down the best on the island, just ask our clients. We
              approach every <b>cosmetic tattoo</b> procedure with the up most care and
              professionalism. Our artist at SMA Beauty work with you to create
              a customized and professional experience. Our knowledgeable team
              of cosmetic tattoo artist use their creative and technical skills
              to offer a realistic cosmetic tattoo that will enhance your
              natural facial feature and personal style.
            </div>
          </div>
          <Image
            src="/images/sma-logo.png"
            alt="Mapping"
            layout="fixed"
            sizes="100vw"
            width="36px"
            height="36px"
          />
          <div className="card">
            <div className="card-header">
              <div className="card-title">
                <div className="title-2">Contact</div>
              </div>
              <div className="divider"></div>
            </div>

            <div className="card-content">
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
            </div>
          </div>
          <Copyright />
        </div>
      </div>
    </>
  );
}
