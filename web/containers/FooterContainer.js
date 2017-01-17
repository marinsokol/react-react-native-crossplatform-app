import { connect } from 'react-redux';
import { removeError } from '../../app/actions';

import Footer from '../components/Footer';

const mapStateToProps = state => ({
  message: state.errors,
});

const mapDispatchToProps = dispatch => ({
  removeError: () => {
    dispatch(removeError());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Footer);
