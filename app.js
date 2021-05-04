function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      currentRound: 0,
    };
  },
  computed: {
    monsterHealthBar() {
      return { width: this.monsterHealth + "%" };
    },
    playerHealthBar() {
      return { width: this.playerHealth + "%" };
    },
    isSpecialAttackAvailable() {
      console.log(this.currentRound % 3);
      return this.currentRound % 3 !== 0;
    },
  },
  methods: {
    attackMonster() {
      const damage = getRandomValue(5, 12);
      this.monsterHealth -= damage;
      this.attackPlayer();
    },
    attackPlayer() {
      const damage = getRandomValue(5, 15);
      this.currentRound++;
      this.playerHealth -= damage;
    },
    specialAttackMonster() {
      const damage = getRandomValue(10, 20);
      this.monsterHealth -= damage;
      this.attackPlayer();
    },
  },
});
app.mount("#game");
