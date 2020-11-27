import Phaser from "phaser";

// Phaser.GameObjects.Groupを継承したEnemyGroupクラス
class EnemyGroup extends Phaser.GameObjects.Group {
    constructor(scene) {
        // 親クラスを呼び出す
        super(scene);
        // シーンをプロパティとして代入
        this.scene = scene;
        // 作成する敵の最大数
        this.maxCount = 5;
        // 現在作成した敵の数
        this.count = 0;
        
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
        // ランダムなX座標
        const x = Phaser.Math.RND.between(50, 750);
        // ランダムなY座標
        const y = Phaser.Math.RND.between(50, 550);
        // 敵の作成
        const enemy = this.create(x, y, "enemy");
        // 表示サイズの変更
        enemy.setDisplaySize(100,100);
        // 回転角度の初期値
        enemy.angle = 0;
        // 作成した敵の数を加算
        this.count++;
    }
    
    update() {
        // 敵グループに所属している敵を配列で取得
        const enemies = this.getChildren();
        // それぞれの敵が回転する
        enemies.forEach((enemy)=>{
            enemy.angle++;
            enemy.setAngle(enemy.angle);
        });
    }
}

export default EnemyGroup;
