import * as PropTypes from 'prop-types'
import * as React from 'react'
import { Link } from 'react-router-dom'
import { componentInfoContext } from 'docs/src/utils'
import RootLayout from 'docs/src/v2/Layouts/RootLayout'

export type SidebarLayoutProps = {
  component: any
  exact: boolean
  path: string
}

class SidebarLayout extends React.Component<SidebarLayoutProps> {
  static propTypes = {
    component: PropTypes.any,
    exact: PropTypes.bool,
    path: PropTypes.string,
  }

  renderChildren = () => {
    const { component: Children, ...otherProps } = this.props

    return (
      <div className="v2-sidebar-layout">
        <div className="v2-sidebar-layout__sidebar">
          <h1>Stardust</h1>
          <select>
            <option value="base">Base</option>
          </select>
          <hr />
          <hr />
          <ul>
            <li>Get Started</li>
            <li>Styles</li>
            <li>
              Components
              <ul>
                {componentInfoContext.parents.map(info => (
                  <li key={info.displayName}>
                    <Link to={`/v2/components/${info.displayName}`}>{info.displayName}</Link>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </div>
        <div className="v2-sidebar-layout__view">
          <Children {...otherProps} />
        </div>
      </div>
    )
  }

  render() {
    const { path } = this.props

    return <RootLayout exact path={path} render={this.renderChildren} />
  }
}

export default SidebarLayout
