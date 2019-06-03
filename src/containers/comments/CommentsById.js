import { connect } from 'react-redux';
import { getComments } from '../../selectors/commentSelectors';
import Comments from '../../components/comments/Comments';

const mapStateToProps = (state, { id }) => ({
  comments: getComments(state, id),
  id: id
});

export default connect(
  mapStateToProps
)(Comments);
