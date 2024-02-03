const express = require("express");
const router = express.Router();

const cloudinary = require("../utils/cloudinary");
const innovativeProd = require("../models/innovativeProdModel");
const User = require("../models/userModel");
const userMiddleware = require("../middlewares/user");


router.post("/uploadInnovativeProd", userMiddleware,async (req, res) => {
  const { image, title, description, materialUsed, price, quantity, dimensions } = req.body;

  try {
    if (image) {
      const uploadRes = await cloudinary.uploader.upload(image);
      const uploaderEmail = req.user.email;
      if (uploadRes) {
        const innovative_prod = new innovativeProd({
          image: uploadRes.url,
          title,
          description,
          materialUsed,
          price,
          quantity,
          dimensions,
          uploaderEmail,
          initialQuantity: quantity
        });

        await innovative_prod.save();

        // storing in the innovativeProds array
        const email = req.user.email;
        const userDoc = await User.findOne({email: email});

        if(!userDoc.innovativeProds){
          userDoc.innovativeProds = [{}]
        }
        const productId = await innovativeProd.findOne({description});
        userDoc.innovativeProds.push(productId);
        await userDoc.save();

        res.status(200).json({ msg: "Innovative product uploaded successfully" });
      } else {
        res.json({ msg: "Error uploading image" });
      }
    } else {
      res.json({  msg: "Image data is required" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({  msg: "Internal Server Error" });
  }
});
  

router.get("/getInnovativeProd", async (req, res) => {
    try {
        const allInnovativeProds = await innovativeProd.find();
        res.json(allInnovativeProds);
    } catch (error) {
        console.error("Error getting all innovative products:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});


module.exports = router;
