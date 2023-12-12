import BGImg from '../../images/computer.png';
import styles from '../../styles/Home.module.css';

const Poster = () => {
  return (
    <section className={styles.home}>
      <div className={styles.title}>BIG SALE 30%</div>
      <div className={styles.product}>
        <div className={styles.text}>
          <div className={styles.subtitle}>the bestseller of 2023</div>
          <h1 className={styles.head}>LENNON r2d2 with NVIDIA 4060 TI</h1>
          <button className={styles.button}>Shop Now</button>
        </div>
        <div className={styles.image}>
          <img src={BGImg} alt="poster" />
        </div>
      </div>
    </section>
  );
};
export default Poster;
