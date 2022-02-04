import { rest } from "msw";

export const handlers = [
  rest.get("http://localhost:3000/api/user/:userId", async (req, res, ctx) => {
    // const { id } = req.url.searchParams("id");
    const { userId } = req.params;

    return res(
      ctx.json({
        name: `Jimmy ${userId}`,
      })
    );
    // return res(ctx.status(400));
  }),

  rest.put("http://localhost:3000/counter/increment", async (req, res, ctx) => {
    const { value } = req.body;
    return res(
      ctx.json({
        value: value + 2,
      })
    );
  }),

  rest.get("/login", (req, res, ctx) => {
    return res(
      ctx.json({
        id: "f79e82e8-c34a-4dc7-a49e-9fadc0979fda",
        firstName: "John",
        lastName: "Maverick",
      })
    );
  }),

  rest.get(
    "https://raw.githubusercontent.com/techoi/raw-data-api/main/simple-api.json",
    async (req, res, ctx) => {
      const id = req.url.searchParams.get("id");

      const originalResponse = await ctx.fetch(req);
      const originalResponseData = await originalResponse.json();

      return res(
        ctx.status(403),
        ctx.json({
          errorMessage: "Data not Found",
        })

        // ctx.json({
        //   data: {
        //     people: [
        //       ...originalResponseData.data.people,
        //       {
        //         name: id,
        //         age: 24,
        //       },
        //     ],
        //   },
        // })
      );

      // return res(
      //   ctx.json({
      //     data: {
      //       people: [
      //         { name: id, age: 12 },
      //         {
      //           name: "jimmy",
      //           age: 135,
      //         },
      //         {
      //           name: "timmy",
      //           age: 13,
      //         },
      //         {
      //           name: "cindy",
      //           age: 15,
      //         },
      //         {
      //           name: "judy",
      //           age: 25,
      //         },
      //         {
      //           name: "marry",
      //           age: 64,
      //         },
      //         {
      //           name: "tommy",
      //           age: 109,
      //         },
      //       ],
      //     },
      //   })
      // );
    }
  ),

  // rest.post("/login", (req, res, ctx) => {
  //   const { username } = req.body;

  //   return res(
  //     ctx.json({
  //       id: "f79e82e8-c34a-4dc7-a49e-9fadc0979fda",
  //       username,
  //       firstName: "John",
  //       lastName: "Maverick",
  //     })
  //   );
  // }),
];
