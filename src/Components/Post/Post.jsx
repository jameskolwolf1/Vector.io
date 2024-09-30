import "./Post.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import likeIcon from "/like_icon.png";

function Post() {
  const [post, setPost] = useState(null);
  const [commentId, setCommentId] = useState(null);
  const [commentList, setCommentList] = useState(null);
  let { id } = useParams();

  useEffect(() => {
    try {
      const object = async () => {
        const data = await axios.get(`http://localhost:8080/posts/${id}`);
        const comment = await axios.get(
          `http://localhost:8080/posts/${id}/comments`
        );
        setPost(data.data);
        setCommentList(comment.data);
        console.log(comment.data);
      };
      object();
    } catch (error) {
      console.log(error);
    }
  }, []);

  if (post === null) {
    return <div>Loading</div>;
  }
  if (commentList === null) {
    return <div>Loading</div>;
  }

  const handleSubmit = async (e) => {

    e.preventDefault();


    try {

        const res = await axios.post(`http://localhost:8080/posts/${id}/comments`, {

            text: e.target.text.value
        });

        if(res.status === 200){

            e.target.reset();

        }

        
    } catch (error) {
        
        alert("Error making a comment, please check the input field")
    }
  }

  const handleLikes = async (e) => {


    console.log(commentId);

    try {

        const res = await axios.put(`http://localhost:8080/comments/${commentId}`,{

            likes: e.target.likes.value,
        });

        if(res.status === 200){

            e.target.reset();
        }

    } catch (error) {

        alert("Error with clicking comment ")
    }

  }

  return (
    <article className="post">
      <div className="post__post">
        <h1 className="post__title">
          {post.title}
        </h1>
        <p className="post__des">
          {post.description}
        </p>
      </div>
      <div className="post__from-container">
        <form onSubmit={handleSubmit} className="post__from">

            <h2 className="post__from-title">Post Comment</h2>
            <textarea name="text" className="post__from-text"></textarea>
            <button type="submit" className="post__from-button">Post Comment</button>

        </form>
      </div>
      <div className="post__comment-section">
        <h2>Comments</h2>
        {commentList.map(comment =>
          <div key={comment.id} className="post__comment-container">
            <div className="post__comment-part1">
              <p className="post__comment">
                {comment.text}
              </p>
            </div>
            <div className="post__comment-part2">
              <img className="post__img" src={likeIcon} 
              onClick={() => {
                setCommentId(comment.id);
                handleLikes();
              }}/>
              <p name="likes" className="post__likes">
                {comment.likes}
              </p>
            </div>
          </div>
        )}
      </div>
    </article>
  );
}

export default Post;