import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// 如果编辑器提示 path 模块找不到，则可以安装一下 @types/node -> npm i @types/node -D
import { resolve } from 'path'

import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		Components({
			resolvers: [ElementPlusResolver()]
		})
	],
	resolve: {
		alias: {
			'@': resolve(__dirname, 'src') // 设置 `@` 指向 `src` 目录
		}
	},
	base: './', // 设置打包路径
	css: {
		// css预处理
		preprocessorOptions: {
			scss: {
				/*
				引入var.scss全局预定义变量，
				如果引入多个文件，
				可以使用
				'@import "@/assets/scss/globalVariable1.scss";@import "@/assets/scss/globalVariable2.scss";'
				这种格式
				 */
				additionalData: '@import "@/assets/scss/index.scss";'
			}
		}
	},
	server: {
		host: '10.3.20.65',
		port: 4000, // 设置服务启动端口号
		open: true, // 设置服务启动时是否自动打开浏览器
		overlay: true,
		cors: true // 允许跨域

		// 设置代理，根据我们项目实际情况配置
		// proxy: {
		//   '/api': {
		//     target: 'http://xxx.xxx.xxx.xxx:8000',
		//     changeOrigin: true,
		//     secure: false,
		//     rewrite: (path) => path.replace('/api/', '/')
		//   }
		// }
	}
})
