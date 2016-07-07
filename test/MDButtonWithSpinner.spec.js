import React from 'react';
import expect from 'expect';
import { createRenderer } from 'react-addons-test-utils';
import { shallow } from 'enzyme';
import expectJSX from 'expect-jsx'
expect.extend(expectJSX);
import MDButtonWithSpinner from 'src/MDButtonWithSpinner';
import MDButton from 'mdbutton';
import Spinner from 'react-spinkit';

describe('MDButtonWithSpinner', () => {

  it('should render MDButton if showSpinner equals false', () => {
    const wrapper = shallow(
      <MDButtonWithSpinner showSpinner={false} />
    );
    const mdbutton = wrapper.find('MDButton');
    expect(mdbutton.length).toEqual(1);
  });

  it('should render pulse Spinner if showSpiner equals true', () => {
    const wrapper = shallow(
      <MDButtonWithSpinner
        showSpinner
      />
    );
    expect(wrapper.props().spinnerName).toBe('pulse')
  });

  it('should render children', () => {
    const wrapper = shallow(
      <MDButtonWithSpinner
        showSpinner={false}
      >
        <div>Hello world</div>
      </MDButtonWithSpinner>
    )
    expect(wrapper.childAt(0).type()).toBe('div');
  });

  it('should not props onClick down if there is no specified onClick method', () => {
    const wrapper = shallow(
      <MDButtonWithSpinner />
    );
    expect(wrapper.props().onClick).toNotExist();
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
