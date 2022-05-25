import { HTMLProps } from "react";

import rockIcon from "../../../public/images/icon-rock.svg";
import paperIcon from "../../../public/images/icon-paper.svg";
import scissorsIcon from "../../../public/images/icon-scissors.svg";

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
    <button className={styles[`button-${type}`]} {...rest} data-testid="Button">
      <img src={icons[type!]} data-testid="button-icon" />
    </button>
  );
}
