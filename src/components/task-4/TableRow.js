import PropTypes from "prop-types";
import TableData from "./TableData";

const TableRow = ({ type, amount, currency }) => {
  return (
    <tr>
      <TableData value={type} />
      <TableData value={amount} />
      <TableData value={currency} />
    </tr>
  );
};

TableRow.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};

export default TableRow;
