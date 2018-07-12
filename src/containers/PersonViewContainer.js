import { connect } from 'react-redux'

import { fetchPersonDetails } from '../actions/PersonActions'

import PersonView from '../components/PersonView'

const mapStateToProps = state => ({
  person: state.person.person,
  success: state.person.success,
  loading: state.person.loading,
  error: state.person.error,
  pathname: state.router.location.pathname,
})

const mapDispatchToProps = dispatch => ({
  fetchPersonDetails: username => dispatch(fetchPersonDetails(username))
})

export default connect(mapStateToProps, mapDispatchToProps)(PersonView)
