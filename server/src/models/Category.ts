import mongoose from "mongoose";
// , { HydratedDocument } 
// export type Category = {
//   name: string;
//   createdAt: Date;
//   updatedAt: Date;
// };

// export type CategoryDocument = HydratedDocument<Category>;

const CategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true },
);

export const Category =
  mongoose.models.Category ||
  mongoose.model("Category", CategorySchema);
//   <Category>