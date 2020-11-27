import Phaser from 'phaser';

class FloorGroup extends  Phaser.Physics.Arcade.StaticGroup {
    constructor(scene) {
        // 親クラスを呼び出す
        super(scene.physics.world, scene);
        // シーンをプロパティとして追加
        this.scene = scene;
        // フロアを作成
        this.createFloor();
    }
    
    createFloor() {
        // 4個の床を物理エンジン対象固定オブジェクトとして作成
        const floor1 = this.create(350, 130, "ground2");
        floor1.setDisplaySize(500, 20);
        floor1.refreshBody();
        
        const floor2 = this.create(250, 280, "ground2");
        floor2.setDisplaySize(500,20);
        floor2.refreshBody();
        
        const floor3 = this.create(725, 280, "ground2");
        floor3.setDisplaySize(150, 20);
        floor3.refreshBody();
        
        const floor4 = this.create(450, 430, "ground2");
        floor4.setDisplaySize(500, 20);
        floor4.refreshBody();
    }
}

export default FloorGroup;
