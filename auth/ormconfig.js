const SOURCE_PATH = process.env.NODE_ENV === "local" ? "src" : "dist";

module.exports = {
  type: "postgres",
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  synchronize: true,
  logging: false,
  entities: [`${SOURCE_PATH}/entity/**/*`],
  migrations: [`${SOURCE_PATH}/migration/**/*`],
  subscribers: [`${SOURCE_PATH}/subscriber/**/*`],
  cli: {
    entitiesDir: `${SOURCE_PATH}/entity`,
    migrationsDir: `${SOURCE_PATH}/migration`,
    subscribersDir: `${SOURCE_PATH}/subscriber`,
  },
};
