import PropTypes from "prop-types";
import s from "./FriendItem.module.css";

const FriendItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={s.item}>
      <span className={s[`${isOnline}`]}></span>
      <img
        className={s.avatar}
        src={avatar}
        alt={`Avatar user's ${name}`}
        width={110}
      />
      <p className={s.name}>{name}</p>
    </li>
  );
};

FriendItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendItem;
