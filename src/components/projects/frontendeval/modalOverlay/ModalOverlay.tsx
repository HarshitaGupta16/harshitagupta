import { useState } from "react";
import styles from "./ModalOverlay.module.css";

interface DialogProps {
  setOpenDialog: Function;
  setOfferAccepted: Function;
}

const Dialog = ({ setOpenDialog, setOfferAccepted }: DialogProps) => {
  return (
    <div className={styles.container} onClick={() => setOpenDialog(false)}>
      <div className={styles.dialog}>
        <div className={styles["dialog-header"]}>
          <button
            className={styles["close-icon"]}
            onClick={() => setOpenDialog(false)}
            aria-label="Close"
          >
            X
          </button>
        </div>
        <div className={styles["dialog-content"]}>
          Click the button below to accept our amazing offer!
        </div>
        <div className={styles["dialog-footer"]}>
          <button
            onClick={() => {
              setOfferAccepted(true);
              setOpenDialog(false);
            }}
            className={styles.showOfferBtn}
          >
            Accept Offer
          </button>
        </div>
      </div>
    </div>
  );
};

const ModalOverlay = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [offerAccepted, setOfferAccepted] = useState(false);

  return (
    <div className={styles.main}>
      {!offerAccepted && !openDialog ? (
        <button
          onClick={() => {
            setOpenDialog(true);
            setOfferAccepted(false);
          }}
          className={styles.showOfferBtn}
        >
          Show Offer
        </button>
      ) : (
        !openDialog && (
          <div className={styles.offerAcceptedText}>Offer Accepted</div>
        )
      )}
      {openDialog && (
        <Dialog
          setOpenDialog={setOpenDialog}
          setOfferAccepted={setOfferAccepted}
        />
      )}
    </div>
  );
};

export default ModalOverlay;
