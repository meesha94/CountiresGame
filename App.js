const express = require('express');
const cors = require('cors');
const countryRoutes = require('./routes/countryRoutes');
const app = express();
const port = process.env.PORT || 8000;

app.use(cors());

app.use(countryRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
