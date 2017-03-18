import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Content } from '../../components/Styles'
import TopBar from '../../components/TopBar'
import { fetchParkingData } from './data/parkings/actions'
import { getAllParkings } from './data/parkings/reducer'

class HomeScene extends Component {
  componentDidMount () {
    this.props.fetchParkingData()
  }

  render() {
    return (
      <div>
        <TopBar />
        <Content>
          <ul>
            {this.props.parkings.map((parking) => (
              <li key={parking.id}>{parking.name} ({parking.current} / {parking.total})</li>
            ))}
          </ul>
        </Content>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  parkings: getAllParkings(state)
})

export default connect(mapStateToProps, {
  fetchParkingData
})(HomeScene);
