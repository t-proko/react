import * as PropTypes from 'prop-types'
import * as React from 'react'
import { Route } from 'react-router'
import { getUnhandledProps } from 'src/lib'

export type RootLayoutProps = {
  component: any
  exact: boolean
  path: string
}

class RootLayout extends React.Component<RootLayoutProps> {
  static propTypes = {
    component: PropTypes.any,
    exact: PropTypes.bool,
    path: PropTypes.string,
  }

  renderChildren = () => {
    const unhandledProps = getUnhandledProps(RootLayout, this.props)
    const { component: Children } = this.props

    return (
      <div className="v2-root">
        <Children {...unhandledProps} />
      </div>
    )
  }

  render() {
    const { path, exact } = this.props

    return <Route exact={exact} path={path} render={this.renderChildren} />
  }
}

export default RootLayout
