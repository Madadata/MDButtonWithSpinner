import React from 'react'
import expect from 'expect'
import { createRenderer } from 'react-addons-test-utils'
import expectJSX from 'expect-jsx'
expect.extend(expectJSX);
import MDButtonWithSpinner from '../MDButtonWithSpinner';
import MDButton from 'mdbutton';

describe('MDButtonWithSpinner', () => {
  it('should works', () => {
    const renderer = createRenderer();
    renderer.render(<MDButtonWithSpinner />);
    const actualElement = renderer.getRenderOutput();
    const expectedElement = <MDButton>{' '}</MDButton>;
    expect(actualElement).toIncludeJSX(expectedElement);
  });
});
