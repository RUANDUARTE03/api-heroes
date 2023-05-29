import mongoose from "mongoose";

const { Schema } = mongoose;

const HeroeSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Client",
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  classHeroe: {
    type: String,
    required: true,
  },
  typeHeroe: {
    type: String,
    required: true,
  },
  latitude: {
    type: String,
    required: true
  },
  longitude: {
    type: String,
    required: true
  }
});

export default mongoose.model("Heroe", HeroeSchema);
