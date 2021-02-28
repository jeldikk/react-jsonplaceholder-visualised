import React, {useEffect, useState} from 'react'
import {Helmet} from 'react-helmet'
import logo from './logo.svg';
import {useDispatch, useSelector} from 'react-redux'



import {Switch, Route} from "react-router-dom"
// import './App.css';
// import {fetchU} from './redux/posts/posts.actions'
import {fetchUsers} from "./redux/users/users.actions"


import PostListPage from './pages/postlist/postlist.page'
import UserListPage from "./pages/userlist/userlist.page"
import PostPage from "./pages/post/post.page"
import UserPage from "./pages/user/user.page"
import Header from "./components/header/header.component"


function App() {

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(fetchUsers())
  }, [dispatch])

  return (
    <div className="App">
      <Helmet>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" />
        <title>Interface for jsonplaceholder api as blogpost</title>
      </Helmet>
      <Header />
      {/* <React.StrictMode> */}
      <main>
        <Switch>
          <Route exact path="/users" component={UserListPage} />
          <Route exact path="/users/:userId" component={UserPage} />
          <Route exact path="/posts" component={PostListPage} />
          <Route exact path="/posts/:postId" component={PostPage} />
        </Switch>
      </main>
      {/* </React.StrictMode> */}
      
    </div>
  );

}

export default App;
