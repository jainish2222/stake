const express = require("express");
const rootRouter = require("./routes/index");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors())

app.use("/api/v1", rootRouter);
const generateArray = (numFalse) => {
  if (numFalse > 25) {
    return { error: 'numFalse cannot be greater than 25' };
  }

  const result = Array(25).fill(true);
  for (let i = 0; i < numFalse; i++) {
    result[i] = false;
  }

  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }

  return result;
};

// Endpoint to get the array
app.get('/generate-array', (req, res) => {
  const numFalse  = req.query.name;

  if (numFalse === undefined || isNaN(numFalse)) {
    return res.status(400).json({ error: 'numFalse parameter is required and must be a number' });
  }

  const numFalseInt = parseInt(numFalse, 10);
  const result = generateArray(numFalseInt);
  res.json(result);
});
app.listen(3000, () => {
  console.log("Server running on port 3000");
});

