node server.js
http://127.0.0.1:3010/
各项 操作按照 具体的URL;


0.1. restful基础说明 http://www.runoob.com/nodejs/nodejs-restful-api.html
0.2. restful详细介绍 http://www.runoob.com/w3cnote/restful-architecture.html
0.3. restful讨论 http://www.ruanyifeng.com/blog/2011/09/restful


一. 什么是 REST？ (Representational State Transfer 我对这个词组的翻译是"表现层状态转化")
REST即 表述性状态传递/表述性状态转移（英文：Representational State Transfer，简称REST）是Roy Fielding博士在2000年他的博士论文中提出来的一种软件架构风格。
表述性状态转移是一组架构约束条件和原则。满足这些约束条件和原则的应用程序或设计就是RESTful。需要注意的是，REST是设计风格而不是标准。
REST通常基于使用HTTP，URI，和XML（标准通用标记语言下的一个子集）以及HTML（标准通用标记语言下的一个应用）这些现有的广泛流行的协议和标准。
REST 通常使用 JSON 数据格式。

二. HTTP 方法
以下为 REST 基本架构的四个方法：
GET - 用于获取数据。
PUT - 用于添加数据。
DELETE - 用于删除数据。
POST - 用于更新或添加数据。

三. RESTful Web Services
Web service是一个平台独立的，低耦合的，自包含的、基于可编程的web的应用程序，可使用开放的XML（标准通用标记语言下的一个子集）标准来描述、发布、发现、协调和配置这些应用程序，用于开发分布式的互操作的应用程序。
基于 REST 架构的 Web Services 即是 RESTful。
由于轻量级以及通过 HTTP 直接传输数据的特性，Web 服务的 RESTful 方法已经成为最常见的替代方法。可以使用各种语言（比如 Java 程序、Perl、Ruby、Python、PHP 和 Javascript[包括 Ajax]）实现客户端。
RESTful Web 服务通常可以通过自动客户端或代表用户的应用程序访问。但是，这种服务的简便性让用户能够与之直接交互，使用它们的 Web 浏览器构建一个 GET URL 并读取返回的内容。
更多介绍，可以查看：RESTful 架构详解( http://www.runoob.com/w3cnote/restful-architecture.html ).

四. 创建 RESTful
首先，创建一个 json 数据资源文件 users.json，内容如下：
{
  "user1": {
    "name": "Apache",
    "password": "Apache",
    "profession": "No.1",
    "id": 1
  },
  "user2": {
    "name": "Babel",
    "password": "Babel",
    "profession": "No.2",
    "id": 2
  },
  "user3": {
    "name": "Coffee",
    "password": "Coffee",
    "profession": "No.3",
    "id": 3
  }
}

五. REST无状态的理解:
http://blog.csdn.net/u014511737/article/details/46966735



