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
        <TopBar loading={loading} error={error} />
        <Content>
          {parkings.map((parking) => (
            <Parking key={parking.id} parking={parking} />
          ))}
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
