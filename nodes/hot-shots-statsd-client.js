var StatsD = require('hot-shots')

module.exports = function(RED) {
    function HotShotsStatsdClient(n) {
        RED.nodes.createNode(this,n);
        this.host = n.host;
        this.port = n.port;

        this.log("Connecting to statsd using " + this.host + ":" + this.port)
        this.client = new StatsD(
            host = this.host,
            port = this.port
        );

        this.on('close', function() {
            this.log('Closing StatsD client')
            client.close(function(err) {
                console.log('StatsD client did not close correctly: ', err);
            });

        });

    }
    RED.nodes.registerType("hot-shots-statsd-client",HotShotsStatsdClient);
}
