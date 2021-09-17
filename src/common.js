// 前端常用深拷贝
const deepCopy = (object)=>{
    return JSON.parse(JSON.stringify(object))
}
// localstorage 存取
const getStorage = (name)=>{
    return JSON.parse(window.localStorage.getItem(name))||''
}
// 设置
const setStorage = (name,data)=>{
    window.localStorage.setItem(name,JSON.stringify(data))
}
// 清除指定
const removeStorage =(name)=>{
    window.localStorage.removeItem(name)
}
module.exports = {
    deepCopy,
    getStorage,
    setStorage,
    removeStorage
}