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


// Route for /api/users
app.use("/api/users", userRoutes);

app.get('/', (req, res) => {
  console.log(`Calculated value: ${req.calculatedValue}`);
  res.send(`The calculated value is: ${req.calculatedValue}`);
});

app.get("/", (req, res) => {
  res.send("Welcome to my API ! e-commerce backend 🤳");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
