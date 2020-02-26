import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import Associate from 'routes/associate/Associate';

let container: any = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('Associate renders without a name', () => {
  act(() => {
    render(<Associate />, container);
  });
  expect(container.textContent).toContain(
    'AssociateChoose the right item associated with the big picture!'
  );
});
