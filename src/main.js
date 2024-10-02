import { createApp } from 'vue'
import Cookies from 'js-cookie'

// Element Plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import locale from 'element-plus/es/locale/lang/zh-cn'

// 样式
import '@/assets/styles/index.scss'

// 组件
import App from './App'
import store from './store'
import router from './router'
import directive from './directive'
import plugins from './plugins'
import { download } from '@/utils/request'

// svg图标
import 'virtual:svg-icons-register'
import SvgIcon from '@/components/SvgIcon'
import elementIcons from '@/components/SvgIcon/svgicon'

// 权限控制
import './permission'

// 工具函数
import { useDict } from '@/utils/dict'
import { parseTime, resetForm, addDateRange, handleTree, selectDictLabel, selectDictLabels } from '@/utils/ruoyi'

// 组件
import Pagination from '@/components/Pagination'
import RightToolbar from '@/components/RightToolbar'
import Editor from "@/components/Editor"
import FileUpload from "@/components/FileUpload"
import ImageUpload from "@/components/ImageUpload"
import ImagePreview from "@/components/ImagePreview"
import TreeSelect from '@/components/TreeSelect'
import DictTag from '@/components/DictTag'


const app = createApp(App)

// 全局方法挂载
app.config.globalProperties.useDict = useDict
app.config.globalProperties.download = download
app.config.globalProperties.parseTime = parseTime
app.config.globalProperties.resetForm = resetForm
app.config.globalProperties.handleTree = handleTree
app.config.globalProperties.addDateRange = addDateRange
app.config.globalProperties.selectDictLabel = selectDictLabel
app.config.globalProperties.selectDictLabels = selectDictLabels

// 全局组件挂载
app.component('DictTag', DictTag)
app.component('Pagination', Pagination)
app.component('TreeSelect', TreeSelect)
app.component('FileUpload', FileUpload)
app.component('ImageUpload', ImageUpload)
app.component('ImagePreview', ImagePreview)
app.component('RightToolbar', RightToolbar)
app.component('Editor', Editor)
app.component('svg-icon', SvgIcon)

app.use(router)
app.use(store)
app.use(plugins)
app.use(elementIcons)

directive(app)

// 使用element-plus 并且设置全局的大小
app.use(ElementPlus, {
  locale: locale,
  // 支持 large、default、small
  size: Cookies.get('size') || 'default'
})

app.mount('#app')
