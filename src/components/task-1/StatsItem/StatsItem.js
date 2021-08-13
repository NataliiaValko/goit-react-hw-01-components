import PropTypes from "prop-types";
import s from "./StatsItem.module.css";

const StatsItem = ({ name, value }) => {
  const valueSep = value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return (
    <li className={s.statsItem}>
      <span className={s.label}>{name}</span>
      <span className={s.quantity}>{valueSep}</span>
    </li>
  );
};

StatsItem.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};

export default StatsItem;
