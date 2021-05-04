function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
    };
  },
  computed: {
    monsterHealthBar() {
      return { width: this.monsterHealth + "%" };
    },
    playerHealthBar() {
      return { width: this.playerHealth + "%" };
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
      this.playerHealth -= damage;
    },
  },
});
app.mount("#game");
