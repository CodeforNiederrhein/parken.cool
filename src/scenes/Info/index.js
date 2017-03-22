import React, { PureComponent } from 'react';
import Link from '../../components/Styles/Link'
import { Content } from '../../components/Styles'
import TopBar from '../../components/TopBar'

class NoMatchScene extends PureComponent {
  render() {
    return (
      <div>
        <TopBar />

        <Content paddingAbove withMargin>
          <p>Diese App entstand auf einer OpenData-Veranstaltung bei der Stadt Moers. Diese App basiert auf <Link to='https://www.offenesdatenportal.de/dataset/parkleitsystem-stadt-kleve/resource/d900652f-5104-457a-8dcd-696fb1441b62' target='_blank'>Daten, die die Stadt Kleve kostenfrei für jede*n zur freien Verfügung stellt</Link>.</p>

          <p>Gebaut wurde die Anwendung von <Link to='https://elmarburke.de/' target='_blank'>Elmar Burke</Link>.</p>
        </Content>
      </div>
    );
  }
}

export default NoMatchScene;
