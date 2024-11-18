import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const uri = "mongodb+srv://cryptoDashboard:nM65bVv21rw6XTRV@clustergym.zcqjmig.mongodb.net/"; // Replace with your connection string
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected successfully!");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1); // Exit with failure
  }
};

export default connectDB;
