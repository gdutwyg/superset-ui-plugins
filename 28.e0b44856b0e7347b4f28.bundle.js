(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{1042:function(n,t,e){"use strict";e.d(t,"a",(function(){return u}));var r=e(0),a=e.n(r),o=e(1),s=e.n(o);function i(){return(i=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r])}return n}).apply(this,arguments)}function c(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function u(n,t){class e extends s.a.Component{constructor(n){super(n),c(this,"container",void 0),this.setContainerRef=this.setContainerRef.bind(this)}componentDidMount(){this.execute()}componentDidUpdate(){this.execute()}componentWillUnmount(){this.container=void 0,(null==t?void 0:t.componentWillUnmount)&&t.componentWillUnmount.bind(this)()}setContainerRef(n){this.container=n}execute(){this.container&&n(this.container,this.props)}render(){const{id:n,className:t}=this.props;return s.a.createElement("div",{ref:this.setContainerRef,id:n,className:t})}}c(e,"propTypes",{id:a.a.string,className:a.a.string});const r=e;return n.displayName&&(r.displayName=n.displayName),n.propTypes&&(r.propTypes=i({},r.propTypes,{},n.propTypes)),n.defaultProps&&(r.defaultProps=n.defaultProps),e}},1557:function(n,t,e){var r=e(234),a=e(1558);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[n.i,a,""]]);var o={insert:"head",singleton:!1},s=(r(a,o),a.locals?a.locals:{});n.exports=s},1558:function(n,t,e){(t=e(235)(!1)).push([n.i,'/**\n * Licensed to the Apache Software Foundation (ASF) under one\n * or more contributor license agreements.  See the NOTICE file\n * distributed with this work for additional information\n * regarding copyright ownership.  The ASF licenses this file\n * to you under the Apache License, Version 2.0 (the\n * "License"); you may not use this file except in compliance\n * with the License.  You may obtain a copy of the License at\n *\n *   http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing,\n * software distributed under the License is distributed on an\n * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY\n * KIND, either express or implied.  See the License for the\n * specific language governing permissions and limitations\n * under the License.\n */\n\n.superset-legacy-chart-sankey .node rect {\n  cursor: move;\n  fill-opacity: 0.9;\n  shape-rendering: crispEdges;\n}\n\n.superset-legacy-chart-sankey .node text {\n  pointer-events: none;\n  text-shadow: 0 1px 0 #fff;\n}\n\n.superset-legacy-chart-sankey .link {\n  fill: none;\n  stroke: #000;\n  stroke-opacity: 0.2;\n}\n\n.superset-legacy-chart-sankey .link:hover {\n  stroke-opacity: 0.5;\n}\n\n.superset-legacy-chart-sankey-tooltip {\n  position: absolute;\n  width: auto;\n  background: #ddd;\n  padding: 10px;\n  font-size: 12px;\n  font-weight: 200;\n  color: #333;\n  border: 1px solid #fff;\n  text-align: center;\n  pointer-events: none;\n}\n',""]),n.exports=t},2192:function(n,t,e){"use strict";e.r(t);var r=e(1042),a=e(80),o=e.n(a),s=e(0),i=e.n(s),c=function(n,t){return n<t?-1:n>t?1:n>=t?0:NaN};var u,l;1===(u=c).length&&(l=u,u=function(n,t){return c(l(n),t)});var f=Array.prototype;f.slice,f.map,Math.sqrt(50),Math.sqrt(10),Math.sqrt(2);var p=function(n,t){var e,r,a=n.length,o=-1;if(null==t){for(;++o<a;)if(null!=(e=n[o])&&e>=e)for(r=e;++o<a;)null!=(e=n[o])&&r>e&&(r=e)}else for(;++o<a;)if(null!=(e=t(n[o],o,n))&&e>=e)for(r=e;++o<a;)null!=(e=t(n[o],o,n))&&r>e&&(r=e);return r},d=function(n,t){var e,r=n.length,a=-1,o=0;if(null==t)for(;++a<r;)(e=+n[a])&&(o+=e);else for(;++a<r;)(e=+t(n[a],a,n))&&(o+=e);return o};var h=e(139),y=e(138),g=function(){var n={},t=24,e=8,r=[1,1],a=[],o=[];function s(){function n(n,t){return n.source.y-t.source.y}function t(n,t){return n.target.y-t.target.y}a.forEach((function(e){e.sourceLinks.sort(t),e.targetLinks.sort(n)})),a.forEach((function(n){var t=0,e=0;n.sourceLinks.forEach((function(n){n.sy=t,t+=n.dy})),n.targetLinks.forEach((function(n){n.ty=e,e+=n.dy}))}))}function i(n){return n.y+n.dy/2}function u(n){return n.value}return n.nodeWidth=function(e){return arguments.length?(t=+e,n):t},n.nodePadding=function(t){return arguments.length?(e=+t,n):e},n.nodes=function(t){return arguments.length?(a=t,n):a},n.links=function(t){return arguments.length?(o=t,n):o},n.size=function(t){return arguments.length?(r=t,n):r},n.layout=function(l){return a.forEach((function(n){n.sourceLinks=[],n.targetLinks=[]})),o.forEach((function(n){var t=n.source,e=n.target;"number"==typeof t&&(t=n.source=a[n.source]),"number"==typeof e&&(e=n.target=a[n.target]),t.sourceLinks.push(n),e.targetLinks.push(n)})),a.forEach((function(n){n.value=Math.max(d(n.sourceLinks,u),d(n.targetLinks,u))})),function(){var n,e=a,o=0;for(;e.length;)n=[],e.forEach((function(e){e.x=o,e.dx=t,e.sourceLinks.forEach((function(t){n.indexOf(t.target)<0&&n.push(t.target)}))})),e=n,++o;(function(n){a.forEach((function(t){t.sourceLinks.length||(t.x=n-1)}))})(o),s=(r[0]-t)/(o-1),a.forEach((function(n){n.x*=s}));var s}(),function(n){var t=Object(h.nest)().key((function(n){return n.x})).sortKeys(c).entries(a).map((function(n){return n.values}));s=p(t,(function(n){return(r[1]-(n.length-1)*e)/d(n,u)})),t.forEach((function(n){n.forEach((function(n,t){n.y=t,n.dy=n.value*s}))})),o.forEach((function(n){n.dy=n.value*s})),g();var s;for(var l=1;n>0;--n)y(l*=.99),g(),f(l),g();function f(n){function e(n){return i(n.source)*n.value}t.forEach((function(t){t.forEach((function(t){if(t.targetLinks.length){var r=d(t.targetLinks,e)/d(t.targetLinks,u);t.y+=(r-i(t))*n}}))}))}function y(n){function e(n){return i(n.target)*n.value}t.slice().reverse().forEach((function(t){t.forEach((function(t){if(t.sourceLinks.length){var r=d(t.sourceLinks,e)/d(t.sourceLinks,u);t.y+=(r-i(t))*n}}))}))}function g(){t.forEach((function(n){var t,a,o,s=0,i=n.length;for(n.sort(v),o=0;o<i;++o)(a=s-(t=n[o]).y)>0&&(t.y+=a),s=t.y+t.dy+e;if((a=s-e-r[1])>0)for(s=t.y-=a,o=i-2;o>=0;--o)(a=(t=n[o]).y+t.dy+e-s)>0&&(t.y-=a),s=t.y}))}function v(n,t){return n.y-t.y}}(l),s(),n},n.relayout=function(){return s(),n},n.link=function(){var n=.5;function t(t){var e=t.source.x+t.source.dx,r=t.target.x,a=Object(y.a)(e,r),o=a(n),s=a(1-n),i=t.source.y+t.sy+t.dy/2,c=t.target.y+t.ty+t.dy/2;return"M"+e+","+i+"C"+o+","+i+" "+s+","+c+" "+r+","+c}return t.curvature=function(e){return arguments.length?(n=+e,t):n},t},n},v=e(97),m=e(216),k=e(94);e(1557);function x(){return(x=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r])}return n}).apply(this,arguments)}const b={data:i.a.arrayOf(i.a.shape({source:i.a.string,target:i.a.string,value:i.a.number})),width:i.a.number,height:i.a.number,colorScheme:i.a.string},L=Object(m.c)(k.a.FLOAT);function w(n,t){const{data:e,width:r,height:a,colorScheme:s}=t,i=o.a.select(n);i.classed("superset-legacy-chart-sankey",!0);const c=5,u=5,l=5,f=5,p=r-f-u,d=a-c-l;i.selectAll("*").remove();const h=i.append("svg").attr("width",p+f+u).attr("height",d+c+l).append("g").attr("transform","translate("+f+","+c+")"),y=i.append("div").attr("class","sankey-tooltip").style("opacity",0),m=v.CategoricalColorNamespace.getScale(s),k=g().nodeWidth(15).nodePadding(10).size([p,d]),b=k.link();let w={};const E=e.map(n=>{const t=x({},n);return t.source=w[t.source]||(w[t.source]={name:t.source}),t.target=w[t.target]||(w[t.target]={name:t.target}),t.value=Number(t.value),t});function N(n){y.html(()=>function(n){let t;if(n.sourceLinks)t=n.name+" Value: <span class='emph'>"+L(n.value)+"</span>";else{const e=L(n.value),r=o.a.round(n.value/n.source.value*100,1),a=o.a.round(n.value/n.target.value*100,1);t=["<div class=''>Path Value: <span class='emph'>",e,"</span></div>","<div class='percents'>","<span class='emph'>",Number.isFinite(r)?r:"100","%</span> of ",n.source.name,"<br/>","<span class='emph'>"+(Number.isFinite(a)?a:"--")+"%</span> of ",n.target.name,"</div>"].join("")}return t}(n)).transition().duration(200).style("left",o.a.event.offsetX+10+"px").style("top",o.a.event.offsetY+10+"px").style("opacity",.95)}function O(){y.transition().duration(100).style("opacity",0)}w=o.a.values(w),k.nodes(w).links(E).layout(32);const S=h.append("g").selectAll(".link").data(E).enter().append("path").attr("class","link").attr("d",b).style("stroke-width",n=>Math.max(1,n.dy)).sort((n,t)=>t.dy-n.dy).on("mouseover",N).on("mouseout",O);const A=h.append("g").selectAll(".node").data(w).enter().append("g").attr("class","node").attr("transform",n=>"translate("+n.x+","+n.y+")").call(o.a.behavior.drag().origin(n=>n).on("dragstart",(function(){this.parentNode.append(this)})).on("drag",(function(n){o.a.select(this).attr("transform","translate("+n.x+","+(n.y=Math.max(0,Math.min(a-n.dy,o.a.event.y)))+")"),k.relayout(),S.attr("d",b)})));A.append("rect").attr("height",n=>n.dy>5?n.dy:5).attr("width",k.nodeWidth()).style("fill",n=>{const t=n.name||"N/A";return n.color=m(t.replace(/ .*/,"")),n.color}).style("stroke",n=>o.a.rgb(n.color).darker(2)).on("mouseover",N).on("mouseout",O),A.append("text").attr("x",-6).attr("y",n=>n.dy/2).attr("dy",".35em").attr("text-anchor","end").attr("transform",null).text(n=>n.name).filter(n=>n.x<p/2).attr("x",6+k.nodeWidth()).attr("text-anchor","start")}w.displayName="Sankey",w.propTypes=b;var E=w;t.default=Object(r.a)(E)}}]);