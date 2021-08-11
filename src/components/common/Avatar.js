import PropTypes from "prop-types";

const Avatar = ({ url, name, width }) => {
  return (
    <img
      src={url}
      alt={`Аватар пользователя ${name}`}
      className="avatar"
      width={width}
    />
  );
};

Avatar.propTypes = {
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Avatar;
