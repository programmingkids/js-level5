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
        
        
        // 地面の作成
        
        
        // フロアの作成
        
        
        // プレイヤーの作成
        
        
        // 敵グループの作成
        
        
        // ゲームオーバーフラグ
        
        
        // 宝箱グループの作成
        
        
        // スコアテキストの表示
        
        
        // 衝突処理の作成
        
    }
    
    update() {
        
        
        
        // プレイヤーの処理を呼び出す
        
    }
    
    createGround() {
        // 地面を作成する。タイルスプライトで最下部に敷き詰める
        
        // 地面をシーンに追加
        
        // 地面を物理エンジンの対象に追加
        
    }

    createFloor() {
        // フロアグループの作成
        
    }
    
    createPlayer() {
        // プレイヤーの作成
        
        // プレイヤーをシーンに追加
        
        // プレイヤーを物理エンジンの対象に追加
        
    }
    
    createEnemyGroup() {
        
    }
    
    setCollider() {
        // 各種衝突処理の追加
        
        
        
    }
    
    hitEnemy(player, enemy) {
        // プレイヤーと敵が衝突した場合
        
    }
    
    gameOver() {
        // ゲームオーバーにして、updateの動作停止
        
        // 物理エンジン停止
        
        // プレイヤーを赤色にする
        
        // プレイヤーのアニメーション停止
        
        // 敵作成のタイマー停止
        
        // 宝箱作成のタイマー停止
        
    }
    
    hitFire(fire, enemy) {
        // ファイヤーと敵が衝突した場合
        
        
        // 敵の数を減算する
        
    }
    
    createTreasureGroup() {
        // 宝箱グループの作成
        
    }
    
    hitTreasure(player, treasure) {
        // プレイヤーと宝箱が衝突した場合
        
        // スコアを「5」加算
        
    }
    
    createScoreText() {
        // スコアを表示するテキストの作成
        
        
        
    }
}

export default MainScene;
