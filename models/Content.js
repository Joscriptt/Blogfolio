import mongoose from "mongoose";

const { Schema } = mongoose;

const ContentSchema = new Schema(
  {
    content: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    summary: {
      type: String,
      required: true,
    },
    tags: {
      type: Array,
      required: true,
    },
    image: {
      type: Array,
    },
    price: {
      type: Number,
    },
    howManyWidgets: {
      type: Number,
    },
    designType: {
      type: String,
    },
    themes: {
      type: String,
    },
    widgets: {
      type: String,
    },
    madeFor: {
      type: String,
    },
    howManythemes: {
      type: Number,
    },
  },
  { timestamps: true }
);

// price,
// howManyWidgets,
// widgets,
// madeFor,
// howManythemes,
// designType,
// themes,

//If the Post collection does not exist create a new one.
export default mongoose.models.Post || mongoose.model("Post", ContentSchema);
