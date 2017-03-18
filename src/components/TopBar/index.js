import React, { PureComponent } from 'react'
import { Content } from '../Styles'
import styled from 'styled-components'

const TopBarWrapper = styled.header`
  padding: 1.5em 0;
  background-color: #180733;
`

class TopBar extends PureComponent {
  render () {
    return (
      <TopBarWrapper>
        <Content>
          Wo ist parken?
        </Content>
      </TopBarWrapper>
    )
  }
}

export default TopBar
