import React from 'react';
import MDButtonWithSpinner from './src/MDButtonWithSpinner.jsx';
import styles from './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.onClick = this.onClick.bind(this);
    this.state = { showSpinner: false };
  }

  onClick() {
    this.setState({ showSpinner: !this.state.showSpinner });
  }

  render() {
    const { showSpinner } = this.state;
    return (
      <div className={styles.container}>
        <MDButtonWithSpinner
          onClick={this.onClick}
          buttonTheme="default"
          showSpinner={showSpinner}
        >
          Hello
        </MDButtonWithSpinner>
      </div>
    );
  }
}

export default App;
