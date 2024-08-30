import mongoose, { Document, Model, Schema } from "mongoose";
import { IUser } from "./user.model";
require("dotenv").config();

interface IComment extends Document {
    user: IUser;
    question: string;
    questionReplies: IComment[];
}



  interface IAd extends Document {
    name: string;
    description: string;
    price: number;
    estimatedPrice: number;
    ImageOne: object;
    tags: string;
    level: string;
    userId : IUser;
    address : string;
    questions: IComment[];
   
  }

  const commentSchema = new Schema<IComment>({
    user: Object,
    question: String,
    questionReplies: [Object],
  });


  //Ad Schema
  const adSchema = new Schema<IAd>({
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    estimatedPrice: {
      type: Number,
      required: true,
    },
    ImageOne: {
      public_id : String,
      url : String
    },
    tags: {
      type: String,
      required: true,
    },
    level: {
      type: String,
      required: true,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    questions: [commentSchema],
    
  }, {timestamps: true});
  


  const AdModel: Model<IAd> = mongoose.model("Ad", adSchema);

  export default AdModel;