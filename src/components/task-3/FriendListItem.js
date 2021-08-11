import PropTypes from "prop-types";
import Avatar from "../common/Avatar";
import Name from "../common/Name";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className="item">
      <span className={`${isOnline}`}></span>
      <Avatar url={avatar} name={name} width={48} />
      <Name value={name} />
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
