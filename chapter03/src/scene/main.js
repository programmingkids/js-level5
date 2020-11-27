import Phaser from "phaser";

// Mapクラスの読み込み
import Map from './../other/map';
// Playerクラスの読み込み
import Player from './../sprite/player';

// 「Phaser.Scene」を継承した「MainScene」クラスの作成
class MainScene extends Phaser.Scene {
    constructor() {
        // シーンの名前を設定
        super({key : "MainScene"});
    }
    
    create() {
        // マップの表示
        this.map = new Map(this);
        // プレイヤーのスプライトを作成
        this.player = new Player(this, 400, 300, 'player');
        // プレイヤーをシーンに追加
        this.add.existing(this.player);
    }
    
    update() {
        // Playerクラスの動き
        this.player.update();
    }
}

export default MainScene;
