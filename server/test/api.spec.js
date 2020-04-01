const { expect } = require("chai");
const { thumbnailData, undefinedthumbnailData } = require("./mocks/thumbnail");
const { patch, document } = require("./mocks/jsondoc");
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
        .set("Content-Type", "image")
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
    try {
      const res = await app
        .get("api/createthumbnail")
        .set("Connetion", "keep alive")
        .set("Content-Type", "image")
        .set("x-access-token", token)
        .type("form")
        .send(undefinedthumbnailData);
      expect(res.status).to.deep.equal(401);
      expect(res.body.message).to.deep.equal("Image generation failure");
    } catch (error) {
      return error;
    }
  });
  it("should not create thumbnail if no jwt", async () => {
    try {
      const res = await app
        .patch("/api/jsonpatcher")
        .set("Connetion", "keep alive")
        .set("Content-Type", "application/json")
        .type("form")
        .send(thumbnailData);
      expect(res.status).to.deep.equal(403);
      expect(res.body.message).to.deep.equal("You are not logged in");
    } catch (error) {
      return error;
    }
  });
});

describe("JSON Patching", () => {
  it("should patch the json document", async () => {
    try {
      const res = await app
        .patch("/api/jsonpatcher")
        .set("Connetion", "keep alive")
        .set("Content-Type", "application/json")
        .set("x-access-token", token)
        .send({ document, patch });
      res.body.should.have.property("data");
      res.body.should.have.property("data", { baz: "victor", foo: "bar" });
    } catch (error) {
      return error;
    }
  });

  it("should not patch the json document if no jwt", async () => {
    try {
      const res = await app
        .patch("/api/jsonpatcher")
        .set("Connetion", "keep alive")
        .set("Content-Type", "application/json")
        .send({ document, patch });
      expect(res.status).to.deep.equal(403);
      expect(res.body.message).to.deep.equal("You are not logged in");
    } catch (error) {
      return error;
    }
  });
});
