import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {

      // modifiers are no longer needed in mongoose 6 see: https://mongoosejs.com/docs/migrating_to_6.html#no-more-deprecation-warning-options
      useUnifiedTopology: true,
      useNewUrlParser: true,
      // useCreateIndex: true
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.log(`Error: ${error.message}`.red.underline.bold);
    process.exit(1);
  }
};

export default connectDB;