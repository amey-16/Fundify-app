import mongoose from "mongoose";

// Check if the model already exists to prevent overwrite warning
const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    userInfo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "UserInfo",
    },
  },
  {
    timestamps: true,
  }
);

// Use this pattern to prevent "model already defined" errors
const User = mongoose.models?.User || mongoose.model("User", UserSchema);

export default User;
