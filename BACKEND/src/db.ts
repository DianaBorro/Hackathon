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



const uri =
  // 'mongodb+srv://dianaborrodev:JrBY27LrWn1Pgvhh@cluster0.dj1vhti.mongodb.net/hackathon?retryWrites=true&w=majority';
  // 'mongodb+srv://dianaborrodev:JrBY27LrWn1Pgvhh@cluster0.dj1vhti.mongodb.net/?retryWrites=true&w=majority';
  'mongodb+srv://dianaborrodev:JrBY27LrWn1Pgvhh@cluster0.dj1vhti.mongodb.net/hackathon?retryWrites=true&w=majority';
// 'mongodb://localhost:27017/cluster0.hackathon';
// mongoose.connect(uri).then(() => console.log('db connectd'));

mongoose
  .connect(uri)
  .then(async () => {
    console.log('Connected to MongoDB');
    // Proceed with fetching documents or other database operations

    // await documentModel
    //   .find({ title: 'First trial document' })
    //   .then((documents) => {
    //     console.log('Fetched documents:', documents);
    //   });

    const foundDocument = (await documentModel.find({
      title: 'This is in document',
    })) as Document[]; // check this

    console.log('this is found document', foundDocument);
  })

  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

export const documentModel = mongoose.model<Document>(
  'document',
  documentSchema
);
