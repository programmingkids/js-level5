import Phaser from "phaser";
import Player from './../sprite/player';
import FloorGroup from './../group/floorGroup';

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
    
    setCollider() {
        // 各種衝突処理の追加
        
    }
}

export default MainScene;
