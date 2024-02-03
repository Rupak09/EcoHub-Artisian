const express = require("express");
const router = express.Router();
const cloudinary = require("../utils/cloudinary");

const wasteReq = require("../models/wasteReqModel");
const User = require("../models/userModel");
const userMiddleware = require("../middlewares/user");

router.post("/uploadWasteReq", userMiddleware,async (req, res) => {
  const { image, title, description, materialRequired, price, quantity } = req.body;

  try {
    if (image) {
      const uploadRes = await cloudinary.uploader.upload(image);
      const uploaderEmail = req.user.email;
      if (uploadRes) {
        const waste_req = new wasteReq({
          image: uploadRes.url,
          title,
          description,
          materialRequired,
          price,
          quantity,
          initialQuantity: quantity,
          uploaderEmail
        });

        await waste_req.save();

         // storing in the innovativeProds array
        const email = req.user.email; 
        const userDoc = await User.findOne({email: email});
        if(!userDoc.wasteReq){
          userDoc.wasteReq = [{}]
        }
        const productId = await wasteReq.findOne({description});
        userDoc.wasteReq.push(productId);

         await userDoc.save();

         res.status(200).json({ msg: "Waste requirement uploaded successfully" });
      } else {
        res.json({ error: "Error uploading image" });
      }
    } else {
      res.json({ msg: "Image data is required" });
    }
  } catch (error) {
    res.json({ msg: "Internal Server Error" });
  }
});


router.get("/getWasteReq", userMiddleware, async (req, res) => {
  try {
      const allWasteReq = await wasteReq.find({quantity: { $ne: 0 }});
      res.json(allWasteReq);
  } catch (error) {
      console.error("Error in /getWasteReq route:", error);
      res.status(500).json({ error: "Internal Server Error" });
  }
});



router.get("/getWasteReq/:id", async (req, res) => {
  try {
      const id = req.params.id;
      const wasteRequest = await wasteReq.findById(id);

      if (wasteRequest) {
          res.json(wasteRequest);
      } else {
          res.status(404).json({ msg: "Waste request not found" });
      }
  } catch (error) {
      console.error("Error fetching waste request:", error);
      res.status(500).json({ msg: "Internal Server Error" });
  }
});

router.put("/contribute/:id", userMiddleware,async (req, res) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const product = await wasteReq.findById(id);

    const userEmail = req.user.email;
    const userDoc = await User.findOne({email:userEmail});

    const userAddress = data.address;
    const userMobile = data.phone;

    if (!product) {
      return res.json({ msg: "Waste requirement not found" });
    }

    product.contributions.push(data);

    const userContribution = data.quantity;
    const productRequirement = product.quantity;
    const finalContribution = productRequirement - userContribution;

    if (finalContribution < 0) {
      return res.json({ msg: `Invalid contribution quantity.\nMaximum contribution accepted : ${productRequirement}` });
    }


    product.quantity = finalContribution;
    await product.save();

    if(finalContribution === 0){
      const uploaderEmail = product.uploaderEmail;
      const uploaderDoc = await User.findOne({ email: uploaderEmail });


    if (!uploaderDoc) {
      return res.status(404).json({ msg: "Uploader not found" });
    }

    if (!uploaderDoc.satisfiedReq) {
      uploaderDoc.satisfiedReq = [];
    }

    uploaderDoc.satisfiedReq.push(product);
    await uploaderDoc.save();


    }
    // storing in the userContributions array


    if(!userDoc.userContributions){
      userDoc.userContributions = [{}]
    }

    const productTitle = product.title;
    const productDescription = product.description;
    const object = {
      id,
      productTitle,
      productDescription,
      userContribution,
      userAddress,
      userMobile
    }
    userDoc.userContributions.push(object);
    await userDoc.save();

    res.json({ msg: "Contribution successful" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Internal server error" });
  }
});

router.get("/satisfiedRequirement", async(req, res)=>{
  const requirement = await wasteReq.find({quantity:0});
  return res.json(requirement);
})

module.exports = router;