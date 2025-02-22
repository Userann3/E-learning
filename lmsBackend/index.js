const express = require('express');
const app = express();
const routes = require('./routes/userAuth')
const cookieParser = require("cookie-parser");
const db = require('./config/database');

require('./config/redis');

app.use(express.json())
app.use(cookieParser());
app.use('/',routes);

app.listen(4000, async () => {
    console.log("🚀 Server is running on port 4000");
    db.database(); // 🔗 Connect to MongoDB
});
