import PropTypes from "prop-types";
import TableRow from "../TableRow/TableRow";
import s from "./TransactionHistory.module.css";

const TransactionHistory = ({ items }) => {
  return (
    <table className={s.transactionHistory}>
      <thead className={s.head}>
        <tr>
          <th className={s.cell}>Type</th>
          <th className={s.cell}>Amount</th>
          <th className={s.cell}>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <TableRow key={id} type={type} amount={amount} currency={currency} />
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};

export default TransactionHistory;
