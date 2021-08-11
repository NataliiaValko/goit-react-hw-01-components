import PropTypes from "prop-types";

const StatsListItem = ({ name, value }) => {
  return (
    <li>
      <span className="label">{name}</span>
      <span className="quantity">{value}</span>
    </li>
  );
};

StatsListItem.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};

export default StatsListItem;
