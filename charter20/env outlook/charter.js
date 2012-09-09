

	//    http://www.JSON.org/json2.js

	//    2009-06-29

	//    Minified

	var JSON=JSON||{};(function(){function f(n){return n<10?'0'+n:n;}if(typeof Date.prototype.toJSON!=='function'){Date.prototype.toJSON=function(key){return isFinite(this.valueOf())?this.getUTCFullYear()+'-'+f(this.getUTCMonth()+1)+'-'+f(this.getUTCDate())+'T'+f(this.getUTCHours())+':'+f(this.getUTCMinutes())+':'+f(this.getUTCSeconds())+'Z':null;};String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(key){return this.valueOf();};}var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={'\b':'\\b','\t':'\\t','\n':'\\n','\f':'\\f','\r':'\\r','"':'\\"','\\':'\\\\'},rep;function quote(string){escapable.lastIndex=0;return escapable.test(string)?'"'+string.replace(escapable,function(a){var c=meta[a];return typeof c==='string'?c:'\\u'+('0000'+a.charCodeAt(0).toString(16)).slice(-4);})+'"':'"'+string+'"';}function str(key,holder){var i,k,v,length,mind=gap,partial,value=holder[key];if(value&&typeof value==='object'&&typeof value.toJSON==='function'){value=value.toJSON(key);}if(typeof rep==='function'){value=rep.call(holder,key,value);}switch(typeof value){case'string':return quote(value);case'number':return isFinite(value)?String(value):'null';case'boolean':case'null':return String(value);case'object':if(!value){return'null';}gap+=indent;partial=[];if(Object.prototype.toString.apply(value)==='[object Array]'){length=value.length;for(i=0;i<length;i+=1){partial[i]=str(i,value)||'null';}v=partial.length===0?'[]':gap?'[\n'+gap+partial.join(',\n'+gap)+'\n'+mind+']':'['+partial.join(',')+']';gap=mind;return v;}if(rep&&typeof rep==='object'){length=rep.length;for(i=0;i<length;i+=1){k=rep[i];if(typeof k==='string'){v=str(k,value);if(v){partial.push(quote(k)+(gap?': ':':')+v);}}}}else{for(k in value){if(Object.hasOwnProperty.call(value,k)){v=str(k,value);if(v){partial.push(quote(k)+(gap?': ':':')+v);}}}}v=partial.length===0?'{}':gap?'{\n'+gap+partial.join(',\n'+gap)+'\n'+mind+'}':'{'+partial.join(',')+'}';gap=mind;return v;}}if(typeof JSON.stringify!=='function'){JSON.stringify=function(value,replacer,space){var i;gap='';indent='';if(typeof space==='number'){for(i=0;i<space;i+=1){indent+=' ';}}else if(typeof space==='string'){indent=space;}rep=replacer;if(replacer&&typeof replacer!=='function'&&(typeof replacer!=='object'||typeof replacer.length!=='number')){throw new Error('JSON.stringify');}return str('',{'':value});};}if(typeof JSON.parse!=='function'){JSON.parse=function(text,reviver){var j;function walk(holder,key){var k,v,value=holder[key];if(value&&typeof value==='object'){for(k in value){if(Object.hasOwnProperty.call(value,k)){v=walk(value,k);if(v!==undefined){value[k]=v;}else{delete value[k];}}}}return reviver.call(holder,key,value);}cx.lastIndex=0;if(cx.test(text)){text=text.replace(cx,function(a){return'\\u'+('0000'+a.charCodeAt(0).toString(16)).slice(-4);});}if(/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,'@').replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,']').replace(/(?:^|:|,)(?:\s*\[)+/g,''))){j=eval('('+text+')');return typeof reviver==='function'?walk({'':j},''):j;}throw new SyntaxError('JSON.parse');};}}());

	String.prototype.visualLength = function(fontFamily)
	{
	    var ruler = document.getElementById("ruler");
	    ruler.style.font = fontFamily;
	    ruler.innerHTML = this;
	    return ruler.offsetWidth;
	}

	function encode(text){
		var repl=[["�","&#192;"],["�","&#193;"],["�","&#194;"],["�","&#195;"],["�","&#196;"],["�","&#197;"],["�","&#198;"],["�","&#199;"],["�","&#200;"],["�","&#201;"],["�","&#202;"],["�","&#203;"],["�","&#204;"],["�","&#205;"],["�","&#206;"],["�","&#207;"],["�","&#208;"],["�","&#209;"],["�","&#210;"],["�","&#211;"],["�","&#212;"],["�","&#213;"],["�","&#214;"],["�","&#216;"],["�","&#217;"],["�","&#218;"],["�","&#219;"],["�","&#220;"],["�","&#221;"],["�","&#222;"],["�","&#223;"],["�","&#224;"],["�","&#225;"],["�","&#226;"],["�","&#227;"],["�","&#228;"],["�","&#229;"],["�","&#230;"],["�","&#231;"],["�","&#232;"],["�","&#233;"],["�","&#234;"],["�","&#235;"],["�","&#236;"],["�","&#237;"],["�","&#238;"],["�","&#239;"],["�","&#240;"],["�","&#241;"],["�","&#242;"],["�","&#243;"],["�","&#244;"],["�","&#245;"],["�","&#246;"],["�","&#248;"],["�","&#249;"],["�","&#250;"],["�","&#251;"],["�","&#252;"],["�","&#253;"],["�","&#254;"],["�","&#255;"]];
		repl.forEach(function(c) {text=text.replace(eval("/" + c[0] + "/g"), c[1]);})
		return text;
	}








var doctype='<?xml version="1.0" standalone="no"?>\n<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"\n"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">\n'
var data =[{category:"",value0:0,value1:0,value2:0}];
var attr={};
var x1=pv.Scale.linear(0,1).range(0,1);
var y1=x1;
var y2=pv.Scale.ordinal(1).splitBanded(0,1,4/5);
var x2=x1;
var x3=y2;
var nbSeries=1;
y=pv.Scale.linear(0,1).range(0, 400);
var w=600,margin=20,axis=20,h=400,header=20,footer=20, source;
//var colorsFB=["#0087b0", "#ff9108", "#954b16", "#488fbc", "#cf0f16", "#9abc29", "#762953", "#005e9a", "#419748", "#f76114", "#5b528f", "#003a73"];
var colors=["#0078ba","#b2b2b2","#af418e","#97bf0d","#ed4e70","#ffdd00","#e5352d","#009036","#e15c12","#009ee0"];
var sColor,chartType,vis,myMin,myMax,fontTitle, fontSubtitle, fontLabel, fontUnit, cUrl, cw,ch, hTitle, myMin, myMax;
var stdFont="'Helvetica Neue', Arial, Helvetica, sans-serif"
var titleRows=[];
var legends=[];
var myColors=[];
var csvRows = [];
var objArr = [];
var dots =0;
var chevron=[
{x:0.0167, y:0.0167},
{x:0.4667, y:0.3833},
{x:0.4667, y:0.6167},
{x:0.0167, y:0.9833},
{x:0.0167, y:0.75},
{x:0.3333, y:0.5},
{x:0.0167, y:0.25}
];
var digits=0;
var blueTitle=1;
var lAngle =0,hTicks =1,vTicks =0,mX=-1,vertical = false,properCode="",fullCode="";
var serializer=new XMLSerializer;
function setMessage (message, error)

{	document.getElementById("message").innerHTML = '<p>' + message + '</p>';
	if (error)
		document.getElementById("message").className = "error";
	else
		document.getElementById("message").className = "";
}

function parseCSVLine (line)

{
	line = line.split(/[\t,]/g)
	// check for splits performed inside quoted strings and correct if needed
	for (var i = 0; i < line.length; i++)
	{
		var chunk = line[i].replace(/^[\s]*|[\s]*$/g, "");
		var quote = "";
		if (chunk.charAt(0) == '"' || chunk.charAt(0) == "'") quote = chunk.charAt(0);
		if (quote != "" && chunk.charAt(chunk.length - 1) == quote) quote = "";
		if (quote != "")
		{
			var j = i + 1;
			if (j < line.length) chunk = line[j].replace(/^[\s]*|[\s]*$/g, "");
			while (j < line.length && chunk.charAt(chunk.length - 1) != quote)
			{
				line[i] += ',' + line[j];
				line.splice(j, 1);
				chunk = line[j].replace(/[\s]*$/g, "");
			}
			if (j < line.length)
			{
				line[i] += ',' + line[j];
				line.splice(j, 1);
			}
		}
	}
	for (var i = 0; i < line.length; i++)
	{
		// remove leading/trailing whitespace
		line[i] = line[i].replace(/^[\s]*|[\s]*$/g, "");

		// remove leading/trailing quotes
		if (line[i].charAt(0) == '"') line[i] = line[i].replace(/^"|"$/g, "");
		else if (line[i].charAt(0) == "'") line[i] = line[i].replace(/^'|'$/g, "");
	}
	return line;
}

function csvToJson () {
	var message = "";
	var error = false;
	var f = document.forms["convertForm"];
	var csvText = f.elements["csv"].value;
	if(f.elements["size"].value==0){
	
			w=800;h=533;
			if(f.elements["ffTitle"].value==""||f.elements["ffTitle"].value=="auto") {fontTitle="bold 32px "+stdFont;f.elements["ffTitle"].value=fontTitle} else {fontTitle=f.elements["ffTitle"].value;}
			if(f.elements["ffsTitle"].value==""||f.elements["ffsTitle"].value=="auto") {fontSubtitle="24px "+stdFont;f.elements["ffsTitle"].value=fontSubtitle} else {fontSubtitle=f.elements["ffsTitle"].value;}
			if(f.elements["ffLabel"].value==""||f.elements["ffLabel"].value=="auto") {fontLabel="16px "+stdFont;f.elements["ffLabel"].value=fontLabel} else {fontLabel=f.elements["ffLabel"].value;}
			if(f.elements["ffUnit"].value==""||f.elements["ffUnit"].value=="auto") {fontUnit="16px "+stdFont;f.elements["ffUnit"].value=fontUnit} else {fontUnit=f.elements["ffUnit"].value;}

			lMargin=46;cUrl="chevrons/large.png";hTitle=87; cw=40; ch=80;
			vertical=false;
	}
	else if(f.elements["size"].value==1){
	
		w=600;h=400;
		if(f.elements["ffTitle"].value==""||f.elements["ffTitle"].value=="auto") {fontTitle="bold 24px "+stdFont;f.elements["ffTitle"].value=fontTitle} else {fontTitle=f.elements["ffTitle"].value;}
		if(f.elements["ffsTitle"].value==""||f.elements["ffsTitle"].value=="auto") {fontSubtitle="24px "+stdFont;f.elements["ffsTitle"].value=fontSubtitle} else {fontSubtitle=f.elements["ffsTitle"].value;}
		if(f.elements["ffLabel"].value==""||f.elements["ffLabel"].value=="auto") {fontLabel="12px "+stdFont;f.elements["ffLabel"].value=fontLabel} else {fontLabel=f.elements["ffLabel"].value;}
		if(f.elements["ffUnit"].value==""||f.elements["ffUnit"].value=="auto") {fontUnit="12px "+stdFont;f.elements["ffUnit"].value=fontUnit} else {fontUnit=f.elements["ffUnit"].value;}

		lMargin=35;cUrl="chevrons/large.png";hTitle=65; cw=30; ch=60;
		vertical=false;
	} else if(f.elements["size"].value==2){
	
		w=330;h=220;
		if(f.elements["ffTitle"].value==""||f.elements["ffTitle"].value=="auto") {fontTitle="bold 14px "+stdFont;f.elements["ffTitle"].value=fontTitle} else {fontTitle=f.elements["ffTitle"].value;}
		if(f.elements["ffsTitle"].value==""||f.elements["ffsTitle"].value=="auto") {fontSubtitle="12px "+stdFont;f.elements["ffsTitle"].value=fontSubtitle} else {fontSubtitle=f.elements["ffsTitle"].value;}
		if(f.elements["ffLabel"].value==""||f.elements["ffLabel"].value=="auto") {fontLabel="10px "+stdFont;f.elements["ffLabel"].value=fontLabel} else {fontLabel=f.elements["ffLabel"].value;}
		if(f.elements["ffUnit"].value==""||f.elements["ffUnit"].value=="auto") {fontUnit="10px "+stdFont;f.elements["ffUnit"].value=fontUnit} else {fontUnit=f.elements["ffUnit"].value;}


		lMargin=20;cUrl="chevrons/medium.png";hTitle=40; cw=15;ch=30;
		vertical=false;
	} else if(f.elements["size"].value==3){
		w=260;h=195;

		if(f.elements["ffTitle"].value==""||f.elements["ffTitle"].value=="auto") {fontTitle="bold 12px "+stdFont;f.elements["ffTitle"].value=fontTitle} else {fontTitle=f.elements["ffTitle"].value;}
		if(f.elements["ffsTitle"].value==""||f.elements["ffsTitle"].value=="auto") {fontSubtitle="12px "+stdFont;f.elements["ffsTitle"].value=fontSubtitle} else {fontSubtitle=f.elements["ffsTitle"].value;}
		if(f.elements["ffLabel"].value==""||f.elements["ffLabel"].value=="auto") {fontLabel="9px "+stdFont;f.elements["ffLabel"].value=fontLabel} else {fontLabel=f.elements["ffLabel"].value;}
		if(f.elements["ffUnit"].value==""||f.elements["ffUnit"].value=="auto") {fontUnit="9px "+stdFont;f.elements["ffUnit"].value=fontUnit} else {fontUnit=f.elements["ffUnit"].value;}

		lMargin=20;cUrl="chevrons/medium.png";hTitle=40;cw=15;ch=30;
		vertical=false;
	} else if(f.elements["size"].value==4){
		w=250;h=200;
		if(f.elements["ffTitle"].value==""||f.elements["ffTitle"].value=="auto") {fontTitle="bold 12px "+stdFont;f.elements["ffTitle"].value=fontTitle} else {fontTitle=f.elements["ffTitle"].value;}
		if(f.elements["ffsTitle"].value==""||f.elements["ffsTitle"].value=="auto") {fontSubtitle="12px "+stdFont;f.elements["ffsTitle"].value=fontSubtitle} else {fontSubtitle=f.elements["ffsTitle"].value;}
		if(f.elements["ffLabel"].value==""||f.elements["ffLabel"].value=="auto") {fontLabel="9px "+stdFont;f.elements["ffLabel"].value=fontLabel} else {fontLabel=f.elements["ffLabel"].value;}
		if(f.elements["ffUnit"].value==""||f.elements["ffUnit"].value=="auto") {fontUnit="9px "+stdFont;f.elements["ffUnit"].value=fontUnit} else {fontUnit=f.elements["ffUnit"].value;}


		lMargin=20;cUrl="chevrons/medium.png";hTitle=35;cw=15;ch=30;
		vertical=false;
	} else {
		w=130;h=250;

		if(f.elements["ffTitle"].value==""||f.elements["ffTitle"].value=="auto") {fontTitle="bold 10px Helvetica";f.elements["ffTitle"].value=fontTitle} else {fontTitle=f.elements["ffTitle"].value;}
		if(f.elements["ffsTitle"].value==""||f.elements["ffsTitle"].value=="auto") {fontSubtitle="10px Helvetica";f.elements["ffsTitle"].value=fontSubtitle} else {fontSubtitle=f.elements["ffsTitle"].value;}
		if(f.elements["ffLabel"].value==""||f.elements["ffLabel"].value=="auto") {fontLabel="9px Helvetica";f.elements["ffLabel"].value=fontLabel} else {fontLabel=f.elements["ffLabel"].value;}
		if(f.elements["ffUnit"].value==""||f.elements["ffUnit"].value=="auto") {fontUnit="9px Helvetica";f.elements["ffUnit"].value=fontTitle} else {fontUnit=f.elements["ffUnit"].value;}

		lMargin=15;cUrl="chevrons/small.png";hTitle=25;cw=10;ch=20;
		vertical=true;
	}
	
	
	
	for(var i=0;i<4;i++){
		if(f.elements["chartType"][i].checked){
			chartType=i;
		}
	}
	if(chartType==3){dots=1;chartType=2;}else{dots=0;}
	if(f.elements["blue"].checked){blueTitle=1;}else{blueTitle=0;}
	if(f.elements["logo"].checked){logoTitle=1;}else{logoTitle=0;}
	
	
	if(f.elements["lAngle"].value==0){lAngle=0;}
	if(f.elements["lAngle"].value==1){lAngle=-Math.PI/6;}
	if(f.elements["lAngle"].value==2){lAngle=-Math.PI/4;}
	if(f.elements["lAngle"].value==3){lAngle=-Math.PI/2;}
	

	// colors

	for(var i=0;i<10;i++){
		if(f.elements["sColor"][i].checked){
			sColor=i;
			myColors[0]=colors[sColor];				// main color
			myColors[1]=colors[(sColor+1) % 10];	// color of series #2
			myColors[2]=colors[(sColor+2) % 10];	// color of series #3
			myColors[3]=colors[(sColor+3) % 10];	// highlight color
		}
	}
	


	titleRows = f.elements["title"].value.split(/[\r\n]/g);
	source = f.elements["source"].value;
	
	

	hTicks=(f.elements["hTicks"].value)?parseFloat(f.elements["hTicks"].value):0;
	vTicks=parseFloat(f.elements["vTicks"].value)?parseFloat(f.elements["vTicks"].value):0;

	
	digits=(f.elements["digits"].value)?parseFloat(f.elements["digits"].value):0;

	var jsonText = "";

	setMessage(message, error);

	if (csvText == "") { error = true; message = "Enter CSV text below."; }

	if (!error)

	{
		csvRows = csvText.split(/[\r\n]/g); // split into rows
		// get rid of empty rows
		for (var i = 0; i < csvRows.length; i++)
		{
			if (csvRows[i].replace(/^[\s]*|[\s]*$/g, '') == "")
			{
				csvRows.splice(i, 1);
				i--;
			}
		}

		if (csvRows.length < 2) { error = true; message = "The CSV text MUST have a header row!"; }
		else
		{	var startAt=0;
			objArr = [];
			legends=[];
			for (var i = 0; i < csvRows.length; i++)
			{
				csvRows[i] = parseCSVLine(csvRows[i]);
			}
			if(f.elements["legends"].checked){
				legends=csvRows[0];
				startAt=1;
			}
			
			for (var i = 0; i+startAt < csvRows.length; i++)
			{
				if (csvRows[i+startAt].length > 0) objArr.push({});
				objArr[i]["category"]=csvRows[i+startAt][0];
				objArr[i]["values"]=csvRows[i+startAt].slice(1);
				//for (var j = 1; j < csvRows[i].length; j++) {
				for (var j = 1; j < 4; j++) { // now all lines have 3 reliable values.
					objArr[i]["value"+(j-1)] = (j<csvRows[i+startAt].length)?parseFloat(csvRows[i+startAt][j]):0;
				}
			}

			data = objArr;

			if(chartType==1){
				myMin=pv.min(data, function(d) {return d.value0+d.value1+d.value2;});
				myMax=pv.max(data, function(d) {return d.value0+d.value1+d.value2;});
			} else {
				var myMin0=pv.min(data, function(d) {return d.value0;});var myMax0=pv.max(data, function(d) {return d.value0;});
				var myMin1=pv.min(data, function(d) {return d.value1;});var myMax1=pv.max(data, function(d) {return d.value1;});
				var myMin2=pv.min(data, function(d) {return d.value2;});var myMax2=pv.max(data, function(d) {return d.value2;});
				myMin=myMin0;
				if(myMin1<myMin){
					myMin=myMin1;
				}
				if(myMin2<myMin){
					myMin=myMin2;
				}
				myMax=myMax0;
				if(myMax1>myMax){
					myMax=myMax1;
				}
				if(myMax2>myMax){
					myMax=myMax2;
				}
			}
			if (myMin>0){myMin=0;}
		}
	nbSeries=d3.max(data,function(d) {return d.values.length;})
	if(f.elements["fMin"].value!="auto"){myMin=parseFloat(f.elements["fMin"].value);}
	if(f.elements["fMax"].value!="auto"){myMax=parseFloat(f.elements["fMax"].value);}

	// define header, margin, axis and footer

	if(f.elements["header"].value=="auto"){
		if(f.elements["size"].value==1){header=30+hTitle;}
		if(f.elements["size"].value==2){header=20+hTitle;}
		if(f.elements["size"].value==3){header=20+hTitle;}
		if(f.elements["size"].value==4){header=20+hTitle;}
		if(f.elements["size"].value==5){header=10+hTitle;}
	}else{header=parseFloat(f.elements["header"].value);}

	if(f.elements["margin"].value=="auto"){
		if(f.elements["size"].value==1){margin=30;}
		if(f.elements["size"].value==2){margin=20;}
		if(f.elements["size"].value==3){margin=20;}
		if(f.elements["size"].value==4){margin=20;}
		if(f.elements["size"].value==5){margin=10;}
	} else {margin=parseFloat(f.elements["margin"].value);}

	if(f.elements["axis"].value=="auto"){
		axis=(myMax+'').visualLength(fontLabel)+5;
	} else {
		axis=parseFloat(f.elements["axis"].value);
	}

	if(f.elements["footer"].value=="auto"){
		if(f.elements["size"].value==1){footer=65;}
		if(f.elements["size"].value==2){footer=50;}
		if(f.elements["size"].value==3){footer=50;}
		if(f.elements["size"].value==4){footer=50;}
		if(f.elements["size"].value==5){footer=30;}
		if (lAngle!=0) {
			footer += pv.max(data, function(d) {return (12*Math.cos(lAngle)-d.category.visualLength(fontLabel)*Math.sin(lAngle));})-12;
		}
	}
	else {
		footer=parseFloat(f.elements["footer"].value);
	}


	//header=20;
	//footer=20;
	//margin=20;
	//axis=20;

	if(chartType==2) { // line chart
		x1 = pv.Scale.linear(0,data.length-1).range(0, w-axis-margin);
		y1 = pv.Scale.linear(myMin, myMax).range(0, h-header-footer);
	} else {
		if(vertical) { // small, vertical charts see their axes inverted.
			y2 = pv.Scale.ordinal(pv.range(data.length)).splitBanded(0, h-header-footer, 4/5);
			x2 = pv.Scale.linear(myMin, myMax).range(0, w-margin-axis);
		} else { // larger charts have categories along the x-axis
			x3 = pv.Scale.ordinal(pv.range(data.length)).splitBanded(0, w-margin-axis, 4/5);
			y1 = pv.Scale.linear(myMin, myMax).range(0, h-header-footer);
		}
	}
	
	attr["size"]=f.elements["size"].value;
	attr["blue"]=blueTitle;
	attr["logo"]=logoTitle
	attr["lAngle"]=(180/Math.PI)*lAngle;
	attr["sColor"]=sColor;
	attr["title"]=titleRows[0];
	if(titleRows.length>1){attr["subtitle"]=titleRows[1];}
	attr["hTicks"]=hTicks;
	attr["vTicks"]=vTicks;
	attr["digits"]=digits;
	attr["legends"]=legends;
	attr["data"]=data;
	attr["nbSeries"]=nbSeries;
	attr["min"]=myMin;
	attr["max"]=myMax;
	attr["header"]=header;
	attr["footer"]=footer;
	attr["axis"]=axis;
	attr["margin"]=margin;
	
	createProperCode();
	eval(properCode);
	}
	d3.selectAll("#output").style("display","block");
//	message="done.";
//	setMessage(message, error);

}

function createProperCode(){
	var ender=";\n" // ";" when not debugging
	fullCode="<script type=\"text/javascript+protovis\">";
	properCode=							"var data="+JSON.stringify(objArr, null)+ender;
	properCode+=						"var chevron=[{x:0.0167, y:0.0167},{x:0.4667, y:0.3833},{x:0.4667, y:0.6167},{x:0.0167, y:0.9833},{x:0.0167, y:0.75},{x:0.3333, y:0.5},{x:0.0167, y:0.25}]"+ender;

	if(chartType==2){
		properCode+=					"var x=pv.Scale.linear(0,"+(data.length-1)+").range(0,"+(w-axis-margin)+")"+ender;
	   	properCode+=					"var y=pv.Scale.linear("+myMin+", "+myMax+").range(0, "+(h-header-footer)+")"+ender;
	} else if (vertical) {
	    properCode+=					"var y=pv.Scale.ordinal(pv.range("+data.length+")).splitBanded(0, "+(h-header-footer)+",4/5)"+ender;
	    properCode+=					"var x=pv.Scale.linear("+myMin+", "+myMax+").range(0, "+(w-margin-axis)+")"+ender;
	} else {
	    properCode+=					"var x=pv.Scale.ordinal(pv.range("+data.length+")).splitBanded(0, "+(w-axis-margin)+",4/5)"+ender;
	    properCode+=					"var y=pv.Scale.linear("+myMin+", "+myMax+").range(0, "+(h-header-footer)+")"+ender;
	}

	properCode+=						"var vis=new pv.Panel().width(" + w + ").height(" + h +").fillStyle(\"#fff\").strokeStyle(";
	properCode+=							(blueTitle?"\""+colors[0]+"\"":undefined)+")"
	properCode+=							".canvas('chart')"+ender;

	properCode+=						"var myChart = vis.add(pv.Panel).width(" + (w-margin-axis) + ").height(" + (h-footer-header) +").left(" + axis + ").top("+ header +")"+ender;


	///////////////////////////////////////////////////////////////////////
	//
	//	gridlines for line chart
	//
	//  (in that case we draw the gridline first, whereas we draw it over
	//  the chart for bar/column charts
	//
	///////////////////////////////////////////////////////////////////////

	if (chartType==2) {
				properCode+=					"myChart.add(pv.Rule).data(data)";
				properCode+=					".visible(function() {return (this.index >= 0)&&(("+hTicks+"==0)||!(this.index % "+hTicks+"));})";
				properCode+=					".left(function(d) {return Math.round(x(this.index)) - .5;})";
				properCode+=					".strokeStyle(\"#eee\")";
				properCode+=					".anchor(\"bottom\").add(pv.Label)";
				properCode+=					".textMargin(" + (lAngle?10:5)+")";
				properCode+=					".font(\""+fontLabel+"\")";
				properCode+=					".text(function(d) {return d.category;})";
				properCode+=					(lAngle&&(!vertical))?".textAngle("+lAngle+")":"";
				properCode+=					".textAlign("+ (lAngle?"\"right\")":"function() {return (this.index>0?((this.index<data.length-1)?\"center\":\"right\"):\"left\");})");
				properCode+=					ender

				properCode+=					"myChart.add(pv.Rule)";
				properCode+=					".data("+(vTicks?"y.ticks("+vTicks+")":"y.ticks()")+")";
				properCode+=					".bottom(function(d) {return Math.round(y(d)) - .5;})";
				properCode+=					".strokeStyle(\"#eee\")";
				properCode+=					ender

				properCode+=					"myChart.add(pv.Rule)";
				properCode+=					".data("+(vTicks?"y.ticks("+vTicks+")":"y.ticks()")+")";
				properCode+=					".bottom(function(d) {return Math.round(y(d))-.5;})";
				properCode+=					".strokeStyle(function(d) {return d ? \"rgba(255,255,255,.3)\":\"#000\";})";
				properCode+=					".add(pv.Rule).left(0).width(5).strokeStyle(\"#000\").anchor(\"left\").add(pv.Label)";
				properCode+=					".font(\""+fontLabel+"\")";
				properCode+=					".text(function(d) {return d.toFixed(digits);})";
				properCode+=					ender
		}

	///////////////////////////////////////////////////////////////////////
	//
	// The chart proper
	//
	///////////////////////////////////////////////////////////////////////


	if (chartType!=2){	// not a line chart
		if(vertical) {	// this is the equivalent of the animV panel.

			properCode+=				"var anim = myChart.add(pv.Panel).data(data).top(function() {return y(this.index);})";
			properCode+=				ender
			properCode+=				"anim.add(pv.Bar).top(0)";
			properCode+=					".height(y.range().band)";
			if((chartType==0)&&(nbSeries>1)){
				properCode+=				".height(y.range().band/"+nbSeries+")";
			} else {
				properCode+=				".height(y.range().band)";
			}

			properCode+=					".width(function(d) {return x(0)>x(d.value0)?(x(0)-x(d.value0)):(x(d.value0)-x(0));})";
			properCode+=					".left(function(d) {return x(0)<x(d.value0)?x(0):x(d.value0);})";
			properCode+=					".def(\"fillStyle\", \""+myColors[0]+"\")";
			properCode+=					".event(\"mouseover\", function() {return this.fillStyle(\""+myColors[nbSeries]+"\");})";
			properCode+=					".event(\"mouseout\", function() {return this.fillStyle(undefined);})";
			properCode+=					".title(function(d) {return d.category+\": \"+d.value0;})"
			properCode+=					ender
			if(nbSeries>1){
				properCode+=			"anim.add(pv.Bar)"
				if(chartType==0){
					properCode+=			".top(y.range().band/"+nbSeries+")";
					properCode+=			".height(y.range().band/"+nbSeries+")";
					properCode+=			".left(function(d) {return x(0)<x(d.value1)?x(0):x(d.value1);})";
				}else{
					properCode+=			".top(0)";
					properCode+=			".height(y.range().band/"+nbSeries+")";
					properCode+=			".left(function(d) {return (x(d.value0);})";
				}
				properCode+=				".width(function(d) {return x(0)>x(d.value1)?(x(0)-x(d.value1)):(x(d.value1)-x(0));})";
				properCode+=				".def(\"fillStyle\", \""+myColors[1]+"\")";
				properCode+=				".event(\"mouseover\", function() {return this.fillStyle(\""+myColors[nbSeries]+"\");})";
				properCode+=				".event(\"mouseout\", function() {return this.fillStyle(undefined);})";
				properCode+=				".title(function(d) {return d.category+\": \"+d.value1;})"
				properCode+=				ender
			}
			if(nbSeries>2){
				properCode+=			"anim.add(pv.Bar)"
				if(chartType==0){
					properCode+=			".top(2*y.range().band/3)";
					properCode+=			".height(y.range().band/3)";
					properCode+=			".left(function(d) {return x(0)<x(d.value2)?x(0):x(d.value2);})";
				}else{
					properCode+=			".top(0)";
					properCode+=			".height(y.range().band/3)";
					properCode+=			".left(function(d) {return (x(d.value0)+x(d.value1);})";
				}
				properCode+=				".width(function(d) {return x(0)>x(d.value2)?(x(0)-x(d.value2)):(x(d.value2)-x(0));})";
				properCode+=				".def(\"fillStyle\", \""+myColors[2]+"\")";
				properCode+=				".event(\"mouseover\", function() {return this.fillStyle(\""+myColors[nbSeries]+"\");})";
				properCode+=				".event(\"mouseout\", function() {return this.fillStyle(undefined);})";
				properCode+=				".title(function(d) {return d.category+\": \"+d.value2;})"
				properCode+=				ender
			}
		}	else {	// this is the code that corresponds to animH. we are looking at a normal bar charts, ie bars are vertical columns.
				properCode+=				"var anim = myChart.add(pv.Panel).data(data).left(function() {return x(this.index);})";
				properCode+=				".add(pv.Bar).left(0)"
				if(chartType==0&&nbSeries>1){
					properCode+=			".width(x.range().band/"+nbSeries+")";
				}
				else{
					properCode+=			".width(x.range().band)";
				}
				properCode+=				".height(function(d) {return y(0)>y(d.value0)?y(0)-y(d.value0):y(d.value0)-y(0);})";
				properCode+=				".bottom(function(d) {return y(0)<y(d.value0)?y(0):y(d.value0);})";
				properCode+=				".def(\"fillStyle\", \""+myColors[0]+"\")";
				properCode+=				".event(\"mouseover\", function() {return this.fillStyle(\""+myColors[nbSeries]+"\");})";
				properCode+=				".event(\"mouseout\", function() {return this.fillStyle(undefined);})";
				properCode+=				".title(function(d) {return d.category+\": \"+d.value0;})"
				properCode+=				ender
				if(nbSeries>1){
					properCode+=			"anim.add(pv.Bar)"
					if(chartType==0){
						properCode+=		".left(x.range().band/"+nbSeries+")";
						properCode+=		".width(x.range().band/"+nbSeries+")";
						properCode+=		".bottom(function(d) {return y(0)<y(d.value1)?y(0):y(d.value1);})"
						}
					else{
						properCode+=		".left(0)";
						properCode+=		".width(x.range().band)";
						properCode+=		".bottom(function(d) {return y(d.value0);})";
					}

					properCode+=			".height(function(d) {return y(0)>y(d.value1)?y(0)-y(d.value1):y(d.value1)-y(0);})";
					properCode+=			".def(\"fillStyle\", \""+myColors[1]+"\")";
					properCode+=			".event(\"mouseover\", function() {return this.fillStyle(\""+myColors[nbSeries]+"\");})";
					properCode+=			".event(\"mouseout\", function() {return this.fillStyle(undefined);})";
					properCode+=			".title(function(d) {return d.category+\": \"+d.value1;})"
					properCode+=			ender
				}
				if(nbSeries>2){
					properCode+=			"anim.add(pv.Bar)"
					if(chartType==0){
						properCode+=		".left(2*x.range().band/3)";
						properCode+=		".width(x.range().band/3)";
						properCode+=		".bottom(function(d) {return y(0)<y(d.value2)?y(0):y(d.value2);})"
					}
					else{
						properCode+=		".left(0)";
						properCode+=		".width(x.range().band)";
						properCode+=		".bottom(function(d) {return y(d.value0+d.value1);})";
					}
					properCode+=			".height(function(d) {return y(0)>y(d.value2)?y(0)-y(d.value2):y(d.value2)-y(0);})";
					properCode+=			".def(\"fillStyle\", \""+myColors[2]+"\")";
					properCode+=			".event(\"mouseover\", function() {return this.fillStyle(\""+myColors[nbSeries]+"\");})";
					properCode+=			".event(\"mouseout\", function() {return this.fillStyle(undefined);})";
					properCode+=			".title(function(d) {return d.category+\": \"+d.value2;})";
					properCode+=			ender
				}
			}
		} else {							// this is a line chart situation.
			properCode+=					"myChart.add(pv.Line).data(data).left(function() {return x(this.index);}).bottom(function(d) {return y(d.value0);}).lineWidth(3).strokeStyle(\""+myColors[0]+"\")";
			if(dots){
				properCode+=				".add(pv.Dot).size(20).lineWidth(1).title(function(d) {return d.category+\": \"+d.value0;}).def(\"fillStyle\",\""+myColors[0]+"\")";
				properCode+=				".event(\"mouseover\",function() {return this.fillStyle(\""+myColors[nbSeries+1]+"\");})";
				properCode+=				".event(\"mouseout\",function() {return this.fillStyle(undefined);});";}
			properCode+=					ender
			if(nbSeries>1){
				properCode+=				"myChart.add(pv.Line).data(data).left(function() {return x(this.index);}).bottom(function(d) {return y(d.value1);}).lineWidth(3).strokeStyle(\""+myColors[1]+"\")";
				if(dots){
					properCode+=			".add(pv.Dot).size(20).lineWidth(1).title(function(d) {return d.category+\": \"+d.value0;}).def(\"fillStyle\",\""+myColors[1]+"\")";
					properCode+=			".event(\"mouseover\",function() {return this.fillStyle(\""+myColors[nbSeries+1]+"\");})";
					properCode+=			".event(\"mouseout\",function() {return this.fillStyle(undefined);});";}
				properCode+=				ender
			}
			if(nbSeries>2){
				properCode+=				"myChart.add(pv.Line).data(data).left(function() {return x(this.index);}).bottom(function(d) {return y(d.value2);}).lineWidth(3).strokeStyle(\""+myColors[2]+"\")";
				if(dots){
					properCode+=			".add(pv.Dot).size(20).lineWidth(1).title(function(d) {return d.category+\": \"+d.value0;}).def(\"fillStyle\",\""+myColors[2]+"\")";
					properCode+=			".event(\"mouseover\",function() {return this.fillStyle(\""+myColors[nbSeries+1]+"\");})";
					properCode+=			".event(\"mouseout\",function() {return this.fillStyle(undefined);});";}
					properCode+=			ender
			}

		}

		///////////////////////////////////////////////////////////////////////
		//
		// Axes, etc.
		//
		///////////////////////////////////////////////////////////////////////
		//	the categorical axis
		///////////////////////////////////////////////////////////////////////


		if (chartType!=2) {
			properCode+=					"myChart.add(pv.Panel).data(data).left(";
			properCode+=					(vertical?"0":"function() {return this.index*"+(w-margin-axis)/data.length)+";})";
			properCode+=					".bottom(";
			properCode+=					(!vertical?"0":("function() {return ("+data.length+"-this.index*("+(h-header-footer)/data.length)+";}")+")";
			properCode+=					".width("+((w-margin-axis)/data.length)+")";
			properCode+=					".visible(function() {return ("+hTicks+"==0)||!(this.index % "+hTicks+");})";
			properCode+=					".anchor(\"bottom\").add(pv.Label).textMargin(5)";
			properCode+=					".textBaseline(\""+((lAngle||vertical)?"middle":"top")+"\")";
			properCode+=					".textAlign(\""+((lAngle||vertical)?"right":"center")+"\")";
			properCode+=					".font(\""+fontLabel+"\")";
			properCode+=					".text(function(d) {return d.category;})";
			properCode+=					(lAngle&&(!vertical))?".textAngle("+lAngle+")":"";
			properCode+=					ender


		//	the value axis
		///////////////////////////////////////////////////////////////////////

			if(vertical) {
				properCode+=				"myChart.add(pv.Rule)";
				properCode+=				".data("+(vTicks?"x.ticks("+vTicks+")":"x.ticks()")+")";
				properCode+=				".left(function(d) {return Math.round(x(d))-.5;})";
				properCode+=				".strokeStyle(function(d) {return d ? \"rgba(255,255,255,.3)\":\"#000\";})";
				properCode+=				".add(pv.Rule).bottom(0).height(5).strokeStyle(\"#000\").anchor(\"bottom\").add(pv.Label)";
				properCode+=				".font(\""+fontLabel+"\")";
				properCode+=				".text(function(d) {return d.toFixed("+digits+");})";
				properCode+=				ender

			}
			else {
				properCode+=				"myChart.add(pv.Rule)";
				properCode+=				".data("+(vTicks?"y.ticks("+vTicks+")":"y.ticks()")+")";
				properCode+=				".bottom(function(d) {return Math.round(y(d))-.5;})";
				properCode+=				".strokeStyle(function(d) {return d ? \"rgba(255,255,255,.3)\":\"#000\";})";
				properCode+=				".add(pv.Rule).left(0).width(5).strokeStyle(\"#000\").anchor(\"left\").add(pv.Label)";
				properCode+=				".font(\""+fontLabel+"\")";
				properCode+=				".text(function(d) {return d.toFixed("+digits+");})";
				properCode+=				ender
			}
		}
		///////////////////////////////////////////////////////////////////////
		//
		// The title
		//
		///////////////////////////////////////////////////////////////////////


		properCode+=						"vis.add(pv.Panel).left(0).top(0)";
		properCode+=						".height("+hTitle+")";
		properCode+=						".fillStyle("+(blueTitle?"\""+colors[0]+"\"":"undefined")+")";
		properCode+=						".add(pv.Line).data(chevron).top(function(d) {return "+(hTitle-ch)/2+"+"+ch+"*d.y;}).left(function(d) {return "+cw+"*d.x;})";
		properCode+=						".strokeStyle("+(blueTitle?"\"#fff\"":"\"#000\"")+").fillStyle("+(blueTitle?"\"#fff\"":"\"#000\"")+")";
		properCode+=						".add(pv.Line).data(chevron).top(function(d) {return "+(hTitle-ch)/2+"+"+ch+"*d.y;}).left(function(d) {return "+(lMargin/2)+"+"+cw+"*d.x;})";
		properCode+=						".strokeStyle("+(blueTitle?"\"#fff\"":"\"#000\"")+").fillStyle("+(blueTitle?"\"#fff\"":"\"#000\"")+")";
		properCode+=						ender
		if(titleRows[0]){
			properCode+=					"vis.add(pv.Label).data([\""+titleRows.slice(0,2).join('", "')+"\"])";
			properCode+=					".top("+hTitle/2+")";
			properCode+=					".left("+lMargin+")";
			properCode+=					".textAlign(\"left\")";
			properCode+=					".textBaseline(function() {return this.index?\"top\":\"bottom\";})";
			properCode+=					".textStyle("+(blueTitle?"\"#fff\"":"\"#000\"")+")";
			properCode+=					".font(function() {return this.index?\""+fontSubtitle+"\":\""+fontTitle+"\";})";
			properCode+=					".antialias(true)";
			properCode+=					ender
		}
		///////////////////////////////////////////////////////////////////////
		//
		// the legend
		//
		///////////////////////////////////////////////////////////////////////
		// legend
		///////////////////////////////////////////////////////////////////////
		if(legends.length){
			properCode+=						"vis.add(pv.Panel)";
			properCode+=						".data([\""+legends[0]+"\""
			properCode+=						legends.length>0?",\""+legends[1]+"\"":""
			properCode+=						legends.length>1?",\""+legends[2]+"\"":""
			properCode+=						"])";
			properCode+=						".width("+w/20+")";
			properCode+=						".height("+((h/20<10)?10:h/20)+")";
			properCode+=						".bottom(20)";
			properCode+=						".left(function() {return "+axis+"+this.index*"+((w-margin-axis-(w/20)-legends[legends.length-1].visualLength(fontUnit))/(legends.length-1))+";})";

			properCode+=						".fillStyle(function() {return myColors[this.index];})"
			properCode+=						".strokeStyle(null)"
			properCode+=						".anchor(\"right\").add(pv.Label).textAlign(\"left\")";
			properCode+=						".font(\""+fontUnit+"\")";
			properCode+=						ender
		}
		// source
		///////////////////////////////////////////////////////////////////////
		properCode+=							"vis.add(pv.Label).bottom(5).right(5).textAlign(\"right\").textBaseline(\"bottom\")";
		properCode+=							".font(\""+fontUnit+"\")";
		properCode+=							".text(\"Source: "+source+"\")";
		properCode+=							ender

	properCode+="vis.render();"
	fullCode+=properCode+"<\/script>";
	document.forms["result"].elements["code"].value=properCode;//fullCode;
	eval(properCode);
	document.forms["svg"].elements["svgoutput"].value=doctype+encode(serializer.serializeToString(document.getElementById('chart').childNodes[0]));
}
