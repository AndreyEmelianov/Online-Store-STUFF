import { useDispatch, useSelector } from 'react-redux';

import UserSignUpForm from './UserSignUpForm';
import UserSignInForm from './UserSignInForm';
import { toggleForm, toggleFormType } from '../../features/user/userSlice';

import styles from '../../styles/User.module.css';

const UserForm = () => {
  const { showForm, formType } = useSelector(({ user }) => user);
  const dispatch = useDispatch();

  const closeForm = () => dispatch(toggleForm(false));
  const changeCurrentFormType = (type) => dispatch(toggleFormType(type));

  return showForm ? (
    <>
      <div className={styles.overlay} onClick={closeForm} />
      {formType === 'signup' ? (
        <UserSignUpForm closeForm={closeForm} changeCurrentFormType={changeCurrentFormType} />
      ) : (
        <UserSignInForm closeForm={closeForm} changeCurrentFormType={changeCurrentFormType} />
      )}
    </>
  ) : (
    <></>
  );
};
export default UserForm;
