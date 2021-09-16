import supertest from "supertest";
import app from "../index";

const request = supertest(app);
describe("Test image endpoint responses", () => {
  it("gets the image endpoint with status response 200", async () => {
    const response = await request.get(
      "/api/images?filename=santamonica&height=100&width=500"
    );
    expect(response.status).toBe(200);
  }, 5000);

  it("gets the image endpoint with optional parameter with status response 200", async () => {
    const response = await request.get(
      "/api/images?filename=santamonica&height=100&width=500&format=png"
    );
    expect(response.status).toBe(200);
  }, 5000);

  it("gets an invalid filename endpoint with status response 400", async () => {
    const response = await request.get(
      "/api/images?filename=test&height=100&width=500"
    );
    expect(response.status).toBe(400);
  });

  it("gets missing parameter endpoint with status response 400", async () => {
    const response = await request.get(
      "/api/images?filename=santamonica&height"
    );
    expect(response.status).toBe(400);
  });
});
