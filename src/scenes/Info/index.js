import React, { PureComponent, PropTypes } from 'react';
import Link from '../../components/Styles/Link'
import { Content } from '../../components/Styles'
import TopBar from '../../components/TopBar'

class NoMatchScene extends PureComponent {
  render() {
    const { city } = this.props.match.params
    return (
      <div>
        <TopBar city={city} />

        <Content paddingAbove withMargin>
          <p>Diese App entstand auf einer OpenData-Veranstaltung bei der Stadt Moers.</p>
          <p>Diese App basiert auf <Link to='https://www.offenesdatenportal.de/dataset/parkleitsystem-stadt-kleve/resource/d900652f-5104-457a-8dcd-696fb1441b62' target='_blank'>Daten, die die Stadt Kleve</Link> sowie <Link to='https://offenesdatenportal.de/dataset/parkleitsystem-moers/resource/b53d37cd-3498-4166-ab0c-f5e565df814f' target='_blank'>die Stadt Moers</Link> kostenfrei für jede*n zur freien Verfügung stellt.</p>

          <p>Gebaut wurde die Anwendung von <Link to='https://elmarburke.de/' target='_blank'>Elmar Burke</Link>.</p>
        </Content>
      </div>
    );
  }
}

export default NoMatchScene;
