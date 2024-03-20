"use client";
import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import styles from "./caroussel.module.css";
import Image from "next/image";

export default function CarouselUi({ data }) {
  return (
    <aside className={styles.aside}>
      <Carousel
        showThumbs={false}
        autoPlay
        infiniteLoop
        interval={5000}
        showStatus={false}
      >
        {data.map((img, index) => {
          const { alt, src, legend } = img;
          return (
            <div key={index} className={styles.imgCar}>
              <Image
                src={src}
                alt={alt}
                fill
                className={styles.img}
                sizes="100vw"
              />
              <p className="legend">{legend}</p>
            </div>
          );
        })}
      </Carousel>
    </aside>
  );
}
