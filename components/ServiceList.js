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
        <ServiceItem
          title="Brows"
          description="Get ready for boss brows!!!"
          img="/images/brows.png"
          href="/brows"
        />
        <ServiceItem
          title="Eyes"
          description="Smudge proof eyeliner"
          img="/images/eye.png"
          href="/eyes"
        />
        <ServiceItem
          title="Lips"
          description="Fuller natural lips"
          img="/images/lips.png"
          href="/lips"
        />
        <ServiceItem
          title="Freckles"
          description="Sunkissed all year"
          img="/images/freckles.png"
          href="/freckles"
        />
        <ServiceItem
          title="Freckles"
          description="Add some sparkle to that smile"
          img="/images/gem.png"
          href="/tooth-gems"
        />
      </div>
    </div>
  );
}
