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
  },
  user: { type: mongoose.Types.ObjectId, ref: "user" }
}, { timestamps: true });

todoSchema.set('toJSON', {
  transform: function (doc, ret, opt) {
    //delete ret['user']
    return ret
  }
})

const todoModel = mongoose.model("todo", todoSchema);

export { todoModel };
