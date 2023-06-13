import styles from "./NextMatches.module.css";

const NextMatches = () => {
  return (
    <>
      <div className={styles.nextMatches}>
        <div className={styles.match}>
          <div className={styles.match__info}>
            <div className={styles.match__info__championship}>CBLOL</div>
            <div className={styles.match__info__time}>18/06/2023 15:00</div>
          </div>
          <div className={styles.match__confrontation}>
            <span className={styles.match__confrontation__trt}>TRT</span>
            <span className={styles.match__confrontation__vs}>vs</span>FUR
          </div>
        </div>
        <div className={styles.match}>
          <div className={styles.match__info}>
            <div className={styles.match__info__championship}>CBLOL</div>
            <div className={styles.match__info__time}>17/06/2023 13:00</div>
          </div>
          <div className={styles.match__confrontation}>
            <span className={styles.match__confrontation__trt}>TRT</span>
            <span className={styles.match__confrontation__vs}>vs</span>LLL
          </div>
        </div>
        <div className={styles.match}>
          <div className={styles.match__info}>
            <div className={styles.match__info__championship}>VCT </div>
            <div className={styles.match__info__time}>18/06/2023 16:00</div>
          </div>
          <div className={styles.match__confrontation}>
            <span className={styles.match__confrontation__trt}>TRT</span>
            <span className={styles.match__confrontation__vs}>vs</span>DRX
          </div>
        </div>
      </div>
    </>
  );
};

export default NextMatches;
