const prodConfig = {
  port: 9636,
  api: {
    server: 'http://lccrm.lctest.cn:1568/',
    omsServer: 'https://etradetest.linkedcare.cn',
    pointServer: 'http://point.lctest.cn/',
    mallServer: 'https://etradetest.linkedcare.cn',
    openplatformServer: 'https://openplatform-app.lctest.cn:20443',
    paymentSever: 'http://47.98.244.146:8080',
  },
  payeeInfo: {
    companyName: '上海领健信息技术有限公司',
    openAccountBank: '上海农商银行虹口支行',
    accountNum: '50131000790652043',
  },
  departmentCode: {
    rootDepartmentCode: '0',
    consumableLineCode: '0|1',
    mouthSaaSLineCode: '0|2',
    generalSaaSLineCode: '0|3',
    beautySaaSLineCode: '0|4',
    appCommunityCode: '0|5',
    mouthSuccessCode: '0|6',
    beautySuccessCode: '0|7',
  },
  oidcClient: {
    authority: 'https://openplatform-app.lctest.cn:11001',
    client_id: 'js',
    redirect_uri: '/callback.html',
    response_type: 'code',
    scope: 'openid profile bms.role',
    automaticSilentRenew: false,
    accessTokenExpiringNotificationTime: 120,
    silent_redirect_uri: '/silent-refresh.html',
    post_logout_redirect_uri: '/',
  },
};

export {
  prodConfig
}
