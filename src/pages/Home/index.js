import React, {useContext, useEffect, useState} from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'

import './index.scss'

import Context from '@s-ui/react-context'

const Home = (_, {i18n}) => {
  const [movies, setMovies] = useState([])

  const {domain} = useContext(Context)

  useEffect(() => {
    getMovies()

    function getMovies() {
      return domain
        .get('get_movies_use_case')
        .execute()
        .then(movies => {
          const movie = movies
          setMovies(movie)
        })
    }
  }, [])

  return (
    <>
      <Helmet>
        <link rel="canonical" href="http://spa.mock/" />
      </Helmet>
      <h2>Popular movies</h2>
      <ul className="list">
        {movies.map(movie => (
          <li key={movie.id}>
            {movie.title}
            <div>
              <img width="500" src={movie.posterPath} alt="" />
            </div>
          </li>
        ))}
      </ul>
    </>
  )
}

Home.contextTypes = {i18n: PropTypes.object}

export default Home
