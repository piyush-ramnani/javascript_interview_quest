/*
Return a defanged IP address replaces every period "." with "[.]"
*/

function defangedIp(address) {
  let newAddress = address.split(".").join("[.]");
  return newAddress;
}

address = "122.134.24.0.0.1";
console.log("IP: ", address);

console.log("defanged string IP: ", defangedIp(address));
