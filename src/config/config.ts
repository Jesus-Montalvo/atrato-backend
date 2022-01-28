const config = {
  database: {
    NAME: process.env.DATABASE_NAME || "atrato",
    USER: process.env.DATABASE_USER || "montalvo",
    PASSWORD: process.env.DATABASE_PASSWORD || "",
    HOST: process.env.DATABASE_HOST || "localhost",
    PORT: 5432,
  },
};

export default config;
