import React from 'react';

import AuxWrapper from '../../hoc/AuxWrapper';

const layout = (props) => (
  <AuxWrapper>
    <div>Toolbar, SideDrawer, Backdrop</div>
    <main>
      {props.children}
    </main>
  </AuxWrapper>
);

export default layout;
