

`),i=s(a[0])},l(n){e=c(n,`Course Processor. Nothing to see here.


`),i=c(n,a[0])},m(n,o){l(n,e,o),l(n,i,o)},p:r,i:r,o:r,d(n){n&&(S(e),S(i))}}}let I=/[A-Z]{2,4} [0-9]{2,4}W?/;function A(a){let e=[],i=Object.keys(a);for(let n=0;n<i.length;n++)e.push({req:i[n],satisfied_by:a[i[n]]});return e}function g(a){let e=a.match(I)[0],i=a.match(/#(.*)/)[1],n=e+" "+i;return{id:e.toLowerCase().replace(/\s/g,""),text:n,num:e,desc:i}}function p(a){let e=[];for(let i=0;i<a.length;i++){let n=g(a[i]),o=!1;for(let t=0;t<e.length;t++)e[t].id==n.id&&(o=!0);o||e.push(n)}return e}function y(a){let e=A(P),i=[];for(let o=0;o<e.length;o++){let t=e[o].req,d=p(e[o].satisfied_by);i.push({req:t,courses:d})}return i={requirements:i},[JSON.stringify(i)]}class M extends u{constructor(e){super(),h(this,e,y,m,C,{})}}export{M as component};