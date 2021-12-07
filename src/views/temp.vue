<script setup lang="ts">
import HelloWorld from '@/components/HelloWorld.vue'
import { defineComponent, reactive, computed, toRefs, ref } from 'vue'
import { useStore } from '../store'

defineProps<{ msg: string }>()

const count = ref(0)
// export default defineComponent({
//   name: 'index',
//   setup() {
//     const store = useStore()
//     const reactiveData = reactive({
//       text: computed(() => store.state.text),
//       count: computed(() => store.state.numFactoryModule.count)
//     })
//     const double = () => {
//       store.commit('numFactoryModule/DOUBLE_COUNT')
//     }
//     return {
//       ...toRefs(reactiveData),
//       double
//     }

//   }
// })
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
	setup() {},
	data() {
		return {
			dd: '123'
		}
	}
})
</script>
//
<script>
// export default {
//   data() {
//     return {
//       test: '123'
//     }
//   }
// }
//
</script>

<template>
	<p @click="add">sdf{{ test }}</p>
	<!-- <p @click="add">sdf{{count}}</p> -->
	<HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
</template>

<style scoped>
a {
	color: #42b983;
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
