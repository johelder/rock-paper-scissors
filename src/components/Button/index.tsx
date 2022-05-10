import { HTMLProps } from "react";

import rockIcon from "/images/icon-rock.svg";
import paperIcon from "/images/icon-paper.svg";
import scissorsIcon from "/images/icon-scissors.svg";

import styles from "./styles.module.scss";

interface IButtonProps extends HTMLProps<HTMLButtonElement> {
  type?: "rock" | "paper" | "scissors";
}

export function Button({ type, ...rest }: IButtonProps) {
  const icons = {
    rock: rockIcon,
    paper: paperIcon,
    scissors: scissorsIcon,
  };

  return (
    <button className={styles[`button-${type}`]} {...rest}>
      <img src={icons[type!]} />
    </button>
  );
}
