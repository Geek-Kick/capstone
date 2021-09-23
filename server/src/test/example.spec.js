var expect = require("chai").expect;
const exampleService = require("../api/example/exampleService");

// 자세한건 구글링 요망
// 좋은 정보 있으면 공유 요망

describe("This is example", () => {
  it("should return 15", () => {
    expect(exampleService.mochaTest()).to.equal(15);
  });
});
