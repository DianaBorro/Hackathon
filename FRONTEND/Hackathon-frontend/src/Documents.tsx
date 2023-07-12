import Document from './Document';
import { DocumentType } from './Context';
import { useEffect, useState } from 'react';

import { fetchAllDocuments, handleCreateDocument } from './api/api';

const Documents = () => {
  const [documents, setDocuments] = useState<DocumentType[]>([]);
  const [newDocumentContent, setNewDocumentContent] = useState('');
  const [newDocumentTitle, setNewDocumentTitle] = useState('');
  const [newDocumentTag, setNewDocumentTag] = useState('');
  const [newDocumentCols, setNewDocumentCols] = useState(0);
  const [newDocumentRows, setNewDocumentRows] = useState(0);

  const gettingAllDocuments = async () => {};

  const addingDocuments = async () => {
    const newDocument = {
      title: newDocumentTitle,
      content: newDocumentContent,
      tag: newDocumentTag,
      cols: newDocumentCols,
      rows: newDocumentRows,
    };

    handleCreateDocument(newDocument)
      .then((savedDocument) => {
        const updatedDocuments = [...documents, savedDocument];
        setDocuments(updatedDocuments);
        setNewDocumentContent('');
        setNewDocumentTitle('');
        setNewDocumentTag('');
      })
      .catch((error) => {
        console.error('Error creating document:', error);
      });
  };

  useEffect(() => {
    console.log('documents:', documents);
    gettingAllDocuments();
    addingDocuments();

    fetchAllDocuments()
      .then((documents) => {
        setDocuments(documents);
      })
      .catch((error) => {
        console.error('Error fetching documents:', error);
      });
  }, []);

  return (
    <>
      <p className="amount">Amount of documents: {documents.length}</p>
      <div className="creation-of-document" id="CreationOfDocument">
        <h4 className="create">Create new note</h4>
        <input
          className="title"
          type="text"
          placeholder="Insert New Title"
          value={newDocumentTitle}
          onChange={(e) => {
            setNewDocumentTitle(e.target.value);
          }}
        />
        <textarea
          name=""
          className=""
          id=""
          cols={20}
          rows={7}
          value={newDocumentContent}
          onChange={(e) => {
            setNewDocumentContent(e.target.value);
            setNewDocumentCols(e.target.cols);
            setNewDocumentRows(e.target.rows);
          }}
        ></textarea>
        <input
          className="tag"
          type="text"
          placeholder="Insert tag"
          defaultValue="Untitled"
          value={newDocumentTag}
          onChange={(e) => {
            setNewDocumentTag(e.target.value);
          }}
        />
        <button onClick={addingDocuments}>Save Note</button>
        <div className="all-documents">
          {documents.map((e, index) => (
            <Document key={index} document={e} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Documents;
