const express = require('express');
const app = express();
const port = 3000;

// Serve static files from the 'public' directory
app.use(express.static('src'));

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
