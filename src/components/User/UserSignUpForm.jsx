import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { createUser } from '../../features/user/userSlice';

import styles from '../../styles/User.module.css';

const UserSignUpForm = ({ closeForm }) => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
    avatar: '',
  });

  const dispatch = useDispatch();

  const handleChange = ({ target: { value, name } }) => {
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isEmpty = Object.values(values).some((value) => !value);

    if (isEmpty) return;

    dispatch(createUser(values));
    closeForm();
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.close} onClick={closeForm}>
        <svg className="icon">
          <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#close`} />
        </svg>
      </div>

      <div className={styles.title}>Sign Up</div>

      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.group}>
          <input
            type="name"
            name="name"
            placeholder="Your name"
            autoComplete="off"
            required
            value={values.name}
            onChange={handleChange}
          />
        </div>
        <div className={styles.group}>
          <input
            type="email"
            name="email"
            placeholder="Your e-mail"
            autoComplete="off"
            required
            value={values.email}
            onChange={handleChange}
          />
        </div>
        <div className={styles.group}>
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            autoComplete="off"
            required
            value={values.password}
            onChange={handleChange}
          />
        </div>
        <div className={styles.group}>
          <input
            type="avatar"
            name="avatar"
            placeholder="Your avatar"
            autoComplete="off"
            required
            value={values.avatar}
            onChange={handleChange}
          />
        </div>

        <div className={styles.link}>Already have an account</div>

        <button className={styles.submit} type="submit">
          Create an account
        </button>
      </form>
    </div>
  );
};
export default UserSignUpForm;
