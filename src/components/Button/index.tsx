import rockIcon from "../../../public/images/icon-rock.svg";
import paperIcon from "../../../public/images/icon-paper.svg";
import scissorsIcon from "../../../public/images/icon-scissors.svg";

import * as S from './styles';

interface IButtonProps {
  type: 'rock' | 'paper' | 'scissors';
}

export function Button({ type }: IButtonProps) {

  const icons = {
    rock: rockIcon,
    paper: paperIcon,
    scissors: scissorsIcon
  }

  return (
    <S.Button>
      <img src={icons[type]} />
    </S.Button>
  );
}
