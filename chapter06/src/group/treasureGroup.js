import Phaser from "phaser";

class TreasureGroup extends Phaser.Physics.Arcade.Group {
    constructor(scene) {
        // 親クラスを呼び出す
        super(scene.physics.world, scene);
        // シーンをプロパティとして代入
        this.scene = scene;
        
        this.timer = this.scene.time.addEvent({
            delay: 2000,
            callback : this.createTreasure,
            loop : true,
            callbackScope : this,
        });
    }
    
    createTreasure() {
        // X座標はランダムな値
        const x = Phaser.Math.RND.between(50, 750);
        // Y座標はランダムな値
        const y = Phaser.Math.RND.between(50, 550);
        const treasure = this.create(x, y, 'treasure');
        // 表示サイズの変更
        treasure.setDisplaySize(50, 50);
        treasure.setBounce(0.2);
    }
}

export default TreasureGroup;
