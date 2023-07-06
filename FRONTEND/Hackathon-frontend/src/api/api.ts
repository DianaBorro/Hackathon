import axios from 'axios';
import { DocumentType } from '../Context';

const BASE_URL = 'http://localhost:3000/api/documents';

export const fetchAllDocuments = async (): Promise<DocumentType[]> => {
  const result = await axios.get(BASE_URL);
  return result.data;
};

export let existingDocuments: DocumentType;

export const handleCreateDocument = async (
  newDocument: DocumentType
): Promise<DocumentType> => {
  try {
    const response = await axios.post(BASE_URL, newDocument);
    const savedDocument = response.data;
    console.log('Saved Document:', savedDocument);
    // Do something with the saved document
    existingDocuments = savedDocument;
    return savedDocument;
  } catch (error) {
    console.error('Error creating document:', error);
    throw new Error('Failed to create document');
  }
};

// export const handleCreateDocument = async (
//   newDocument: DocumentType
// ): Promise<DocumentType> => {
//   const tryDocument = {
//     title: 'My New Document',
//     content: 'Lorem ipsum dolor sit amet',
//     tag: 'sample',
//   };

//   // try {
//   const response = await axios.post(BASE_URL, newDocument);
//   const savedDocument = response.data;
//   console.log('Saved Document:', savedDocument);
//   // Do something with the saved document
//   existingDocuments = savedDocument;
//   return savedDocument;
//   // } catch (error) {
//   //   console.error('Error creating document:', error);
//   //   return
//   //   // Handle error
//   // }
// };
//

export const handleUpdateDocument = async (documentId: any, updatedDocument:any):Promise<void> => {
  try {
    const response = await axios.put(`${BASE_URL}/${documentId}`, updatedDocument);
    const updatedDoc = response.data;
    console.log('Document updated:', updatedDoc);
    return updatedDoc; // Return the updated document
  } catch (error) {
    console.error('Error updating document:', error);
    throw new Error('Failed to update document');
  }
};


// export const handleUpdateDocument = async (documentId: any, updatedDocument: any) => {
//   try {
//     const response = await axios.put(`/api/documents/${documentId}`, updatedDocument);
//     const updatedDoc = response.data;
//     console.log('Document updated:', updatedDoc);
//     // Handle success or perform any other necessary actions
//   } catch (error) {
//     console.error('Error updating document:', error);
//     // Handle error
//   }
// };


// export const handleUpdateDocument = async (
//   documentId: string,
//   updatedDocument: any
// ) => {
//   axios
//     .put(`/api/documents/${documentId}`, updatedDocument)
//     .then((response) => {
//       const updatedDoc = response.data;
//       console.log('Document updated:', updatedDoc);
//       // Handle success or perform any other necessary actions
//     })
//     .catch((error) => {
//       console.error('Error updating document:', error);
//       // Handle error
//     });



  // try {
  //   const response = await axios.put(
  //     `/api/documents/${documentId}`,
  //     updatedDocument
  //   );
  //   const updatedDoc = response.data;
  //   console.log('Document updated:', updatedDoc);
  //   // Handle success or perform any other necessary actions
  // } catch (error) {
  //   console.error('Error updating document:', error);
  //   // Handle error
  // }
// };


export const deleteDocument = async (documentId: string): Promise<void> => {
  const url = `${BASE_URL}/${documentId}`;
  console.log('this is the documentId', documentId);

  try {
    await axios.delete(url);
    console.log('Document deleted successfully');
    // Optionally, you can perform any additional actions after successful deletion
  } catch (error) {
    console.error('Error deleting document:', error);
    // Handle error
  }
};


// export const fetchAllDocuments = async (): Promise<DocumentType[]> => {
//   const result = (await axios({
//     method: 'get',
//     // url:
//     baseURL: BASE_URL,
//   })) as DocumentType[];
//   return result;
// };
