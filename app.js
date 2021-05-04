function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      currentRound: 0,
      winner: null,
    };
  },
  computed: {
    monsterHealthBar() {
      if (this.monsterHealth <= 0) {
        return "width: 0%";
      }
      return { width: this.monsterHealth + "%" };
    },
    playerHealthBar() {
      if (this.playerHealth <= 0) {
        return "width: 0%";
      }
      return { width: this.playerHealth + "%" };
    },
    isSpecialAttackAvailable() {
      return this.currentRound % 3 !== 0;
    },
  },
  watch: {
    playerHealth(value) {
      if (value <= 0 && this.monsterHealth <= 0) {
        this.winner = "draw";
      } else if (value <= 0) {
        this.winner = "monster";
      }
    },
    monsterHealth(value) {
      if (value <= 0 && this.monsterHealth <= 0) {
        this.winner = "draw";
      } else if (value <= 0) {
        this.winner = "player";
      }
    },
  },
  methods: {
    startGame() {
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.winner = null;
      this.currentRound = 0;
    },
    attackMonster() {
      const damage = getRandomValue(5, 12);
      this.monsterHealth -= damage;
      this.attackPlayer();
    },
    attackPlayer() {
      const damage = getRandomValue(8, 15);
      this.currentRound++;
      this.playerHealth -= damage;
    },
    specialAttackMonster() {
      const damage = getRandomValue(10, 20);
      this.monsterHealth -= damage;
      this.attackPlayer();
    },
    healPlayer() {
      const points = getRandomValue(8, 20);
      if (this.playerHealth + points > 100) {
        this.playerHealth = 100;
      } else {
        this.playerHealth += points;
      }
      this.attackPlayer();
    },
    surrender() {
      this.winner = "monster";
    },
  },
});
app.mount("#game");
