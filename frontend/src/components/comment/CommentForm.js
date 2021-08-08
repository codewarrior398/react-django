import axios from "axios";
import React, { useContext, useState } from "react";
import { CommentTriggerAction } from "../stateManagement/action";
import { store } from "../stateManagement/store";
import { BLOG_COMMENT_URL } from "../utils/urls";

const CommentForm = (props) => {
  const [commentData, setCommentData] = useState({blog_id:props.id});
  const [loading, setLoading] = useState(false)

  const {dispatch} = useContext(store)
  // OnChange
  const onChange = (e) => {
    setCommentData({
      ...commentData,
      [e.target.name]: e.target.value,
    });
  };

  // OnSubmit
  const onSubmit = (e) =>{
    e.preventDefault();
    setLoading(true);
    axios.post(BLOG_COMMENT_URL,commentData).then(
      res => {
        setLoading(false);
        alert("Comment submitted successfully!");
        setCommentData({blog_id:props.id});
        dispatch({type:CommentTriggerAction, payload:true})
      },
      err => {
        console.log(err);
      }
    )
  }

  return (
    <div>
      <hr />
      <div className="my-3">
        <h4 className="fw-bold">Leave a comment...</h4>
      </div>
      <form class="form-block" onSubmit={onSubmit}>
        <div class="row">
          <div class="col-lg-12 col-sm-12">
            <div class="form-group">
              <input
                class="form-input"
                name="name"
                value={commentData.name || ""}
                onChange={onChange}
                type="text"
                placeholder="Your name"
              />
            </div>
          </div>
          <div class="col-lg-12">
            <div class="form-group">
              <textarea
                class="form-input"
                required=""
                name="comment"
                value={commentData.comment || ""}
                onChange={onChange}
                placeholder="Your comment"
                required
              ></textarea>
            </div>
          </div>
          <div class="col-lg-12">
            <button type="submit" disabled={loading} className="btn btn-danger">{loading ? "Submitting..." : "Submit"}</button>
          </div>
        </div>
      </form>
      <br />
    </div>
  );
};

export default CommentForm;
