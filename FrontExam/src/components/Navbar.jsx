import React from 'react'

const Navbar = ({child}) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">FeedBackApp</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/feedbackDashboard">Dashboard </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/addFeedback"> Add Feedback </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {child}
      </>
        )
}

export default Navbar