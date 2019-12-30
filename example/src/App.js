import React, { Component } from 'react'

import ExampleComponent from 'react-parallax-header'

export default class App extends Component {
  render () {
    return (
      <div>
        <ExampleComponent minHeight={60} height={240}>
          <div className='profile-photo' transform={{
            scale: 0.8
          }}>
            <img src='https://via.placeholder.com/50x50' alt='profile' />
          </div>
          <div className='profile-name' transform={{
            x: 40,
            y: -20
          }}>Mahmut ISCI</div>
        </ExampleComponent>
      </div>
    )
  }
}
