type DocumentType = {
  title: string;
  content: string;
  tag: string;
};

const Document = () => {
  return (
    <>
      <blockquote contentEditable="true">
        <p>Edit this content to add your own quote</p>
      </blockquote>
    </>
  );
};

export default Document;
