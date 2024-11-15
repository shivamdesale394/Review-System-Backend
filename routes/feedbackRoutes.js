import express from "express";
import { createCompany, getCompanies } from "../controllers/companyController.js"
import { likeReviews } from "../controllers/likeController.js"
import { createReview, getAllReviews } from "../controllers/reviewController.js"
import { createAdmin, createAlumni, createStudent, getAllUsers } from "../controllers/userController.js"
import { isAdmin } from "../middleware/middleware.js";

 const router=express.Router();

router.post("/admin/create",createAdmin)
router.post("/alumni/create",createAlumni)
router.post("/student/create",createStudent)
router.post("/company/create",isAdmin,createCompany)
router.post("/review/create",createReview)
router.post("/like/create",likeReviews)


router.get("/user/get",getAllUsers)
router.get("/company/get",getCompanies)
router.get("/review/get",getAllReviews)
export default router;