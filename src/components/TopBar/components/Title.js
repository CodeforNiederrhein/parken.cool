import React, { PureComponent, PropTypes } from 'react'
import capitalize from 'lodash/capitalize'
import Icon from '../../Icon'
import styled from 'styled-components'

const IconStyled = styled(Icon)`
  max-height: 32px;
  margin-right: .3em;
`

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
`

class Title extends PureComponent {
  static propTypes = {
    city: PropTypes.string.isRequired
  }

  render () {
    const { city } = this.props

    return (
      <TitleWrapper>
        <IconStyled />
        Parken in {capitalize(city)}
      </TitleWrapper>
    )
  }
}

export default Title
