const Document = () => {
  const handleDelete = () => {};

  return (
    <>
      {/* <blockquote contentEditable="true">
        <p>Edit this content to add your own quote</p>
      </blockquote> */}
      <div className="document">
        <textarea></textarea>
        <button onClick={handleDelete}>delete</button>
      </div>
    </>
  );
};

export default Document;
