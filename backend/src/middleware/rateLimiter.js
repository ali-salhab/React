import ratelimit from "../../config/upstash.js";

const ratelimiter = async (req, res, next) => {
  console.log(`request :  ${req.method} url : ${req.url}`);
  try {
    const { success } = await ratelimit.limit(req.ip);
    if (!success) {
      return res
        .status(429)
        .json({ message: "Too many requests. Please try again later." });
    }
    next();
  } catch (error) {
    console.error("Rate limiting error:", error);
    res
      .status(500)
      .json({ message: "Internal server error in rate limiting." });
  }
};
export default ratelimiter;
