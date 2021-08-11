import PropTypes from "prop-types";
import StatsListItem from "./StatsListItem";

const StatsList = ({ stats }) => {
  return (
    <ul className="stats">
      {Object.keys(stats).map((name) => (
        <StatsListItem key={name} name={name} value={stats[name]} />
      ))}
    </ul>
  );
};

StatsList.propTypes = {
  stats: PropTypes.objectOf(PropTypes.number).isRequired,
};

export default StatsList;
