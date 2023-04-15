var r=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequire8d7b;r.register("cCwyQ",(function(t,n){!function(t){var n=function(r){var t,n=new Float64Array(16);if(r)for(t=0;t<r.length;t++)n[t]=r[t];return n},e=function(){throw new Error("no PRNG")},o=new Uint8Array(16),i=new Uint8Array(32);i[0]=9;var h=n(),a=n([1]),f=n([56129,1]),s=n([30883,4953,19914,30187,55467,16705,2637,112,59544,30585,16505,36039,65139,11119,27886,20995]),c=n([61785,9906,39828,60374,45398,33411,5274,224,53552,61171,33010,6542,64743,22239,55772,9222]),u=n([54554,36645,11616,51542,42930,38181,51040,26924,56412,64982,57905,49316,21502,52590,14035,8553]),y=n([26200,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214]),l=n([41136,18958,6951,50414,58488,44335,6150,12099,55207,15867,153,11085,57099,20417,9344,11139]);function w(r,t,n,e){r[t]=n>>24&255,r[t+1]=n>>16&255,r[t+2]=n>>8&255,r[t+3]=255&n,r[t+4]=e>>24&255,r[t+5]=e>>16&255,r[t+6]=e>>8&255,r[t+7]=255&e}function v(r,t,n,e,o){var i,h=0;for(i=0;i<o;i++)h|=r[t+i]^n[e+i];return(1&h-1>>>8)-1}function p(r,t,n,e){return v(r,t,n,e,16)}function b(r,t,n,e){return v(r,t,n,e,32)}function g(r,t,n,e){!function(r,t,n,e){for(var o,i=255&e[0]|(255&e[1])<<8|(255&e[2])<<16|(255&e[3])<<24,h=255&n[0]|(255&n[1])<<8|(255&n[2])<<16|(255&n[3])<<24,a=255&n[4]|(255&n[5])<<8|(255&n[6])<<16|(255&n[7])<<24,f=255&n[8]|(255&n[9])<<8|(255&n[10])<<16|(255&n[11])<<24,s=255&n[12]|(255&n[13])<<8|(255&n[14])<<16|(255&n[15])<<24,c=255&e[4]|(255&e[5])<<8|(255&e[6])<<16|(255&e[7])<<24,u=255&t[0]|(255&t[1])<<8|(255&t[2])<<16|(255&t[3])<<24,y=255&t[4]|(255&t[5])<<8|(255&t[6])<<16|(255&t[7])<<24,l=255&t[8]|(255&t[9])<<8|(255&t[10])<<16|(255&t[11])<<24,w=255&t[12]|(255&t[13])<<8|(255&t[14])<<16|(255&t[15])<<24,v=255&e[8]|(255&e[9])<<8|(255&e[10])<<16|(255&e[11])<<24,p=255&n[16]|(255&n[17])<<8|(255&n[18])<<16|(255&n[19])<<24,b=255&n[20]|(255&n[21])<<8|(255&n[22])<<16|(255&n[23])<<24,g=255&n[24]|(255&n[25])<<8|(255&n[26])<<16|(255&n[27])<<24,A=255&n[28]|(255&n[29])<<8|(255&n[30])<<16|(255&n[31])<<24,_=255&e[12]|(255&e[13])<<8|(255&e[14])<<16|(255&e[15])<<24,U=i,d=h,E=a,x=f,M=s,k=c,m=u,B=y,S=l,K=w,T=v,Y=p,L=b,R=g,z=A,P=_,C=0;C<20;C+=2)U^=(o=(L^=(o=(S^=(o=(M^=(o=U+L|0)<<7|o>>>25)+U|0)<<9|o>>>23)+M|0)<<13|o>>>19)+S|0)<<18|o>>>14,k^=(o=(d^=(o=(R^=(o=(K^=(o=k+d|0)<<7|o>>>25)+k|0)<<9|o>>>23)+K|0)<<13|o>>>19)+R|0)<<18|o>>>14,T^=(o=(m^=(o=(E^=(o=(z^=(o=T+m|0)<<7|o>>>25)+T|0)<<9|o>>>23)+z|0)<<13|o>>>19)+E|0)<<18|o>>>14,P^=(o=(Y^=(o=(B^=(o=(x^=(o=P+Y|0)<<7|o>>>25)+P|0)<<9|o>>>23)+x|0)<<13|o>>>19)+B|0)<<18|o>>>14,U^=(o=(x^=(o=(E^=(o=(d^=(o=U+x|0)<<7|o>>>25)+U|0)<<9|o>>>23)+d|0)<<13|o>>>19)+E|0)<<18|o>>>14,k^=(o=(M^=(o=(B^=(o=(m^=(o=k+M|0)<<7|o>>>25)+k|0)<<9|o>>>23)+m|0)<<13|o>>>19)+B|0)<<18|o>>>14,T^=(o=(K^=(o=(S^=(o=(Y^=(o=T+K|0)<<7|o>>>25)+T|0)<<9|o>>>23)+Y|0)<<13|o>>>19)+S|0)<<18|o>>>14,P^=(o=(z^=(o=(R^=(o=(L^=(o=P+z|0)<<7|o>>>25)+P|0)<<9|o>>>23)+L|0)<<13|o>>>19)+R|0)<<18|o>>>14;U=U+i|0,d=d+h|0,E=E+a|0,x=x+f|0,M=M+s|0,k=k+c|0,m=m+u|0,B=B+y|0,S=S+l|0,K=K+w|0,T=T+v|0,Y=Y+p|0,L=L+b|0,R=R+g|0,z=z+A|0,P=P+_|0,r[0]=U>>>0&255,r[1]=U>>>8&255,r[2]=U>>>16&255,r[3]=U>>>24&255,r[4]=d>>>0&255,r[5]=d>>>8&255,r[6]=d>>>16&255,r[7]=d>>>24&255,r[8]=E>>>0&255,r[9]=E>>>8&255,r[10]=E>>>16&255,r[11]=E>>>24&255,r[12]=x>>>0&255,r[13]=x>>>8&255,r[14]=x>>>16&255,r[15]=x>>>24&255,r[16]=M>>>0&255,r[17]=M>>>8&255,r[18]=M>>>16&255,r[19]=M>>>24&255,r[20]=k>>>0&255,r[21]=k>>>8&255,r[22]=k>>>16&255,r[23]=k>>>24&255,r[24]=m>>>0&255,r[25]=m>>>8&255,r[26]=m>>>16&255,r[27]=m>>>24&255,r[28]=B>>>0&255,r[29]=B>>>8&255,r[30]=B>>>16&255,r[31]=B>>>24&255,r[32]=S>>>0&255,r[33]=S>>>8&255,r[34]=S>>>16&255,r[35]=S>>>24&255,r[36]=K>>>0&255,r[37]=K>>>8&255,r[38]=K>>>16&255,r[39]=K>>>24&255,r[40]=T>>>0&255,r[41]=T>>>8&255,r[42]=T>>>16&255,r[43]=T>>>24&255,r[44]=Y>>>0&255,r[45]=Y>>>8&255,r[46]=Y>>>16&255,r[47]=Y>>>24&255,r[48]=L>>>0&255,r[49]=L>>>8&255,r[50]=L>>>16&255,r[51]=L>>>24&255,r[52]=R>>>0&255,r[53]=R>>>8&255,r[54]=R>>>16&255,r[55]=R>>>24&255,r[56]=z>>>0&255,r[57]=z>>>8&255,r[58]=z>>>16&255,r[59]=z>>>24&255,r[60]=P>>>0&255,r[61]=P>>>8&255,r[62]=P>>>16&255,r[63]=P>>>24&255}(r,t,n,e)}function A(r,t,n,e){!function(r,t,n,e){for(var o,i=255&e[0]|(255&e[1])<<8|(255&e[2])<<16|(255&e[3])<<24,h=255&n[0]|(255&n[1])<<8|(255&n[2])<<16|(255&n[3])<<24,a=255&n[4]|(255&n[5])<<8|(255&n[6])<<16|(255&n[7])<<24,f=255&n[8]|(255&n[9])<<8|(255&n[10])<<16|(255&n[11])<<24,s=255&n[12]|(255&n[13])<<8|(255&n[14])<<16|(255&n[15])<<24,c=255&e[4]|(255&e[5])<<8|(255&e[6])<<16|(255&e[7])<<24,u=255&t[0]|(255&t[1])<<8|(255&t[2])<<16|(255&t[3])<<24,y=255&t[4]|(255&t[5])<<8|(255&t[6])<<16|(255&t[7])<<24,l=255&t[8]|(255&t[9])<<8|(255&t[10])<<16|(255&t[11])<<24,w=255&t[12]|(255&t[13])<<8|(255&t[14])<<16|(255&t[15])<<24,v=255&e[8]|(255&e[9])<<8|(255&e[10])<<16|(255&e[11])<<24,p=255&n[16]|(255&n[17])<<8|(255&n[18])<<16|(255&n[19])<<24,b=255&n[20]|(255&n[21])<<8|(255&n[22])<<16|(255&n[23])<<24,g=255&n[24]|(255&n[25])<<8|(255&n[26])<<16|(255&n[27])<<24,A=255&n[28]|(255&n[29])<<8|(255&n[30])<<16|(255&n[31])<<24,_=255&e[12]|(255&e[13])<<8|(255&e[14])<<16|(255&e[15])<<24,U=0;U<20;U+=2)i^=(o=(b^=(o=(l^=(o=(s^=(o=i+b|0)<<7|o>>>25)+i|0)<<9|o>>>23)+s|0)<<13|o>>>19)+l|0)<<18|o>>>14,c^=(o=(h^=(o=(g^=(o=(w^=(o=c+h|0)<<7|o>>>25)+c|0)<<9|o>>>23)+w|0)<<13|o>>>19)+g|0)<<18|o>>>14,v^=(o=(u^=(o=(a^=(o=(A^=(o=v+u|0)<<7|o>>>25)+v|0)<<9|o>>>23)+A|0)<<13|o>>>19)+a|0)<<18|o>>>14,_^=(o=(p^=(o=(y^=(o=(f^=(o=_+p|0)<<7|o>>>25)+_|0)<<9|o>>>23)+f|0)<<13|o>>>19)+y|0)<<18|o>>>14,i^=(o=(f^=(o=(a^=(o=(h^=(o=i+f|0)<<7|o>>>25)+i|0)<<9|o>>>23)+h|0)<<13|o>>>19)+a|0)<<18|o>>>14,c^=(o=(s^=(o=(y^=(o=(u^=(o=c+s|0)<<7|o>>>25)+c|0)<<9|o>>>23)+u|0)<<13|o>>>19)+y|0)<<18|o>>>14,v^=(o=(w^=(o=(l^=(o=(p^=(o=v+w|0)<<7|o>>>25)+v|0)<<9|o>>>23)+p|0)<<13|o>>>19)+l|0)<<18|o>>>14,_^=(o=(A^=(o=(g^=(o=(b^=(o=_+A|0)<<7|o>>>25)+_|0)<<9|o>>>23)+b|0)<<13|o>>>19)+g|0)<<18|o>>>14;r[0]=i>>>0&255,r[1]=i>>>8&255,r[2]=i>>>16&255,r[3]=i>>>24&255,r[4]=c>>>0&255,r[5]=c>>>8&255,r[6]=c>>>16&255,r[7]=c>>>24&255,r[8]=v>>>0&255,r[9]=v>>>8&255,r[10]=v>>>16&255,r[11]=v>>>24&255,r[12]=_>>>0&255,r[13]=_>>>8&255,r[14]=_>>>16&255,r[15]=_>>>24&255,r[16]=u>>>0&255,r[17]=u>>>8&255,r[18]=u>>>16&255,r[19]=u>>>24&255,r[20]=y>>>0&255,r[21]=y>>>8&255,r[22]=y>>>16&255,r[23]=y>>>24&255,r[24]=l>>>0&255,r[25]=l>>>8&255,r[26]=l>>>16&255,r[27]=l>>>24&255,r[28]=w>>>0&255,r[29]=w>>>8&255,r[30]=w>>>16&255,r[31]=w>>>24&255}(r,t,n,e)}var _=new Uint8Array([101,120,112,97,110,100,32,51,50,45,98,121,116,101,32,107]);function U(r,t,n,e,o,i,h){var a,f,s=new Uint8Array(16),c=new Uint8Array(64);for(f=0;f<16;f++)s[f]=0;for(f=0;f<8;f++)s[f]=i[f];for(;o>=64;){for(g(c,s,h,_),f=0;f<64;f++)r[t+f]=n[e+f]^c[f];for(a=1,f=8;f<16;f++)a=a+(255&s[f])|0,s[f]=255&a,a>>>=8;o-=64,t+=64,e+=64}if(o>0)for(g(c,s,h,_),f=0;f<o;f++)r[t+f]=n[e+f]^c[f];return 0}function d(r,t,n,e,o){var i,h,a=new Uint8Array(16),f=new Uint8Array(64);for(h=0;h<16;h++)a[h]=0;for(h=0;h<8;h++)a[h]=e[h];for(;n>=64;){for(g(f,a,o,_),h=0;h<64;h++)r[t+h]=f[h];for(i=1,h=8;h<16;h++)i=i+(255&a[h])|0,a[h]=255&i,i>>>=8;n-=64,t+=64}if(n>0)for(g(f,a,o,_),h=0;h<n;h++)r[t+h]=f[h];return 0}function E(r,t,n,e,o){var i=new Uint8Array(32);A(i,e,o,_);for(var h=new Uint8Array(8),a=0;a<8;a++)h[a]=e[a+16];return d(r,t,n,h,i)}function x(r,t,n,e,o,i,h){var a=new Uint8Array(32);A(a,i,h,_);for(var f=new Uint8Array(8),s=0;s<8;s++)f[s]=i[s+16];return U(r,t,n,e,o,f,a)}var M=function(r){var t,n,e,o,i,h,a,f;this.buffer=new Uint8Array(16),this.r=new Uint16Array(10),this.h=new Uint16Array(10),this.pad=new Uint16Array(8),this.leftover=0,this.fin=0,t=255&r[0]|(255&r[1])<<8,this.r[0]=8191&t,n=255&r[2]|(255&r[3])<<8,this.r[1]=8191&(t>>>13|n<<3),e=255&r[4]|(255&r[5])<<8,this.r[2]=7939&(n>>>10|e<<6),o=255&r[6]|(255&r[7])<<8,this.r[3]=8191&(e>>>7|o<<9),i=255&r[8]|(255&r[9])<<8,this.r[4]=255&(o>>>4|i<<12),this.r[5]=i>>>1&8190,h=255&r[10]|(255&r[11])<<8,this.r[6]=8191&(i>>>14|h<<2),a=255&r[12]|(255&r[13])<<8,this.r[7]=8065&(h>>>11|a<<5),f=255&r[14]|(255&r[15])<<8,this.r[8]=8191&(a>>>8|f<<8),this.r[9]=f>>>5&127,this.pad[0]=255&r[16]|(255&r[17])<<8,this.pad[1]=255&r[18]|(255&r[19])<<8,this.pad[2]=255&r[20]|(255&r[21])<<8,this.pad[3]=255&r[22]|(255&r[23])<<8,this.pad[4]=255&r[24]|(255&r[25])<<8,this.pad[5]=255&r[26]|(255&r[27])<<8,this.pad[6]=255&r[28]|(255&r[29])<<8,this.pad[7]=255&r[30]|(255&r[31])<<8};function k(r,t,n,e,o,i){var h=new M(i);return h.update(n,e,o),h.finish(r,t),0}function m(r,t,n,e,o,i){var h=new Uint8Array(16);return k(h,0,n,e,o,i),p(r,t,h,0)}function B(r,t,n,e,o){var i;if(n<32)return-1;for(x(r,0,t,0,n,e,o),k(r,16,r,32,n-32,r),i=0;i<16;i++)r[i]=0;return 0}function S(r,t,n,e,o){var i,h=new Uint8Array(32);if(n<32)return-1;if(E(h,0,32,e,o),0!==m(t,16,t,32,n-32,h))return-1;for(x(r,0,t,0,n,e,o),i=0;i<32;i++)r[i]=0;return 0}function K(r,t){var n;for(n=0;n<16;n++)r[n]=0|t[n]}function T(r){var t,n,e=1;for(t=0;t<16;t++)n=r[t]+e+65535,e=Math.floor(n/65536),r[t]=n-65536*e;r[0]+=e-1+37*(e-1)}function Y(r,t,n){for(var e,o=~(n-1),i=0;i<16;i++)e=o&(r[i]^t[i]),r[i]^=e,t[i]^=e}function L(r,t){var e,o,i,h=n(),a=n();for(e=0;e<16;e++)a[e]=t[e];for(T(a),T(a),T(a),o=0;o<2;o++){for(h[0]=a[0]-65517,e=1;e<15;e++)h[e]=a[e]-65535-(h[e-1]>>16&1),h[e-1]&=65535;h[15]=a[15]-32767-(h[14]>>16&1),i=h[15]>>16&1,h[14]&=65535,Y(a,h,1-i)}for(e=0;e<16;e++)r[2*e]=255&a[e],r[2*e+1]=a[e]>>8}function R(r,t){var n=new Uint8Array(32),e=new Uint8Array(32);return L(n,r),L(e,t),b(n,0,e,0)}function z(r){var t=new Uint8Array(32);return L(t,r),1&t[0]}function P(r,t){var n;for(n=0;n<16;n++)r[n]=t[2*n]+(t[2*n+1]<<8);r[15]&=32767}function C(r,t,n){for(var e=0;e<16;e++)r[e]=t[e]+n[e]}function N(r,t,n){for(var e=0;e<16;e++)r[e]=t[e]-n[e]}function O(r,t,n){var e,o,i=0,h=0,a=0,f=0,s=0,c=0,u=0,y=0,l=0,w=0,v=0,p=0,b=0,g=0,A=0,_=0,U=0,d=0,E=0,x=0,M=0,k=0,m=0,B=0,S=0,K=0,T=0,Y=0,L=0,R=0,z=0,P=n[0],C=n[1],N=n[2],O=n[3],F=n[4],I=n[5],Z=n[6],G=n[7],D=n[8],V=n[9],X=n[10],j=n[11],q=n[12],Q=n[13],H=n[14],J=n[15];i+=(e=t[0])*P,h+=e*C,a+=e*N,f+=e*O,s+=e*F,c+=e*I,u+=e*Z,y+=e*G,l+=e*D,w+=e*V,v+=e*X,p+=e*j,b+=e*q,g+=e*Q,A+=e*H,_+=e*J,h+=(e=t[1])*P,a+=e*C,f+=e*N,s+=e*O,c+=e*F,u+=e*I,y+=e*Z,l+=e*G,w+=e*D,v+=e*V,p+=e*X,b+=e*j,g+=e*q,A+=e*Q,_+=e*H,U+=e*J,a+=(e=t[2])*P,f+=e*C,s+=e*N,c+=e*O,u+=e*F,y+=e*I,l+=e*Z,w+=e*G,v+=e*D,p+=e*V,b+=e*X,g+=e*j,A+=e*q,_+=e*Q,U+=e*H,d+=e*J,f+=(e=t[3])*P,s+=e*C,c+=e*N,u+=e*O,y+=e*F,l+=e*I,w+=e*Z,v+=e*G,p+=e*D,b+=e*V,g+=e*X,A+=e*j,_+=e*q,U+=e*Q,d+=e*H,E+=e*J,s+=(e=t[4])*P,c+=e*C,u+=e*N,y+=e*O,l+=e*F,w+=e*I,v+=e*Z,p+=e*G,b+=e*D,g+=e*V,A+=e*X,_+=e*j,U+=e*q,d+=e*Q,E+=e*H,x+=e*J,c+=(e=t[5])*P,u+=e*C,y+=e*N,l+=e*O,w+=e*F,v+=e*I,p+=e*Z,b+=e*G,g+=e*D,A+=e*V,_+=e*X,U+=e*j,d+=e*q,E+=e*Q,x+=e*H,M+=e*J,u+=(e=t[6])*P,y+=e*C,l+=e*N,w+=e*O,v+=e*F,p+=e*I,b+=e*Z,g+=e*G,A+=e*D,_+=e*V,U+=e*X,d+=e*j,E+=e*q,x+=e*Q,M+=e*H,k+=e*J,y+=(e=t[7])*P,l+=e*C,w+=e*N,v+=e*O,p+=e*F,b+=e*I,g+=e*Z,A+=e*G,_+=e*D,U+=e*V,d+=e*X,E+=e*j,x+=e*q,M+=e*Q,k+=e*H,m+=e*J,l+=(e=t[8])*P,w+=e*C,v+=e*N,p+=e*O,b+=e*F,g+=e*I,A+=e*Z,_+=e*G,U+=e*D,d+=e*V,E+=e*X,x+=e*j,M+=e*q,k+=e*Q,m+=e*H,B+=e*J,w+=(e=t[9])*P,v+=e*C,p+=e*N,b+=e*O,g+=e*F,A+=e*I,_+=e*Z,U+=e*G,d+=e*D,E+=e*V,x+=e*X,M+=e*j,k+=e*q,m+=e*Q,B+=e*H,S+=e*J,v+=(e=t[10])*P,p+=e*C,b+=e*N,g+=e*O,A+=e*F,_+=e*I,U+=e*Z,d+=e*G,E+=e*D,x+=e*V,M+=e*X,k+=e*j,m+=e*q,B+=e*Q,S+=e*H,K+=e*J,p+=(e=t[11])*P,b+=e*C,g+=e*N,A+=e*O,_+=e*F,U+=e*I,d+=e*Z,E+=e*G,x+=e*D,M+=e*V,k+=e*X,m+=e*j,B+=e*q,S+=e*Q,K+=e*H,T+=e*J,b+=(e=t[12])*P,g+=e*C,A+=e*N,_+=e*O,U+=e*F,d+=e*I,E+=e*Z,x+=e*G,M+=e*D,k+=e*V,m+=e*X,B+=e*j,S+=e*q,K+=e*Q,T+=e*H,Y+=e*J,g+=(e=t[13])*P,A+=e*C,_+=e*N,U+=e*O,d+=e*F,E+=e*I,x+=e*Z,M+=e*G,k+=e*D,m+=e*V,B+=e*X,S+=e*j,K+=e*q,T+=e*Q,Y+=e*H,L+=e*J,A+=(e=t[14])*P,_+=e*C,U+=e*N,d+=e*O,E+=e*F,x+=e*I,M+=e*Z,k+=e*G,m+=e*D,B+=e*V,S+=e*X,K+=e*j,T+=e*q,Y+=e*Q,L+=e*H,R+=e*J,_+=(e=t[15])*P,h+=38*(d+=e*N),a+=38*(E+=e*O),f+=38*(x+=e*F),s+=38*(M+=e*I),c+=38*(k+=e*Z),u+=38*(m+=e*G),y+=38*(B+=e*D),l+=38*(S+=e*V),w+=38*(K+=e*X),v+=38*(T+=e*j),p+=38*(Y+=e*q),b+=38*(L+=e*Q),g+=38*(R+=e*H),A+=38*(z+=e*J),i=(e=(i+=38*(U+=e*C))+(o=1)+65535)-65536*(o=Math.floor(e/65536)),h=(e=h+o+65535)-65536*(o=Math.floor(e/65536)),a=(e=a+o+65535)-65536*(o=Math.floor(e/65536)),f=(e=f+o+65535)-65536*(o=Math.floor(e/65536)),s=(e=s+o+65535)-65536*(o=Math.floor(e/65536)),c=(e=c+o+65535)-65536*(o=Math.floor(e/65536)),u=(e=u+o+65535)-65536*(o=Math.floor(e/65536)),y=(e=y+o+65535)-65536*(o=Math.floor(e/65536)),l=(e=l+o+65535)-65536*(o=Math.floor(e/65536)),w=(e=w+o+65535)-65536*(o=Math.floor(e/65536)),v=(e=v+o+65535)-65536*(o=Math.floor(e/65536)),p=(e=p+o+65535)-65536*(o=Math.floor(e/65536)),b=(e=b+o+65535)-65536*(o=Math.floor(e/65536)),g=(e=g+o+65535)-65536*(o=Math.floor(e/65536)),A=(e=A+o+65535)-65536*(o=Math.floor(e/65536)),_=(e=_+o+65535)-65536*(o=Math.floor(e/65536)),i=(e=(i+=o-1+37*(o-1))+(o=1)+65535)-65536*(o=Math.floor(e/65536)),h=(e=h+o+65535)-65536*(o=Math.floor(e/65536)),a=(e=a+o+65535)-65536*(o=Math.floor(e/65536)),f=(e=f+o+65535)-65536*(o=Math.floor(e/65536)),s=(e=s+o+65535)-65536*(o=Math.floor(e/65536)),c=(e=c+o+65535)-65536*(o=Math.floor(e/65536)),u=(e=u+o+65535)-65536*(o=Math.floor(e/65536)),y=(e=y+o+65535)-65536*(o=Math.floor(e/65536)),l=(e=l+o+65535)-65536*(o=Math.floor(e/65536)),w=(e=w+o+65535)-65536*(o=Math.floor(e/65536)),v=(e=v+o+65535)-65536*(o=Math.floor(e/65536)),p=(e=p+o+65535)-65536*(o=Math.floor(e/65536)),b=(e=b+o+65535)-65536*(o=Math.floor(e/65536)),g=(e=g+o+65535)-65536*(o=Math.floor(e/65536)),A=(e=A+o+65535)-65536*(o=Math.floor(e/65536)),_=(e=_+o+65535)-65536*(o=Math.floor(e/65536)),i+=o-1+37*(o-1),r[0]=i,r[1]=h,r[2]=a,r[3]=f,r[4]=s,r[5]=c,r[6]=u,r[7]=y,r[8]=l,r[9]=w,r[10]=v,r[11]=p,r[12]=b,r[13]=g,r[14]=A,r[15]=_}function F(r,t){O(r,t,t)}function I(r,t){var e,o=n();for(e=0;e<16;e++)o[e]=t[e];for(e=253;e>=0;e--)F(o,o),2!==e&&4!==e&&O(o,o,t);for(e=0;e<16;e++)r[e]=o[e]}function Z(r,t){var e,o=n();for(e=0;e<16;e++)o[e]=t[e];for(e=250;e>=0;e--)F(o,o),1!==e&&O(o,o,t);for(e=0;e<16;e++)r[e]=o[e]}function G(r,t,e){var o,i,h=new Uint8Array(32),a=new Float64Array(80),s=n(),c=n(),u=n(),y=n(),l=n(),w=n();for(i=0;i<31;i++)h[i]=t[i];for(h[31]=127&t[31]|64,h[0]&=248,P(a,e),i=0;i<16;i++)c[i]=a[i],y[i]=s[i]=u[i]=0;for(s[0]=y[0]=1,i=254;i>=0;--i)Y(s,c,o=h[i>>>3]>>>(7&i)&1),Y(u,y,o),C(l,s,u),N(s,s,u),C(u,c,y),N(c,c,y),F(y,l),F(w,s),O(s,u,s),O(u,c,l),C(l,s,u),N(s,s,u),F(c,s),N(u,y,w),O(s,u,f),C(s,s,y),O(u,u,s),O(s,y,w),O(y,c,a),F(c,l),Y(s,c,o),Y(u,y,o);for(i=0;i<16;i++)a[i+16]=s[i],a[i+32]=u[i],a[i+48]=c[i],a[i+64]=y[i];var v=a.subarray(32),p=a.subarray(16);return I(v,v),O(p,p,v),L(r,p),0}function D(r,t){return G(r,t,i)}function V(r,t){return e(t,32),D(r,t)}function X(r,t,n){var e=new Uint8Array(32);return G(e,n,t),A(r,o,e,_)}M.prototype.blocks=function(r,t,n){for(var e,o,i,h,a,f,s,c,u,y,l,w,v,p,b,g,A,_,U,d=this.fin?0:2048,E=this.h[0],x=this.h[1],M=this.h[2],k=this.h[3],m=this.h[4],B=this.h[5],S=this.h[6],K=this.h[7],T=this.h[8],Y=this.h[9],L=this.r[0],R=this.r[1],z=this.r[2],P=this.r[3],C=this.r[4],N=this.r[5],O=this.r[6],F=this.r[7],I=this.r[8],Z=this.r[9];n>=16;)y=u=0,y+=(E+=8191&(e=255&r[t+0]|(255&r[t+1])<<8))*L,y+=(x+=8191&(e>>>13|(o=255&r[t+2]|(255&r[t+3])<<8)<<3))*(5*Z),y+=(M+=8191&(o>>>10|(i=255&r[t+4]|(255&r[t+5])<<8)<<6))*(5*I),y+=(k+=8191&(i>>>7|(h=255&r[t+6]|(255&r[t+7])<<8)<<9))*(5*F),u=(y+=(m+=8191&(h>>>4|(a=255&r[t+8]|(255&r[t+9])<<8)<<12))*(5*O))>>>13,y&=8191,y+=(B+=a>>>1&8191)*(5*N),y+=(S+=8191&(a>>>14|(f=255&r[t+10]|(255&r[t+11])<<8)<<2))*(5*C),y+=(K+=8191&(f>>>11|(s=255&r[t+12]|(255&r[t+13])<<8)<<5))*(5*P),y+=(T+=8191&(s>>>8|(c=255&r[t+14]|(255&r[t+15])<<8)<<8))*(5*z),l=u+=(y+=(Y+=c>>>5|d)*(5*R))>>>13,l+=E*R,l+=x*L,l+=M*(5*Z),l+=k*(5*I),u=(l+=m*(5*F))>>>13,l&=8191,l+=B*(5*O),l+=S*(5*N),l+=K*(5*C),l+=T*(5*P),u+=(l+=Y*(5*z))>>>13,l&=8191,w=u,w+=E*z,w+=x*R,w+=M*L,w+=k*(5*Z),u=(w+=m*(5*I))>>>13,w&=8191,w+=B*(5*F),w+=S*(5*O),w+=K*(5*N),w+=T*(5*C),v=u+=(w+=Y*(5*P))>>>13,v+=E*P,v+=x*z,v+=M*R,v+=k*L,u=(v+=m*(5*Z))>>>13,v&=8191,v+=B*(5*I),v+=S*(5*F),v+=K*(5*O),v+=T*(5*N),p=u+=(v+=Y*(5*C))>>>13,p+=E*C,p+=x*P,p+=M*z,p+=k*R,u=(p+=m*L)>>>13,p&=8191,p+=B*(5*Z),p+=S*(5*I),p+=K*(5*F),p+=T*(5*O),b=u+=(p+=Y*(5*N))>>>13,b+=E*N,b+=x*C,b+=M*P,b+=k*z,u=(b+=m*R)>>>13,b&=8191,b+=B*L,b+=S*(5*Z),b+=K*(5*I),b+=T*(5*F),g=u+=(b+=Y*(5*O))>>>13,g+=E*O,g+=x*N,g+=M*C,g+=k*P,u=(g+=m*z)>>>13,g&=8191,g+=B*R,g+=S*L,g+=K*(5*Z),g+=T*(5*I),A=u+=(g+=Y*(5*F))>>>13,A+=E*F,A+=x*O,A+=M*N,A+=k*C,u=(A+=m*P)>>>13,A&=8191,A+=B*z,A+=S*R,A+=K*L,A+=T*(5*Z),_=u+=(A+=Y*(5*I))>>>13,_+=E*I,_+=x*F,_+=M*O,_+=k*N,u=(_+=m*C)>>>13,_&=8191,_+=B*P,_+=S*z,_+=K*R,_+=T*L,U=u+=(_+=Y*(5*Z))>>>13,U+=E*Z,U+=x*I,U+=M*F,U+=k*O,u=(U+=m*N)>>>13,U&=8191,U+=B*C,U+=S*P,U+=K*z,U+=T*R,E=y=8191&(u=(u=((u+=(U+=Y*L)>>>13)<<2)+u|0)+(y&=8191)|0),x=l+=u>>>=13,M=w&=8191,k=v&=8191,m=p&=8191,B=b&=8191,S=g&=8191,K=A&=8191,T=_&=8191,Y=U&=8191,t+=16,n-=16;this.h[0]=E,this.h[1]=x,this.h[2]=M,this.h[3]=k,this.h[4]=m,this.h[5]=B,this.h[6]=S,this.h[7]=K,this.h[8]=T,this.h[9]=Y},M.prototype.finish=function(r,t){var n,e,o,i,h=new Uint16Array(10);if(this.leftover){for(i=this.leftover,this.buffer[i++]=1;i<16;i++)this.buffer[i]=0;this.fin=1,this.blocks(this.buffer,0,16)}for(n=this.h[1]>>>13,this.h[1]&=8191,i=2;i<10;i++)this.h[i]+=n,n=this.h[i]>>>13,this.h[i]&=8191;for(this.h[0]+=5*n,n=this.h[0]>>>13,this.h[0]&=8191,this.h[1]+=n,n=this.h[1]>>>13,this.h[1]&=8191,this.h[2]+=n,h[0]=this.h[0]+5,n=h[0]>>>13,h[0]&=8191,i=1;i<10;i++)h[i]=this.h[i]+n,n=h[i]>>>13,h[i]&=8191;for(h[9]-=8192,e=(1^n)-1,i=0;i<10;i++)h[i]&=e;for(e=~e,i=0;i<10;i++)this.h[i]=this.h[i]&e|h[i];for(this.h[0]=65535&(this.h[0]|this.h[1]<<13),this.h[1]=65535&(this.h[1]>>>3|this.h[2]<<10),this.h[2]=65535&(this.h[2]>>>6|this.h[3]<<7),this.h[3]=65535&(this.h[3]>>>9|this.h[4]<<4),this.h[4]=65535&(this.h[4]>>>12|this.h[5]<<1|this.h[6]<<14),this.h[5]=65535&(this.h[6]>>>2|this.h[7]<<11),this.h[6]=65535&(this.h[7]>>>5|this.h[8]<<8),this.h[7]=65535&(this.h[8]>>>8|this.h[9]<<5),o=this.h[0]+this.pad[0],this.h[0]=65535&o,i=1;i<8;i++)o=(this.h[i]+this.pad[i]|0)+(o>>>16)|0,this.h[i]=65535&o;r[t+0]=this.h[0]>>>0&255,r[t+1]=this.h[0]>>>8&255,r[t+2]=this.h[1]>>>0&255,r[t+3]=this.h[1]>>>8&255,r[t+4]=this.h[2]>>>0&255,r[t+5]=this.h[2]>>>8&255,r[t+6]=this.h[3]>>>0&255,r[t+7]=this.h[3]>>>8&255,r[t+8]=this.h[4]>>>0&255,r[t+9]=this.h[4]>>>8&255,r[t+10]=this.h[5]>>>0&255,r[t+11]=this.h[5]>>>8&255,r[t+12]=this.h[6]>>>0&255,r[t+13]=this.h[6]>>>8&255,r[t+14]=this.h[7]>>>0&255,r[t+15]=this.h[7]>>>8&255},M.prototype.update=function(r,t,n){var e,o;if(this.leftover){for((o=16-this.leftover)>n&&(o=n),e=0;e<o;e++)this.buffer[this.leftover+e]=r[t+e];if(n-=o,t+=o,this.leftover+=o,this.leftover<16)return;this.blocks(this.buffer,0,16),this.leftover=0}if(n>=16&&(o=n-n%16,this.blocks(r,t,o),t+=o,n-=o),n){for(e=0;e<n;e++)this.buffer[this.leftover+e]=r[t+e];this.leftover+=n}};var j=B,q=S;var Q=[1116352408,3609767458,1899447441,602891725,3049323471,3964484399,3921009573,2173295548,961987163,4081628472,1508970993,3053834265,2453635748,2937671579,2870763221,3664609560,3624381080,2734883394,310598401,1164996542,607225278,1323610764,1426881987,3590304994,1925078388,4068182383,2162078206,991336113,2614888103,633803317,3248222580,3479774868,3835390401,2666613458,4022224774,944711139,264347078,2341262773,604807628,2007800933,770255983,1495990901,1249150122,1856431235,1555081692,3175218132,1996064986,2198950837,2554220882,3999719339,2821834349,766784016,2952996808,2566594879,3210313671,3203337956,3336571891,1034457026,3584528711,2466948901,113926993,3758326383,338241895,168717936,666307205,1188179964,773529912,1546045734,1294757372,1522805485,1396182291,2643833823,1695183700,2343527390,1986661051,1014477480,2177026350,1206759142,2456956037,344077627,2730485921,1290863460,2820302411,3158454273,3259730800,3505952657,3345764771,106217008,3516065817,3606008344,3600352804,1432725776,4094571909,1467031594,275423344,851169720,430227734,3100823752,506948616,1363258195,659060556,3750685593,883997877,3785050280,958139571,3318307427,1322822218,3812723403,1537002063,2003034995,1747873779,3602036899,1955562222,1575990012,2024104815,1125592928,2227730452,2716904306,2361852424,442776044,2428436474,593698344,2756734187,3733110249,3204031479,2999351573,3329325298,3815920427,3391569614,3928383900,3515267271,566280711,3940187606,3454069534,4118630271,4000239992,116418474,1914138554,174292421,2731055270,289380356,3203993006,460393269,320620315,685471733,587496836,852142971,1086792851,1017036298,365543100,1126000580,2618297676,1288033470,3409855158,1501505948,4234509866,1607167915,987167468,1816402316,1246189591];function H(r,t,n,e){for(var o,i,h,a,f,s,c,u,y,l,w,v,p,b,g,A,_,U,d,E,x,M,k,m,B,S,K=new Int32Array(16),T=new Int32Array(16),Y=r[0],L=r[1],R=r[2],z=r[3],P=r[4],C=r[5],N=r[6],O=r[7],F=t[0],I=t[1],Z=t[2],G=t[3],D=t[4],V=t[5],X=t[6],j=t[7],q=0;e>=128;){for(d=0;d<16;d++)E=8*d+q,K[d]=n[E+0]<<24|n[E+1]<<16|n[E+2]<<8|n[E+3],T[d]=n[E+4]<<24|n[E+5]<<16|n[E+6]<<8|n[E+7];for(d=0;d<80;d++)if(o=Y,i=L,h=R,a=z,f=P,s=C,c=N,O,y=F,l=I,w=Z,v=G,p=D,b=V,g=X,j,k=65535&(M=j),m=M>>>16,B=65535&(x=O),S=x>>>16,k+=65535&(M=(D>>>14|P<<18)^(D>>>18|P<<14)^(P>>>9|D<<23)),m+=M>>>16,B+=65535&(x=(P>>>14|D<<18)^(P>>>18|D<<14)^(D>>>9|P<<23)),S+=x>>>16,k+=65535&(M=D&V^~D&X),m+=M>>>16,B+=65535&(x=P&C^~P&N),S+=x>>>16,x=Q[2*d],k+=65535&(M=Q[2*d+1]),m+=M>>>16,B+=65535&x,S+=x>>>16,x=K[d%16],m+=(M=T[d%16])>>>16,B+=65535&x,S+=x>>>16,B+=(m+=(k+=65535&M)>>>16)>>>16,k=65535&(M=U=65535&k|m<<16),m=M>>>16,B=65535&(x=_=65535&B|(S+=B>>>16)<<16),S=x>>>16,k+=65535&(M=(F>>>28|Y<<4)^(Y>>>2|F<<30)^(Y>>>7|F<<25)),m+=M>>>16,B+=65535&(x=(Y>>>28|F<<4)^(F>>>2|Y<<30)^(F>>>7|Y<<25)),S+=x>>>16,m+=(M=F&I^F&Z^I&Z)>>>16,B+=65535&(x=Y&L^Y&R^L&R),S+=x>>>16,u=65535&(B+=(m+=(k+=65535&M)>>>16)>>>16)|(S+=B>>>16)<<16,A=65535&k|m<<16,k=65535&(M=v),m=M>>>16,B=65535&(x=a),S=x>>>16,m+=(M=U)>>>16,B+=65535&(x=_),S+=x>>>16,L=o,R=i,z=h,P=a=65535&(B+=(m+=(k+=65535&M)>>>16)>>>16)|(S+=B>>>16)<<16,C=f,N=s,O=c,Y=u,I=y,Z=l,G=w,D=v=65535&k|m<<16,V=p,X=b,j=g,F=A,d%16==15)for(E=0;E<16;E++)x=K[E],k=65535&(M=T[E]),m=M>>>16,B=65535&x,S=x>>>16,x=K[(E+9)%16],k+=65535&(M=T[(E+9)%16]),m+=M>>>16,B+=65535&x,S+=x>>>16,_=K[(E+1)%16],k+=65535&(M=((U=T[(E+1)%16])>>>1|_<<31)^(U>>>8|_<<24)^(U>>>7|_<<25)),m+=M>>>16,B+=65535&(x=(_>>>1|U<<31)^(_>>>8|U<<24)^_>>>7),S+=x>>>16,_=K[(E+14)%16],m+=(M=((U=T[(E+14)%16])>>>19|_<<13)^(_>>>29|U<<3)^(U>>>6|_<<26))>>>16,B+=65535&(x=(_>>>19|U<<13)^(U>>>29|_<<3)^_>>>6),S+=x>>>16,S+=(B+=(m+=(k+=65535&M)>>>16)>>>16)>>>16,K[E]=65535&B|S<<16,T[E]=65535&k|m<<16;k=65535&(M=F),m=M>>>16,B=65535&(x=Y),S=x>>>16,x=r[0],m+=(M=t[0])>>>16,B+=65535&x,S+=x>>>16,S+=(B+=(m+=(k+=65535&M)>>>16)>>>16)>>>16,r[0]=Y=65535&B|S<<16,t[0]=F=65535&k|m<<16,k=65535&(M=I),m=M>>>16,B=65535&(x=L),S=x>>>16,x=r[1],m+=(M=t[1])>>>16,B+=65535&x,S+=x>>>16,S+=(B+=(m+=(k+=65535&M)>>>16)>>>16)>>>16,r[1]=L=65535&B|S<<16,t[1]=I=65535&k|m<<16,k=65535&(M=Z),m=M>>>16,B=65535&(x=R),S=x>>>16,x=r[2],m+=(M=t[2])>>>16,B+=65535&x,S+=x>>>16,S+=(B+=(m+=(k+=65535&M)>>>16)>>>16)>>>16,r[2]=R=65535&B|S<<16,t[2]=Z=65535&k|m<<16,k=65535&(M=G),m=M>>>16,B=65535&(x=z),S=x>>>16,x=r[3],m+=(M=t[3])>>>16,B+=65535&x,S+=x>>>16,S+=(B+=(m+=(k+=65535&M)>>>16)>>>16)>>>16,r[3]=z=65535&B|S<<16,t[3]=G=65535&k|m<<16,k=65535&(M=D),m=M>>>16,B=65535&(x=P),S=x>>>16,x=r[4],m+=(M=t[4])>>>16,B+=65535&x,S+=x>>>16,S+=(B+=(m+=(k+=65535&M)>>>16)>>>16)>>>16,r[4]=P=65535&B|S<<16,t[4]=D=65535&k|m<<16,k=65535&(M=V),m=M>>>16,B=65535&(x=C),S=x>>>16,x=r[5],m+=(M=t[5])>>>16,B+=65535&x,S+=x>>>16,S+=(B+=(m+=(k+=65535&M)>>>16)>>>16)>>>16,r[5]=C=65535&B|S<<16,t[5]=V=65535&k|m<<16,k=65535&(M=X),m=M>>>16,B=65535&(x=N),S=x>>>16,x=r[6],m+=(M=t[6])>>>16,B+=65535&x,S+=x>>>16,S+=(B+=(m+=(k+=65535&M)>>>16)>>>16)>>>16,r[6]=N=65535&B|S<<16,t[6]=X=65535&k|m<<16,k=65535&(M=j),m=M>>>16,B=65535&(x=O),S=x>>>16,x=r[7],m+=(M=t[7])>>>16,B+=65535&x,S+=x>>>16,S+=(B+=(m+=(k+=65535&M)>>>16)>>>16)>>>16,r[7]=O=65535&B|S<<16,t[7]=j=65535&k|m<<16,q+=128,e-=128}return e}function J(r,t,n){var e,o=new Int32Array(8),i=new Int32Array(8),h=new Uint8Array(256),a=n;for(o[0]=1779033703,o[1]=3144134277,o[2]=1013904242,o[3]=2773480762,o[4]=1359893119,o[5]=2600822924,o[6]=528734635,o[7]=1541459225,i[0]=4089235720,i[1]=2227873595,i[2]=4271175723,i[3]=1595750129,i[4]=2917565137,i[5]=725511199,i[6]=4215389547,i[7]=327033209,H(o,i,t,n),n%=128,e=0;e<n;e++)h[e]=t[a-n+e];for(h[n]=128,h[(n=256-128*(n<112?1:0))-9]=0,w(h,n-8,a/536870912|0,a<<3),H(o,i,h,n),e=0;e<8;e++)w(r,8*e,o[e],i[e]);return 0}function W(r,t){var e=n(),o=n(),i=n(),h=n(),a=n(),f=n(),s=n(),u=n(),y=n();N(e,r[1],r[0]),N(y,t[1],t[0]),O(e,e,y),C(o,r[0],r[1]),C(y,t[0],t[1]),O(o,o,y),O(i,r[3],t[3]),O(i,i,c),O(h,r[2],t[2]),C(h,h,h),N(a,o,e),N(f,h,i),C(s,h,i),C(u,o,e),O(r[0],a,f),O(r[1],u,s),O(r[2],s,f),O(r[3],a,u)}function $(r,t,n){var e;for(e=0;e<4;e++)Y(r[e],t[e],n)}function rr(r,t){var e=n(),o=n(),i=n();I(i,t[2]),O(e,t[0],i),O(o,t[1],i),L(r,o),r[31]^=z(e)<<7}function tr(r,t,n){var e,o;for(K(r[0],h),K(r[1],a),K(r[2],a),K(r[3],h),o=255;o>=0;--o)$(r,t,e=n[o/8|0]>>(7&o)&1),W(t,r),W(r,r),$(r,t,e)}function nr(r,t){var e=[n(),n(),n(),n()];K(e[0],u),K(e[1],y),K(e[2],a),O(e[3],u,y),tr(r,e,t)}function er(r,t,o){var i,h=new Uint8Array(64),a=[n(),n(),n(),n()];for(o||e(t,32),J(h,t,32),h[0]&=248,h[31]&=127,h[31]|=64,nr(a,h),rr(r,a),i=0;i<32;i++)t[i+32]=r[i];return 0}var or=new Float64Array([237,211,245,92,26,99,18,88,214,156,247,162,222,249,222,20,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,16]);function ir(r,t){var n,e,o,i;for(e=63;e>=32;--e){for(n=0,o=e-32,i=e-12;o<i;++o)t[o]+=n-16*t[e]*or[o-(e-32)],n=Math.floor((t[o]+128)/256),t[o]-=256*n;t[o]+=n,t[e]=0}for(n=0,o=0;o<32;o++)t[o]+=n-(t[31]>>4)*or[o],n=t[o]>>8,t[o]&=255;for(o=0;o<32;o++)t[o]-=n*or[o];for(e=0;e<32;e++)t[e+1]+=t[e]>>8,r[e]=255&t[e]}function hr(r){var t,n=new Float64Array(64);for(t=0;t<64;t++)n[t]=r[t];for(t=0;t<64;t++)r[t]=0;ir(r,n)}function ar(r,t,e,o){var i,h,a=new Uint8Array(64),f=new Uint8Array(64),s=new Uint8Array(64),c=new Float64Array(64),u=[n(),n(),n(),n()];J(a,o,32),a[0]&=248,a[31]&=127,a[31]|=64;var y=e+64;for(i=0;i<e;i++)r[64+i]=t[i];for(i=0;i<32;i++)r[32+i]=a[32+i];for(J(s,r.subarray(32),e+32),hr(s),nr(u,s),rr(r,u),i=32;i<64;i++)r[i]=o[i];for(J(f,r,e+64),hr(f),i=0;i<64;i++)c[i]=0;for(i=0;i<32;i++)c[i]=s[i];for(i=0;i<32;i++)for(h=0;h<32;h++)c[i+h]+=f[i]*a[h];return ir(r.subarray(32),c),y}function fr(r,t,e,o){var i,f=new Uint8Array(32),c=new Uint8Array(64),u=[n(),n(),n(),n()],y=[n(),n(),n(),n()];if(e<64)return-1;if(function(r,t){var e=n(),o=n(),i=n(),f=n(),c=n(),u=n(),y=n();return K(r[2],a),P(r[1],t),F(i,r[1]),O(f,i,s),N(i,i,r[2]),C(f,r[2],f),F(c,f),F(u,c),O(y,u,c),O(e,y,i),O(e,e,f),Z(e,e),O(e,e,i),O(e,e,f),O(e,e,f),O(r[0],e,f),F(o,r[0]),O(o,o,f),R(o,i)&&O(r[0],r[0],l),F(o,r[0]),O(o,o,f),R(o,i)?-1:(z(r[0])===t[31]>>7&&N(r[0],h,r[0]),O(r[3],r[0],r[1]),0)}(y,o))return-1;for(i=0;i<e;i++)r[i]=t[i];for(i=0;i<32;i++)r[i+32]=o[i];if(J(c,r,e),hr(c),tr(u,y,c),nr(y,t.subarray(32)),W(u,y),rr(f,u),e-=64,b(t,0,f,0)){for(i=0;i<e;i++)r[i]=0;return-1}for(i=0;i<e;i++)r[i]=t[i+64];return e}var sr=32,cr=24,ur=16,yr=32,lr=32,wr=cr,vr=64,pr=32,br=64;function gr(r,t){if(r.length!==sr)throw new Error("bad key size");if(t.length!==cr)throw new Error("bad nonce size")}function Ar(){for(var r=0;r<arguments.length;r++)if(!(arguments[r]instanceof Uint8Array))throw new TypeError("unexpected type, use Uint8Array")}function _r(r){for(var t=0;t<r.length;t++)r[t]=0}t.lowlevel={crypto_core_hsalsa20:A,crypto_stream_xor:x,crypto_stream:E,crypto_stream_salsa20_xor:U,crypto_stream_salsa20:d,crypto_onetimeauth:k,crypto_onetimeauth_verify:m,crypto_verify_16:p,crypto_verify_32:b,crypto_secretbox:B,crypto_secretbox_open:S,crypto_scalarmult:G,crypto_scalarmult_base:D,crypto_box_beforenm:X,crypto_box_afternm:j,crypto_box:function(r,t,n,e,o,i){var h=new Uint8Array(32);return X(h,o,i),j(r,t,n,e,h)},crypto_box_open:function(r,t,n,e,o,i){var h=new Uint8Array(32);return X(h,o,i),q(r,t,n,e,h)},crypto_box_keypair:V,crypto_hash:J,crypto_sign:ar,crypto_sign_keypair:er,crypto_sign_open:fr,crypto_secretbox_KEYBYTES:sr,crypto_secretbox_NONCEBYTES:cr,crypto_secretbox_ZEROBYTES:32,crypto_secretbox_BOXZEROBYTES:ur,crypto_scalarmult_BYTES:32,crypto_scalarmult_SCALARBYTES:32,crypto_box_PUBLICKEYBYTES:yr,crypto_box_SECRETKEYBYTES:lr,crypto_box_BEFORENMBYTES:32,crypto_box_NONCEBYTES:wr,crypto_box_ZEROBYTES:32,crypto_box_BOXZEROBYTES:16,crypto_sign_BYTES:vr,crypto_sign_PUBLICKEYBYTES:pr,crypto_sign_SECRETKEYBYTES:br,crypto_sign_SEEDBYTES:32,crypto_hash_BYTES:64,gf:n,D:s,L:or,pack:rr,pack25519:L,unpack25519:P,M:O,A:C,S:F,Z:N,pow2523:Z,add:W,set25519:K,modL:ir,scalarmult:tr,scalarbase:nr},t.randomBytes=function(r){var t=new Uint8Array(r);return e(t,r),t},t.secretbox=function(r,t,n){Ar(r,t,n),gr(n,t);for(var e=new Uint8Array(32+r.length),o=new Uint8Array(e.length),i=0;i<r.length;i++)e[i+32]=r[i];return B(o,e,e.length,t,n),o.subarray(ur)},t.secretbox.open=function(r,t,n){Ar(r,t,n),gr(n,t);for(var e=new Uint8Array(ur+r.length),o=new Uint8Array(e.length),i=0;i<r.length;i++)e[i+ur]=r[i];return e.length<32||0!==S(o,e,e.length,t,n)?null:o.subarray(32)},t.secretbox.keyLength=sr,t.secretbox.nonceLength=cr,t.secretbox.overheadLength=ur,t.scalarMult=function(r,t){if(Ar(r,t),32!==r.length)throw new Error("bad n size");if(32!==t.length)throw new Error("bad p size");var n=new Uint8Array(32);return G(n,r,t),n},t.scalarMult.base=function(r){if(Ar(r),32!==r.length)throw new Error("bad n size");var t=new Uint8Array(32);return D(t,r),t},t.scalarMult.scalarLength=32,t.scalarMult.groupElementLength=32,t.box=function(r,n,e,o){var i=t.box.before(e,o);return t.secretbox(r,n,i)},t.box.before=function(r,t){Ar(r,t),function(r,t){if(r.length!==yr)throw new Error("bad public key size");if(t.length!==lr)throw new Error("bad secret key size")}(r,t);var n=new Uint8Array(32);return X(n,r,t),n},t.box.after=t.secretbox,t.box.open=function(r,n,e,o){var i=t.box.before(e,o);return t.secretbox.open(r,n,i)},t.box.open.after=t.secretbox.open,t.box.keyPair=function(){var r=new Uint8Array(yr),t=new Uint8Array(lr);return V(r,t),{publicKey:r,secretKey:t}},t.box.keyPair.fromSecretKey=function(r){if(Ar(r),r.length!==lr)throw new Error("bad secret key size");var t=new Uint8Array(yr);return D(t,r),{publicKey:t,secretKey:new Uint8Array(r)}},t.box.publicKeyLength=yr,t.box.secretKeyLength=lr,t.box.sharedKeyLength=32,t.box.nonceLength=wr,t.box.overheadLength=t.secretbox.overheadLength,t.sign=function(r,t){if(Ar(r,t),t.length!==br)throw new Error("bad secret key size");var n=new Uint8Array(vr+r.length);return ar(n,r,r.length,t),n},t.sign.open=function(r,t){if(Ar(r,t),t.length!==pr)throw new Error("bad public key size");var n=new Uint8Array(r.length),e=fr(n,r,r.length,t);if(e<0)return null;for(var o=new Uint8Array(e),i=0;i<o.length;i++)o[i]=n[i];return o},t.sign.detached=function(r,n){for(var e=t.sign(r,n),o=new Uint8Array(vr),i=0;i<o.length;i++)o[i]=e[i];return o},t.sign.detached.verify=function(r,t,n){if(Ar(r,t,n),t.length!==vr)throw new Error("bad signature size");if(n.length!==pr)throw new Error("bad public key size");var e,o=new Uint8Array(vr+r.length),i=new Uint8Array(vr+r.length);for(e=0;e<vr;e++)o[e]=t[e];for(e=0;e<r.length;e++)o[e+vr]=r[e];return fr(i,o,o.length,n)>=0},t.sign.keyPair=function(){var r=new Uint8Array(pr),t=new Uint8Array(br);return er(r,t),{publicKey:r,secretKey:t}},t.sign.keyPair.fromSecretKey=function(r){if(Ar(r),r.length!==br)throw new Error("bad secret key size");for(var t=new Uint8Array(pr),n=0;n<t.length;n++)t[n]=r[32+n];return{publicKey:t,secretKey:new Uint8Array(r)}},t.sign.keyPair.fromSeed=function(r){if(Ar(r),32!==r.length)throw new Error("bad seed size");for(var t=new Uint8Array(pr),n=new Uint8Array(br),e=0;e<32;e++)n[e]=r[e];return er(t,n,!0),{publicKey:t,secretKey:n}},t.sign.publicKeyLength=pr,t.sign.secretKeyLength=br,t.sign.seedLength=32,t.sign.signatureLength=vr,t.hash=function(r){Ar(r);var t=new Uint8Array(64);return J(t,r,r.length),t},t.hash.hashLength=64,t.verify=function(r,t){return Ar(r,t),0!==r.length&&0!==t.length&&(r.length===t.length&&0===v(r,0,t,0,r.length))},t.setPRNG=function(r){e=r},function(){var n="undefined"!=typeof self?self.crypto||self.msCrypto:null;if(n&&n.getRandomValues){t.setPRNG((function(r,t){var e,o=new Uint8Array(t);for(e=0;e<t;e+=65536)n.getRandomValues(o.subarray(e,e+Math.min(t-e,65536)));for(e=0;e<t;e++)r[e]=o[e];_r(o)}))}else(n=r("kjyEk"))&&n.randomBytes&&t.setPRNG((function(r,t){var e,o=n.randomBytes(t);for(e=0;e<t;e++)r[e]=o[e];_r(o)}))}()}(t.exports?t.exports:self.nacl=self.nacl||{})}));
//# sourceMappingURL=solanaProvider.esm.18fb1fa0.js.map
