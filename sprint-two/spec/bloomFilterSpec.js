describe('bloomFilter', function() {
  var bloomFilter;


  beforeEach(function() {
    bloomFilter = new Bloom(["hello", "goodbye", "something", 500, 60]);
  });

  it('should have a method named "contains"', function() {
    expect(bloomFilter.contains).to.be.a("function");
  });

  it('should have three hash functions', function(){
    expect(hash1).to.be.a("function");
    expect(hash2).to.be.a("function");
    expect(hash3).to.be.a("function");
  });

  it('should return false if an item is not in the collection', function(){
    expect(bloomFilter.contains(500)).to.equal(true);
    expect(bloomFilter.contains(61)).to.equal(false);
    expect(bloomFilter.contains("hell")).to.equal(false);
    expect(bloomFilter.contains("hello")).to.equal(true);
  });

});
