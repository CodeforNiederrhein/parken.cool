import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
import AppBar from 'material-ui/AppBar'
import InfoIcon from 'material-ui/svg-icons/action/info-outline'
import CloseIcon from 'material-ui/svg-icons/navigation/close'
import IconButton from 'material-ui/IconButton'
import styled from 'styled-components'
import LinearProgress from 'material-ui/LinearProgress'
import { Link, withRouter } from 'react-router-dom'
import { red500 } from 'material-ui/styles/colors'
import Title from './components/Title'
import Drawer from './components/Drawer'
import { closeMenu, openMenu } from './actions'
import { isMenuOpen } from './reducer'

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
    match: PropTypes.shape({
      path: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired
    }).isRequired,

    city: PropTypes.string.isRequired,
    closeMenu: PropTypes.func.isRequired,
    openMenu: PropTypes.func.isRequired,
    menuOpen: PropTypes.bool.isRequired
  }

  render () {
    const {
      loading,
      error,
      city,
      match: { path, url },
      menuOpen,
      closeMenu,
      openMenu
    } = this.props

    const rightElement = path === '/:city/info' ?
      <IconButton containerElement={<Link to={`/${city}`} />}><CloseIcon /></IconButton> :
      <IconButton containerElement={<Link to={`${url}/info`} />}><InfoIcon /></IconButton>

    return (
      <TopBarWrapper>
        <AppBar
          title={<Title city={city} />}
          iconElementRight={rightElement}
          onLeftIconButtonTouchTap={openMenu}
        />
        {
          loading ? <LinearProgress mode='indeterminate' style={{backgroundColor: ''}} /> :
          error ? <LinearProgress mode='determinate' value={100} color={red500} /> :
          undefined
        }
        <Drawer
          menuOpen={menuOpen}
          openMenu={openMenu}
          closeMenu={closeMenu}
          cities={['kleve', 'moers']}
        />
      </TopBarWrapper>
    )
  }
}

const mapStateToProps = (state, props) => ({
  menuOpen: isMenuOpen(state),
  city: props.match.params.city
})

const mapDispatchToProps = {
  closeMenu,
  openMenu
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(
    TopBar
  )
)
