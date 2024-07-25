const corsOptions = {
  origin: [
    "http://localhost:5173",
    "http://localhost:4173",
    "https://instachat-v1-chat.vercel.app",
    process.env.CLIENT_URL,
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
};

const INSTACHAT_TOKEN = "instaChat-token";

export { corsOptions, INSTACHAT_TOKEN };
