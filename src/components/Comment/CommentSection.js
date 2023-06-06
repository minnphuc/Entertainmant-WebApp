import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import CommentBox from "./CommentBox";
import Comment from "./Comment";
import { GET_COMMENTS_OF_POST, CREATE_COMMENT_SERVICE } from "../../config";

import classes from "./CommentSection.module.css";

function CommentSection(props) {
  const { token, user } = useSelector(state => state.auth);

  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const res = await fetch(GET_COMMENTS_OF_POST(props.post));
        const { data } = await res.json();

        if (!res.ok) throw new Error(data.message);

        setComments(data.comments);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchComments();
  }, [props.post]);

  //? Handler

  const addComment = async commentContent => {
    try {
      const res = await fetch(CREATE_COMMENT_SERVICE, {
        method: "POST",
        body: JSON.stringify({
          post: props.post,
          content: commentContent,
        }),
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      const { data } = await res.json();

      if (!res.ok) throw new Error(data.message);

      setComments(state => [data.comment, ...state]);
    } catch (error) {
      console.error(error);
    }
  };

  //? JSX

  const commentList = comments.map(comment => (
    <Comment key={comment._id} data={comment} user={user.id} />
  ));

  return (
    <div className={classes.comment_section}>
      <CommentBox onNewComment={addComment} />

      {commentList}
    </div>
  );
}

export default CommentSection;
