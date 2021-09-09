import e from "cors";

export function corsConfig(): e.CorsOptions {
  let origins;

  if (process.env.NODE_ENV === "local") {
    origins = [
      "https://studio.apollographql.com",
      `${process.env.SERVER_URL!}:${process.env.PORT!}`,
    ];
  } else {
    origins = [`${process.env.SERVER_URL!}:${process.env.PORT!}`];
  }

  return {
    origin: origins,
    credentials: true,
  };
}
