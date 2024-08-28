import mongoose, {Document, Model, Schema} from "mongoose";
import bcrypt from "bcryptjs";
require("dotenv").config();
import jwt from "jsonwebtoken";

//email validtion
const emailRejecPatten: RegExp = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;

export interface IUser extends Document {
    name : string;
    email: string;
    password: string;
    avatar : {
        public_id: string;
        url: string;
    },
    role: string;
    isVerified : boolean;
    ads : Array<{adId : string}>;
    comaparePassword(password: string): Promise<boolean>;
    SignAccessToken: () => string;
    SignRefreshToken: () => string;
}


const userSchema: Schema = new mongoose.Schema({
    name : {
        type: String,
        required: [true, "Please enter your name"],
        // maxLength: [30, "Your name cannot exceed 30 characters"]
    },
    email : {
        type: String,
        required: [true, "Please enter your email"],
        validate : {
            validator: function(value: string) {
                return emailRejecPatten.test(value);
            },
            message: "Please enter a valid email"
        },
        unique: true
    },
    password : {
        type: String,
        minlength: [6, "Your password must be longer than 6 characters"],
        select: false
    },
    avatar : {
        public_id : String,
        url : String
    },
    role : {
        type: String,
        default: "user"
    },
    isVerified : {
        type: Boolean,
        default: false
    },
    ads : [
        {
            adId : String
        }
    ],

   
}, {timestamps: true});


//Hash password before saving
userSchema.pre<IUser>("save", async function(next) {
    if(!this.isModified("password")) {
        next();
    }
    this.password = await bcrypt.hash(this.password, 10);
    next();
});


//sign access token
userSchema.methods.SignAccessToken = function() {
    return jwt.sign({id: this._id}, process.env.ACCESS_TOKEN || '', {
        expiresIn: "5m",
});
}


//sign refresh token
userSchema.methods.SignRefreshToken = function() {
    return jwt.sign({id: this._id}, process.env.REFRESH_TOKEN || '', {
        expiresIn: "3d",
    });
}

//compare user password
userSchema.methods.comaparePassword = async function(enteredPassword: string): Promise<boolean> {
    return await bcrypt.compare(enteredPassword, this.password);
}

const UserModel: Model<IUser> = mongoose.model<IUser>("User", userSchema);
export default UserModel;