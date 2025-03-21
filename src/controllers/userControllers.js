// userControllers.js

exports.userLogIn = (req, res) => {
    res.send("User login");
};

exports.userSignUp = (req, res) => {
    // Get the data from the request
    const { firstName, email } = req.body;
    const hashedPassword = req.hashedPassword;

    res.json({
        firstName,
        email,
        hashedPassword,
        _id: "randomId4567",
    });
};

