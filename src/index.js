const express = require('express');
const app = express();
const port = 3000;
const userRoutes = require("./routes/users");

// cors middleware
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  res.header(
   "Access-Control-Allow-Headers",
   "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  )
  next()
 })

// Middleware
app.use(express.json());
app.use((req, res, next) => {
  req.calculatedValue = 4 * 7;
  next();
});

// Middleware to hash password
const bcrypt = require("bcrypt")
const saltRounds = 10 // how many times the password is hashed

exports.hashPassword = (req, res, next) => {
    bcrypt.hash(req.body.password, saltRounds, 
        function (err, hash) {
            req.hashedPassword = hash
            console.log("your hashed password ", hash)
            next()
        }
    )
}
const { hashPassword } = require("./middleware/passencrypt")

// Route for /api/users
app.use("/api/users", userRoutes);

app.get('/', (req, res) => {
  console.log(`Calculated value: ${req.calculatedValue}`);
  res.send(`The calculated value is: ${req.calculatedValue}`);
});

app.get("/", (req, res) => {
  res.send("Welcome to my API ! e-commerce backend 🤳");
});

app.post("/", hashPassword, (req, res) => {
  // Get the data from the request
  const { firstName, email } = req.body
  const hashedPassword = req.hashedPassword

  res.json({
      firstName,
      email,
      hashedPassword,
      _id: "randomId4567",
  })
})


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
