import React from 'react';
import PropTypes from 'prop-types';
import * as Icons from '../icons';

export const SORT_TYPE = { ASC: 'asc', DESC: 'desc', NO_SORT: '' };

function Sort({ onSort }) {
  return (
    <>
      <button type="button" onClick={() => onSort(SORT_TYPE.ASC)} style={{ cursor: 'pointer' }}>
        <Icons.SortAscIcon />
      </button>
      <button type="button" onClick={() => onSort(SORT_TYPE.DESC)} style={{ cursor: 'pointer' }}>
        <Icons.SortDescIcon />
      </button>
    </>
  );
}

Sort.propTypes = {
  onSort: PropTypes.func,
};

Sort.defaultProps = {
  onSort: PropTypes.func,
};

export default Sort;
