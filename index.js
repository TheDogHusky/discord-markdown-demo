const express = require('express');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.use("/static", express.static("static"));
app.use("/node_modules", express.static("node_modules"));

const markdown = `# Hello!
This is a **bold** text.

I'd like to be able to call a function like this: \`toHTML(markdown)\`

And get the following output:
\`\`\`html
<p>Hello! This is a <strong>bold</strong> text.</p>
\`\`\`

Adam!`;

app.get('/', (req, res) => {
  res.render("index", { markdown: markdown });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
