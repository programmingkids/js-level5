import Phaser from "phaser";
// 画像の読み込み
import player from './../assets/images/player3.png';
import ground from './../assets/images/ground.png';
import ground2 from './../assets/images/ground2.png';
import enemy01 from './../assets/images/enemy01.png';
import enemy02 from './../assets/images/enemy02.png';
import enemy03 from './../assets/images/enemy03.png';
import enemy04 from './../assets/images/enemy04.png';
import enemy05 from './../assets/images/enemy05.png';
import fire from './../assets/images/fire.png';
import treasure from './../assets/images/treasure01.png';

class LoadScene extends Phaser.Scene {
    constructor() {
        super({key : "LoadScene"});
    }
    
    preload() {
        // 画像をPhaserに取り込む
        this.load.image('ground', ground);
        this.load.image('ground2', ground2);
        // スプライト画像としてPhaserに取り込む
        this.load.spritesheet('player', player, { frameWidth: 32, frameHeight: 32 });

        // 画像をPhaserに取り込む
        this.load.image('enemy01', enemy01);
        this.load.image('enemy02', enemy02);
        this.load.image('enemy03', enemy03);
        this.load.image('enemy04', enemy04);
        this.load.image('enemy05', enemy05);
        this.load.image('fire', fire);
        this.load.image('treasure', treasure);
    }
    
    create() {
        // MainSceneを起動
        this.scene.start("MainScene");
    }
}

export default LoadScene;
