describe('triangle', function() {
  it("returns equilateral when all 3 sides are equal", function() {
    expect(triangle(5,5,5)).to.equal("equilateral");
  });

  it("returns isosceles when two sides are equal", function() {
    expect(triangle(15,2,15)).to.equal("isosceles");
  });

  it("returns scalene when no sides are equal", function() {
    expect(triangle(9,2,5)).to.equal("scalene");
  });

});
