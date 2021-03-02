var StatsD = require('hot-shots')

module.exports = function(RED) {
    function HotShotsIncrement(config) {
        RED.nodes.createNode(this,config);

        // Retrieve the config node
        this.server = RED.nodes.getNode(config.server);
        var node = this;

        node.on('input', function(msg) {
            metricValue = msg.metric_value ? msg.metric_value : 1
            tags = msg.tags ? msg.tags : []

            this.server.client.increment(msg.metric_name, metricValue, tags);
        });
    }
    RED.nodes.registerType("hot-shots-increment",HotShotsIncrement);
}
