import Phaser from "phaser";

class EnemyGroup extends Phaser.Physics.Arcade.Group {
    constructor(scene) {
        // 親クラスを呼び出す
        super(scene.physics.world, scene);
        // シーンをプロパティとして代入
        this.scene = scene;
        // 作成する敵の最大数
        this.maxCount = 5;
        // 現在作成した敵の数
        this.count = 0;
        // 敵画像の配列
        this.enemies = ['enemy01','enemy02','enemy03', 'enemy04', 'enemy05'];
        // 敵の加速度の配列
        this.speeds = [-200, -100, 100, 200];
        
        // タイマーの起動
        this.timer = this.scene.time.addEvent({
            delay : 1000,
            callback : this.createEnemy,
            loop: true,
            callbackScope : this,
        });
    }
    
    createEnemy() {
        // 現在の敵の数が最大数と同数の場合
        if( this.count >= this.maxCount ) {
            // 敵を作成しない
            return;
        }
        // X座標はランダムな値
        const x = Phaser.Math.RND.between(50, 750);
        // Y座標は固定値
        const y = 50;
        // 画像はランダムに選択
        const image = Phaser.Math.RND.pick(this.enemies);
        // 敵の作成
        const enemy = this.create(x, y, image);
        // 表示サイズの変更
        enemy.setDisplaySize(50, 50);
        // 敵がゲーム空間と衝突
        enemy.setCollideWorldBounds(true);
        // 敵に反発力を設定
        enemy.setBounce(0.8);
        // X方向の加速度はランダムに選択
        const speed = Phaser.Math.RND.pick(this.speeds);
        // 敵に加速度の設定
        enemy.setVelocity(speed, 50);
        // 敵の数をカウントアップ
        this.count++;
    }
}

export default EnemyGroup;
