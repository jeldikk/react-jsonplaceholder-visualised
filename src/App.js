import React, {useEffect, Suspense} from 'react'
import {Helmet} from 'react-helmet'
// import logo from './logo.svg';
import {useDispatch} from 'react-redux'

import {Switch, Route} from "react-router-dom"
// import './App.css';
// import {fetchU} from './redux/posts/posts.actions'
import {fetchUsers} from "./redux/users/users.actions"
import Header from "./components/header/header.component"

const Homepage = React.lazy(()=>import("./pages/home/home.page"))
// import PostListPage from './pages/postlist/postlist.page'
const PostListPage = React.lazy(()=> import("./pages/postlist/postlist.page"));
// import UserListPage from "./pages/userlist/userlist.page"
const UserListPage = React.lazy(() => import("./pages/userlist/userlist.page"));
// import PostPage from "./pages/post/post.page"
const PostPage = React.lazy(()=> import("./pages/post/post.page"))
// import UserPage from "./pages/user/user.page"
const UserPage = React.lazy(() => import("./pages/user/user.page"))


function App() {

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(fetchUsers())
  }, [dispatch])

  return (
    <div className="App">
      <Helmet>
        <link rel="stylesheet" type="text/css" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" />
        <title>Interface for jsonplaceholder api as blogpost</title>
      </Helmet>
      <Header />
      {/* <React.StrictMode> */}
      <main style={{marginTop: "70px"}}>
        <Suspense fallback={<div>Loading ...</div>}>
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/users" component={UserListPage} />
            <Route exact path="/users/:userId" component={UserPage} />
            <Route exact path="/posts" component={PostListPage} />
            <Route exact path="/posts/:postId" component={PostPage} />
          </Switch>
        </Suspense>
        
      </main>
    </div>
  );

}

export default App;
