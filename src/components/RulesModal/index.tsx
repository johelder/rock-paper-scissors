import rulesImages from "/images/image-rules.svg";
import closeIcon from "/images/icon-close.svg";

import styles from "./styles.module.scss";

interface IRulesModalProps {
  isOpen: boolean;
  closeModal: () => void;
}

export const RulesModal = ({ isOpen, closeModal }: IRulesModalProps) => {
  return (
    <>
      {isOpen && (
        <>
          <div className={styles.overlay} onClick={closeModal} />
          <div className={styles.rulesWrapper}>
            <h3>rules</h3>

            <img src={rulesImages} alt="Rules Images" />

            <div className={styles.closeButtonWrapper}>
              <button onClick={closeModal} className={styles.closeButton}>
                <img src={closeIcon} alt="Close Icon" />
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
};
