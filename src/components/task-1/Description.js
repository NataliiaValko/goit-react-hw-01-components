import PropTypes from "prop-types";
import Avatar from "../common/Avatar";
import Name from "../common/Name";

const Description = ({ avatar, name, tag, location }) => {
  return (
    <div className="description">
      <Avatar url={avatar} name={name} />
      <Name value={name} />
      <p className="tag">@{tag}</p>
      <p className="location">{location}</p>
    </div>
  );
};

Description.propTypes = {
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};

export default Description;
