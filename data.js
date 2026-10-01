const APP_DATA = {
  winDeals: [
    {
      id: 'shenji-bank',
      name: '神基 - 银企直联',
      category: '新行业',
      client: '神基制药',
      industry: 'Life Science',
      team: 'SAP',
      source: 'Peter Y Pang',
      pic: 'Ronnie Zhang',
      mic: 'Liyong L Zheng',
      members: 'Kelly Zhao / Jinglei Chen / Mike Zhang',
      image: 'assets/deals/tight/shenji-neurogen.png',
      imageMode: 'contain',
      badge: '本月必点',
      detail: 'PwC台湾团队先期高质量交付联电总部S/4升级项目，积累了深厚客户信任；两岸团队深度协同、整合优势，凭借大陆团队成熟的S/4升级实施能力、标准化交付方法论与本地化服务优势，成功中标苏州和舰、厦门联芯两地升级项目。本次合作不仅实现了联电集团两岸多站点升级服务全覆盖，也帮助大陆团队填补了半导体行业SAP实施经验空白，打造了两岸团队跨区域联动获客的标杆案例。'
    },
    {
      id: 'niterra-data',
      name: 'Niterra Google Kniguris Detecting abnormal data',
      category: '制造业',
      client: 'NGK',
      industry: 'Industrial',
      team: 'SAP',
      source: 'Zehao Z Song',
      pic: 'Zehao Song',
      mic: 'Jiang Jiang',
      members: 'Jolyen Yu / Nathan Yang',
      image: 'assets/deals/tight/niterra-data.png',
      imageMode: 'contain',
      badge: '新客首推',
      detail: '作为数字化供应链管理（Digital SCM）体系的重要一环，持续优化客户库存计划中的异常数据识别功能，提升数据监控的准确性与业务响应效率。'
    },
    {
      id: 'niterra-d365',
      name: 'Niterra D365 AMS',
      category: '增购',
      client: 'NGK',
      industry: 'Industrial',
      team: 'FOT',
      source: 'Zehao Z Song',
      pic: 'Zehao Song',
      mic: 'Jiang Jiang',
      members: 'Max Li',
      image: 'assets/deals/tight/niterra-d365.png',
      imageMode: 'contain',
      badge: '长期套餐',
      detail: '为 Niterra Asia region 提供 D365 ERP 系统的年度应用管理服务（AMS），服务周期为 2026 年 10 月至 2027 年 9 月，涵盖系统日常运维、功能迭代优化及技术支持保障。'
    },
    {
      id: 'hfjl-sap',
      name: '和舰与联芯SAP升级',
      category: '战略客户',
      client: '和舰',
      industry: 'HiTech',
      team: 'SAP',
      source: 'Ronnie Zhang',
      pic: 'Ronnie Zhang',
      mic: 'Liyong L Zheng',
      members: 'Kelly Zhao / Jinglei Chen / Mike Zhang',
      image: 'assets/deals/tight/hejian.png',
      imageMode: 'contain',
      badge: '镇店大菜',
      detail: '两岸团队深度协同，成功中标苏州和舰、厦门联芯两地升级项目。本次合作实现了联电集团两岸多站点升级服务全覆盖，也帮助大陆团队填补了半导体行业 SAP 实施经验空白。'
    },
    {
      id: 'mufg-pmo',
      name: 'MUFG - Core Banking System PMO Order 6',
      category: '战略客户',
      client: 'MUFG',
      industry: 'Professional Service',
      team: 'SAP',
      source: 'Zehao Z Song',
      pic: 'Zehao Z Song',
      mic: 'Ricky QA Li',
      members: 'Xueting Gao / Shelly C Lin',
      image: 'assets/deals/tight/mufg.png',
      imageMode: 'contain',
      badge: '硬菜上桌',
      detail: 'PwC 参与 MUFG 银行核心系统本地软件包导入项目整整满一年，项目进入 SIT 收尾与 UAT 并行的重要时期。团队将继续作为测试推进组核心，稳妥推进上线前验证。'
    },
    {
      id: 'dior-ams',
      name: 'SFoA - LVMH - 2027 Dior SFoA AMS',
      category: '增购',
      client: 'LVMH',
      industry: 'CPG',
      team: 'FOT',
      source: 'Sisy Liu',
      pic: 'Dean Li',
      mic: 'Sisy Liu',
      members: 'Bruce Qian',
      image: 'assets/deals/tight/lvmh-dior-ams.png',
      imageMode: 'contain',
      badge: '熟客加单',
      detail: '迪奥是 LVMH 集团旗下全球知名奢侈品品牌。基于良好的客户关系与丰富的交付经验，我们成功赢得本次项目，并将持续积累零售与奢侈品行业经验。'
    },
    {
      id: 'dior-pm',
      name: 'SFoA - LVMH - 2026Q4+2027Q1 Dior PM&PMO',
      category: '增购',
      client: 'LVMH',
      industry: 'CPG',
      team: 'FOT',
      source: 'Sisy Liu',
      pic: 'Dean Li',
      mic: 'Sisy Liu',
      members: 'Bruce Qian',
      image: 'assets/deals/tight/lvmh-dior-pm.png',
      imageMode: 'contain',
      badge: '招牌续盘',
      detail: '过去三年，我们持续为客户提供 PM 服务。基于顾问团队的专业能力与前期项目成功交付建立的信任基础，我们赢得了本次项目。'
    }
  ],
  featuredProjects: [
    {
      title: '人气菜 01 · 商米',
      tag: '商米人气菜单',
      description: '商米人气菜单内容待补充，可放项目近况、阶段成果与负责人。',
      progress: 36
    },
    {
      title: '人气菜 02 · 商米',
      tag: '商米人气菜单',
      description: '可放商米相关项目亮点、客户反馈、阶段成果或下一阶段计划。',
      progress: 62
    },
    {
      title: '人气菜 03 · 商米',
      tag: '商米人气菜单',
      description: '内容补齐后，这张卡片可直接替换为真实商米内容与配图。',
      progress: 18
    }
  ],
  reviews: [
    {
      name: 'Frida Zhu',
      avatarText: 'FZ',
      stars: 5,
      text: '9月的厨房很热闹，排骨、海鲜饭和蘑菇 Orzo 轮番上桌。项目之外，也要把日子炖得有滋有味。推荐给大家！',
      dish: '拿手菜：秘制排骨 / 海鲜烩饭 / 蘑菇 Orzo',
      images: [
        'assets/food/frida-paigu.jpg',
        'assets/food/frida-risotto.jpg',
        'assets/food/frida-orzo.jpg'
      ]
    },
    {
      name: '等待下一位食客',
      avatarText: '?',
      stars: 5,
      text: '同事9月见闻与拿手好菜待补充。',
      dish: '拿手菜：待揭晓',
      images: []
    },
    {
      name: '等待下一位食客',
      avatarText: '?',
      stars: 5,
      text: '可以继续加入旅行、运动、阅读、宠物、烘焙或生活碎片。',
      dish: '拿手菜：待揭晓',
      images: []
    }
  ],
  news: [
    {
      date: '9月',
      title: 'EA山会：这一桌，一起向恒山出发',
      text: 'EA SM+ 年度山会，作为餐厅的限定活动如约开席。团队各司其职、彼此搭手，像后厨与前厅配合出餐，也像交付项目一样，把每一段坡稳稳端上桌。登顶，只是年度招牌菜最亮眼的上桌时刻。下一程，我们仍同桌同行、同灶开火，继续把往后的每一程端成招牌。',
      images: [
        'assets/events/hengshan-01.jpg',
        'assets/events/hengshan-02.jpg',
        'assets/events/hengshan-03.jpg'
      ]
    }
  ],
  birthdays: [
    { en: 'Amelia Yang', cn: '杨梦晗', photo: 'assets/birthdays/amelia-yang.jpeg' },
    { en: 'Hongru Wei', cn: '魏鸿儒', photo: 'assets/birthdays/hongru-wei.jpg' },
    { en: 'Jennifer Liu', cn: '刘婕', photo: 'assets/birthdays/jennifer-liu.jpeg' },
    { en: 'Katherine Xing', cn: '邢一苇', photo: 'assets/birthdays/katherine-xing.jpeg' },
    { en: 'Margaret Ma', cn: '马杰琳', photo: 'assets/birthdays/margaret-ma.jpeg' },
    { en: 'Darren Dai', cn: '代强', photo: 'assets/birthdays/darren-dai.png' },
    { en: 'Minxu Ni', cn: '倪民旭', photo: 'assets/birthdays/minxu-ni.png' },
    { en: 'Juna Liu', cn: '刘娟娟', photo: 'assets/birthdays/juna-liu.jpeg' },
    { en: 'Changyu Wei', cn: '魏长瑜', photo: 'assets/birthdays/changyu-wei.png' },
    { en: 'Daniel Liu', cn: '刘盈帅', photo: 'assets/birthdays/daniel-liu.jpeg' },
    { en: 'Mike Zhang', cn: '张永文', photo: 'assets/birthdays/mike-zhang.jpeg' },
    { en: 'Sherill Liao', cn: '廖香熠', photo: 'assets/birthdays/sherill-liao.jpeg' },
    { en: 'Jay Yan', cn: '闫宇杰', photo: 'assets/birthdays/jay-yan.jpeg' },
    { en: 'Pablo Hao', cn: '郝亮', photo: 'assets/birthdays/pablo-hao.jpeg' },
    { en: 'Claire Cai', cn: '蔡颖妍', photo: 'assets/birthdays/claire-cai.jpeg' },
    { en: 'Cerium Yang', cn: '杨雁舒', photo: 'assets/birthdays/cerium-yang.png' },
    { en: 'Jeff Yu', cn: '于松平', photo: 'assets/birthdays/jeff-yu.jpeg' },
    { en: 'Leo Lai', cn: '赖奇煌', photo: 'assets/birthdays/leo-lai.jpeg' },
    { en: 'Pearl Wang', cn: '王慧丽', photo: 'assets/birthdays/pearl-wang.png' },
    { en: 'Shaojie Li', cn: '李绍杰', photo: 'assets/birthdays/shaojie-li.png' },
    { en: 'Chao Li', cn: '李超', photo: 'assets/birthdays/chao-li.jpeg' }
  ]
};











