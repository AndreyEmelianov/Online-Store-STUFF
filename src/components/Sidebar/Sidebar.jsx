import { NavLink } from 'react-router-dom';

import styles from '../../styles/Sidebar.module.css';

const Sidebar = () => {
  return (
    <section className={styles.sidebar}>
      <div className={styles.title}>CATEGORIES</div>
      <nav>
        <ul className={styles.menu}>
          <li>
            <NavLink to={`categories/${1}`}>Категория</NavLink>
          </li>
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
