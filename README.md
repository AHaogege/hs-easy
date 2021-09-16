# hs-easy
 *整理前端开发过程中用到的一些常用方法，持续更新

# 使用方式
 *npm i hs-easy

 *举例

import hsEasy from 'hs-easy'

hsEasy.common.deepCopy({data})

# 方法

 *common

 *深拷贝【deepCopy（data）】
 *本地存储【getStorage（name），setStorage（name，data），removeStorage（name）】


 *date
 
 *日期格式化【Format（YYYY-MM-DD hh:mm:ss,date） 参数date支持时间戳】
 *获取时间戳【getTimestamp（date='',fmt='',millisecond=1000）默认为示例 date为空默认返回当前时间时间戳，fmt传入指定时间日期格式yy-mm-dd，date传入指定时间；millisecond=1000为十三位时间戳】