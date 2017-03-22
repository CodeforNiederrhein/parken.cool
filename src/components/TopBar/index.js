import React, { PureComponent, PropTypes } from 'react'
import AppBar from 'material-ui/AppBar'
import ErrorIcon from 'material-ui/svg-icons/alert/error'
import IconButton from 'material-ui/IconButton'
import Icon from '../Icon'
import styled from 'styled-components'
import LinearProgress from 'material-ui/LinearProgress'

const TopBarWrapper = styled.header`
  position: fixed !important;
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
    error: PropTypes.bool
  }

  render () {
    const { error, loading } = this.props

    return (
      <TopBarWrapper>
        <AppBar
          title={<Title />}
          iconElementRight={error ? <IconButton><ErrorIcon /></IconButton> : undefined}
          showMenuIconButton={false}
        />
        { loading && <LinearProgress mode='indeterminate' style={{backgroundColor: ''}} /> }
      </TopBarWrapper>
    )
  }
}

export default TopBar
