const redis = require("redis");

let redisClient;

(async () => {
    if (!redisClient) { // Prevent multiple connections
        redisClient = redis.createClient({
            socket: {
                host: "127.0.0.1",
                port: 6379
            }
        });

        redisClient.on("error", (err) => console.error("❌ Redis Error:", err));

        await redisClient.connect();
        console.log("✅ Redis Connected Successfully!");
    }
})();

module.exports = redisClient;
