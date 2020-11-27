import Phaser from "phaser";
// 画像の読み込み
import map from './../assets/images/map01.png';
import player from './../assets/images/player3.png';

// 「Phaser.Scene」を継承した「LoadScene」クラスの作成
class LoadScene extends Phaser.Scene {
    constructor() {
        // シーンの名前を設定
        super({key : "LoadScene"});
    }
    
    preload() {
        // 画像をPhaserに取り込む
        this.load.image('map', map);
        this.load.spritesheet('player', player, { frameWidth: 32, frameHeight: 32 });
    }

    create() {
        // MainSceneを起動
        this.scene.start("MainScene");
    }
}

export default LoadScene;
