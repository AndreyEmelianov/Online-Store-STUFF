import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { ROUTES } from '../../utils/routes';
import { toggleForm } from '../../features/user/userSlice';

import LogoImg from '../../images/logo.svg';
import AvatarImg from '../../images/avatar.jpg';
import styles from '../../styles/Header.module.css';

const Header = () => {
  const [values, setValues] = useState({ name: 'Guest', avatar: AvatarImg });

  const { currentUser } = useSelector(({ user }) => user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!currentUser) return;

    setValues(currentUser);
  }, [currentUser]);

  const handleClick = () => {
    if (!currentUser) {
      dispatch(toggleForm(true));
    }
  };

  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <Link to={ROUTES.HOME}>
          <img src={LogoImg} alt="logo stuff" />
        </Link>
      </div>

      <div className={styles.info}>
        <div className={styles.user} onClick={handleClick}>
          <div className={styles.avatar} style={{ backgroundImage: `url(${values.avatar})` }} />
          <div className={styles.username}>{values.name}</div>
        </div>

        <form className={styles.form}>
          <div className={styles.icon}>
            <svg className="icon">
              <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#search`} />
            </svg>
          </div>
          <div className={styles.input}>
            <input
              type="text"
              name="search"
              placeholder="Search by goods..."
              autoComplete="off"
              value=""
              onChange={() => {}}
            />
          </div>
          {false && <div className={styles.box}></div>}
        </form>

        <div className={styles.account}>
          <Link to={ROUTES.HOME} className={styles.favorites}>
            <svg className={styles['icon-fav']}>
              <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#heart`} />
            </svg>
          </Link>
          <Link to={ROUTES.CART} className={styles.cart}>
            <svg className={styles['icon-cart']}>
              <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#bag`} />
            </svg>
            <span className={styles.count}>0</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Header;
