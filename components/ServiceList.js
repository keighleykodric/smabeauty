import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

// Smart Components
import Service from "https://framer.com/m/Service-ukmH.js@8LnDieBJ5j4wFkuhYiXg";

export function ServiceList({ children, title, description, img, url }) {
  return (
    <div className="card">
      <div className="card-header">
        <div className="card-title">
          <div className="title-2">Services</div>
        </div>
        <div className="divider"></div>
      </div>

      <div className="card-content">

        <Link href="/brows">
          <Service
            // Using default values:
            description="Get ready for boss brows!!!"
            //   image={image}
            title="Brows"
            variant="Brows"
            style={{ width: "100%" }}
          />
        </Link>
        <Link href="/eyes">
          <Service
            // Using default values:
            description="Get ready for boss brows!!!"
            //   image={image}
            title="Eyes"
            variant="Eyes"
            style={{ width: "100%" }}
          />
        </Link>
        <Link href="/lips">
          <Service
            // Using default values:
            description="Get ready for boss brows!!!"
            //   image={image}
            title="Lips"
            variant="Lips"
            style={{ width: "100%" }}
          />
        </Link>
        <Link href="/freckles">
          <Service
            // Using default values:
            description="Get ready for boss brows!!!"
            //   image={image}
            title="Freckles"
            variant="Freckles"
            style={{ width: "100%" }}
          />
        </Link>
        <Link href="/tooth-gems">
          <Service
            // Using default values:
            description="Get ready for boss brows!!!"
            //   image={image}
            title="Tooth Gems"
            variant="Tooth Gems"
            style={{ width: "100%" }}
          />
        </Link>
      </div>
    </div>
  );
}
