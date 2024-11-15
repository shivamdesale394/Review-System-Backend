import userModel from "../models/user.js";
export const isAdmin = async (req,res,next) =>
{
    try{
        const {email} = req.body;
        const userinfo = await userModel.findOne({email});
        if(userinfo && userinfo.role == "Admin")
        {
            next();
        }
        else
        {
            res.status(403).json(
                {
                    message: "Access Denied , only admin can access this !"
                }
            )
        }
    }
    catch(error)
    {
        res.status(500).json({
            error:"Internal Server Error"
        })
    }
}