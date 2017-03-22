import React, { PureComponent, PropTypes } from 'react'
import AppBar from 'material-ui/AppBar'
import InfoIcon from 'material-ui/svg-icons/action/info-outline'
import CloseIcon from 'material-ui/svg-icons/navigation/close'
import IconButton from 'material-ui/IconButton'
import styled from 'styled-components'
import LinearProgress from 'material-ui/LinearProgress'
import { Link, withRouter } from 'react-router-dom'
import { red500 } from 'material-ui/styles/colors'

import Title from './components/Title'

const TopBarWrapper = styled.header`
  position: fixed !important;
  z-index: 2;
  top: 0;
  left: 0;
  right: 0;
`

class TopBar extends PureComponent {
  static propTypes = {
    loading: PropTypes.bool,
    error: PropTypes.bool,
    location: PropTypes.shape({
      pathname: PropTypes.string.isRequired
    }).isRequired,
    city: PropTypes.string.isRequired
  }

  render () {
    const { loading, error, city, match: { path, url, params } } = this.props

    const rightElement = path === '/:city/info' ?
      <IconButton containerElement={<Link to={`/${params.city}`} />}><CloseIcon /></IconButton> :
      <IconButton containerElement={<Link to={`${url}/info`} />}><InfoIcon /></IconButton>

    return (
      <TopBarWrapper>
        <AppBar
          title={<Title city={city} />}
          iconElementRight={rightElement}
          showMenuIconButton={false}
        />
        {
          loading ? <LinearProgress mode='indeterminate' style={{backgroundColor: ''}} /> :
          error ? <LinearProgress mode='determinate' value={100} color={red500} /> :
          undefined
        }
      </TopBarWrapper>
    )
  }
}

export default withRouter(TopBar)
