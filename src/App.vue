<template>
  <div>
    <v-header :seller="seller"></v-header>
    <div class="tab">
      <div class="tab-item">
        <router-link to="/">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings">评论</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>
    <keep-alive>
      <router-view :seller="seller"></router-view>
    </keep-alive>
  </div>
</template>
<script type="text/ecmascript-6">
  /* eslint-disable no-trailing-spaces */
  import {urlParse} from './common/js/util';
  import VHeader from './components/header/header';
  
  const ERR_OK = 0;
  
  export default {
    data() {
      return {
        seller: {
          id: (() => {
            let queryParam = urlParse();
            return queryParam.id;
          })()
        }
      };
    },
    created() {
      this.$http.get('/api/seller?id=' + this.seller.id).then((response) => {
        response = response.body;
        if (response.errno === ERR_OK) {
          this.seller = Object.assign({}, this.seller, response.data);
          console.log(this.seller.id);
        }
      });
    },
    components: {
      VHeader
    }
  };
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .tab
    display: flex
    width: 100%
    .tab-item
      flex: 1;
      text-align: center
      font-size: 12px
      line-height: 40px
      height: 40px
      color: #333
      .router-link-exact-active
        color: red
</style>
