import PropTypes from 'prop-types'

const App = ({children}) => {
  return (
    <div className="mv-Ap">
      <header>
        <h1>MOVIES</h1>
      </header>
      {children}
    </div>
  )
}

App.displayName = 'App'
App.propTypes = {
  children: PropTypes.children
}

export default App
