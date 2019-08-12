import * as React from 'react';
import './increment.scss';

export interface Props {
  count: number;
  increment: any;
};

export default class Increment extends React.Component<Props, any> {
  constructor() {
    super();
    this.buttonClicked = this.buttonClicked.bind(this);
  }

  public buttonClicked() {
    this.props.increment();
  }

  public render() {
    return (
      <div id='increment' className='increment-card'>
        <h1>Increment demo</h1>
        <button onClick={this.buttonClicked} className='btn success'>Increment</button>

        <h2 id='increment-value' className='increment-value'>{this.props.count}</h2>
      </div>
    );
  }
}
