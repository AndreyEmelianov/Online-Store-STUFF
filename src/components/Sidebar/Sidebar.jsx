import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import styles from '../../styles/Sidebar.module.css';

const Sidebar = () => {
  const { list } = useSelector(({ categories }) => categories);

  return (
    <section className={styles.sidebar}>
      <div className={styles.title}>CATEGORIES</div>
      <nav>
        <ul className={styles.menu}>
          {list.map((category) => (
            <li key={category.id}>
              <NavLink
                className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`}
                to={`categories/${category.id}`}>
                {category.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <div className={styles.footer}>
        <a className={styles.link} href="/help" target="_blank">
          Help
        </a>
        <a
          className={styles.link}
          href="/terms"
          style={{ textDecoration: 'underline' }}
          target="_blank">
          Terms & Conditions
        </a>
      </div>
    </section>
  );
};
export default Sidebar;
