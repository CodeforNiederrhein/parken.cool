import React, { PureComponent, PropTypes } from 'react'
import CircularProgress from 'material-ui/CircularProgress'
import ErrorIcon from 'material-ui/svg-icons/alert/error'
import { Content } from '../Styles'
import Icon from '../Icon'
import styled from 'styled-components'

const TopBarWrapper = styled.header`
  padding: 1.5em 0;
  background-color: #180733;
`

const ContentWrapped = styled(Content)`
  display: flex;
  align-items: center;
`

const IconStyled = styled(Icon)`
  max-height: 32px;
  margin-right: 1em;
`

const StatusArea = styled.div`
  flex: 1;
  align-self: flex-end;
  display: flex;
  align-self: center;
  align-items: flex-end;
  flex-direction: column;
`

class TopBar extends PureComponent {
  static propTypes = {
    loading: PropTypes.bool,
    error: PropTypes.bool
  }

  render () {

    return (
      <TopBarWrapper>
        <ContentWrapped>
          <IconStyled />
          <div>
            parken.cool
          </div>
          <StatusArea>
            {
              this.props.error ? <ErrorIcon color='white' /> :
                this.props.loading ? <CircularProgress size={32} /> : ''
            }
          </StatusArea>
        </ContentWrapped>
      </TopBarWrapper>
    )
  }
}

export default TopBar
