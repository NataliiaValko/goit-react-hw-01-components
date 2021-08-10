import PropTypes from "prop-types";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div>
      <span className={`${isOnline}`}></span>
      <img className="avatar" src={avatar} alt={`avatar ${name}`} width="48" />
      <p className="name">{name}</p>
    </div>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
