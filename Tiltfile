docker_compose('docker-compose.yaml')

docker_build('tilt.dev/nodered', '.',
  dockerfile = "Dockerfile",
  live_update = [
    sync('package.json', '/data/node_modules/node-red-contrib-hot-shots/'),
    sync('nodes/', '/data/node_modules/node-red-contrib-hot-shots/nodes/'),
    run('npm install /data/node_modules/node-red-contrib-hot-shots/', trigger='package.json'),
    restart_container()
  ])
