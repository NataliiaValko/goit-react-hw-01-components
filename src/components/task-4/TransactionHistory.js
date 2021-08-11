import PropTypes from "prop-types";
import TableHead from "./TableHead";
import TableRow from "./TableRow";

const TransactionHistory = ({ items }) => {
  return (
    <table className="transaction-history">
      <TableHead />
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
