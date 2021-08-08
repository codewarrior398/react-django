import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { CommentTriggerAction } from "../stateManagement/action";
import { store } from "../stateManagement/store";
import { BLOG_COMMENT_URL } from "../utils/urls";
import CommentCard from "./CommentCard";

const Comment = (props) => {
  const [fetching, setFetching] = useState(true);
  const [commentList, setCommentList] = useState({});

  const {
    state: { commentTrigger },
    dispatch,
  } = useContext(store);

  useEffect(() => {
    if (commentTrigger) {
      axios.get(BLOG_COMMENT_URL + `?blog_id=${props.id}`).then(
        (res) => {
          setCommentList(res.data);
          setFetching(false);
          console.log(res.data);
        },
        (err) => {
          console.log(err);
        }
      );
      dispatch({ type: CommentTriggerAction, payload: false });
    }
  }, [commentTrigger]);

  return (
    <div>
      {fetching == <h4>Loading...</h4>}
      {!fetching && commentList.length < 1 && (
        <h4>No comment available!</h4>
      )}
      { ! fetching &&
      commentList.map((item, key) => {
        return <CommentCard data={item} key={key} />;
      })}
    </div>
  );
};

export default Comment;
