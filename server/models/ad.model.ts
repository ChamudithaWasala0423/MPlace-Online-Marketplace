import mongoose, { Document, Model, Schema } from "mongoose";
import { IUser } from "./user.model";
require("dotenv").config();

interface IComment extends Document {
    user: IUser;
    question: string;
    questionReplies: IComment[];
}


interface IAdData extends Document {
    title: string;
    description: string;
    thumbnailImage: object;
    suggestion: string;
    questions: IComment[];
  }


  interface IAd extends Document {
    name: string;
    description: string;
    price: number;
    estimatedPrice: number;
    thumbnail: object;
    tags: string;
    level: string;
    benefits: { title: string[] };
    adData: IAdData[];
  }

  const commentSchema = new Schema<IComment>({
    user: Object,
    question: String,
    questionReplies: [Object],
  });


  //Ad Data Schema
  const adDataSchema = new Schema<IAdData>({
    title: String,
    description: String,
    suggestion: String,
    questions: [commentSchema],
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
    },
    thumbnail: {
      public_id: {
        type: String,
        // required : true,
      },
      url: {
        type: String,
        // required : true,
      },
    },
    tags: {
      type: String,
      required: true,
    },
    level: {
      type: String,
      required: true,
    },
    benefits: [{ title: String }],
    adData: [adDataSchema],
    
  });
  


  const AdModel: Model<IAd> = mongoose.model("Course", adSchema);

  export default AdModel;