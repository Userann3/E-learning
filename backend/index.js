const express = require('express');
const db = require('./config/database');
const routes = require('./Routes/routes')
const cookieParser = require('cookie-parser');
const cors = require('cors')


const app = express();
app.use(express.json());
app.use(cors({
    origin:"*"
}));

app.use(express.urlencoded({ extended: true })); // Parses form data
app.use(cookieParser()); // ✅ Enables reading cookies

app.use('/',routes);

(async () => {
    try {
        await db(); // Ensuring DB connection is established
        app.listen(3000, () => {
            console.log('Server is running on port 3000');
        });
    } catch (error) {
        console.error("Database connection failed:", error);
        process.exit(1);
    }
})();
