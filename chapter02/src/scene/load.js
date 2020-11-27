import Phaser from "phaser";
// 画像の読み込み
import sky from './../assets/images/sky.jpg';
import robot from './../assets/images/robot.png';
import enemy from './../assets/images/enemy05.png';

// 「Phaser.Scene」を継承した「LoadScene」クラスの作成
class LoadScene extends Phaser.Scene {
    constructor() {
        // シーンの名前を設定
        super({key : "LoadScene"});
    }
    
    preload() {
        // 画像をPhaserに取り込む
        this.load.image('sky', sky);
        this.load.image('robot', robot);
        this.load.image('enemy', enemy);
    }

    create() {
        // MainSceneを起動
        this.scene.start("MainScene");
    }
}

export default LoadScene;
