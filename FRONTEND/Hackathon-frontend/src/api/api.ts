import axios from 'axios';
import { DocumentType } from '../Context';

const BASE_URL = 'http://localhost:3000/api/documents';

export const fetchAllDocuments = async (): Promise<DocumentType[]> => {
  const result = await axios.get(BASE_URL);
  return result.data;
};

//
export const handleCreateDocument = async () => {
  const newDocument = {
    title: 'My New Document',
    content: 'Lorem ipsum dolor sit amet',
    tag: 'sample',
  };

  try {
    const response = await axios.post(BASE_URL, newDocument);
    const savedDocument = response.data;
    console.log('Saved Document:', savedDocument);
    // Do something with the saved document
  } catch (error) {
    console.error('Error creating document:', error);
    // Handle error
  }
};
//

// export const fetchAllDocuments = async (): Promise<DocumentType[]> => {
//   const result = (await axios({
//     method: 'get',
//     // url:
//     baseURL: BASE_URL,
//   })) as DocumentType[];
//   return result;
// };
