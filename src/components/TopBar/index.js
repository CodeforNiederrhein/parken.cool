import React, { PureComponent, PropTypes } from 'react'
import AppBar from 'material-ui/AppBar'
import InfoIcon from 'material-ui/svg-icons/action/info-outline'
import CloseIcon from 'material-ui/svg-icons/navigation/close'
import IconButton from 'material-ui/IconButton'
import Icon from '../Icon'
import styled from 'styled-components'
import LinearProgress from 'material-ui/LinearProgress'
import { Link, withRouter } from 'react-router-dom'
import { red500 } from 'material-ui/styles/colors'

const TopBarWrapper = styled.header`
  position: fixed !important;
  z-index: 2;
  top: 0;
  left: 0;
  right: 0;
`
const IconStyled = styled(Icon)`
  max-height: 32px;
  margin-right: .3em;
`

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
`

const Title = () => (
  <TitleWrapper>
    <IconStyled />
    parken.cool
  </TitleWrapper>
)

class TopBar extends PureComponent {
  static propTypes = {
    loading: PropTypes.bool,
    error: PropTypes.bool,
    location: PropTypes.shape({
      pathname: PropTypes.string.isRequired
    }).isRequired
  }

  render () {
    const { loading, error, location: { pathname } } = this.props

    const rightElement = pathname === '/info' ?
      <IconButton containerElement={<Link to='/'/>}><CloseIcon /></IconButton> :
      <IconButton containerElement={<Link to='/info'/>}><InfoIcon /></IconButton>

    return (
      <TopBarWrapper>
        <AppBar
          title={<Title />}
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
