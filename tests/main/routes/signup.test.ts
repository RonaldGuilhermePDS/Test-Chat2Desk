import request from "supertest";
import app from "@/main/config/app";

describe("SignUp Routes", () => {
  test("Should return an account on success", async () => {
    await request(app).post("/signup").expect(200);
  });
});
