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
    existingDocuments = savedDocument;
    return savedDocument;
  } catch (error) {
    console.error('Error creating document:', error);
    throw new Error('Failed to create document');
  }
};

export const handleUpdateDocument = async (
  documentId: any,
  updatedDocument: any
): Promise<void> => {
  try {
    const response = await axios.put(
      `${BASE_URL}/${documentId}`,
      updatedDocument
    );
    const updatedDoc = response.data;
    return updatedDoc;
  } catch (error) {
    console.error('Error updating document:', error);
    throw new Error('Failed to update document');
  }
};

export const deleteDocument = async (documentId: string): Promise<void> => {
  const url = `${BASE_URL}/${documentId}`;

  try {
    await axios.delete(url);
    console.log('Document deleted successfully');
  } catch (error) {
    console.error('Error deleting document:', error);
  }
};
