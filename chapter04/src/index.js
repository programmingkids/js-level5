import Phaser from "phaser";
import Game from './scene/game';
import LoadScene from './scene/load';
import MainScene from './scene/main';

// 設定情報の連想配列
const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 }
        }
    },
};

// Gameオブジェクト作成
const game = new Game(config);
// シーンの追加
game.scene.add("LoadScene",LoadScene);
game.scene.add("MainScene", MainScene);
// 最初にLoadSceneを起動
game.scene.start("LoadScene");
