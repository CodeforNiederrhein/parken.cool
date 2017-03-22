import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
import { Content } from '../../components/Styles'
import TopBar from '../../components/TopBar'
import { fetchParkingData } from './data/parkings/actions'
import { getAllParkingsByCity, getLoading, getError } from './data/parkings/reducer'
import ParkingList from './components/ParkingList'

class HomeScene extends PureComponent {
  componentDidMount () {
    const { city } = this.props
    this.intervalLoadingData = window.setInterval(
      () => this.props.fetchParkingData(city),
      60000
    )
    this.props.fetchParkingData(city)
    window.localStorage.setItem('city', city)
  }

  componentWillReceiveProps ({ city }) {
    if (city !== this.props.city) {
      window.localStorage.setItem('city', city)
      window.clearInterval(this.intervalLoadingData)
      this.intervalLoadingData = window.setInterval(
        () => this.props.fetchParkingData(city),
        60000
      )
      this.props.fetchParkingData(city)
    }
  }

  componentWillUnmount () {
    window.clearInterval(this.intervalLoadingData)
  }

  render() {
    const { loading, error, parkings, city } = this.props

    return (
      <div>
        <TopBar loading={loading} error={!!error} city={city} />

        <Content paddingAbove>
          <ParkingList parkings={parkings} />
        </Content>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  city: props.match.params.city,
  parkings: getAllParkingsByCity(state, props.match.params.city),
  loading: getLoading(state),
  error: getError(state)
})

export default connect(mapStateToProps, {
  fetchParkingData
})(HomeScene);
