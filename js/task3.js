const hiddenEmail=(email)=>email.slice(0,6)+'...'+email.slice(email.indexOf('@'));
let email="orange-academy@orange.com";
let result=hiddenEmail(email);
console.log(result);
