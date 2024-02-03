const cloudinary = require("cloudinary").v2;
require("dotenv").config();


cloudinary.config({ 
    cloud_name: 'dfpzyjix2', 
    api_key: '695139724415964', 
    api_secret: 'voo_xp19A44gh_Fd_v5VFfSSOYg' 
});

module.exports = cloudinary