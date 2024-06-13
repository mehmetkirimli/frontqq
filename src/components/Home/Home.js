import React, { useEffect, useState } from "react";
import "../Home/Home.css";
import ModalForm from "../Post/ModalForm";
import Post from "../Post/Post";

function Home() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [postList, setPostList] = useState([]);

  const refreshPosts = () => {
    fetch("/posts/all")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setPostList(result.data);
          // postList'e result.data atandı.
          //06/13
        },
        (error) => {
          console.log(error);
          setIsLoaded(true);
          setError(error);
        }
      );
  };

  useEffect(() => {
    refreshPosts();
  }, []);

  if (error) {
    return <div> Error !!! !! ! </div>;
  } else if (!isLoaded) {
    return <div> Loading .... </div>;
  } else {
    // console.log(postList);
    return (
      <div className="container">
        <ModalForm profile_id={1} refreshPosts={refreshPosts}></ModalForm>
        {postList.map((post) => (
          <Post key={post.id} title={post.title} text={post.text} userId={post.profile_id} username={post.username}></Post>
        ))}
      </div>
    );
  }
}

export default Home;
