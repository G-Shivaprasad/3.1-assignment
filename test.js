import { connect_to_cluster } from "../db.js";

describe("Football tests", () => {
  test("Rashford was created", async () => {
    const client = connect_to_cluster();

    const result = await client
      .db("football")
      .collection("manu")
      .findOne({ name: "Harrison" })
      .toArray();

    except(result[0].name).toBe("Harrison");
  });
});
