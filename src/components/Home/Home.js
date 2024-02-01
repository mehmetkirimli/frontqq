import React, { useEffect, useState } from "react";
import "../Home/Home.css";
import ModalForm from "../Post/ModalForm";
import Post from "../Post/Post";

function Home() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [postList, setPostList] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);

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

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  if (error) {
    return <div> Error !!! !! ! </div>;
  } else if (!isLoaded) {
    return <div> Loading .... </div>;
  } else {
    // console.log(postList);
    return (
      <div className="container">
        <button onClick={handleOpenModal}>Yeni Post Ekle</button>
        {postList.map((post) => (
          <Post key={post.id} title={post.title} text={post.text} userId={post.profile_id} username={post.username}></Post>
        ))}
        <ModalForm isOpen={isModalOpen} onClose={handleCloseModal} />
      </div>
    );
  }
}

export default Home;
