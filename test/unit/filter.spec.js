describe('Filters', function () {
  var $filter;

  beforeEach(function () {
    module('hs.filters');

    inject(function (_$filter_) {
      $filter = _$filter_;
    });
  });

  it('should filter the array based on startFrom', function () {
    var input = [1,2];

    result = $filter('startFrom')(input, 1);

    expect(result.length).toBe(1);
    expect(result[0]).toBe(2);
  });

  it('should not do anything if startFrom is not passed data', function() {
    var input = null;

    result = $filter('startFrom')(input, 1);
    expect(result).toBe(undefined);
  })
});