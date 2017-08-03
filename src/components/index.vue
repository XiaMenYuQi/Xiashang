<template>
    <div>
      <headerCom></headerCom>

      <router-view></router-view>

      <footerBox></footerBox>

    </div>
</template>

<script>
  import headerCom from './common/header.vue'
  import footerBox from './common/footerBox.vue'


	export default {
		name: 'index',
    components: {
      headerCom,footerBox
    },
		data () {
			return {}
		},
    mounted(){

    }
	}
</script>
