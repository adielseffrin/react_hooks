/* eslint-disable no-bitwise */
/* eslint-disable no-mixed-operators */

function guid(char) {
  const r = (Math.random() * 16) | 0;
  const v = char === 'x' ? r : (r & 0x3) | 0x8;

  return v.toString(16);
}

function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => guid(c));
}

export default {
  uuidv4,
};

/* eslint-enable no-bitwise */
/* eslint-enable no-mixed-operators */
