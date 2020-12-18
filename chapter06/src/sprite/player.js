import Phaser from "phaser";
import FireGroup from './../group/fireGroup';

class Player extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, image) {
        // 親クラスを呼び出す
        
        // シーンをプロパティとして代入
        
        // 表示サイズの変更
        
        // 最初のフレームを0番にする
        
        // メソッドの呼び出し
        
        // 移動速度
        
        // ジャンプパワー
        
        // 移動方向
        
        // ファイヤーグループの作成
        
        // スペースキーでファイヤー発射
        
        
        
    }
    
    update() {
        // カーソルオブジェクトの取得
        const cursors = this.scene.input.keyboard.createCursorKeys();
        if(cursors.right.isDown) {
            this.setVelocityX(this.runSpeed);
            this.anims.play('right', true);
            this.direction = 'right';
        } else if(cursors.left.isDown) {
            this.setVelocityX(-this.runSpeed);
            this.anims.play('left', true);
            this.direction = 'left';
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
    
    createFireGroup() {
        // ファイヤーグループの作成
        
    }
    
    shootFire() {
        // ファイヤー作成
        
    }
}

export default Player;
