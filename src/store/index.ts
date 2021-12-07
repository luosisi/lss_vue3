const defaultState = {
	count: 0
}

import { InjectionKey } from 'vue'
// import { createStore, Store, useStore as baseUseStore } from 'vuex'
import { createStore, Store } from 'vuex'
// import RootStateTypes, { AllStateTypes } from './types'

// import numFactoryModule from './modules/NumFactory'

export const store = createStore({
	// state: {
	//   return defaultState
	// },
	state() {
		return defaultState
	},
	getters: {
		double(state: typeof defaultState) {
			return 2 * state.count
		}
	},
	mutations: {
		increment(state: typeof defaultState) {
			state.count++
		}
	},
	actions: {
		increment(context) {
			context.commit('increment')
		}
	}
	// ,
	// modules: {
	//   numFactoryModule
	// }
})

// export const key: InjectionKey<Store<RootStateTypes>> = Symbol('vue-store')

// export function useStore<T = AllStateTypes>() {
//   return baseUseStore<T>(key)
// }
// export function useStore() {
//   return useStore()
// }
