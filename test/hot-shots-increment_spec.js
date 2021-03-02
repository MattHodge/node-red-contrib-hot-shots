var should = require("should");
var helper = require("node-red-node-test-helper");
var hotShotsIncrement = require("../nodes/hot-shots-increment.js");

helper.init(require.resolve('node-red'));

describe('hot-shots-increment Node', function () {

  beforeEach(function (done) {
      helper.startServer(done);
  });

  afterEach(function (done) {
      helper.unload();
      helper.stopServer(done);
  });

  it('should be loaded', function (done) {
    var flow = [{ id: "n1", type: "hot-shots-increment", name: "hot-shots-increment" }];
    helper.load(hotShotsIncrement, flow, function () {
      var n1 = helper.getNode("n1");
      try {
        n1.should.have.property('name', 'hot-shots-increment');
        done();
      } catch(err) {
        done(err);
      }
    });
  });
});
