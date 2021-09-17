// 格式化日期
const  Format=(fmt, date) =>{
    // if(typeOf(date)=='number'){
    //     date = date.toString().length>10?new Date(date):new Date(date*1000)
    // }
    let ret;
    let opt = {
        "Y+": date.getFullYear().toString(),        // 年
        "M+": (date.getMonth() + 1).toString(),     // 月
        "D+": date.getDate().toString(),            // 日
        "h+": date.getHours().toString(),           // 时
        "m+": date.getMinutes().toString(),         // 分
        "s+": date.getSeconds().toString()          // 秒
    };
    for (let k in opt) {
        ret = new RegExp("(" + k + ")").exec(fmt);
        if (ret) {
            fmt = fmt.replace(ret[1], (ret[1].length == 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, "0")))
        };
    };
    return fmt;
}
// 获取时间戳
const getTimestamp = (date='',fmt='',millisecond=1000)=>{    
    let timestamp;
    if(fmt&&date){
        date = date.substring(0,19);    
        date = date.replace(/-/g,'/'); 
        timestamp = new Date(date).getTime();
    }else{
        timestamp =date?parseInt(new Date(date).getTime()):parseInt(new Date().getTime());    // 当前时间戳
    }
    return millisecond==1000 ?timestamp:timestamp/1000 // millisecond==1000是十三位时间戳 否则正常显示
}

module.exports = {
    Format,
    getTimestamp
}