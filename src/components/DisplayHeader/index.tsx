import logo from "/images/logo.svg";

import styles from "./styles.module.scss";

export const DisplayHeader = () => {
  return (
    <header className={styles.headerWrapper}>
      <img src={logo} alt="Logo Rock, Paper, Scissors" />

      <div className={styles.scoreWrapper}>
        <span>score</span>
        <strong>12</strong>
      </div>
    </header>
  );
};
