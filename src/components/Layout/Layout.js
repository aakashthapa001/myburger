import React from 'react';

import AuxWrapper from '../../hoc/AuxWrapper';
import classes from './Layout.scss';

import Toolbar from '../Navigation/Toolbar/Toolbar';

const layout = (props) => (
  <AuxWrapper>
    <Toolbar />

    <main className={classes.Content}>
      {props.children}
    </main>
  </AuxWrapper>
);

export default layout;
