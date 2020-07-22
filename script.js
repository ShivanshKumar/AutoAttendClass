let schedule = [
[{sub: 0, timehr: 8 ,timemin: 0},{sub: 1, timehr: 9 ,timemin: 0},{sub: 2, timehr: 10 ,timemin:15},{sub: 3, timehr: 11 ,timemin: 15}],
[{sub: 4, timehr: 8 ,timemin: 0},{sub: 6, timehr: 10 ,timemin: 15},{sub: 0, timehr: 11 ,timemin: 15}],
[{sub: 1, timehr: 8 ,timemin: 0},{sub: 2, timehr: 9 ,timemin: 0},{sub: 4, timehr: 11 ,timemin: 15}],
[{sub: 6, timehr: 9 ,timemin: 0},{sub: 0, timehr: 10 ,timemin:15},{sub: 1, timehr: 11 ,timemin: 15}],
[{sub: 2, timehr: 8 ,timemin: 0},{sub: 4, timehr: 10 ,timemin:15}]
]
let d = new Date();
let day = d.getDay();
let date = d.getDate();
let a =document.querySelectorAll(`a`)
let today = schedule[day-1]

console.log(a,day,date,today,schedule)

today.forEach((v)=>{
console.log(v);
let fun = ()=>{
a[v.sub].click();}
let eta_ms = ()=> new Date(2020, 6, date, v.timehr, v.timemin).getTime() - Date.now();
if(eta_ms()>0)setTimeout(fun,eta_ms());
})

