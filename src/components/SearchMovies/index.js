import PropTypes from 'prop-types'

import './index.scss'

const SearchMovies = ({handleClick, value, handleChange, placeholder}) => {
  return (
    <div className="SearchMovies">
      <input
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
      />
      <button onClick={handleClick}>BUSCAR PELICULAS</button>
    </div>
  )
}

SearchMovies.displayName = 'SearchMovies'

SearchMovies.propTypes = {
  handleClick: PropTypes.func,
  value: PropTypes.string,
  handleChange: PropTypes.func,
  placeholder: PropTypes.string
}

export default SearchMovies
