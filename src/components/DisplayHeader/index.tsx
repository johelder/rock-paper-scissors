import styles from "./styles.module.scss";

export const DisplayHeader = () => {
  return (
    <header className={styles.headerWrapper}>
      <h1>
        rock <br />
        paper <br />
        scissors
      </h1>

      <div className={styles.scoreWrapper}>
        <span>score</span>
        <strong>12</strong>
      </div>
    </header>
  );
};
