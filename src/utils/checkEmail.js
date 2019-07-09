//判断邮箱是否正确
export default function checkEmail(str){
     var re = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/
     if(re.test(str)){
       alert("正确");
       return true;
     }else{
       alert("错误");
       return false;
     }
}


