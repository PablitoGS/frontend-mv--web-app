/* eslint-disable react/prop-types */
import React, {useContext, useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import Context from '@s-ui/react-context'
import Card from '@frontend-mv--uilib-components/sui-card-movie'

import './index.scss'

const MovieDetails = ({params}) => {
  const {id} = params
  const [movie, setMovie] = useState([])
  const {domain} = useContext(Context)

  useEffect(() => {
    domain
      .get('get_details_movie_use_case')
      .execute({id})
      .then(movie => {
        setMovie(movie)
      })
  }, [domain, id])

  return (
    <>
      <Card
        src={movie.posterPath}
        title={movie.title}
        subtitle={movie.releaseDate}
        description={movie.overview}
      />
    </>
  )
}

MovieDetails.propTypes = {
  id: PropTypes.number
}

export default MovieDetails
