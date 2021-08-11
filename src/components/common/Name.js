import PropTypes from "prop-types";

const Name = ({ value }) => {
  return <p className="name">{value}</p>;
};

Name.propTypes = {
  value: PropTypes.string.isRequired,
};

export default Name;
