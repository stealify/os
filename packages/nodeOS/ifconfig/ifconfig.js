#!/usr/bin/env node

var sock   = require('src-sockios');
var ifaces = require('src-ifaddrs');
var errno  = require('src-errno');

var args = process.argv;

var iface = args[2];
var ip    = args[3];

if(!iface || !ip) {
  var addrs = sock.getAddresses();
  for(iface in addrs){
    // addrs[iface]['netmask'] = sock.getNetmasks(iface);
    // addrs[iface]['hardware'] = sock.getHardwareAddress(iface);
  }
  console.log(addrs);
  process.exit(0);
}

var r2 = sock.ifup(iface);
if( r2!==0 ){
  console.log('Could Not Bring Interface Up');
  process.exit(r2);
}

var r3 = sock.setAddress(iface,ip);
if( r3!==0 ){
  console.log('Could Not Set Address');
  process.exit(r3);
}

