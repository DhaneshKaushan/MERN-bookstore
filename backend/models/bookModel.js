import mongoose from "mongoose";

const bookSchema = mongoose.Schema(
    {
       title :{
          type: String,
          requreied: true
       },
       author :{
        type: String,
        requreied: true
      },
      publishYear :{
        type: Number,
        requreied: true
     },
    },{
        timestamps : true,
    }
)

export const Book = mongoose.model('books',bookSchema)

