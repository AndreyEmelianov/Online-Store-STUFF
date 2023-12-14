import { Link } from 'react-router-dom';
import styles from '../../styles/Categories.module.css';

const Categories = ({ title, products = [], amount }) => {
  const list = products.filter((_, index) => index < amount);

  return (
    <section className={styles.section}>
      <h2>{title}</h2>
      <div className={styles.list}>
        {list.map(({ id, name, image }) => (
          <Link className={styles.item} to={`/categories/${id}`} key={id}>
            <div className={styles.image} style={{ backgroundImage: `url(${image})` }} />
            <h3 className={styles.title}>{name}</h3>
          </Link>
        ))}
      </div>
    </section>
  );
};
export default Categories;
