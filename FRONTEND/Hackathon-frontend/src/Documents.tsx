import Document from './Document';
import { hi } from './Sidebar';
import { DocumentType } from './Context';
import { useEffect, useState } from 'react';

const thingie: DocumentType = {
  title: 'Frontend first trial document',
  content: 'Hello there',
  tag: 'salt',
};

const happyLog = () => {
  console.log(hi);
};

const Documents = () => {
  const [documents, setNewDocument] = useState<DocumentType[]>([]);

  const addingDocuments = (newDocument: DocumentType) => {
    const updatedDocuments = [...documents, newDocument];
    setNewDocument(updatedDocuments);
    console.log('new document typ added', documents);
    return 'hi';
  };

  useEffect(() => {
    console.log('documents:', documents);
  }, [documents]);

  return (
    <>
      <button
        onClick={() => {
          happyLog();
          addingDocuments(thingie);
        }}
      >
        hi
      </button>
      {documents.map((_document, index) => (
        <Document key={index} />
      ))}
    </>
  );
};

export default Documents;
