import mongoose from "mongoose";

async function mongooseConnect() {
  try {
    await mongoose.connect("mongodb+srv://ruanduarte0300:sMqE9gBRD29G9JTQ@zrp-dev.qic46rr.mongodb.net/");

    console.log("DB connect");
  } catch (error) {
    console.log(error);
  }
}

export default mongooseConnect;
