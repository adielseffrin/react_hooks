import React from 'react';
import PropTypes from 'prop-types';

function NossoDate({ value, onChange }) {
  const handleChange = (e) => {
    e.preventDefault();
    onChange(e.target.value);
  };

  return (
    <input
      type="date"
      value={value}
      onChange={handleChange}
    />

  );
}

NossoDate.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

NossoDate.defaultProps = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default NossoDate;
