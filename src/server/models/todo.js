import mongoose from "mongoose";

const schema = mongoose.Schema;

const todoSchema = new schema({
  name: {
    type: String,
    required: true,
  },

  status: {
    type: String,
    required: false,
  },
});

const todoModel = mongoose.model("todo", todoSchema);

export { todoModel };
