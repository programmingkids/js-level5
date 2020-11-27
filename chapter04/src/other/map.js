import Phaser from "phaser";

// Mapクラス
class Map {
    constructor(scene) {
        // マップグループの作成
        const map01Group = scene.add.group({
            key: 'map',
            frameQuantity: 192
        });
        // マップを敷き詰める
        Phaser.Actions.GridAlign(map01Group.getChildren(), {
            width: 16,
            height: 12,
            cellWidth: 50,
            cellHeight: 50,
            x: 25,
            y: 25,
        });
    }
}

export default Map;
