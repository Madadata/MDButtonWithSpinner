import React from 'react'
import expect from 'expect'
import { createRenderer } from 'react-addons-test-utils'
import expectJSX from 'expect-jsx'
expect.extend(expectJSX);
import MDButtonWithSpinner from 'src/MDButtonWithSpinner';
import MDButton from 'mdbutton';

describe('MDButtonWithSpinner', () => {
  it('should render MDButton', () => {
    const renderer = createRenderer();
    renderer.render(<MDButtonWithSpinner />);
    const actualElement = renderer.getRenderOutput();
    const expectedElement = <MDButton>{' '}</MDButton>;
    expect(actualElement).toIncludeJSX(expectedElement);
  });

  it('should call onClick when clicked', () => {
    const renderder = createRenderer();
    let hasClicked = false;
    let onClick = () => hasClicked = true;
    renderder.render(<MDButtonWithSpinner onClick={onClick} />);
    renderder.getRenderOutput().props.onClick();
    expect(hasClicked).toBe(true);
  })
});
