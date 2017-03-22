import React, { PureComponent, PropTypes } from 'react'
import { List, ListItem } from 'material-ui/List';

import Parking from './components/Parking'

const NoParkings = () => (<ListItem
  primaryText='Es gibt keine Daten die angezeigt werden könnten'
  secondaryText='Entweder, die Daten laden noch oder es ist ein Fehler bei deiner Datenverbindung aufgetreten.'
  secondaryTextLines={2}
/>)

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

        {parkings.length === 0 ? <NoParkings /> : undefined}
      </List>
    )
  }
}

export default ParkingList
