import express, { json } from 'express';
import { Document, documentModel } from './db';
const cors = require('cors');

export const app = express();
app.use(express.json());
app.use(cors());

const objectToSend = {
  title: 'First trial document',
  content: 'Hello there',
  tag: 'salt',
};

app.get('/', async (req, res) => {
  const hi = 'trust ttthe process';
  res.status(200).send({ message: hi });
  console.log('is this working? Is this?');
});

app.get('/api/documents', async (req, res) => {
  console.log('I AM ALIVE');
  const documents = await documentModel.find().sort({ _id: -1 }); //gets ALL the documents
  res.status(200).json(documents);

  console.log('is this working? Is this?');
});

// app.get('/api/documents', async (req, res) => {
//   console.log('I AM ALIVE');
//   // const { title } = req.query;
//   // const params: any = {};
//   // if (title) {
//   //   params.title = title;
//   // }
//   // const foundDocument = (await documentModel.find(params)) as Document[];
//   // res.status(200).json(foundDocument);

//   const documents = await documentModel.find(); //gets ALL the documents
//   res.status(200).json(documents);

//   console.log('is this working? Is this?');

//   // try {
//   //   // const document = new documentModel(newDocument);
//   //   // const savedDocument = await document.save();
//   //   // res.status(200).json(savedDocument);
//   //   const documents = await documentModel.find();
//   //   res.status(200).json(documents);
//   // } catch (error) {
//   //   console.error('Error saving document:', error);
//   //   res.status(500).json({ error: 'Failed to save document' });
//   // }
// });

// app.get('/api/documents', async (req, res) => {
//   try {
//     const documents = await documentModel.find();
//     const documentsWithId = documents.map((doc) => ({
//       id: doc._id,
//       title: doc.title,
//       content: doc.content,
//       tag: doc.tag,
//     }));
//     res.status(200).json(documentsWithId);
//   } catch (error) {
//     console.error('Error fetching documents:', error);
//     res.status(500).json({ error: 'Failed to fetch documents' });
//   }
// });


app.post('/api/documents', async (req, res) => {
  const newDocument = {
    title: req.body.title,
    content: req.body.content || null,
    tag: req.body.tag,
  };

  try {
    const document = new documentModel(newDocument);
    const savedDocument = await document.save();
    res.status(200).json(savedDocument);
  } catch (error) {
    console.error('Error saving document:', error);
    res.status(500).json({ error: 'Failed to save document' });
  }
});

// app.post('/api/documents', async (req, res) => {
//   const newDocument = {
//     title: req.body.title,
//     content: req.body.content || null,
//     tag: req.body.tag,
//   };
//   const document = new documentModel(newDocument);
//   const savedDocument = await document.save();
//   res.status(200).json(savedDocument);
// });

// const newDocument = {
//   title: req.body.title,
//   content: req.body.content || null,
//   tag: req.body.tag,
// };
// try {
//   // const document = new documentModel(newDocument);
//   // const savedDocument = await document.save();
//   // res.status(200).json(savedDocument);
//   const documents = await documentModel.find();
//   res.status(200).json(documents);
// } catch (error) {
//   console.error('Error saving document:', error);
//   res.status(500).json({ error: 'Failed to save document' });
// }
// try {
//   const document = new documentModel(newDocument);
//   const savedDocument = await document.save();
//   res.status(200).json(objectToSend);
// } catch (error) {
//   console.error('Error saving document:', error);
//   res.status(500).json({ error: 'Failed to save document' });
// }
// const document = await new documentModel(newDocument).save();
// res.json(objectToSend);
// res.json({ id: commentResponse._id.toString(), ...newDocument });

app.put('/api/documents/:id', async (req, res) => {
  const documentId = req.params.id;
  const { title, content, tag } = req.body;

  try {
    const updatedDocument = await documentModel.findByIdAndUpdate(
      documentId,
      { title, content, tag },
      { new: true }
    );

    if (updatedDocument) {
      console.log('BACKEND Document updated:', updatedDocument);
      res.status(200).json(updatedDocument);
    } else {
      console.log('BACKEND Document not found');
      res.status(404).json({ error: 'Document not found' });
    }
    // if (updatedDocument) {
    //   res.status(200).json(updatedDocument);
    // } else {
    //   res.status(404).json({ error: 'Document not found' });
    // }
  } catch (error) {
    console.error('Error updating document:', error);
    res.status(500).json({ error: 'Failed to update document' });
  }
});

app.get('/api/documents/:id', async (req, res) => {
  const documentId = req.params.id;

  try {
    const document = await documentModel.findById(documentId);
    if (document) {
      res.status(200).json(document);
    } else {
      res.status(404).json({ error: 'Document not found' });
    }
  } catch (error) {
    console.error('Error fetching document:', error);
    res.status(500).json({ error: 'Failed to fetch document' });
  }
});



app.delete('/api/documents/:id', async (req, res) => {
  const documentId = req.params.id;

  try {
    const deletedDocument = await documentModel.findByIdAndDelete(documentId);
    if (deletedDocument) {
      res.status(200).json({ message: 'Document deleted successfully' });
    } else {
      res.status(404).json({ error: 'Document not found' });
    }
  } catch (error) {
    console.error('Error deleting document:', error);
    res.status(500).json({ error: 'Failed to delete document' });
  }
});
  

export const hi = 'connected from app.ts';
