import mongoose from "mongoose";

const addressSchema = new mongoose.Schema({
  street: {
    type: String,
    required: true,
    trim: true,
  },
  city: {
    type: String,
    required: true,
    trim: true,
  },
  state: {
    type: String,
    required: true,
    trim: true,
  },
  country: {
    type: String,
    required: true,
    trim: true,
  },
  pinCode: {
    type: String,
    required: true,
    match: [/^\d{6}$/, "Please enter a valid 6-digit PIN code"],
  },
});

const userInfoSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
    },
    phoneNumber: {
      type: String,
      match: [/^\+?[\d\s-]{10,}$/, "Please enter a valid phone number"],
    },
    dateOfBirth: {
      type: Date,
    },
    gender: {
      type: String,
      enum: ["male", "female", "other"],
    },
    address: addressSchema,
    alternateAddresses: [addressSchema],
  },
  {
    timestamps: true,
  }
);

// Create indexes for frequent queries
userInfoSchema.index({ user: 1 });
userInfoSchema.index({ "address.pinCode": 1 });

export default mongoose.models.UserInfo ||
  mongoose.model("UserInfo", userInfoSchema);
