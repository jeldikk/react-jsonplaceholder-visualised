import React, {useEffect} from "react";

import { useSelector, useDispatch } from "react-redux";
import PostCard from "../post-card/post-card.component";

function PostList({posts, currPage, itemsPerPage}) {
    //console.log(props)

  return (
    <div className="post-list">
      {
        posts.map((post) => {
          return (
            <PostCard key={post.id} post={post} />
          );
        })
      }
    </div>
  );
}
/*
class PostList extends React.Component {
  componentDidMount() {
    console.log("component did mount life cycle method");
    this.props.fetchPosts();
    //include data fetching API request
  }

  renderList() {
    return this.props.posts.map((post) => {
      return (
        <div className="item" key={post.id}>
          <i className="large middle aligned icon user" />
          <div className="content">
            <div className="description">
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
          </div>
        </div>
      );
    });
  }
  render() {
    console.log(this.props.posts);
    return <div className="ui relaxed">{this.renderList()}</div>;
  }
}
*/
// const mapDispatchToProps = (dispatch) => {
//     return {
//         fetchPosts: () => dispatch(fetchPosts())
//     }
// }

// const mapStateToProps = (state) => {
//   return {
//     posts: state.posts.posts,
//   };
// };

// export default connect(mapStateToProps, { fetchPosts })(PostList);
export default PostList
