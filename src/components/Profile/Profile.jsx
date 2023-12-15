import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { updateUser } from '../../features/user/userSlice';

import styles from '../../styles/Profile.module.css';

const Profile = () => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
    avatar: '',
  });

  const dispatch = useDispatch();
  const { currentUser } = useSelector(({ user }) => user);

  useEffect(() => {
    if (!currentUser) return;

    setValues(currentUser);
  }, [currentUser]);

  const handleChange = ({ target: { value, name } }) => {
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isEmpty = Object.values(values).some((value) => !value);

    if (isEmpty) return;

    dispatch(updateUser(values));
  };

  return (
    <section className={styles.profile}>
      {!currentUser ? (
        <span>You need to login</span>
      ) : (
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

          <button type="submit" className={styles.submit}>
            Update
          </button>
        </form>
      )}
    </section>
  );
};
export default Profile;
