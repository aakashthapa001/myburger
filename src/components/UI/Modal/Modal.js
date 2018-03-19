import React from 'react';

import classes from './Modal.scss';

import AuxWrapper from '../../../hoc/AuxWrapper';
import BackDrop from '../Backdrop/Backdrop';

const modal = (props) => (
  <AuxWrapper>
    <BackDrop show={props.show} clicked={props.modalClosed} />
    <div
      className={classes.Modal}
      style={{
        transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
        opacity: props.show ? '1' : '0'
      }}
    >
      {props.children}
    </div>
  </AuxWrapper>
);

export default modal;
