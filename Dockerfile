FROM nodered/node-red:1.2.9
RUN mkdir /data/node_modules/node-red-contrib-hot-shots/ -p
COPY package.json /data/node_modules/node-red-contrib-hot-shots/
COPY nodes/ /data/node_modules/node-red-contrib-hot-shots/nodes/
RUN npm install /data/node_modules/node-red-contrib-hot-shots/
