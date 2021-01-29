import React from 'react'
import PropTypes from 'prop-types'
import Header from './Header'

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <div>{children}</div>
    </div>
  )
}

export default Layout

Layout.prototypes = {
  children: PropTypes.element.isRequired,
}
