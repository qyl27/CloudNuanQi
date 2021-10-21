<template>
  <p>
    取暖费：￥ {{charge.toFixed(2)}} <br />
    室内温度：{{temperature.toFixed(2)}} ℃
  </p>
  <button v-on:click="onCharge">交取暖费</button>
  <span> | </span>
  <button v-on:click="toggleEnabled">{{text}}</button>
</template>

<script>
export default {
  name: "HeatingCharge",
  data: function () {
    return {
      text: "开始供暖",
      enabled: false,
      temperature: -15,
      charge: 0.0,
      has_alerted_35: false,
      has_alerted_nega100: false
    }
  },
  methods: {
    onCharge: function (event) {
      this.charge += 100;
    },
    toggleEnabled: function (event) {
      this.enabled = !this.enabled;

      if (this.enabled) {
        if (this.charge - 0.2 > 0) {
          this.text = "停止供暖";
          alert("供暖已开始，抱住你的设备就能感受到温暖啦ww");
          return;
        } else {
          alert("请缴纳取暖费！");
        }
      }
      this.stop();
    },
    stop() {
      this.enabled = false;
      this.text = "开始供暖";
    }
  },
  mounted() {
    setInterval(function () {
      if (this.enabled) {
        if (this.charge - 0.2 >= 0) {
          this.temperature += 0.01;
          this.charge -=0.2;
        } else {
          this.stop();
          return;
        }
      } else {
        if (this.temperature >= -273.15) {
          this.temperature -= 0.005;
          return;
        }
      }

      if (this.enabled && this.temperature.toFixed(2) === "35.00") {
        alert("暖气已经比电脑还热了。");
      }

      if (this.enabled && this.temperature.toFixed(2) === "60.00") {
        let result = confirm("再这样子下去就要被烧熟啦！还要继续么？");
        if (!result) {
          this.stop();
        }
      }

      if (this.enabled && this.temperature.toFixed(2) === "100.00") {
        alert("大冬天的，一定要多喝开水。");
      }
    }.bind(this), 1000);
  }
}
</script>

<style scoped>

</style>