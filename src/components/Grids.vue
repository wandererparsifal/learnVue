<template>
  <div class="grids">
    <el-row :style="styleElRow" :gutter="20" type="flex" v-for="(rowArr, index) in gridItems" :key="index"
            justify="center">
      <el-col :span="6" v-for="item in rowArr" :key="item.id">
        <el-card :body-style="{ padding: '0px' }">
          <img v-on:click="clickCard(item.id)"
               :src="item.img"
               class="image">
          <div style="padding: 14px;">
            <span>好吃的汉堡</span>
            <div class="bottom clearfix">
              <time class="time">{{ item.date }}</time>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import axios from 'axios';
  import EventBus from '../eventBus';

  export default {
    name: 'grids',
    methods: {
      clickCard(number) {
        console.log(number);
        // this.$router.push('/detail');
        this.$router.push({ name: 'Detail', params: { detailNumber: number } });
      },
      cancel() {},
    },
    data() {
      return {
        styleElRow: {
          width: '0px',
          padding: '3px',
        },
        gridItems: [],
      };
    },
    created() {
      const size = [];
      size.push(window.innerWidth - 20);
      size.push('px');
      this.styleElRow.width = size.join('');

      const CancelToken = axios.CancelToken;
      axios.get('/api/grids?from=0&to=9', {
        cancelToken: new CancelToken((c) => {
          // executor 函数接收一个 cancel 函数作为参数
          this.cancel = c;
        }),
      })
        .then((response) => {
          const data = response.data;
          if (data instanceof Array) {
            this.gridItems = response.data;
          }
        })
        .catch((response) => {
          console.log(response);
        });
      EventBus.$on('event_page_changed', (page) => {
        const fromNum = (page - 1) * 10;
        const toNum = fromNum + 9;
        const str = [];
        str.push('/api/grids?from=');
        str.push(fromNum);
        str.push('&to=');
        str.push(toNum);
        this.cancel();
        axios.get(str.join(''), {
          cancelToken: new CancelToken((c) => {
            // executor 函数接收一个 cancel 函数作为参数
            this.cancel = c;
          }),
        })
          .then((response) => {
            const data = response.data;
            if (data instanceof Array) {
              this.gridItems = response.data;
            }
          })
          .catch((response) => {
            console.log(response);
          });
      });
    },
    mounted() {
      window.onresize = () => {
        const size = [];
        size.push(window.innerWidth - 20);
        size.push('px');
        this.styleElRow.width = size.join('');
      };
    },
  };
</script>

<style>
  .time {
    font-size: 13px;
    color: #999;
  }

  .bottom {
    margin-top: 12px;
    line-height: 12px;
  }

  .image {
    cursor: pointer;
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: '';
  }

  .clearfix:after {
    clear: both
  }
</style>
