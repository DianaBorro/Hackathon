// import Document from './Document';
// import { hi } from './Sidebar';
// import { DocumentType } from './Context';
// import { useEffect, useState } from 'react';

// import {
//   existingDocuments,
//   fetchAllDocuments,
//   handleCreateDocument,
// } from './api/api';

// const thingie: DocumentType = {
//   title: 'Frontend first trial document',
//   content: '',
//   tag: 'salt',
// };

// const happyLog = () => {
//   console.log(hi);
// };

// const Documents = () => {
//   const [documents, setDocuments] = useState<DocumentType[]>([]);
//   const [newDocumentContent, setNewDocumentContent] = useState('');

//   const gettingAllDocuments = async () => {
//     // const existingDocuments = await handleCreateDocument();
//     // setNewDocument((prev) => [...prev, existingDocuments]);
//     // await fetchAllDocuments();
//     // console.log('this is fetchAllDocuments', await fetchAllDocuments());
//     // return 'hi';
//   };

//   const addingDocuments = (newDocument: DocumentType) => {
//     const updatedDocuments = [...documents, newDocument];
//     setDocuments(updatedDocuments);
//     console.log('new document typ added', documents);
//     return 'hi';
//   };

//   useEffect(() => {
//     console.log('documents:', documents);
//     gettingAllDocuments();

//     fetchAllDocuments()
//       .then((documents) => {
//         console.log('🍋🍋🍋', documents);
//         setDocuments(documents);
//         // Do something with the fetched documents
//       })
//       .catch((error) => {
//         console.error('Error fetching documents:', error);
//       });

//     handleCreateDocument();
//   }, []);

//   documents.map((e) => console.log('this are all the docs', e));
//   console.log('LENGTH', documents.length);

//   return (
//     <>
//       <textarea name="" id="" cols={30} rows={10}></textarea>
//       {() => {
//         // gettingAllDocuments();
//         console.log('hi');
//       }}
//       <button
//         onClick={() => {
//           happyLog();
//           addingDocuments(thingie);
//           console.log('here are the existing documents', existingDocuments);
//           const objectSize = Object.values(existingDocuments);
//           console.log('object size', objectSize);
//         }}
//       >
//         hi
//       </button>
//       {documents.map((document, index) => (
//         <Document key={index} documents={document?.content} />
//       ))}
//     </>
//   );
// };

// export default Documents;

import Document from './Document';
import { hi } from './Sidebar';
import { DocumentType } from './Context';
import { useEffect, useState } from 'react';

import { fetchAllDocuments, handleCreateDocument } from './api/api';

const thingie: DocumentType = {
  title: 'Frontend first trial document',
  content: '',
  tag: 'salt',
};


const happyLog = () => {
  console.log(hi);
};

const Documents = () => {
  const [documents, setDocuments] = useState<DocumentType[]>([]);
  const [newDocumentContent, setNewDocumentContent] = useState('');

  const gettingAllDocuments = async () => {
    // const existingDocuments = await handleCreateDocument();
    // setNewDocument((prev) => [...prev, existingDocuments]);
    // await fetchAllDocuments();
    // console.log('this is fetchAllDocuments', await fetchAllDocuments());
    // return 'hi';
  };

  const addingDocuments = async () => {
    const newDocument = {
      title: 'Untitled',
      content: newDocumentContent,
      tag: 'sample',
    };

    handleCreateDocument(newDocument)
      .then((savedDocument) => {
        const updatedDocuments = [...documents, savedDocument];
        setDocuments(updatedDocuments);
        // console.log('New document added', savedDocument);
        setNewDocumentContent('');
      })
      .catch((error) => {
        console.error('Error creating document:', error);
      });
    // const documentWithId = await handleCreateDocument(newDocument);
    // return documentWithId;
  };

  useEffect(() => {
    console.log('documents:', documents);
    gettingAllDocuments();
    addingDocuments(); //

    fetchAllDocuments()
      .then((documents) => {
        // console.log('🍋🍋🍋', documents);
        setDocuments(documents);
        // Do something with the fetched documents
      })
      .catch((error) => {
        console.error('Error fetching documents:', error);
      });

    // handleCreateDocument();
  }, []);

  // documents.map((e) => console.log('these are all the docs', e));
  // documents.map((e) => e.id);
  // console.log('LENGTH', documents.length);

  // documents.map((e: any) => console.log(e));

  return (
    <>
      <p>amount of documents: {documents.length}</p>
      <div id="CreationOfDocument">
        <h4>Create new note</h4>
        <textarea
          name=""
          id=""
          cols={30}
          rows={10}
          value={newDocumentContent}
          onChange={(e) => setNewDocumentContent(e.target.value)}
        ></textarea>
        <button onClick={addingDocuments}>Save Note</button>
        {/* {documents.map((document, index) => (
          <Document
            key={index}
            documents={documents}
            documentContent={document}
            documentId={document.id} //
          />
        ))} */}
        {documents.map((e, index) => (
          <Document
            key={index}
            document={e} //
          />
        ))}
      </div>
    </>
  );
};

export default Documents;
