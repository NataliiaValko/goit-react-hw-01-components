import PropTypes from "prop-types";
import s from "./TableRow.module.css";

const TableRow = ({ type, amount, currency }) => {
  return (
    <tr className={s.row}>
      <td className={s.type}>{type}</td>
      <td className={s.amount}>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
};

TableRow.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};

export default TableRow;
