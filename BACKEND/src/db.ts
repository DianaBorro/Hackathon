import mongoose from 'mongoose';

export type Document = {
  title: string;
  content: string;
  tag?: string;
};

const documentSchema = new mongoose.Schema<Document>({
  title: { type: String, required: true },
  content: { type: String, required: true },
  tag: { type: String },
});

export const documentModel = mongoose.model<Document>(
  'documents',
  documentSchema
);

const uri =
  // 'mongodb+srv://dianaborrodev:JrBY27LrWn1Pgvhh@cluster0.dj1vhti.mongodb.net/hackathon?retryWrites=true&w=majority';
  'mongodb+srv://dianaborrodev:JrBY27LrWn1Pgvhh@cluster0.dj1vhti.mongodb.net/?retryWrites=true&w=majority';
// 'mongodb://localhost:27017/cluster0.hackathon';
mongoose.connect(uri).then(() => console.log('db connectd'));
