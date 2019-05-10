import * as React from 'react'
import { Link } from 'react-router-dom'

class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>Stardust</h1>
        <p>A themable React library.</p>
        <p>
          Stardust UI provides extensible vanilla JavaScript solutions to component state, styling
          and accessibility. These powerful features are exposed behind simple APIs based on natural
          language.
        </p>
        <p>
          Stardust UI React is being built as an exemplar of the Stardust UI specifications,
          component specifications, and utilities.
        </p>

        <ul className="v2-inline-list">
          <li>
            <Link to="/v2/get-started">
              <button className="v2-primary-button">Get Started</button>
            </Link>
          </li>
          <li>
            <Link to="/v2/components">
              <button className="v2-link-button">Components</button>
            </Link>
          </li>
          <li>
            <Link to="/v2/styles">
              <button className="v2-link-button">Styles</button>
            </Link>
          </li>
          <li>
            <Link to="/v2/learn">
              <button className="v2-link-button">Learn</button>
            </Link>
          </li>
        </ul>
      </div>
    )
  }
}

export default Home
