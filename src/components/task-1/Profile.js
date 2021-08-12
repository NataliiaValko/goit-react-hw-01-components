import PropTypes from "prop-types";
import Description from "./Description";
import StatsItem from "./StatsItem";

const Profile = ({ avatar, name, tag, location, stats }) => {
  return (
    <div className="profile">
      <Description avatar={avatar} name={name} tag={tag} location={location} />
      <ul className="stats">
        {Object.keys(stats).map((name) => (
          <StatsItem key={name} name={name} value={stats[name]} />
        ))}
      </ul>
    </div>
  );
};

StatsItem.propTypes = {
  stats: PropTypes.shape(),
};

export default Profile;
