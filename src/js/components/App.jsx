import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';
import DevTools from 'mobx-react-devtools';

@inject('appStore') @observer
export default class App extends Component {
  render() {
    let ongoingInitAuth = this.props.appStore.ongoingInitAuth;
    return (
      <div>
        {ongoingInitAuth &&
        <div id='app'>ongoing</div>
        }
        {!ongoingInitAuth &&
        <div id='app'>finished</div>
        }
        <DevTools />
      </div>
    )
  }
}