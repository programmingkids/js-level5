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
        this.cameras.main.setBackgroundColor('#99CCFF');
        
        // 地面の作成
        this.createGround();
        
        // フロアの作成
        this.createFloor();
        
        // プレイヤーの作成
        this.createPlayer();
        
        // 衝突処理の作成
        this.setCollider();
    }
    
    update() {
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
    
    setCollider() {
        // 各種衝突処理の追加
        this.player.setCollideWorldBounds(true);
        this.physics.add.collider(this.player, this.ground);
        this.physics.add.collider(this.player, this.floorGroup);
    }
}

export default MainScene;
