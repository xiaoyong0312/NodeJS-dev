var assert = require("assert");

/**
 * 测试框架mocha(BDD--行为驱动开发, TDD--测试驱动开发)
 * 使用 mocha XXX.js执行
 */

describe('Array', function () {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      assert.equal(-1, [1, 2, 3].indexOf(5));
      assert.equal(-1, [1, 2, 3].indexOf(0));
    })
  })
});

