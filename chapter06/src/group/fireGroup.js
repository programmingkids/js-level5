import Phaser from "phaser";

class FireGroup extends Phaser.Physics.Arcade.Group {
    constructor(scene) {
        // 親クラスを呼び出す
        super(scene.physics.world, scene);
        // シーンをプロパティとして代入
        this.scene = scene;
        // ファイヤーの加速度
        this.speed = 400;
    }
    
    createFire(player) {
        // プレイヤーのX座標がファイヤーのX座標
        const x = player.body.center.x;
        // プレイヤーのY座標がファイヤーのY座標
        const y = player.body.center.y;
        // ファイヤー作成
        const fire = this.create(x, y, 'fire');
        // 表示サイズの変更
        fire.setDisplaySize(50, 50);
        // ファイヤーは重力の影響を受けない
        fire.body.setAllowGravity(false);
        
        if(player.direction == "right") {
            // プレイヤーが右向きの場合
            fire.setAngle(-90);
            fire.setVelocityX(this.speed);
        } else {
            // プレイヤーが左向きの場合
            fire.setAngle(90);
            fire.setVelocityX(-this.speed);
        }
    }
}

export default FireGroup;
