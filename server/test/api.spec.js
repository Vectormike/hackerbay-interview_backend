const { expect } = require("chai");
const { thumbnailData, undefinedthumbnailData } = require("./mocks/thumbnail");
const app = require("../app");

describe("Authentication", () => {
  it("Test Auth route", async () => {
    try {
      const res = await app
        .post("/api/auth")
        .set("Connection", "keep alive")
        .set("Content-Type", "application/json")
        .send({ username: "Victor", password: "redeemer" });
      expect(res.status).to.have.status(200);
      res.body.should.have.property("token");
      res.body.should.have.property("user", "Victor");
    } catch (error) {
      return error;
    }
  });
});

describe("Thumbnail Endpoint", () => {
  it("should generate a thumbnail", async () => {
    try {
      const res = await app
        .get("api/createthumbnail")
        .set("Connetion", "keep alive")
        .set("Content-Type", "application/json")
        .set("x-access-token", token)
        .type("form")
        .send(thumbnailData);
      expect(res.status).to.have.status(200);
      expect(res.body.message).to.deep.equal("Image created");
    } catch (error) {
      return error;
    }
  });
  it("shound not create thumbnail if url is undefined", async () => {
    const res = await app
      .get("api/thumbnail")
      .set("Connetion", "keep alive")
      .set("Content-Type", "application/json")
      .set("x-access-token", token)
      .type("form")
      .send(undefinedthumbnailData);
    expect(res.status).to.deep.equal(401);
    expect(res.body.message).to.deep.equal("Image generation failure");
  });
});
