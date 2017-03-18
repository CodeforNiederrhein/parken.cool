import React, { PureComponent } from 'react'
import styled from 'styled-components'
import ArrowDown from 'material-ui/svg-icons/action/trending-down'
import ArrowUp from 'material-ui/svg-icons/action/trending-up'
import ArrowFlat from 'material-ui/svg-icons/action/trending-flat'

const ParkingWrapper = styled.div`
  margin: 1em 0;
  padding: 1em;
  display: flex;
  flex-direction: row;
  align-items: center;
  flex: 1;
`

const IconWrapper = styled.div`
  margin-right: 1em;
`

const ParkingNameWrapper = styled.div`
  font-weight: 500;
  font-size: 1.2em;
  margin-right: 1em;
  flex: 1;
`

const CurrentWrapper = styled.div`
  font-weight: 500;
  color: #e5d4ff;
`

const NormalWrapper = styled.div`
  font-weight: 200;
  color: #e5d4ff;
`

const ContentWrapper = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
`


class Parking extends PureComponent {
  render () {
    const { parking } = this.props

    let arrow
    if (parking.trend === '-1') {
      arrow = <ArrowDown color="#0f0" />
    } else if (parking.trend === '0') {
      arrow = <ArrowFlat color='#fff' />
    } else if (parking.trend === '1') {
      arrow = <ArrowUp color="#f00" />
    }

    return (
      <ParkingWrapper>
        <IconWrapper>
          {arrow}
        </IconWrapper>
        <ContentWrapper>
          <ParkingNameWrapper>
            {parking.name}
          </ParkingNameWrapper>
          <CurrentWrapper>{parking.current}</CurrentWrapper>
          <NormalWrapper>/{parking.total}</NormalWrapper>
        </ContentWrapper> 
      </ParkingWrapper>
    )
  }
}

export default Parking
