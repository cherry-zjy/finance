import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
// import Finance from '@/components/Finance'
import SmallSupermarket from '@/components/Finance/SmallSupermarket'
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
    { path: 'SmallSupermarket', component: SmallSupermarket, name: '小额超市' },       
    { path: 'CreditManager', component: CreditManager, name: '信贷经理' },       
    { path: 'BankLoan', component: BankLoan, name: '银行借贷' },       
    { path: 'CardSupermarket', component: CardSupermarket, name: '信用卡超市' },       
    { path: 'CarSupermarket', component: CarSupermarket, name: '车险超市' },       
    { path: 'POSSupermarket', component: POSSupermarket, name: 'POS超市' },       

    { path: 'Flow', component: Flow, name: '流程说明' },       
    { path: 'Formmanual', component: Formmanual, name: '平台手册' },       
    { path: 'HelpCenter', component: HelpCenter, name: '帮助中心' },       

    { path: 'CardInquiry', component: CardInquiry, name: '信用卡查询' },       
    { path: 'Loaninquiry', component: Loaninquiry, name: '贷款查询' },       
    { path: '/Find',name: '发现',component: Find}
  ]
})
