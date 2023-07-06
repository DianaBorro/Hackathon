// import { useState } from 'react';
// import { DocumentType } from './Context';
// import { deleteDocument } from './api/api';

// type Props = {
//   documents?: any;
//   documentContent?: any;
// };

// const Document = ({ documents, documentContent }: Props) => {
//   const handleDelete = () => {};
//   // const defaultValue = documents || '';

//   return (
//     <>
//       {/* <blockquote contentEditable="true">
//         <p>Edit this content to add your own quote</p>
//       </blockquote> */}
//       <div className="document">
//         <textarea defaultValue={documentContent}></textarea>
//         <button onClick={() => deleteDocument(documents._id)}>delete</button>
//       </div>
//     </>
//   );
// };

// export default Document;

import { useState } from 'react';
import { DocumentType } from './Context';
import { deleteDocument } from './api/api';

type Props = {
  document: any;

  documents?: any;
  documentContent?: any;
  documentId?: any;
};

const Document = ({ document }: Props) => {
  let toDelete: any;
  // documents.map((e: any) =>
  //   console.log('from d these are all the docs', e._id)
  // );
  // documents.map((e: any) => (toDelete = e._id));

  // console.log('documentId', documentId);

  const handleDelete = () => {
    deleteDocument(document._id)
      .then(() => {
        console.log('Document deleted successfully');
        // Optionally, you can perform any additional actions after successful deletion
      })
      .catch((error) => {
        console.error('Error deleting document:', error);
        // Handle error
      });
  };

  return (
    <>
      <div className="document">
        <textarea defaultValue={document.content}></textarea>
        <button onClick={handleDelete}>delete</button>
      </div>
    </>
  );
};

export default Document;
