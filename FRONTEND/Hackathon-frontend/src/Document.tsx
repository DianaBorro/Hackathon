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
import { deleteDocument, handleUpdateDocument } from './api/api';

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

  const [updatedDocument, setUpdatedDocument] = useState({ ...document });

  // const handleUpdate = () => {
  //   console.log('updatedDocument: ', updatedDocument);
  //   console.log('document id', document._id);

  //   handleUpdateDocument(document._id, updatedDocument);
  // };
  const handleUpdate = () => {
    console.log('updatedDocument: ', updatedDocument);
    console.log('document id', document._id);

    handleUpdateDocument(document._id, updatedDocument)
      .then((updatedDoc) => {
        console.log('Document updated:', updatedDoc);
        // Optionally, you can perform any additional actions after successful update
      })
      .catch((error) => {
        console.error('Error updating document:', error);
        // Handle error
      });
  };

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
        <textarea
          defaultValue={document.content}
          onChange={(e) =>
            setUpdatedDocument({ ...updatedDocument, content: e.target.value })
          }
        ></textarea>
        <button onClick={handleDelete}>delete</button>
        <button onClick={handleUpdate}>edit</button>
      </div>
    </>
  );
};

export default Document;
