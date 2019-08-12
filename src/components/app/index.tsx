import * as React from 'react';
import './app.scss';

import Greeting from '../../containers/greeting';
import Increment from '../../containers/increment';

class App extends React.Component<{}, {}> {
  public render() {
    return (
      <div id='app' className='app'>
       <Greeting />
       <Increment />
      </div>
    );
  }
}

export default App;
