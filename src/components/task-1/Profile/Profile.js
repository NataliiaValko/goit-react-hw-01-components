import PropTypes from "prop-types";
import Description from "../Description/Description";
import StatsItem from "../StatsItem/StatsItem";
import s from "./Profile.module.css";

const Profile = ({ avatar, name, tag, location, stats }) => {
  return (
    <div className={s.profile}>
      <Description avatar={avatar} name={name} tag={tag} location={location} />
      <ul className={s.stats}>
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
