import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { useGetProductsQuery } from '../../features/api/apiSlice';
import Products from '../Products/Products';

import styles from '../../styles/Category.module.css';

const Category = () => {
  const { id } = useParams();
  const { list } = useSelector(({ categories }) => categories);

  const defaultValues = {
    title: '',
    price_min: 0,
    price_max: 0,
  };

  const defaultParams = {
    ...defaultValues,
    categoryId: id,
    limit: 5,
    offset: 0,
  };

  const [params, setParams] = useState(defaultParams);
  const [values, setValues] = useState(defaultValues);
  const [categ, setCateg] = useState(null);
  const [items, setItems] = useState([]);
  const [isEnd, setIsEnd] = useState(false);

  const { data = [], isLoading, isSuccess } = useGetProductsQuery(params);

  useEffect(() => {
    if (!id) return;

    setParams({ ...defaultParams, categoryId: id });
    setItems([]);
    setIsEnd(false);
    setValues(defaultValues);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  useEffect(() => {
    if (!id || !list.length) return;

    const category = list.find((item) => item.id === id * 1);

    setCateg(category);
  }, [list, id]);

  useEffect(() => {
    if (isLoading) return;

    if (!data.length) return setIsEnd(true);

    setItems((_items) => [..._items, ...data]);
  }, [data, isLoading]);

  const handleChange = ({ target: { value, name } }) => {
    setValues({ ...value, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setParams({ ...defaultParams, ...values });
    setItems([]);
    setIsEnd(false);
  };

  const handleReset = () => {
    setValues(defaultValues);
    setParams(defaultParams);
    setIsEnd(false);
  };

  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>{categ?.name}</h2>

      <form className={styles.filters} onSubmit={handleSubmit}>
        <div className={styles.filter}>
          <input
            type="text"
            name="title"
            placeholder="Product name"
            value={values.title}
            onChange={handleChange}
          />
        </div>
        <div className={styles.filter}>
          <input
            type="number"
            name="price_min"
            placeholder="0"
            value={values.price_min}
            onChange={handleChange}
          />
          <span>Price from</span>
        </div>
        <div className={styles.filter}>
          <input
            type="number"
            name="price_max"
            placeholder="0"
            value={values.price_max}
            onChange={handleChange}
          />
          <span>Price to</span>
        </div>

        <button type="submit" hidden />
      </form>

      {isLoading ? (
        <div className="preloader">Loading...</div>
      ) : !isSuccess || !items.length ? (
        <div className={styles.back}>
          <span>No results</span>
          <button onClick={handleReset}>Reset</button>
        </div>
      ) : (
        <Products title="" products={items} style={{ padding: 0 }} amount={items.length} />
      )}

      {!isEnd && (
        <div className={styles.more}>
          <button onClick={() => setParams({ ...params, offset: params.offset + params.limit })}>
            See more
          </button>
        </div>
      )}
    </section>
  );
};
export default Category;
