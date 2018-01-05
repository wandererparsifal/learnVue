<template>
  <waterfall
    :align="align"
    :line-gap="600"
    :min-line-gap="180"
    :max-line-gap="220"
    :watch="items"
    @reflowed="reflowed"
    ref="waterfall">
    <waterfall-slot
      v-for="(item, index) in items"
      :width="item.width"
      :height="item.height"
      :order="index"
      :key="item.index"
      move-class="item-move">
      <div class="item" :style="item.style" :index="item.index" @click="shuffle"></div>
    </waterfall-slot>
  </waterfall>
</template>

<script>
  import Waterfall from 'vue-waterfall/lib/waterfall';
  import WaterfallSlot from 'vue-waterfall/lib/waterfall-slot';

  function generateRandomItems(count) {
    const colors = [
      'rgba(21,174,103,.5)',
      'rgba(245,163,59,.5)',
      'rgba(255,230,135,.5)',
      'rgba(194,217,78,.5)',
      'rgba(195,123,177,.5)',
      'rgba(125,205,244,.5)',
    ];
    const items = [];
    for (let i = 0; i < count; i += 1) {
      items[i] = {
        index: i,
        style: {
          background: colors[parseInt(Math.random() * colors.length, 10)],
        },
        width: 300 + parseInt(Math.random() * 100, 10),
        height: 200 + parseInt(Math.random() * 100, 10),
      };
    }
    return items;
  }

  export default {
    components: { Waterfall, WaterfallSlot },
    name: 'image-waterfall',
    data() {
      return {
        line: 'h',
        items: generateRandomItems(100),
        isBusy: false,
      };
    },
    methods: {
      addItems() {
        if (!this.isBusy && this.items.length < 500) {
          this.isBusy = true;
          this.items.push(generateRandomItems(20));
        }
      },
      shuffle() {
        this.items.sort(() => Math.random() - 0.5);
      },
      reflowed() {
        this.isBusy = false;
      },
    },
  };
</script>

<style scoped>
  body {
    margin: 5px;
    font-family: Helvetica, sans-serif;
  }

  .item {
    position: absolute;
    top: 5px;
    left: 5px;
    right: 5px;
    bottom: 5px;
    font-size: 1.2em;
    color: rgb(0, 158, 107);
  }

  .item:after {
    content: attr(index);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
  }

  .wf-transition {
    transition: opacity .3s ease;
    -webkit-transition: opacity .3s ease;
  }

  .wf-enter {
    opacity: 0;
  }

  .item-move {
    transition: all .5s cubic-bezier(.55, 0, .1, 1);
    -webkit-transition: all .5s cubic-bezier(.55, 0, .1, 1);
  }
</style>
