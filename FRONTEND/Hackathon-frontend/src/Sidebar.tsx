import { useEffect, useState } from 'react';
import { DocumentType } from './Context';

const thingie: DocumentType = {
  title: 'Frontend first trial document',
  content: 'Hello there',
  tag: 'salt',
};

const Sidebar = () => {
  const [documents, setNewDocument] = useState<DocumentType[]>([]);

  const addingDocuments = (newDocument: DocumentType) => {
    setNewDocument([...documents, newDocument]);
    console.log('new document typ added', documents);
    return 'hi';
  };

  useEffect(() => {
    console.log('documents:', documents);
  }, [documents]);

  return (
    <>
      <button onClick={() => addingDocuments(thingie)}>Add new document</button>
    </>
  );
};

export default Sidebar;
