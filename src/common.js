// 前端常用深拷贝
const deepCopy = (object)=>{
    return JSON.parse(JSON.stringify(object))
}
module.exports = {
    deepCopy
}