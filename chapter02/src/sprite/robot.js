import Phaser from "phaser";

// 「Phaser.GameObjects.Image」を継承した「Robot」クラスの作成
class Robot extends Phaser.GameObjects.Image {
    constructor(scene, x, y, image) {
        // 親クラスを呼び出す
        super(scene, x, y, image);
        // 表示サイズの変更
        this.setDisplaySize(100, 100);
        // 移動量の設定
        this.dx = 2;
    }
    
    update() {
        // 右端に到達したら
        if( this.x > 750 ) {
            this.dx = -this.dx;
        }
        // 左端に到達したら
        if( this.x < 50 ) {
            this.dx = -this.dx;
        }
        // X座標に「this.dx」を加算して、移動する
        this.x += this.dx;
    }
}

export default Robot;
