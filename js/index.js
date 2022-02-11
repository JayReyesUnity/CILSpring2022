class Game exends Phaser.Scene {
  constructor() {
    super();
  }
  function preload ()
    {
        this.load.setBaseURL('');

        this.load.image('sky', 'http://labs.phaser.io/assets/skies/space3.png');
        this.load.image('logo', './assets/Self Portrait.png');
        this.load.image('red', 'http://labs.phaser.io/assets/particles/red.png');
    }

    function create ()
    {
        this.add.image(400, 300, 'sky');

        var particles = this.add.particles('red');

        var emitter = particles.createEmitter({
            speed: 100,
            scale: { start: 1, end: 0 },
            blendMode: 'ADD'
        });

        var logo = this.physics.add.image(400, 100, 'logo');

        logo.setVelocity(100, 200);
        logo.setBounce(1, 1);
        logo.setCollideWorldBounds(true);

        emitter.startFollow(logo);
    }
}
const config = {
    type: Phaser.AUTO,
    width: 1000,
    height: 800,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 200 }
          
        }
    },
    scene: [Game]
};
const game = new Phaser.Game(config);
