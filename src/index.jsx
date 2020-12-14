import React from "react";
import ReactDom from "react-dom";

let name = <h3> my name is alex </h3>;
 
let group = {
    monday: "seriousness",
    Tuesday: "seriousness2.0",
    wednesday: "midweek",
}

alert ("monday" in group);

for (let item in group){
    alert(item);
    alert(group[item]);

}

let user ={
    name: "john",
    surname: "smith",
}
user.name="pete";
delete user.name;

function isEmpty(obj){
    for (let key in group){
        return false;
    }
    return true

};

function isEmpty2 (obj) {
   let keysArray = Object.keys(obj)
   if (keysArray.length === 0) return true;

   return false; 
}
