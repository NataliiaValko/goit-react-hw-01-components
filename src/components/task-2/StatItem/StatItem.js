import PropTypes from "prop-types";
import s from "./StatItem.module.css";

const getRandomColor = () => {
  const getRandomNumber = () => {
    return Math.round(Math.random() * 255);
  };

  const color = `rgb(${getRandomNumber()},${getRandomNumber()},${getRandomNumber()})`;
  if (color === "rgb(255, 255, 255)") {
    getRandomColor();
  }

  return color;
};

const StatItem = ({ label, percentage }) => {
  return (
    <li className={s.item} style={{ backgroundColor: getRandomColor() }}>
      <span className={s.label}>{label}</span>
      <span className={s.percentage}>{percentage}%</span>
    </li>
  );
};

StatItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default StatItem;
