<script lang="ts">
import { defineComponent, reactive, computed, toRefs, ref, onMounted } from 'vue'
// import { useStore } from '../store'
import { useStore } from 'vuex'
import axios from '@/utils/axios'
// import axios from '../utils/axios'

export default defineComponent({
	name: 'HomeIndex',

	setup() {
		const userInfo: any = ref({})
		const store = useStore()
		const reactiveData = reactive({
			count: computed(() => store.state.count)
		})

		const double = () => {
			store.commit('numFactoryModule/DOUBLE_COUNT')
		}

		const getUserInfo = () => {
			axios
				.get('/users/XPoet', {
					params: {
						isloading: true
					}
				})
				.then((response: any) => {
					userInfo.value = response.data
				})
			// axios({
			//   url:'/users/XPoet',
			//   method: 'get',
			//   data:{isLoading:true}
			// })
			//   .then((response:any) => {
			//     console.log('response: ', response.data)
			//     userInfo.value = response.data
			//   })
			//   .catch((error:any) => {
			//     console.error(error)
			//   })
		}
		onMounted(() => {
			getUserInfo()
		})

		return {
			...toRefs(reactiveData),
			userInfo,
			double
		}
	},
	data() {
		return {
			test: 2
		}
	},
	mounted() {
		// this.getInfo()
		const te = new Object()
		if (te == null) {
			console.log('-----')
		}
	},
	methods: {
		add() {
			this.test += 1
			console.log('---------this.test--', this.test, this.count.value)
		}
		// getInfo() {
		// 	this.$axios.get('/users/XPoet', { isLoading: true }).then((response: any) => {
		// 			console.log('response: ', response.data)
		// 		})
		// 		.catch((error: any) => {
		// 			console.error(error)
		// 		})
		// }
	}
})
</script>

<template>
	<p @click="add">sdf{{ test }}</p>
	<p @click="add" class="test-c">sdf{{ count }}</p>
	<el-button type="primary">ddd</el-button>
	<img :src="userInfo.avatar_url" class="user-head" />
	<!-- <p @click="add">sdf{{count}}</p> -->
	<HelloWorld msg="Hello Vue 3 + TypeScript + Vite"></HelloWorld>
</template>

<style lang="scss" scoped>
.user-head {
	width: 100px;
	height: 100px;
	border-radius: 100px;
}
.test-c {
	color: $color;
}

label {
	margin: 0 0.5em;
	font-weight: bold;
}

code {
	background-color: #eee;
	padding: 2px 4px;
	border-radius: 4px;
	color: #304455;
}
</style>
