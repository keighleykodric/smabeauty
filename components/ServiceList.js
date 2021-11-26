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
          title="Tooth Gems"
          description="Add some sparkle to that smile"
          img="/images/gem.png"
          href="/tooth-gems"
        />
        <ServiceItem
          title="Tiny Tattoos"
          description="Itsy bitsy tint tattoos"
          img="/images/gem.png"
          href="/tiny-tattoos"
        />
        <ServiceItem
          title="Scar Camoflauge"
          description="Repair those scars"
          img="/images/gem.png"
          href="/scar-camoflauge"
        />
      </div>
    </div>
  );
}

ServiceList.defaultProps = {
  img: "/images/banner.png",
  title: "Service Name",
  description: "Brief description",
  href: "",
};