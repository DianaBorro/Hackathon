import { DocumentType } from './Context';

type Props = {
  documents: any;
};

const Document = ({ documents }: Props) => {
  const handleDelete = () => {};

  return (
    <>
      {/* <blockquote contentEditable="true">
        <p>Edit this content to add your own quote</p>
      </blockquote> */}
      <div className="document">
        <textarea>{documents}</textarea>
        <button onClick={handleDelete}>delete</button>
      </div>
    </>
  );
};

export default Document;
