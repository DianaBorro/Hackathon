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
