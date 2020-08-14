let schedule = [
[{sub: 0, timehr: 7 ,timemin: 55},{sub: 1, timehr: 8 ,timemin: 55},{sub: 2, timehr: 10 ,timemin:10},{sub: 3, timehr: 11 ,timemin: 10}],
[{sub: 4, timehr: 7 ,timemin: 55},{sub: 6, timehr: 10 ,timemin: 10},{sub: 0, timehr: 11 ,timemin: 10}],
[{sub: 1, timehr: 7 ,timemin: 55},{sub: 2, timehr: 8 ,timemin: 55},{sub: 4, timehr: 11 ,timemin: 10}],
[{sub: 1, timehr: 7 ,timemin: 55},{sub: 6, timehr: 8 ,timemin: 55},{sub: 0, timehr: 10 ,timemin:10},{sub: 1, timehr: 11 ,timemin: 10}],
[{sub: 2, timehr: 7 ,timemin: 55},{sub: 4, timehr: 10 ,timemin:10}]
]

let d = new Date();
let day = d.getDay();
let date = d.getDate();
let month = d.getMonth();
let a =document.querySelectorAll(`a`)
let today = schedule[day-1]

console.log(a,day,date,today,schedule)

today.forEach((v)=>{
console.log(v);
let fun = ()=>{
console.log(v.sub);	
a[v.sub].click();}
let eta_ms = ()=> new Date(2020, month, date, v.timehr, v.timemin).getTime() - Date.now();
console.log(eta_ms());
if(eta_ms()>0)setTimeout(fun,eta_ms());	
})

