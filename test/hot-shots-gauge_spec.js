var should = require("should");
var helper = require("node-red-node-test-helper");
var hotShotsGauge = require("../nodes/hot-shots-gauge.js");

helper.init(require.resolve('node-red'));

describe('hot-shots-gauge Node', function () {

  beforeEach(function (done) {
      helper.startServer(done);
  });

  afterEach(function (done) {
      helper.unload();
      helper.stopServer(done);
  });

  it('should be loaded', function (done) {
    var flow = [{ id: "n1", type: "hot-shots-gauge", name: "hot-shots-gauge" }];
    helper.load(hotShotsGauge, flow, function () {
      var n1 = helper.getNode("n1");
      try {
        n1.should.have.property('name', 'hot-shots-gauge');
        done();
      } catch(err) {
        done(err);
      }
    });
  });
});
