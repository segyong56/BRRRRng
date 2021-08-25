import mongoose from "mongoose";

const mycarSchema = mongoose.Schema({
  carname: {
    type: String,
    required: true,
  },
  carid: {
    type: String,
    unique: true,
    required: true,
  },
  maker: {
    type: String,
  },
  chargetype: {
    type: String,
  },
});

const MyCar = mongoose.model("MyCar", mycarSchema);

export default MyCar;
