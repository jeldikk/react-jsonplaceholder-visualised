import React, { useState, useEffect } from "react";

import "./postlist.styles.scss";

import { useDispatch, useSelector } from "react-redux";
import { Container, Breadcrumb } from "react-bootstrap";
import { fetchPosts } from "../../redux/posts/posts.actions";

import BreadcrumbItem from '../../components/breadcrumb-item/breadcrumb-item.component'
import Pagination from "../../components/pagination/pagination.component";
import PostList from "../../components/post-list/post-list.component";

import { ITEMS_PER_PAGE } from "../../constants/index";

import { getPostsByPageNumber, getPostsLength } from "../../redux/posts/posts.selectors";

const PostListPage = () => {
  const [currPage, setCurrPage] = useState(0);

  const dispatch = useDispatch();
  const posts = useSelector((state) => getPostsByPageNumber(state, currPage));
  const postsLength = useSelector(getPostsLength)

  useEffect(() => {
    if(posts.length === 0){
        dispatch(fetchPosts());
    }
  }, [dispatch]);

  const onPageChange = (pageNumber) => {
    const { selected } = pageNumber;
    setCurrPage(selected);
  };

  // console.log({posts})

  return (
    <div className="postlist-page">
      <Container className="content-wrapper" fluid="md">
        <p>You are here:</p>
        <Breadcrumb>
          <BreadcrumbItem toPath="posts">posts /</BreadcrumbItem>
        </Breadcrumb>
        <h1 className="text-center">Posts</h1>
        <PostList posts={posts} currPage={currPage} itemsPerPage={ITEMS_PER_PAGE} />
        <Pagination
          onPageChange={onPageChange}
          pageCount={postsLength / ITEMS_PER_PAGE}
          pageRangeDisplayed={2}
          marginPagesDisplayed={2}
        />
      </Container>
    </div>
  );
};

export default PostListPage;
