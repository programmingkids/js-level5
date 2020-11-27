import Phaser from "phaser";

class ScoreText extends Phaser.GameObjects.Text {
    constructor(scene, x, y, text, config) {
        super(scene, x , y, text, config);
        
        this.scene = scene;
        this.score = 0;
        
        this.showScore();
    }
    
    showScore() {
        this.setText("スコア:" + this.score);
    }
    
    scoreUp(score) {
        this.score += score;
        this.showScore();
    }
}

export default ScoreText;
