import PostsActionTypes from "./posts.types";
import faker from "faker";
import { FROM_DATE, TO_DATE } from "../../constants/index";

const initial_state = {
  posts: [],
};

const postsReducer = function (state = initial_state, action) {
  switch (action.type) {
    case PostsActionTypes.SET_POSTS:
      return {
        ...state,
        posts: action.payload.map((postItem) => ({
          ...postItem,
          body: postItem.body + faker.lorem.paragraphs(20,"<br />"),
          created: faker.date.between(FROM_DATE, TO_DATE),
          likes: faker.random.number(),
          dislikes: faker.random.number()
        })),
      };
    default:
      return state;
  }
};

export default postsReducer;
