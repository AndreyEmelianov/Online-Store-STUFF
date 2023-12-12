import { Link } from 'react-router-dom';

import styles from '../../styles/Products.module.css';

const Products = ({ title, products = [], amount, style = {} }) => {
  const list = products.filter((_, index) => index < amount);

  return (
    <section className={styles.products} style={style}>
      {title && <h2>{title}</h2>}
      <div className={styles.list}>
        {list.map((product) => (
          <Link className={styles.product} to={`/products/:${product.id}`} key={product.id}>
            <div
              className={styles.image}
              style={{ backgroundImage: `url(${product.images[0]})` }}
            />

            <div className={styles.wrapper}>
              <h3 className={styles.title}>{product.title}</h3>
              <div className={styles.cat}>{product.category.name}</div>
              <div className={styles.info}>
                <div className={styles.prices}>
                  <div className={styles.price}>{product.price}$</div>
                  <div className={styles.oldPrice}>{Math.floor(product.price * 0.8)}$</div>
                </div>

                <div className={styles.purchases}>
                  {Math.floor(Math.random() * 20 + 1)} purchased
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};
export default Products;
