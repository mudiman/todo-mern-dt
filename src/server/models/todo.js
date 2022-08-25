import mongoose from "mongoose";

const schema = mongoose.Schema;

const todoSchema = new schema({
  body: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false
  }
}, { timestamps: true });

const todoModel = mongoose.model("todo", todoSchema);

export { todoModel };
