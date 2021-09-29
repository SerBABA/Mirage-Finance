import e from "cors";

export function corsConfig(): e.CorsOptions {
  let origins;

  if (process.env.NODE_ENV === "local") {
    origins = [
      "https://studio.apollographql.com",
      `${process.env.SERVER_URL!}:${process.env.WEB_PORT!}`,
    ];
  } else {
    origins = [`${process.env.SERVER_URL!}:${process.env.WEB_PORT!}`];
  }

  return {
    origin: origins,
    credentials: true,
  };
}
