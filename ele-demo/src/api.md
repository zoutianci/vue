# node-ele 接口文档
```
    baseUrl: https://elm.candu.org
```

## 目录
[1. 获取城市列表](#1获取城市列表)<br>
[2. 获取热门城市](#2获取热门城市)<br>

## 接口列表
### 1.获取城市列表
#### 请求的URL:
```
    https://elm.candu.org/v1/cities
```

#### 请求示例:
[https://elm.candu.org/v1/cities?type=guess](https://elm.candu.org/v1/cities?type=guess)
#### 请求方式:
```
    GET
```
#### 请求参数: query
|参数|是否必选|类型|说明|
|:-----|:------:|:-----|:-----|
|type|Y|String|guess:定位城市,hot:热门城市,group:所有城市

#### 返回示例:
```
{
    id: 1,
    name: '上海',
    abbr: 'SH',
    area_code: "021",
    sort: 1,
    latitude: 31.23037,
    longitude: 121.473701,
    is_map: true,
    pinyin: "shanghai",
}
```