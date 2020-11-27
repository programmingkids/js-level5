import Phaser from "phaser";

// 「Phaser.GameObjects.Sprite」を継承した「Player」クラスの作成
class Player extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, image) {
        // 親クラスを呼び出す
        super(scene, x, y, image);
        // シーンをプロパティとして代入
        this.scene = scene;
        // 表示サイズの変更
        this.setDisplaySize(50, 50);
        // 最初のフレームを0番にする
        this.setFrame(0);
        // メソッドの呼び出し
        this.createAnimation();
        // 移動速度の設定
        this.speed = 5;
    }
    
    update() {
        // カーソルオブジェクトの取得
        const cursors = this.scene.input.keyboard.createCursorKeys();
        if(cursors.right.isDown) {
            this.x += this.speed;
            this.anims.play('right', true);
        } else if(cursors.left.isDown) {
            this.x -= this.speed;
            this.anims.play('left', true);
        } else if(cursors.up.isDown) {
            this.y -= this.speed;
            this.anims.play('up', true);
        } else if(cursors.down.isDown) {
            this.y += this.speed;
            this.anims.play('down', true);
        } else {
            this.anims.stop();
        }
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
