import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { ROUTES } from '../../utils/routes';
import { addItemToCart } from '../../features/user/userSlice';

import styles from '../../styles/Product.module.css';

const SIZES = [3, 4.5, 6];

const Product = (item) => {
  const [currentImg, setCurrentImg] = useState();
  const [currentSize, setCurrentSize] = useState();
  const { images, title, price, description } = item;

  const dispatch = useDispatch();

  useEffect(() => {
    if (!images.length) return;

    setCurrentImg(images[0]);
  }, [images]);

  const addToCart = () => {
    dispatch(addItemToCart(item));
  };

  return (
    <section className={styles.product}>
      <div className={styles.images}>
        <div className={styles.current} style={{ backgroundImage: `url(${currentImg})` }} />
        <div className={styles['images-list']}>
          {images.map((image, i) => (
            <div
              className={styles.image}
              key={i}
              style={{ backgroundImage: `url(${image})` }}
              onClick={() => setCurrentImg(image)}
            />
          ))}
        </div>
      </div>

      <div className={styles.info}>
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.price}>{price}$</div>
        <div className={styles.color}>
          <span>Color:</span> Green
        </div>
        <div className={styles.sizes}>
          <span>Sizes:</span>
          <div className={styles.list}>
            {SIZES.map((size) => (
              <div
                key={size}
                className={`${styles.size} ${currentSize === size ? styles.active : ''}`}
                onClick={() => setCurrentSize(size)}>
                {size}
              </div>
            ))}
          </div>
        </div>
        <p className={styles.description}>{description}</p>

        <div className={styles.actions}>
          <button className={styles.add} disabled={!currentSize} onClick={addToCart}>
            Add to cart
          </button>
          <button className={styles.favorite}>Add to favorites</button>
        </div>

        <div className={styles.bottom}>
          <div className={styles.purchase}>13 people purchased</div>
          <Link to={ROUTES.HOME}>Return to store</Link>
        </div>
      </div>
    </section>
  );
};
export default Product;
