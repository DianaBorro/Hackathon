import { useState } from 'react';
import { DocumentType } from './Context';
import { deleteDocument } from './api/api';

type Props = {
  documents?: any;
  documentContent?: any;
};

const Document = ({ documents, documentContent }: Props) => {
  const handleDelete = () => {};
  // const defaultValue = documents || '';
  return (
    <>
      {/* <blockquote contentEditable="true">
        <p>Edit this content to add your own quote</p>
      </blockquote> */}
      <div className="document">
        <textarea defaultValue={documentContent}></textarea>
        <button onClick={() => deleteDocument(documents._id)}>delete</button>
      </div>
    </>
  );
};

export default Document;
