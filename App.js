import React from 'react';
import MDButtonWithSpinner from './src/MDButtonWithSpinner.jsx';

const App = () => (
  <div>
    <MDButtonWithSpinner
      buttonText="hello"
      buttonTheme="default"
      isWaiting
    />
  </div>
);

export default App;
