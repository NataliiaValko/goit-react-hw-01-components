import PropTypes from "prop-types";
import StatListItem from "./StatListItem";

const StatList = ({ stats }) => {
  return (
    <ul className="stat-list">
      {stats.map(({ id, label, percentage }) => (
        <StatListItem key={id} label={label} percentage={percentage} />
      ))}
    </ul>
  );
};

StatList.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};

export default StatList;
