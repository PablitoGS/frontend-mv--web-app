import React, {useContext, useEffect, useState} from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import ThumbnailPicture from '@frontend-mv--uilib-components/sui-thumbnail-picture'
import ThumbnailPictureList from '@frontend-mv--uilib-components/sui-thumbnail-list'

import './index.scss'

import Context from '@s-ui/react-context'

const Home = (_, {i18n}) => {
  const [movies, setMovies] = useState([])
  const {domain} = useContext(Context)

  useEffect(() => {
    domain
      .get('get_movies_use_case')
      .execute()
      .then(movies => {
        const movie = movies
        setMovies(movie)
      })
  }, [domain])

  return (
    <>
      <Helmet>
        <title>Movies</title>
        <link rel="canonical" href="http://spa.mock/" />
      </Helmet>

      <h2 className="mv-HomeTitle">Popular movies</h2>
      <ThumbnailPictureList>
        {movies.map(movie => (
          <ThumbnailPictureList.Item key={movie.id}>
            <ThumbnailPicture
              src={movie.posterPath}
              alt={movie.title}
              caption={movie.title}
            />
          </ThumbnailPictureList.Item>
        ))}
      </ThumbnailPictureList>
    </>
  )
}

Home.contextTypes = {i18n: PropTypes.object}

export default Home
