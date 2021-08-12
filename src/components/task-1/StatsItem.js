import PropTypes from "prop-types";

const StatsItem = ({ name, value }) => {
  return (
    <li>
      <span className="label">{name}</span>
      <span className="quantity">{value}</span>
    </li>
  );
};

StatsItem.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};

export default StatsItem;
