import styles from "@/app/styles/navbar.module.css";
import Link from "next/link";
import Image from "next/image";
import Nav from "./Nav";

const Header = () => {
  return (
    <header>
      <div className={styles.main_header}>
        <div className={styles.navbar_brand}>
          <Link href="/">
            <Image src="/log1.png" alt="mylogo" width="150" height="40" />
          </Link>
        </div>
      <Nav />
      </div>
    </header>
  );
};

export default Header;
