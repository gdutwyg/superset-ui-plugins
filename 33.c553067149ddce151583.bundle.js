(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{1993:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var lib=__webpack_require__(1),d3=__webpack_require__(330),d3_default=__webpack_require__.n(d3),prop_types=__webpack_require__(2),prop_types_default=__webpack_require__.n(prop_types),color_lib=__webpack_require__(95),number_format_lib=__webpack_require__(176);const propTypes={data:prop_types_default.a.shape({matrix:prop_types_default.a.arrayOf(prop_types_default.a.arrayOf(prop_types_default.a.number)),nodes:prop_types_default.a.arrayOf(prop_types_default.a.string)}),width:prop_types_default.a.number,height:prop_types_default.a.number,colorScheme:prop_types_default.a.string,numberFormat:prop_types_default.a.string};function Chord(element,props){const{data:data,width:width,height:height,numberFormat:numberFormat,colorScheme:colorScheme}=props;element.innerHTML="";const div=d3_default.a.select(element);div.classed("superset-legacy-chart-chord",!0);const{nodes:nodes,matrix:matrix}=data,f=Object(number_format_lib.getNumberFormatter)(numberFormat),colorFn=color_lib.CategoricalColorNamespace.getScale(colorScheme),outerRadius=Math.min(width,height)/2-10,innerRadius=outerRadius-24;let chord;const arc=d3_default.a.svg.arc().innerRadius(innerRadius).outerRadius(outerRadius),layout=d3_default.a.layout.chord().padding(.04).sortSubgroups(d3_default.a.descending).sortChords(d3_default.a.descending),path=d3_default.a.svg.chord().radius(innerRadius),svg=div.append("svg").attr("width",width).attr("height",height).on("mouseout",()=>chord.classed("fade",!1)).append("g").attr("id","circle").attr("transform",`translate(${width/2}, ${height/2})`);svg.append("circle").attr("r",outerRadius),layout.matrix(matrix);const group=svg.selectAll(".group").data(layout.groups).enter().append("g").attr("class","group").on("mouseover",(d,i)=>{chord.classed("fade",p=>p.source.index!==i&&p.target.index!==i)});group.append("title").text((d,i)=>`${nodes[i]}: ${f(d.value)}`);const groupPath=group.append("path").attr("id",(d,i)=>`group${i}`).attr("d",arc).style("fill",(d,i)=>colorFn(nodes[i])),groupText=group.append("text").attr("x",6).attr("dy",15);groupText.append("textPath").attr("xlink:href",(d,i)=>`#group${i}`).text((d,i)=>nodes[i]),groupText.filter(function(d,i){return groupPath[0][i].getTotalLength()/2-16<this.getComputedTextLength()}).remove(),(chord=svg.selectAll(".chord").data(layout.chords).enter().append("path").attr("class","chord").on("mouseover",d=>{chord.classed("fade",p=>p!==d)}).style("fill",d=>colorFn(nodes[d.source.index])).attr("d",path)).append("title").text(d=>`${nodes[d.source.index]} → ${nodes[d.target.index]}: ${f(d.source.value)}\n${nodes[d.target.index]} → ${nodes[d.source.index]}: ${f(d.target.value)}`)}Chord.displayName="Chord",Chord.propTypes=propTypes;var src_Chord=Chord;__webpack_exports__.default=Object(lib.reactify)(src_Chord)}}]);
//# sourceMappingURL=33.c553067149ddce151583.bundle.js.map