import * as http from '@/common/js/http'

export function login (data) {
  return http.post('/newapi/common/idcard_login.html', data)
}
export function getMessag (data) {
  return http.get('/vava-pc-gateway/vava-pc-product/category/findIndexCategoryInfo', data)
}
export function queryDetailsData (data) {
  return http.post('/vava-pc-gateway/vava-pc-product/category/getDeatils', data)
}


export function send_code (data) {
	//alert(JSON.stringify(data));
  return http.post('/newapi/common/sendcode.html', data)
}

export function pfind(data){
	return http.post('/newapi/common/mobilefindpsw.html', data)
}

export function phone_login (data) {
	//alert(JSON.stringify(data));
  return http.post('/newapi/common/phone_login.html', data)
}

export function img_code (data) {
	//alert(JSON.stringify(data));
  return http.post('/newapi/common/getcode.html', data)
}

export function idcard_register (data) {
	//alert(JSON.stringify(data));
  return http.post('/newapi/common/idcard_register.html', data)
}




