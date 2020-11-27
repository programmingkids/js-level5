import Phaser from "phaser";
// 画像の読み込み
import player from './../assets/images/player4.png';
import ground from './../assets/images/ground.png';
import ground2 from './../assets/images/ground2.png';

// 「Phaser.Scene」を継承した「LoadScene」クラスの作成
class LoadScene extends Phaser.Scene {
    constructor() {
        // シーンの名前を設定
        super({key : "LoadScene"});
    }
    
    preload() {
        // 画像をPhaserに取り込む
        this.load.image('ground', ground);
        this.load.image('ground2', ground2);
        // スプライト画像としてPhaserに取り込む
        this.load.spritesheet('player', player, { frameWidth: 32, frameHeight: 32 });
    }
    
    create() {
        // MainSceneを起動
        this.scene.start("MainScene");
    }
}

export default LoadScene;
