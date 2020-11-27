import Phaser from "phaser";
import Player from './../sprite/player';
import FloorGroup from './../group/floorGroup';
import EnemyGroup from './../group/enemyGroup';
import TreasureGroup from './../group/treasureGroup';
import ScoreText from './../other/scoreText';

class MainScene extends Phaser.Scene {
    constructor() {
        // シーンの名前を設定
        super({key : "MainScene"});
    }
    
    create() {
        // 背景色の設定
        this.cameras.main.setBackgroundColor('#F5DEB3');
        
        // 地面の作成
        this.createGround();
        
        // フロアの作成
        this.createFloor();
        
        // プレイヤーの作成
        this.createPlayer();
        
        // 敵グループの作成
        this.createEnemyGroup();
        
        // ゲームオーバーフラグ
        this.isGameOver = false;
        
        // 宝石グループの作成
        this.createTreasureGroup();
        
        // スコアテキストの表示
        this.createScoreText();
        
        // 衝突処理の作成
        this.setCollider();
    }
    
    update() {
        if( this.isGameOver ) {
            return;
        }
        // プレイヤーの処理を呼び出す
        this.player.update();
    }
    
    createGround() {
        // 地面を作成する。タイルスプライトで最下部に敷き詰める
        this.ground = new Phaser.GameObjects.TileSprite(this, 400, 580, 800, 40, 'ground');
        // 地面をシーンに追加
        this.add.existing(this.ground);
        // 地面を物理エンジンの対象に追加
        this.physics.add.existing(this.ground, true);
    }

    createFloor() {
        // フロアグループの作成
        this.floorGroup = new FloorGroup(this);
    }
    
    createPlayer() {
        // プレイヤーの作成
        this.player = new Player(this, 100, 500, 'player');
        // プレイヤーをシーンに追加
        this.add.existing(this.player);
        // プレイヤーを物理エンジンの対象に追加
        this.physics.add.existing(this.player);
    }
    
    createEnemyGroup() {
        this.enemyGroup = new EnemyGroup(this);
    }
    
    setCollider() {
        // 各種衝突処理の追加
        this.player.setCollideWorldBounds(true);
        this.physics.add.collider(this.player, this.ground);
        this.physics.add.collider(this.player, this.floorGroup);
        
        this.physics.add.collider(this.enemyGroup, this.ground);
        this.physics.add.collider(this.enemyGroup, this.floorGroup);
        
        this.physics.add.overlap(this.player, this.enemyGroup, this.hitEnemy, null, this);
        this.physics.add.overlap(this.player.fireGroup, this.enemyGroup, this.hitFire, null, this);
        
        this.physics.add.collider(this.treasureGroup, this.ground);
        this.physics.add.collider(this.treasureGroup, this.floorGroup);
        this.physics.add.overlap(this.player, this.treasureGroup, this.hitTreasure, null, this);
    }
    
    hitEnemy(player, enemy) {
        // プレイヤーと敵が衝突した場合
        this.gameOver();
    }
    
    gameOver() {
        // ゲームオーバーにして、updateの動作停止
        this.isGameOver = true;
        // 物理エンジン停止
        this.physics.pause();
        // プレイヤーを赤色にする
        this.player.setTint("0xff0000");
        // プレイヤーのアニメーション停止
        this.player.anims.stop();
        // 敵作成のタイマー停止
        this.enemyGroup.timer.remove();
        // 宝箱作成のタイマー停止
        this.treasureGroup.timer.remove();
    }
    
    hitFire(fire, enemy) {
        // ファイヤーと敵が衝突した場合
        fire.destroy();
        enemy.destroy();
        // 敵の数を減算する
        this.enemyGroup.count--;
    }
    
    createTreasureGroup() {
        // 宝箱グループの作成
        this.treasureGroup = new TreasureGroup(this);
    }
    
    hitTreasure(player, treasure) {
        // プレイヤーと宝箱が衝突した場合
        treasure.destroy();
        // スコアを「5」加算
        this.scoreText.scoreUp(5);
    }
    
    createScoreText() {
        // スコアを表示するテキストの作成
        const config = {
            font: '28px Open Sans',
            fill: '#ff0000'
        };
        this.scoreText = new ScoreText(this, 600, 20, "", config);
        this.add.existing(this.scoreText);
    }
}

export default MainScene;
