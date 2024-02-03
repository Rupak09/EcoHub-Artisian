const jwt = require("jsonwebtoken");
require("dotenv").config();

function userMiddleware(req, res, next) {
    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({ error: "Unauthorized. Please log in." });
    }

    try {
        const user = jwt.verify(token, process.env.SECRET);
        req.user = user;
        // console.log("User Email:", req.user.email);
        next();
    } catch (err) {
        if (err.name === "TokenExpiredError") {
            // Token has expired
            res.clearCookie("token");
            return res.redirect('/');
        } else {
            // Token verification failed for some other reason
            res.clearCookie("token");
            return res.status(401).json({ error: "Unauthorized. Please log in." });
        }
    }
}

module.exports = userMiddleware;
