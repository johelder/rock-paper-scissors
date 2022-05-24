import { useCallback, useEffect, useState } from "react";

import { Button } from "../components/Button";
import { DisplayHeader } from "../components/DisplayHeader";
import { RulesModal } from "../components/RulesModal";

import backgroundTriangle from "/images/bg-triangle.svg";

import styles from "./game.styles.module.scss";

type TGameStatus = "starting" | "running" | "ending";
type TChoices = "paper" | "rock" | "scissors" | undefined;
type IGameWinner =
  | {
      winner: string;
      message: string;
    }
  | undefined;

export default function Game() {
  const [gameStatus, setGameStatus] = useState<TGameStatus>("starting");
  const [playerChoice, setPlayerChoice] = useState<TChoices>();
  const [machineChoice, setMachineChoice] = useState<TChoices>();
  const [gameWinner, setGamerWinner] = useState<IGameWinner>();
  const [scoreCount, setScoreCount] = useState(0);

  const [toggleRulesModal, setToggleRulesModal] = useState(false);

  const handleToggleRulesModal = useCallback(() => {
    setToggleRulesModal((prevState) => !prevState);
  }, []);

  const handleChoices = async (choice: TChoices) => {
    setGameStatus("running");

    setPlayerChoice(choice);
    const machineResponse = await getMachineChoice();
    setMachineChoice(machineResponse);

    setGameStatus("ending");
  };

  const getMachineChoice = () => {
    return new Promise<TChoices>((resolve) => {
      setTimeout(() => {
        const randomIndexChoice = Math.floor(Math.random() * 3);
        const randomChoice = ["paper", "rock", "scissors"][
          randomIndexChoice
        ] as TChoices;

        return resolve(randomChoice);
      }, 1000);
    });
  };

  const getGameWinner = (player: TChoices, machine: TChoices) => {
    const rules = {
      "paper-rock": "paper",
      "rock-paper": "paper",
      "paper-scissors": "scissors",
      "scissors-paper": "scissors",
      "rock-scissors": "rock",
      "scissors-rock": "rock",
      "paper-paper": "draw",
      "scissors-scissors": "draw",
      "rock-rock": "draw",
    };

    if (!player || !machine) {
      return;
    }

    const winner = rules[`${player}-${machine}`];

    if (winner === player) {
      setGamerWinner({ winner: "player", message: "YOU WIN" });
      setScoreCount((prevScore) => prevScore + 1);
      return;
    }

    if (winner === machine) {
      setGamerWinner({ winner: "machine", message: "YOU LOSE" });
      setScoreCount((prevScore) => (prevScore === 0 ? 0 : prevScore - 1));
      return;
    }

    setGamerWinner({ winner: "draw", message: "DRAW" });
    return;
  };

  const handleRestartGame = () => {
    setGameStatus("starting");
    setPlayerChoice(undefined);
    setMachineChoice(undefined);
  };

  useEffect(() => {
    if (gameStatus === "ending") {
      getGameWinner(playerChoice, machineChoice);
    }
  }, [playerChoice, machineChoice, gameStatus]);

  return (
    <div className={styles.appWrapper}>
      <DisplayHeader scoreCount={scoreCount} />

      <main className={styles.mainWrapper}>
        {gameStatus === "starting" && (
          <article className={styles.startingGame}>
            <img src={backgroundTriangle} alt="Background Triangle" />

            <Button type="paper" onClick={() => handleChoices("paper")} />
            <Button type="scissors" onClick={() => handleChoices("scissors")} />
            <Button type="rock" onClick={() => handleChoices("rock")} />
          </article>
        )}

        {gameStatus === "running" && (
          <article className={styles.runningGame}>
            <div className={styles.choices}>
              <Button type={playerChoice} />
              <span>you picked</span>
            </div>

            <div className={styles.choices}>
              {!machineChoice ? (
                <div className={styles.buttonBackground} />
              ) : (
                <Button type={machineChoice} />
              )}

              <span>the house picked</span>
            </div>
          </article>
        )}

        {gameStatus === "ending" && (
          <>
            <article className={styles.runningGame}>
              <div className={styles.choices}>
                <Button type={playerChoice} />
                <span>you picked</span>
              </div>

              <div className={styles.choices}>
                <Button type={machineChoice} />
                <span>the house picked</span>
              </div>
            </article>

            <div className={styles.gameResultsWrapper}>
              <span>{gameWinner?.message}</span>
              <button onClick={handleRestartGame}>play again</button>
            </div>
          </>
        )}
      </main>

      <div className={styles.rulesButtonWrapper}>
        <button className={styles.rulesButton} onClick={handleToggleRulesModal}>
          <span>rules</span>
        </button>
      </div>

      <RulesModal
        isOpen={toggleRulesModal}
        closeModal={handleToggleRulesModal}
      />
    </div>
  );
}
