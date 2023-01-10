import React from "react";
import styles from "./index.module.scss";
import Image from "next/image";
import Logo from "../../assets/logo/brewLogo.png";

const Header = () => {
  return (
    <div className={styles.wrapper}>
      <Image
        src={Logo}
        width={96}
        height={48}
        alt="Logo of Brew Interactive"
        className={styles.logo}
      />
    </div>
  );
};

export default Header;
