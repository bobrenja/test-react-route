import { NavLink } from 'react-router-dom';
import css from './menu.module.css';

const Menu = () => {

const getClassMenu =({isActive}) => {

    return isActive ? `${css.link} ${css.active}`  :  css.link
}

  return (
    <div className={css.wraper}>
      <ul className={css.item}>
        <li >
          <NavLink className={getClassMenu} to="/">Home</NavLink>
        </li>
        <li >
          <NavLink className={getClassMenu} to="/post">Post</NavLink>
        </li>
        <li >
          <NavLink className={getClassMenu} to="/contacts">Contacts</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
