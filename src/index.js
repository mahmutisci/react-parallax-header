import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from './styles.css'

export default class ExampleComponent extends Component {
  static propTypes = {
    height: PropTypes.number,
    minHeight: PropTypes.number
  }
  parallaxHeader = React.createRef()
  parallaxMain = React.createRef()
  profilePhoto = React.createRef()
  scrollEvent = e => {
    this.calculation(e.target.scrollTop)
    this.childCal(e.target.scrollTop)
  }
  calculation = scroll => {
    const {height, minHeight} = this.props
    const cal = height - scroll
    console.log(Math.max(minHeight, cal))
    this.parallaxHeader.current.style.height = Math.max(minHeight, cal) + 'px'
  }
  childCal = scroll => {
    const el = this.profilePhoto.current
    const {width, height} = el.dataset
    el.style.width = Math.max(width, 100 - scroll / 3) + 'px'
    el.style.height = Math.max(height, 100 - scroll / 3) + 'px'
  }
  componentDidMount() {
    this.parallaxMain.current.addEventListener('scroll', this.scrollEvent)
  }

  render() {
    const {height} = this.props

    return (
      <div className={styles.parallaxComponent} ref={this.parallaxMain}>
        <div className={styles.parallaxHeader}
          ref={this.parallaxHeader}
          style={{height: height + 'px'}}>
          <div className={styles.profile} ref={this.profilePhoto} data-width={40} data-height={40}>
            <img src='https://via.placeholder.com/50x50' alt='profile' />
          </div>
        </div>
        <div className={styles.parallaxContent}>
          Suspendisse nisl elit, rhoncus eget, elementum ac, condimentum eget, diam. Curabitur nisi. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Praesent egestas tristique nibh. Quisque libero metus, condimentum nec, tempor a, commodo mollis, magna.

          Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Maecenas ullamcorper, dui et placerat feugiat, eros pede varius nisi, condimentum viverra felis nunc et lorem. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. Donec venenatis vulputate lorem.

          Donec mi odio, faucibus at, scelerisque quis, convallis in, nisi. Donec interdum, metus et hendrerit aliquet, dolor diam sagittis ligula, eget egestas libero turpis vel mi. Sed libero. Sed fringilla mauris sit amet nibh. Nam adipiscing.

          Phasellus tempus. Pellentesque posuere. Curabitur nisi. Nulla sit amet est. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci.

          Ut non enim eleifend felis pretium feugiat. Morbi mattis ullamcorper velit. Aenean vulputate eleifend tellus. Fusce convallis metus id felis luctus adipiscing. Sed magna purus, fermentum eu, tincidunt eu, varius ut, felis.
        </div>
      </div>
    )
  }
}
