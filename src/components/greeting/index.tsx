import * as React from 'react';
import './greeting.scss';
export interface Props {
  greeting: string;
  updateGreeting: (greeting: string) => void;
};

export default class Greeting extends React.Component<Props, {}> {
  public refs: {
    greetingInputRef: HTMLInputElement;
  };

  constructor() {
    super();
    this.updateGreetingAction = this.updateGreetingAction.bind(this);
  }

  public updateGreetingAction() {
    this.props.updateGreeting(this.refs.greetingInputRef.value);
  }

  public render() {
    return (
      <div id='greeting' className='greeting-card'>
        <h1>Greeting demo</h1>
        <input id='greeting-input' ref='greetingInputRef' type='text'></input>
        <button id='greeting-button' className='btn success' onClick={this.updateGreetingAction}>Update Greeting</button>

        <h2 id='greeting-text' className='greeting-text'>{this.props.greeting}</h2>
      </div>
    );
  }
}
