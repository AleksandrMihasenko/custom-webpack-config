(()=>{"use strict";const t=new class{constructor(t){this.name=t,this.date=new Date}toString(){return JSON.stringify({name:this.name,date:this.date.toJSON()})}}("admin");console.log("user is: ",t.toString())})();