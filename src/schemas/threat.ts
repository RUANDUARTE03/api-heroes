import mongoose from "mongoose";

const { Schema } = mongoose;

const ThreatSchema = new Schema(
  {
    dangerLevel: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    isCombat: {
      type: Boolean
    },
    heroe: {
      type: String,
    },
    timeDuration: {
      type: Date
    }
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Threat", ThreatSchema);
