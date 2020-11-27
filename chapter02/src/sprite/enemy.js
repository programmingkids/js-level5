import Phaser from "phaser";

// 「Phaser.GameObjects.Image」を継承した「Enemy」クラスの作成
class Enemy extends Phaser.GameObjects.Image {
    constructor(scene, x, y, image) {
        // 親クラスを呼び出す
        super(scene, x, y, image);
        // 表示サイズの変更
        this.setDisplaySize(100, 100);
        // サイズの変更量の設定
        this.dsize = 2;
        // サイズ
        this.size = 100;
    }
    
    update() {
        // 150より大きくなったら
        if( this.size > 150 ) {
            this.dsize = -this.dsize;
        }
        // 100より小さくなったら
        if( this.size < 100 ) {
            this.dsize = -this.dsize;
        }
        // サイズに「this.dsize」を加算
        this.size += this.dsize;
        // 表示サイズを変更する
        this.setDisplaySize(this.size, this.size);
    }
}

export default Enemy;
