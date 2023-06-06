import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import CommentBox from "./CommentBox";
import ReplyComment from "./ReplyComment";
import calcTimePassed from "../../calcTimePassed";
import {
  GET_REPLIES_OF_COMMENT,
  CREATE_REPLY_SERVICE,
  COUNT_REPLIES_OF_COMMENT,
} from "../../config";

import classes from "./Comment.module.css";
import replyIcon from "../../icons/reply.svg";
import expandIcon from "../../icons/expand.svg";

function Comment(props) {
  const { token } = useSelector(state => state.auth);

  const [replies, setReplies] = useState([]);
  const [isShow, setIsShow] = useState(false);
  const [boxOpen, setBoxOpen] = useState(false);
  const [replyCount, setReplyCount] = useState();

  const { _id: id, user, content, postedAt } = props.data;

  useEffect(() => {
    const fetchReplyCount = async () => {
      try {
        const res = await fetch(COUNT_REPLIES_OF_COMMENT(id));
        const { data } = await res.json();

        if (!res.ok) throw new Error(data.message);

        setReplyCount(data.count);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchReplyCount();
  }, [id]);

  const showReplies = async () => {
    try {
      const res = await fetch(GET_REPLIES_OF_COMMENT(id));
      const { data } = await res.json();

      if (!res.ok) throw new Error(data.message);

      setReplies(data.replies);
    } catch (error) {
      console.error(error);
    }

    setIsShow(true);
  };

  const showReplyBox = () => {
    setBoxOpen(true);
    showReplies();
  };

  const newReplyHandler = newReply => setReplies(state => [...state, newReply]);

  const addReply = async replyContent => {
    try {
      const res = await fetch(CREATE_REPLY_SERVICE, {
        method: "POST",
        body: JSON.stringify({
          comment: id,
          replyTo: user._id,
          content: replyContent,
        }),
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      const { data } = await res.json();

      if (!res.ok) throw new Error(data.message);

      setBoxOpen(false);
      newReplyHandler(data.reply);
    } catch (error) {
      console.error(error);
    }
  };

  //? JSX
  const replyList = replies.map(reply => (
    <ReplyComment
      key={reply._id}
      data={reply}
      user={props.user}
      onNewReply={newReplyHandler}
    />
  ));

  return (
    <>
      <div className={classes.comment}>
        <div className={classes.comment_content}>
          <div className={classes.info}>
            <img
              className={classes.avatar}
              src={user.photoUrl || user.photo}
              alt="avatar"
            />

            <div to={`/profile/${user._id}`} className={classes.name}>
              {user.name}
            </div>
            <p className={classes.date}>{calcTimePassed(postedAt)}</p>

            <p onClick={showReplyBox} className={classes.reply_btn}>
              <img src={replyIcon} alt="reply" />
              <span>Reply</span>
            </p>
          </div>

          <span className={classes.content}>{content}</span>

          {replyCount !== 0 && !isShow && (
            <div className={classes.show_btn}>
              <div onClick={showReplies}>
                <img src={expandIcon} alt="show" />
                <p>Show {replyCount} replies</p>
              </div>
            </div>
          )}
        </div>
      </div>

      {boxOpen && <CommentBox onNewComment={addReply} replyTo={user.name} />}
      {isShow && replyList}
    </>
  );
}

export default Comment;
