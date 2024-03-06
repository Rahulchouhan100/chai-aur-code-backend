import mongoose from "mongoose";

const todoSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    complete: {
      type: Boolean,
      default: false, // by default it will give false value
    },
    createdBy:{
        type : mongoose.Schema.Types.ObjectId,
        ref : "User"  // name should be same, whatever you have given name in user.model.js.
    },
    subTodos:[
        {
            type : mongoose.Schema.Types.ObjectId,
            ref :"subTodo"   // name should be same, whatever you have given name in sub_todo.model.js.
        }
    ]

    // Array of subtodos
  },
  { timestamps: true }
);

export const todo = mongoose.model("Todo", userTodos);
