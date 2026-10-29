import { expect } from "chai";
import { formatVelocity } from "./testUtils";

describe("Prettier 3 plugin API", () => {
  it("should format input", async () => {
    const formatted = await formatVelocity("<p>hello</p>", undefined);
    expect(formatted).to.equal("<p>hello</p>");
  });

  it("should format embedded CSS", async () => {
    const formatted = await formatVelocity(
      '<div style="color:red"></div>',
      undefined
    );
    expect(formatted).to.equal('<div style="color: red"></div>');
  });
});
