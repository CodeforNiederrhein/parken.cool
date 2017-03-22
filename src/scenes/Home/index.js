import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Content } from '../../components/Styles'
import TopBar from '../../components/TopBar'
import { fetchParkingData } from './data/parkings/actions'
import { getAllParkings, getLoading, getError } from './data/parkings/reducer'
import Parking from './components/Parking'

class HomeScene extends Component {
  componentDidMount () {
    this.intervalLoadingData = window.setInterval(
      () => this.props.fetchParkingData(),
      60000
    )
    this.props.fetchParkingData()
  }

  componentWillUnmount () {
    window.clearInterval(this.intervalLoadingData)
  }

  render() {
    const { loading, error, parkings } = this.props

    return (
      <div>
        <TopBar loading={loading} error={!!error} />
        <Content paddingAbove>
          {parkings.map((parking) => (
            <Parking key={parking.id} parking={parking} />
          ))}
        </Content>
        <Content>
          <p>Diese App entstand auf einer OpenData-Veranstaltung bei der Stadt Moers. Diese App basiert auf <a href='https://www.offenesdatenportal.de/dataset/parkleitsystem-stadt-kleve/resource/d900652f-5104-457a-8dcd-696fb1441b62' target='_blank' style={{color: 'white'}}>Daten, die die Stadt Kleve kostenfrei für jede*n zur freien Verfügung stellt</a>.</p>

          <p>Gebaut wurde die Anwendung von <a href='https://elmarburke.de/' target='_blank' style={{color: 'white'}}>Elmar Burke</a>.</p>
        </Content>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  parkings: getAllParkings(state),
  loading: getLoading(state),
  error: getError(state)
})

export default connect(mapStateToProps, {
  fetchParkingData
})(HomeScene);
