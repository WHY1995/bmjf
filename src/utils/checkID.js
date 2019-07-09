//判断身份证号码是否合法
export default function idCard(identNumber){
				if (!(/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(identNumber))) {
					alert("身份证号码格式错误");
					return false;
				}
				 //身份证号码为15位或者18位，15位时全为数字，18位前17位为数字，最后一位是校验位，可能为数字或字符X。  
				if (!(/(^\d{15}$)|(^\d{17}([0-9]|X)$)/.test(identNumber))){
					alert("身份证号码格式错误");
					return false;
				}
				//校验位按照ISO 7064:1983.MOD 11-2的规定生成，X可以认为是数字10。
				//下面分别分析出生日期和校验位
				var len, re;
				len = identNumber.length;
				//判断18位身份证号码，现在在国家统一身份证为18位。
				if (len == 18){
					re = new RegExp(/^(\d{6})(\d{4})(\d{2})(\d{2})(\d{3})([0-9]|X)$/);
					var arrSplit = identNumber.match(re);


					//检查生日日期是否正确
					var dtmBirth = new Date(arrSplit[2] + "/" + arrSplit[3] + "/" + arrSplit[4]);
					var bGoodDay;
					bGoodDay = (dtmBirth.getFullYear() == Number(arrSplit[2])) && ((dtmBirth.getMonth() + 1) == Number(arrSplit[3])) && (dtmBirth.getDate() == Number(arrSplit[4]));
					if (!bGoodDay){
						alert("身份证号码日期不匹配");
						return false;
					}else{
						//检验18位身份证的校验码是否正确。
						//校验位按照ISO 7064:1983.MOD 11-2的规定生成，X可以认为是数字10。
						var valnum;
						var arrInt = new Array(7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2);
						var arrCh = new Array('1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2');
						var nTemp = 0, i;
						for(i = 0; i < 17; i ++){
							nTemp += identNumber.substr(i, 1) * arrInt[i];
						}
						valnum = arrCh[nTemp % 11];
						if (valnum != identNumber.substr(17, 1)){
							alert("身份证号码校验位不正确");
							return false;
						}
						alert("身份证合法");
					}
				}else{
					alert("身份证号码位数不足18位");
					return false;
				}
}
