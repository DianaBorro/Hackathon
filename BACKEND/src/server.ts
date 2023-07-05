import mongoose from 'mongoose';

const uri =
  'mongodb+srv://dianaborrodev:JrBY27LrWn1Pgvhh@cluster0.dj1vhti.mongodb.net/hackathon?retryWrites=true&w=majority';

mongoose.connect(uri).then(() => console.log('db connected'));
