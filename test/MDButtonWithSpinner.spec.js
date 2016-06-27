import React from 'react'
import expect from 'expect'
import { createRenderer } from 'react-addons-test-utils'
import expectJSX from 'expect-jsx'
expect.extend(expectJSX);
import MDButtonWithSpinner from 'src/MDButtonWithSpinner';
import MDButton from 'mdbutton';
import Spinner from 'react-spinkit';

describe('MDButtonWithSpinner', () => {

  it('should render MDButton if showSpinner equals false', () => {
    const renderer = createRenderer();
    renderer.render(
      <MDButtonWithSpinner
        showSpinner={false}
      />
    );
    const actualElement = renderer.getRenderOutput();
    const expectedElement = <MDButton>{' '}</MDButton>;
    expect(actualElement).toIncludeJSX(expectedElement);
  });

  it('should render pulse Spinner if showSpiner equals true', () => {
    const renderer = createRenderer();
    renderer.render(
      <MDButtonWithSpinner
        showSpinner
      />
    );
    const actualElement = renderer.getRenderOutput();
    const expectedElement = <Spinner spinnerName="pulse"/>;
    expect(actualElement.props.spinnerName).toEqual('pulse');
    expect(actualElement).toIncludeJSX(expectedElement);
  })

  it('should render children', () => {
    const renderer = createRenderer();
    renderer.render(
      <MDButtonWithSpinner
        showSpinner={false}
      >
        <div>Hello world</div>
      </MDButtonWithSpinner>
    );
    const actualElement = renderer.getRenderOutput();
    expect(actualElement.props.children[1].type).toEqual('div');
  })

  it('should not props onClick down if there is no specified onClick method', () => {
    const renderer = createRenderer();
    renderer.render(<MDButtonWithSpinner />);
    const actualElement = renderer.getRenderOutput();
    expect(actualElement.props.onClick).toNotExist();
  })

  it('should call onClick when clicked', () => {
    const renderder = createRenderer();
    let hasClicked = false;
    let onClick = () => hasClicked = true;
    renderder.render(<MDButtonWithSpinner onClick={onClick} />);
    renderder.getRenderOutput().props.onClick();
    expect(hasClicked).toBe(true);
  })
});
