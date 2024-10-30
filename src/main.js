import { Boot } from "./scenes/Boot";
import { Preloader } from "./scenes/Preloader";

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  parent: "game-container",
  backgroundColor: "#028af8",
  scene: [Boot, Preloader],
};

export default new Phaser.Game(config);
