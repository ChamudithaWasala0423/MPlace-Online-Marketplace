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
    ImageTwo: object;
    ImageThree: object;
    tags: string;
    level: string;
    userId : IUser;
    comments: IComment[];
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
    },
    ImageOne: {
      public_id: {
        type: String,
        // required : true,
      },
      url: {
        type: String,
        // required : true,
      },
    },
    ImageTwo: {
        public_id: {
          type: String,
          // required : true,
        },
        url: {
          type: String,
          // required : true,
        },
      },
    ImageThree: {
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
      required: false,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    comments: [commentSchema],
    
  });
  


  const AdModel: Model<IAd> = mongoose.model("Ad", adSchema);

  export default AdModel;