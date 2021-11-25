import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { ServiceItem } from "./ServiceItem";

// Smart Components
// import Service from "https://framer.com/m/Service-ukmH.js@8LnDieBJ5j4wFkuhYiXg";

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
          <ServiceItem
            title="Brows"
            description="Get ready for boss brows!!!"
            img="/images/brows.png"
          />
        </Link>
        <Link href="/eyes">
          <ServiceItem
            title="Eyes"
            description="Smudge proof eyeliner"
            img="/images/eye.png"
          />
        </Link>
        <Link href="/lips">
          <ServiceItem
            title="Lips"
            description="Fuller natural lips"
            img="/images/lips.png"
          />
        </Link>
        <Link href="/freckles">
          <ServiceItem
            title="Freckles"
            description="Sunkissed all year"
            img="/images/freckles.png"
          />
        </Link>
        <Link href="/tooth-gems">
          <ServiceItem
            title="Freckles"
            description="Add some sparkle to that smile"
            img="/images/gem.png"
          />
        </Link>
      </div>
    </div>
  );
}
