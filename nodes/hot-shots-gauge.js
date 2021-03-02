var StatsD = require('hot-shots')

module.exports = function(RED) {
    function HotShotsGauge(config) {
        RED.nodes.createNode(this,config);

        var opts = {
            host: config.host,
            port: config.port
        }

        var node = this;

        node.log("Connecting to statsd using " + opts.host + ":" + opts.port)
        var client = new StatsD(opts)

        node.on('input', function(msg) {
            metricValue = msg.metric_value ? msg.metric_value : 1
            tags = msg.tags ? msg.tags : []

            client.gauge(msg.metric_name, metricValue, tags);
        });
    }
    RED.nodes.registerType("hot-shots-gauge",HotShotsGauge);
}
