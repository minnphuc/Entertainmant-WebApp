import React, { useState } from "react";
import { useSelector } from "react-redux";

import CommentBox from "./CommentBox";
import calcTimePassed from "../../calcTimePassed";
import { CREATE_REPLY_SERVICE } from "../../config";

import classes from "./Comment.module.css";
import replyIcon from "../../icons/reply.svg";

function ReplyComment(props) {
  const { token } = useSelector(state => state.auth);

  const [boxOpen, setBoxOpen] = useState(false);

  const { comment, user, replyTo, content, postedAt } = props.data;

  const showReplyBox = () => setBoxOpen(true);

  const addReply = async replyContent => {
    try {
      const res = await fetch(CREATE_REPLY_SERVICE, {
        method: "POST",
        body: JSON.stringify({
          comment,
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
      props.onNewReply(data.reply);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className={classes.reply_comment}>
        <div className={classes.comment_content}>
          <div className={classes.info_reply}>
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

          <span className={classes.content}>
            <span className={classes.reply_name}>@{`${replyTo.name} `}</span>
            {content}
          </span>
        </div>
      </div>
      {boxOpen && <CommentBox onNewComment={addReply} replyTo={user.name} />}
    </>
  );
}

export default ReplyComment;
