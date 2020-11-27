import Phaser from "phaser";

class Player extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, image) {
        // 親クラスを呼び出す
        super(scene, x, y, image);
        // シーンをプロパティとして代入
        this.scene = scene;
        // 表示サイズの変更
        this.setDisplaySize(50, 50);
        // 最初のフレームを0番にする
        this.setFrame(7);
        // メソッドの呼び出し
        this.createAnimation();
        // 移動速度
        this.runSpeed = 200;
        // ジャンプパワー
        this.jumpPower = 300;
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
