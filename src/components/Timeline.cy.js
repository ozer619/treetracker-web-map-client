import React from 'react';

import { mountWithTheme as mount } from '../models/test-utils';
import Timeline from './Timeline';

describe('Timeline', () => {
  before(() => {
    cy.viewport('iphone-6');
  });

  it('SidePanel shown and turn to next page', () => {
    function Test() {
      const [treeIndex, setTreeIndex] = React.useState(0);

      function handleNext() {
        setTreeIndex(treeIndex + 1);
      }

      return (
        <div style={{ background: 'gray', height: '1000px' }}>
          <Timeline onDateChange={(e) => console.log('change:', e)} />
        </div>
      );
    }
    mount(<Test />);
    //    cy.contains("Dadior");
  });
});
