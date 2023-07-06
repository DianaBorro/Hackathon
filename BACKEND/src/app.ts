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
  res.status(200).json(hi);
  console.log('is this working? Is this?');
});

app.get('/api/documents', async (req, res) => {
  const { title } = req.query;
  const foundDocument = (await documentModel.find({ title })) as Document[];
  res.status(200).json(foundDocument);
  console.log('is this working? Is this?');
});

app.post('/api/documents', async (req, res) => {
  // const newDocument = {
  //   title: req.body.title,
  //   content: req.body.content || null,
  //   tag: req.body.tag,
  // };
  try {
    // const document = new documentModel(newDocument);
    // const savedDocument = await document.save();
    // res.status(200).json(savedDocument);
    const documents = await documentModel.find();
    res.status(200).json(documents);
  } catch (error) {
    console.error('Error saving document:', error);
    res.status(500).json({ error: 'Failed to save document' });
  }
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
});

export const hi = 'connected from app.ts';
