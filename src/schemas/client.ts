import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import CustomError from "../utils/customError";

const { Schema } = mongoose;

const ClientSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

ClientSchema.pre("save", async function (next: any) {
  const hash = await bcrypt.hash(this.password, 10);
  this.password = hash;

  if (!emailRegex.test(this.email)) {
    const error = new CustomError(
      "Invalid Email",
      400,
      "This email is invalid",
      "email"
    );
    return next(error);
  }

  next();
});

export default mongoose.model("Client", ClientSchema);
