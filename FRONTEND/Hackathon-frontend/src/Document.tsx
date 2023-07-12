import { useEffect, useState } from 'react';
import { deleteDocument, handleUpdateDocument } from './api/api';

type Props = {
  document: any;

  documents?: any;
  documentContent?: any;
  documentId?: any;
};

const Document = ({ document }: Props) => {
  const [updatedDocument, setUpdatedDocument] = useState({ ...document });

  const handleUpdate = () => {
    console.log('updatedDocument: ', updatedDocument);
    console.log('document id', document._id);
    console.log('height b4send', updatedDocument.cols);
    console.log('cols', document.height);

    const updatedContent = {
      title: updatedDocument.title,
      content: updatedDocument.content,
      tag: updatedDocument.tag,
      cols: updatedDocument.cols,
    };

    handleUpdateDocument(document._id, updatedContent)
      .then((updatedDoc) => {
        console.log('Document updated:', updatedDoc);
      })
      .catch((error) => {
        console.error('Error updating document:', error);
      });
  };

  const handleDelete = () => {
    deleteDocument(document._id)
      .then(() => {
        console.log('Document deleted successfully');
      })
      .catch((error) => {
        console.error('Error deleting document:', error);
      });
  };

  useEffect(() => {});

  return (
    <>
      <div className="document">
        <input
          className="title"
          type="text"
          placeholder="Untitled"
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
          defaultValue={document.content}
          cols={10}
          rows={5}
          onChange={(e) => {
            setUpdatedDocument({
              ...updatedDocument,
              content: e.target.value,
            });
            console.log('colsss', e.target.cols);
          }}
        ></textarea>
        <input
          className="tag"
          type="text"
          placeholder="no tag"
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
