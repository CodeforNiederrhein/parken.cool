import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Content } from '../../components/Styles'
import TopBar from '../../components/TopBar'
import { fetchParkingData } from './data/parkings/actions'
import { getAllParkings, getLoading } from './data/parkings/reducer'
import Parking from './components/Parking'

class HomeScene extends Component {
  componentDidMount () {
    this.props.fetchParkingData()
  }

  render() {
    return (
      <div>
        <TopBar loading={this.props.loading} />
        <Content>
          {this.props.parkings.map((parking) => (
            <Parking key={parking.id} parking={parking} />
          ))}
        </Content>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  parkings: getAllParkings(state),
  loading: getLoading(state)
})

export default connect(mapStateToProps, {
  fetchParkingData
})(HomeScene);
