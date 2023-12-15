import { useDispatch, useSelector } from 'react-redux';

import UserSignUpForm from './UserSignUpForm';
import { toggleForm } from '../../features/user/userSlice';

import styles from '../../styles/User.module.css';

const UserForm = () => {
  const { showForm } = useSelector(({ user }) => user);
  const dispatch = useDispatch();

  const closeForm = () => dispatch(toggleForm(false));

  return showForm ? (
    <>
      <div className={styles.overlay} onClick={closeForm} />
      <UserSignUpForm closeForm={closeForm} />
    </>
  ) : (
    <></>
  );
};
export default UserForm;
