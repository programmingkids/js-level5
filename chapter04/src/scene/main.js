import Phaser from "phaser";
// EnemyGroupクラスの読み込み
import EnemyGroup  from './../group/enemyGroup';
// Mapクラスの読み込み
import Map from './../other/map';

// 「Phaser.Scene」を継承した「MainScene」クラスの作成
class MainScene extends Phaser.Scene {
    constructor() {
        // シーンの名前を設定
        super({key : "MainScene"});
    }
    
    create() {
        // マップの表示
        this.map = new Map(this);
        // 敵グループの作成
        this.enemyGroup = new EnemyGroup(this);
    }
    
    update() {
        // 敵グループの動き
        this.enemyGroup.update();
    }
}

export default MainScene;
