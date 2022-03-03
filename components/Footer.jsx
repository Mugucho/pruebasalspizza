import Image from "next/image";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/img/bg.jpeg" objectFit="cover" layout="fill" alt="" />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            OH YES, WE DID.THE SAL'S PIZZA, WELL BAKED SLICE OF PIZZA.
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>FIND OUR RESTAURANTS</h1>
          <p className={styles.text}>
            509 HIGH STREET.
            <br /> Mt Holly, NJ 08060
            <br /> (609) 267-3297
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>WORKING HOURS</h1>
          <p className={styles.text}>
            MONDAY UNTIL SATURDAY
            <br /> 11:00 – 20:30
          </p>
          <p className={styles.text}>
            SUNDAY
            <br /> 12:00 – 20:30
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
