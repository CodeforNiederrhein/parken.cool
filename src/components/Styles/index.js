import styles from 'styled-components'

export const Content = styles.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 0;

  ${props => props.withMargin ? `
    margin: 16px auto;
    padding: 0 16px;
  ` : ''}
  ${props => props.paddingAbove ? 'padding-top: 64px;' : ''}
`
