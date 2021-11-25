import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Button from "https://framer.com/m/Button-v2hH.js@4tkWJXqtGg11ECDenDba";

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
        <Button
          click={() =>
            window.open(
              "https://booking.appointy.com/en-US/smabeauty/bookings/service",
              "_blank"
            )
          }
          icon={false}
          icon1="send"
          label="Book Now"
          label1={true}
          variant="Primary"
        />
      </div>
    </div>
  );
}
