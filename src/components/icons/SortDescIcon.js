import React from 'react';
import FontAwesomeIcon from './FontAwesomeIcon';

// criei esta abstração porque se algum dia quiser mudar de fontawsome
// para react icons é só mudar aqui
const SortDescIcon = ({ heigth = '32px' }) => <FontAwesomeIcon style={{ fontSize: heigth }} icon="far fa-arrow-alt-circle-down" />;

export default SortDescIcon;
