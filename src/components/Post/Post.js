function Post(props) {
  const { title, text } = props;

  return (
    <div>
      {title}
      -------------
      {text}
    </div>
  );
}

export default Post;
