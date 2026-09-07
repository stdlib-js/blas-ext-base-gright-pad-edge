"use strict";var d=function(o,r){return function(){try{return r||o((r={exports:{}}).exports,r),r.exports}catch(v){throw (r=0, v)}};};var b=d(function(G,p){
function R(o,r,v,t,q,a,i,s){var c,u,n,f,g,e,l,x;for(c=v.data,u=a.data,n=v.accessors[0],f=a.accessors[1],g=q,e=s,x=0;x<o;x++)f(u,e,n(c,g)),e+=i,g+=t;for(l=n(c,g-t),x=0;x<r;x++)f(u,e,l),e+=i;return a}p.exports=R
});var P=d(function(H,y){
var h=require('@stdlib/array-base-arraylike2object/dist'),w=b();function z(o,r,v,t,q,a,i,s){var c,u,n,f,g,e;if(o<=0)return a;if(r<0&&(r=0),n=h(v),f=h(a),n.accessorProtocol||f.accessorProtocol)return w(o,r,n,t,q,f,i,s),a;for(c=q,u=s,e=0;e<o;e++)a[u]=v[c],u+=i,c+=t;for(g=v[c-t],e=0;e<r;e++)a[u]=g,u+=i;return a}y.exports=z
});var m=d(function(I,j){
var E=require('@stdlib/strided-base-stride2offset/dist'),A=P();function B(o,r,v,t,q,a){var i,s;return r<0&&(r=0),i=E(o,t),s=E(o+r,a),A(o,r,v,t,i,q,a,s)}j.exports=B
});var C=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),O=m(),D=P();C(O,"ndarray",D);module.exports=O;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
