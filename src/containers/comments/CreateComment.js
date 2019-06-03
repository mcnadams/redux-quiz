import { connect } from 'react-redux';
import CommentForm from '../../components/comments/CommentForm';
import { createComment } from '../../actions/commentActions';

const mapDispatchToProps = (dispatch) => ({
  onSubmit(id, comment) {
    dispatch(createComment(id, comment));
  }
});

export default connect(
  null,
  mapDispatchToProps
)(CommentForm);
