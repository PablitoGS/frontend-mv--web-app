import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
alert()

const Home = (_, {i18n}) => (
  <>
    <Helmet>
      <link rel="canonical" href="http://spa.mock/" />
    </Helmet>
    <h1>Home test title</h1>
  </>
)

Home.contextTypes = {i18n: PropTypes.object}

export default Home
