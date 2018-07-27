import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
// import Finance from '@/components/Finance'
import SmallSupermarket from '@/components/Finance/SmallSupermarket'
import SmallSupermarketDetail from '@/components/Finance/SmallSupermarketDetail'
import SmallSupermarketApply from '@/components/Finance/SmallSupermarketApply'
import CreditManager from '@/components/Finance/CreditManager'
import BankLoan from '@/components/Finance/BankLoan'
import CardSupermarket from '@/components/Finance/CardSupermarket'
import CarSupermarket from '@/components/Finance/CarSupermarket'
import POSSupermarket from '@/components/Finance/POSSupermarket'
// import Help from '@/components/Help'
import Flow from '@/components/Help/Flow'
import Formmanual from '@/components/Help/Formmanual'
import HelpCenter from '@/components/Help/HelpCenter'
// import Select from '@/components/Select'
import CardInquiry from '@/components/Select/CardInquiry'
import Loaninquiry from '@/components/Select/Loaninquiry'
import Find from '@/components/Find'


Vue.use(Router)

export default new Router({
  routes: [
    { path: '/',name: '主页',component: Home,},
    { path: '/Finance/SmallSupermarket', component: SmallSupermarket, name: '小额超市' },       
    { path: '/Finance/SmallSupermarketDetail/:id', component: SmallSupermarketDetail, name: '小额超市详情' },       
    { path: '/Finance/SmallSupermarketApply/:id', component: SmallSupermarketApply, name: '小额超市申请' },       
    
    { path: '/Finance/CreditManager', component: CreditManager, name: '信贷经理' },       
    { path: '/Finance/BankLoan', component: BankLoan, name: '银行借贷' },       
    { path: '/Finance/CardSupermarket', component: CardSupermarket, name: '信用卡超市' },       
    { path: '/Finance/CarSupermarket', component: CarSupermarket, name: '车险超市' },       
    { path: '/Finance/POSSupermarket', component: POSSupermarket, name: 'POS超市' },       

    { path: '/Help/Flow', component: Flow, name: '流程说明' },       
    { path: '/Help/Formmanual', component: Formmanual, name: '平台手册' },       
    { path: '/Help/HelpCenter', component: HelpCenter, name: '帮助中心' },       

    { path: '/Select/CardInquiry', component: CardInquiry, name: '信用卡查询' },       
    { path: '/Select/Loaninquiry', component: Loaninquiry, name: '贷款查询' },       
    { path: '/Find',name: '发现',component: Find}
  ]
})
