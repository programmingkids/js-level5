import Phaser from "phaser";
// Robotクラスを読み込む
import Robot from './../sprite/robot';
// Enemyクラスを読み込む
import Enemy from './../sprite/enemy';

// 「Phaser.Scene」を継承した「MainScene」クラスの作成
class MainScene extends Phaser.Scene {
    constructor() {
        // シーンの名前を設定
        super({key : "MainScene"});
    }
    
    create() {
        // 画像を表示
        this.add.image(400, 300, 'sky');
        // Robotクラスを作成
        this.robot = new Robot(this, 400, 50, 'robot');
        // シーンにロボットを追加
        this.add.existing(this.robot);
        // Enemyクラスを作成
        this.enemy = new Enemy(this,400, 300, 'enemy');
        // シーンにエネミーを追加
        this.add.existing(this.enemy);
    }
    
    update() {
        // ロボットの動き
        this.robot.update();
        // エネミーの動き
        this.enemy.update();
    }
}

export default MainScene;
