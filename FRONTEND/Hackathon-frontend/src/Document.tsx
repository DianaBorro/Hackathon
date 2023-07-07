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
  let height: any;

  const handleUpdate = () => {
    console.log('updatedDocument: ', updatedDocument);
    console.log('document id', document._id);
    console.log('height b4send', updatedDocument.cols);
    console.log('cols', document.height);

    const updatedContent = {
      title: updatedDocument.title,
      content: updatedDocument.content,
      tag: updatedDocument.tag,
      cols: updatedDocument.cols, // Add the size property here
    };

    handleUpdateDocument(document._id, updatedContent)
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
        <input
          className="title"
          type="text"
          value={updatedDocument.title}
          onChange={(e) => {
            setUpdatedDocument({
              ...updatedDocument,
              title: e.target.value,
            });
          }}
        />
        <textarea
          className="content"
          defaultValue={document.content} //have just value instead?
          cols={document.cols}
          rows={document.rows}
          onChange={(e) => {
            // setUpdatedDocument({
            //   ...updatedDocument,
            //   content: e.target.value,
            //   cols: e.target.cols,
            // });
            // height = e.target.scrollHeight;
            console.log('colsss', e.target.cols);
          }}
        ></textarea>
        <input
          className="tag"
          type="text"
          value={updatedDocument.tag}
          onChange={(e) => {
            setUpdatedDocument({
              ...updatedDocument,
              tag: e.target.value,
            });
          }}
        />
        <div className="document-buttons">
          <button onClick={handleDelete}>delete</button>
          <button onClick={handleUpdate}>save changes</button>
        </div>
      </div>
    </>
  );
};

export default Document;
