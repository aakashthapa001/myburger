import React from 'react';

import AuxWrapper from '../../hoc/AuxWrapper';
import classes from './Layout.scss';

const layout = (props) => (
  <AuxWrapper>
    <div>Toolbar, SideDrawer, Backdrop</div>
    <main className={classes.Content}>
      {props.children}
    </main>
  </AuxWrapper>
);

export default layout;
