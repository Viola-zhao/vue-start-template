### 文档目录介绍
``` java
├── README.md 
├── build                         构建脚本目录
│   ├── build.js //                 生产环境构建脚本
│   ├── check-versions.js           检查node/npm版本
│   ├── logo.png
│   ├── utils.js                    构建相关工具方法
│   ├── vue-loader.conf.js          根据当前的开发环境对webpack中的vue-loader进行配置
│   ├── webpack.base.conf.js        wabpack基础配置
│   ├── webpack.dev.conf.js         wabpack开发环境配置
│   ├── webpack.prod.conf.js        wabpack生产环境配置
│   └── webpack.test.conf.js        wabpack测试环境配置
├── config
│   ├── dev.env.js
│   ├── index.js
│   ├── prod.env.js
│   └── test.env.js
├── dist                           压缩后的静态文件
│   ├── index.html
│   └── static
│       ├── css
│       └── js
├── index.html                     入口文件
├── package.json                   npm包配置文件，里面定义了项目的npm脚本，依赖包等信息
├── src                            项目源码
│   ├── App.vue                      根组件
    ├── main.js                      入口js文件
│   ├── assets                       资源目录，这里的资源会被wabpack构建
│   │   └── logo.png
│   ├── components                   公共组件目录
│   │   ├── HelloWorld.vue
    ├── pages                      页面目录
│   │   ├── main.vue
│   └── router                       前端路由
│       └── index.js
├── static                         纯静态资源，不会被wabpack构建。
└── test
    ├── e2e
    │   ├── custom-assertions
    │   ├── nightwatch.conf.js
    │   ├── runner.js
    │   └── specs
    └── unit
        ├── jest.conf.js
        ├── setup.js
        └── specs
``` 
#### 所用命令
- npm run start 启动项目
- npm run build 压缩静态文件

