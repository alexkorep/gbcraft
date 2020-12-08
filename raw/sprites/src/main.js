var TileMap = require('pixelbox/TileMap');

const map = TileMap.getMap('map'); // get a tile map by its name


exports.update = function () {
  map.draw(0, 0);
};
