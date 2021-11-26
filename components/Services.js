import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
// import Button from "https://framer.com/m/Button-v2hH.js@4tkWJXqtGg11ECDenDba";
import { Button } from "./Button";

export function Services({ children, title, description, img, url }) {
  return (
    <div className="card">
      <Image src={img} alt={title} width="512px" height="320px" />
      <div className="card-header">
        <div className="card-title">
          <div className="title-2">{title}</div>
          <div className="body">{description}</div>
        </div>
        <div className="divider"></div>
      </div>

      <div className="card-content">
        {children}
        <div className="card-actions">
        <Button
          click={() =>
            window.open(
              "https://booking.appointy.com/en-US/smabeauty/bookings/service",
              "_blank"
            )
          }
          label="Book Now"
          variant="button-primary"
        />
        </div>
      </div>
    </div>
  );
}

Services.defaultProps = {
  img: "/images/banner.png",
  title: "Service Name",
  description: "",
  href: "",
};