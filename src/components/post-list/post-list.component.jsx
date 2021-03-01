import React, {useEffect} from "react";

import { useSelector, useDispatch } from "react-redux";
import PostCard from "../post-card/post-card.component";

function PostList({posts}) {
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

export default PostList
