import { rest } from "msw";

export const handlers = [
  rest.get("https://randomuser.me/api", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        results: [{ name: { title: "Mr", first: "Jimmy", last: "Wirtanen" } }],
      })
    );
  }),
];
