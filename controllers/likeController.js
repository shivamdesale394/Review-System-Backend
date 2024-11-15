import Like from "../models/Like.js"; 
import Review from "../models/Review.js";
  
export const likeReviews = async (req, res) => {  
  try {  
    const { reviews, student } = req.body;  
  console.log(Like);
  
    
    const likes = new Like({  
      reviews,  
      student,  
    });  
  
    const savedLikes =await likes.save();  
    console.log(savedLikes);
    
  
    const updatedReviews = await Review.findByIdAndUpdate(  
      reviews,  
      { $push: { likes: savedLikes._id } },  
      { new: true }  
    )  
    .populate("likes")  
    .exec();  
  
    res.json({  
       reviews: updatedReviews  
    })  
  } catch (error) {  
    console.log(error);
    
    return res.status(500).json({  
        error: "Error while liking reviews",  
    });  
  }  
}; 