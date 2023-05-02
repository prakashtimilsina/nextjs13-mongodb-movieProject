import React from "react";
import heroStyles from "@/app/styles/herosection.module.css";
import styles from "@/app/styles/common.module.css";
import { Mulish } from 'next/font/google';
import Link from "next/link";
import Image from "next/image";

const mulish = Mulish({
  weight: ['300','400','500','600','700','800','900'],
  subsets: ['latin'],
  display: 'swap',
})

const Herosection = ({ title, imageUrl}) => {
  return (
    <>
      <main className={heroStyles.main_section}>
        <div className={styles.container}>
          <div className={styles.grid_two_section}>
            <div className={heroStyles.hero_content}>
              <h1>{title}</h1>
              <p>
                Content is everywhere. It’s very often the first way your users
                will engage with your product. So it’s important that your
                content speaks to them. Content testing is how you make sure
                that your content is understood and well-perceived by your
                audience.
              </p>
              <Link href="/movie">
                <button className={mulish.className}>Explore Movies</button>
              </Link>
            </div>
            <div className={heroStyles.hero_image}>
              <Image
                src={imageUrl}
                alt="watching netflix"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Herosection;
