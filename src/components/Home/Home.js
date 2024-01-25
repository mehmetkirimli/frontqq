import React, { useEffect, useState } from "react";
import "../Home/Home.css";
import Post from "../Post/Post";

function Home() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    fetch("/posts/all")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setPostList(result.data); // postList'e result.data atandı.
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div> Error !!! !! ! </div>;
  } else if (!isLoaded) {
    return <div> Loading .... </div>;
  } else {
    // console.log(postList);
    return (
      <div className="container">
        <p> HOME PAGE </p>

        <br></br>
        <br></br>

        {postList.map((post) => (
          <Post key={post.id} title={post.title} text={post.text}></Post>
        ))}
      </div>
    );
  }
}

export default Home;
