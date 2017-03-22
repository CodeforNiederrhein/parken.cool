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
          Hier ist nichts. Gehe zurück auf die <Link to='/'>Hauptseite</Link>.
        </Content>
      </div>
    );
  }
}

export default NoMatchScene;
