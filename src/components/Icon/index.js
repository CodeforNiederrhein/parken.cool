import React, { PureComponent } from 'react'
import svgIcon from './car.svg'

class Icon extends PureComponent {
  render () {
    return <img {...this.props} src={svgIcon} alt='Icon' />
  }
}

export default Icon
