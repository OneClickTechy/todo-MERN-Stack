import mongoose from "mongoose";

const taskSchema =
  ({
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    duedate: {
      type: Date,
      require: true,
    },
    priority: {
      type: Number,
      enum: [1, 2, 3, 4],
      default: 4,
    },
    status: {
      type: String,
      enum: ["Pending", "In Progress", "Completed"],
      default: "Pending",
    },
    label: {
      type: String,
    },
    completed: {
      type: Boolean,
      default: false,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  });

export const Task = mongoose.model("Task", taskSchema);
