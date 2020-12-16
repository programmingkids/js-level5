import Phaser from "phaser";

class Player extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, image) {
        
        
        
    }
    
    update() {
        // カーソルオブジェクトの取得
        const cursors = this.scene.input.keyboard.createCursorKeys();
        if(cursors.right.isDown) {
            this.setVelocityX(this.runSpeed);
            this.anims.play('right', true);
        } else if(cursors.left.isDown) {
            this.setVelocityX(-this.runSpeed);
            this.anims.play('left', true);
        } else {
            this.setVelocityX(0);
            this.anims.stop();
        }
        // 上カーソルキーをクリックしたら
        if(cursors.up.isDown && this.body.touching.down) {
            // ジャンプ
            this.setVelocityY(-this.jumpPower);
        }
    }
    
    createAnimation() {
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
    }
}

export default Player;
