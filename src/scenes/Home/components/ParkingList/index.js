import React, { PureComponent, PropTypes } from 'react'
import { List, ListItem } from 'material-ui/List';
import { Avatar } from 'material-ui'

import Parking from './components/Parking'

class ParkingList extends PureComponent {
  static propTypes = {
    parkings: PropTypes.arrayOf(PropTypes.object).isRequired
  }

  render () {
    const { parkings } = this.props
    return (
      <List>
        {parkings.map(
          parking => <Parking parking={parking} key={parking.id} />
        )}
      </List>
    )
  }
}

export default ParkingList
