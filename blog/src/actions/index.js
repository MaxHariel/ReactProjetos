import _ from "loadsh";
import jsonPlaceholder from "../apis/jsonPlaceholder";

export const fetchPostAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPost());

  /*const userIds = _.uniq(_.map(getState().posts, "userId"));
  userIds.forEach(id => {
    dispatch(fetchUser(id));
  });*/

  const userIds = _.chain(getState().posts)
    .map("userId")
    .uniq()
    .forEach(id => dispatch(fetchUser(id)))
    .value();

  console.log(userIds);
};

export const fetchPost = () => async dispatch => {
  const response = await jsonPlaceholder.get("/posts");
  dispatch({
    type: "FETCH_POST",
    payload: response.data
  });
};

export const fetchUser = id => async dispatch => {
  const response = await jsonPlaceholder.get(`/users/${id}`);
  dispatch({
    type: "FETCH_USER",
    payload: response.data
  });
};
