//get the target index from array
/**
 * @function 去除空格的检验
 */
import $ from 'jquery'
export function isNotNullTrim(source) {
    return source != null && source != 'undefined' && $.trim(source) != "";
}

export function checkNumber(theObj) {
    let reg = /^[0-9]+.?[0-9]*$/;
    if (reg.test(theObj) || !isNotNullTrim(theObj)) {
        return true;
    }
    return false;
}

/**

 * 数组内元素移动到指定位置
 * arr : 要操作的数组
 * moveIndsArr : 要移动的元素下标数组
 * moveToInd : 目标下标值
 * isBeforAfter ： 移动到目标值前/后（0/1）
 * */
export function moveArray (arr, moveIndsArr, moveToInd, isBeforAfter){
    var temp = [];
    moveIndsArr.sort(function (x,y){return x-y});
    moveToInd += isBeforAfter;
    for(var i=0; i<moveIndsArr.length; i++){
        if(moveIndsArr[i]<moveToInd){
            moveToInd -= 1;
        }
        temp[temp.length] = arr.splice(moveIndsArr[i]-i, 1)[0];
    }
    temp.unshift(moveToInd,0);
    Array.prototype.splice.apply(arr, temp);
}

