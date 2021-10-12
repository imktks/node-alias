const moduleAlias = require('module-alias');
const path = require('path');

const basePath = path.join(__dirname, "build");

moduleAlias.addAlias("@config", path.join(basePath, "config"));
moduleAlias.addAlias("@constants", path.join(basePath, "constants"));
