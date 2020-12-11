import Phaser from "phaser";

// 「Phaser.GameObjects.Sprite」を継承した「Player」クラスの作成
class Player extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, image) {
        
        
        
    }
    
    update() {
        // カーソルオブジェクトの取得
        
        
        
    }
    
    createAnimation() {
        this.scene.anims.create({
            key: 'turn',
            frames: [ { key: 'player', frame: 0 } ],
            frameRate: 20
        });
        // 左向きのアニメーション
        this.scene.anims.create({
            key: 'left',
            frames: this.scene.anims.generateFrameNumbers('player', { start: 3, end: 5 }),
            frameRate: 10,
            repeat: -1
        });
        // 右向きのアニメーション
        this.scene.anims.create({
            key: 'right',
            frames: this.scene.anims.generateFrameNumbers('player', { start: 6, end: 8 }),
            frameRate: 10,
            repeat: -1
        });
        // 上向きのアニメーション
        this.scene.anims.create({
            key: 'up',
            frames: this.scene.anims.generateFrameNumbers('player', { start: 9, end: 11 }),
            frameRate: 10,
            repeat: -1
        });
        // 下向きのアニメーション
        this.scene.anims.create({
            key: 'down',
            frames: this.scene.anims.generateFrameNumbers('player', { start: 0, end: 2 }),
            frameRate: 10,
            repeat: -1
        });
    }
}

export default Player;
