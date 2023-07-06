import Document from './Document';
import { hi } from './Sidebar';
import { DocumentType } from './Context';
import { useEffect, useState } from 'react';

import {
  existingDocuments,
  fetchAllDocuments,
  handleCreateDocument,
} from './api/api';

const thingie: DocumentType = {
  title: 'Frontend first trial document',
  content: 'Hello there',
  tag: 'salt',
};

const happyLog = () => {
  console.log(hi);
};

const Documents = () => {
  const [documents, setDocuments] = useState<DocumentType[]>([]);

  const gettingAllDocuments = async () => {
    // const existingDocuments = await handleCreateDocument();
    // setNewDocument((prev) => [...prev, existingDocuments]);
    // await fetchAllDocuments();
    // console.log('this is fetchAllDocuments', await fetchAllDocuments());
    // return 'hi';
  };

  const addingDocuments = (newDocument: DocumentType) => {
    const updatedDocuments = [...documents, newDocument];
    setDocuments(updatedDocuments);
    console.log('new document typ added', documents);
    return 'hi';
  };

  useEffect(() => {
    console.log('documents:', documents);
    gettingAllDocuments();

    fetchAllDocuments()
      .then((documents) => {
        console.log('🍋🍋🍋', documents);
        setDocuments(documents);
        // Do something with the fetched documents
      })
      .catch((error) => {
        console.error('Error fetching documents:', error);
      });

    handleCreateDocument();
  }, []);

  return (
    <>
      {() => {
        // gettingAllDocuments();
        console.log('hi');
      }}
      <button
        onClick={() => {
          happyLog();
          addingDocuments(thingie);
          console.log('here are the existing documents', existingDocuments);
          const objectSize = Object.values(existingDocuments);
          console.log('object size', objectSize);
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
