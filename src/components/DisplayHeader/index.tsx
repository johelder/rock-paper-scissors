import logo from "/images/logo.svg";

import styles from "./styles.module.scss";

interface IDisplayHeaderProps {
  scoreCount: number;
}

export const DisplayHeader = ({ scoreCount }: IDisplayHeaderProps) => {
  return (
    <header className={styles.headerWrapper}>
      <img src={logo} alt="Logo Rock, Paper, Scissors" />

      <div className={styles.scoreWrapper}>
        <span>score</span>
        <strong>{scoreCount}</strong>
      </div>
    </header>
  );
};
