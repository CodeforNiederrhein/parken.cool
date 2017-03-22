import React, { PureComponent, PropTypes } from 'react'
import {ListItem} from 'material-ui/List';
import ArrowDown from 'material-ui/svg-icons/action/trending-down'
import ArrowUp from 'material-ui/svg-icons/action/trending-up'
import ArrowFlat from 'material-ui/svg-icons/action/trending-flat'
import Help from 'material-ui/svg-icons/action/help-outline'
import Close from 'material-ui/svg-icons/navigation/close'
import Avatar from 'material-ui/Avatar';
import { green500, lightWhite, red500 } from 'material-ui/styles/colors'
import styled from 'styled-components'

const arrows = {
  '1': {
    color: red500,
    Arrow: ArrowUp
  },
  '0': {
    color: lightWhite,
    Arrow: ArrowFlat
  },
  '-1': {
    color: green500,
    Arrow: ArrowDown
  },
  'undefined': {
    color: lightWhite,
    Arrow: Help
  },
  'failure': {
    color: lightWhite,
    Arrow: Help
  },
  'closed': {
    color: lightWhite,
    Arrow: Close
  }
}

const NumberWrapper = styled.span`
  color: ${lightWhite};
`

const CurrentWrapper = styled.span`
  font-weight: 500;
`

const NormalWrapper = styled.span`
  font-weight: 200;
`

class Parking extends PureComponent {
  static propTypes = {
    parking: PropTypes.object.isRequired
  }

  render () {
    const {
      name,
      trend,
      total,
      current,
      state
    } = this.props.parking
    
    console.log(state, arrows[state])

    const { Arrow, color } = state !== 'open' ? arrows[state] : arrows[trend]

    const capacity = (
      <NumberWrapper>
        <CurrentWrapper>{current}</CurrentWrapper>
        <NormalWrapper>/{total}</NormalWrapper>
      </NumberWrapper>
    )

    return (
       <ListItem
        leftAvatar={<Avatar icon={<Arrow />} backgroundColor={color} />}
        primaryText={name}
        secondaryText={capacity}
       />
    )
  }
}

export default Parking
