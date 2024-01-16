import React, { useEffect, useState } from "react";

function Post() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    fetch("/posts/all")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setPostList(result);
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
      <ul>
        {postList.data.map((post) => (
          <li key={post.id}>
            {post.title} --- {post.text}
          </li>
        ))}
      </ul>
    );
  }
}

export default Post;
