// import mongoose, {Schema, SchemaTypes} from 'mongoose';
// const userSchema = new Schema({
//     'email':{type:SchemaTypes.String, required:true, unique:true},
//     'password':{type:SchemaTypes.String, minLength: 8, required:true},
//     'name':{type:SchemaTypes.String, minLength:3},
//     'role':{type:SchemaTypes.String, default:'user'},
//     'status':{type:SchemaTypes.String, default:'A'},
//     'regdate':{type:SchemaTypes.Date, default:Date.now}
// });
// export const UserModel =  mongoose.model('users', userSchema);

// *********************************************
import mongoose, { Schema, SchemaTypes } from 'mongoose';

const userSchema = new Schema({
  email: { type: SchemaTypes.String, required: true, unique: true },
  password: { type: SchemaTypes.String, minLength: 8, required: false }, // not required now
  name: { type: SchemaTypes.String, minLength: 3 },
  role: { type: SchemaTypes.String, default: 'user' },
  status: { type: SchemaTypes.String, default: 'A' },
  regdate: { type: SchemaTypes.Date, default: Date.now },
  authProvider: { type: SchemaTypes.String, default: 'local' } // "google" or "local"
});

export const UserModel = mongoose.model('users', userSchema);
