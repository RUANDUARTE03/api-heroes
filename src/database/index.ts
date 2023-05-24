import mongoose from "mongoose";

async function mongooseConnect() {
  try {
    const password = process.env.PASSWORD_BD
    await mongoose.connect(`mongodb+srv://ruanduarte0300:${password}@zrp-dev.qic46rr.mongodb.net/`);

    console.log("DB connect");
  } catch (error) {
    console.log(error);
  }
}

export default mongooseConnect;
