// import "zod-openapi/extend";
import { z } from "zod";

const schema = z.object({
    name: z.string().openapi({ example: "3" }),
})

console.log(schema.parse({ name: "Alberto" }));