(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"home_atlas_", frames: [[0,0,344,621],[0,924,173,96],[269,623,98,93],[269,718,98,93],[269,813,98,93],[275,908,98,93],[169,623,98,93],[169,718,98,93],[175,908,98,93],[169,813,98,93],[0,623,167,299],[346,0,74,111],[346,113,23,24]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.cell = function() {
	this.spriteSheet = ss["home_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.cloud2 = function() {
	this.spriteSheet = ss["home_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.icon01 = function() {
	this.spriteSheet = ss["home_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.icon02 = function() {
	this.spriteSheet = ss["home_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.icon03 = function() {
	this.spriteSheet = ss["home_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.icon04 = function() {
	this.spriteSheet = ss["home_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.icon05 = function() {
	this.spriteSheet = ss["home_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.icon06 = function() {
	this.spriteSheet = ss["home_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.icon07 = function() {
	this.spriteSheet = ss["home_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.icon08 = function() {
	this.spriteSheet = ss["home_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.rocket2 = function() {
	this.spriteSheet = ss["home_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.rocketFire = function() {
	this.spriteSheet = ss["home_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.star = function() {
	this.spriteSheet = ss["home_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.wheel06 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgrAAQAFgnAmgDQAoAEADAnQgEAngnAEQgngFgEgng");
	this.shape.setTransform(47.1,47);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhAGzIADgjIgngIIgMAhQgMAcgdgIQgbgMAHgcIAMgiQgVgJgTgLIgUAdQgTAXgagOQgXgUAPgZIAUgeQgOgLgNgNIgbAYQgYARgVgVQgRgXAUgWIAagXQgLgQgKgQIggAQQgbALgQgaQgLgbAZgQIAggPQgKgXgGgZIgjAGQgdADgIgdQgDgdAdgIIAigHIgCgjIgjgCQgdgEgBgdQAFgdAdgBIAjACQAEgXAFgWIghgLQgbgMAHgdQAMgbAdAHIAhAMIARgjIgcgTQgXgTANgaQATgXAaAOIAeAUQAMgQAOgPIgXgaQgSgYAVgWQAYgRAVAVIAXAaQASgOAUgLIgQggQgKgcAZgPQAcgLAQAaIAPAgQAQgHARgEIgHgjQgDgdAcgKQAegDAIAcIAIAjQAXgDAZAAIACgjQAFgdAdgBQAdAFABAeIgDAjQAUADAUAFIALgiQANgaAcAGQAbANgHAdIgLAhQAUAJAUAMIAUgeQATgXAaAPQAWATgOAaIgUAdIAaAXIAbgWQAYgSAWAUQARAYgUAWIgbAYQALAPALAQIAfgQQAcgLAPAZQALAcgZAQIgfAQQAJAWAGAZIAjgHQAdgCAIAcQADAegcAIIgjAGIACAjIAjACQAeAEAAAeQgEAdgeABIgjgCQgDAWgGAWIAhAMQAbAMgHAdQgMAbgdgHIghgLQgIARgJARIAdAUQAXASgOAaQgTAXgagOIgdgTQgNAPgOAPIAXAaQASAYgUAVQgYASgWgUIgXgaQgSANgTALIAPAgQAKAcgZAPQgcALgPgaIgQgfQgQAGgRAFIAHAjQADAdgcAJQgeADgIgdIgHgiQgYADgZAAIgCAjQgEAdgeABQgdgFgBgegAASDEIgMCcQBSgCBFgiQBEgjAwg7IiChXQgyA0hLAJgAkqC6QAoBAA+AqQA+AqBNANIAMicQhHgTgpg4gAC8g5QAFATADATIgEBAQgFASgIASICDBXQAdg0AJg9IAEhAQgCg/gWg4gAlbg1IgEA/QACA/AWA3ICMhGQgFgSgCgUIAEg/QAEgTAIgSIiChYQgdA1gKA+gAg8g9QgZAYgCAlQABAlAYAZQAZAYAlACQAlAAAZgZQAZgZABglQgBgkgYgZQgYgZgmgCQgkAAgZAagAAvi+QBGASAqA6ICMhHQgohAg+gqQg+gqhNgOgAibk6QhFAigwA7ICCBYQAyg1BLgJIAMicQhSAChEAjg");
	this.shape_1.setTransform(47,47);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,94.1,94);


(lib.wheel04 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2CA2DD").s().p("AgmDcQgQgFABgQIAHgpQgugOgfgjIgiAYQgPAIgKgNQgJgOANgLIAigYQgXgpADgwIgpgHQgQgEACgRQAEgQAQABIApAHQAOgvAkgeIgYgiQgIgPAMgKQAPgJALANIAXAiQApgXAwADIAHgpQAFgQARACQAQAEgCAQIgHApQAvAOAfAkIAigYQAOgIALAMQAIAPgMALIgiAXQAWApgCAwIAoAHQAQAFgBARQgEAQgRgCIgpgHQgOAvgjAfIAYAiQAIAOgNALQgOAIgLgMIgYgiQgpAWgwgCIgHAoQgEAPgPAAIgCAAgAgcgpQgRAMgEAVQgDAUALARQAMARAVAEQAUADARgLQARgMAEgVQADgVgLgQQgMgRgVgEIgJgBQgPAAgNAJg");
	this.shape.setTransform(22,22);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2CA2DD").s().p("AgEAZQgWgHACgVQAGgXAWACQAWAGgBAWQgGAVgUAAIgDAAg");
	this.shape_1.setTransform(22,22);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,44.1,44.1);


(lib.Wheel03 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#58595B").s().p("AguF0QgXgFAAgYIAFgnQgigIgggOIgTAiQgOAUgWgKQgUgOAKgWIATgjQgbgTgYgaIgfAZQgUANgRgSQgOgVASgRIAggXQgUgegMggIglALQgYAEgJgXQgEgYAXgJIAmgKQgHghACgiIgngFQgYgFABgZQAFgXAZAAIAmAFQAIgiAOggIgigTQgUgOAKgWQAOgUAXAKIAhATQAUgbAZgYIgYgfQgNgUARgRQAVgOARASIAYAgQAdgUAhgMIgKglQgFgYAXgJQAYgEAIAXIALAmQAhgHAiACIAFgnQAFgYAYABQAZAFgBAZIgFAmQAiAIAfAOIATgiQAOgUAXAKQAUAOgKAXIgUAhQAcAUAYAZIAfgYQAUgNARARQANAVgSARIgeAYQASAdAMAhIAmgKQAYgFAIAXQAFAYgXAIIgmALQAHAhgCAiIAnAFQAYAFgBAYQgFAZgYgBIgngFQgIAigOAfIAiATQAUAOgKAXQgOAUgWgKIgjgUQgTAcgaAYIAZAfQANAUgSARQgVANgRgSIgXgeQgeASggAMIALAmQAEAYgXAIQgYAFgJgXIgKgmQghAHgigCIgFAnQgFAXgXAAIgCAAgAg4CGQgRAOgEAXQgDAYAOARQAOASAYAEQAXACARgNQASgOADgYQACgYgNgRQgOgSgXgEIgGAAQgUAAgPAMgACKAuQgXAEgOAUQgMAUAEAVQAEAXAUANQATAOAWgFQAWgDAOgUQAOgUgFgWQgEgWgTgOQgPgKgRAAIgKABgAi6AZQgVALgHAVQgIAVAJAWQALAVAVAIQAVAHAWgJQAVgLAIgVQAIgVgKgWQgLgVgUgIQgKgDgKAAQgMAAgMAFgAgqg2QgWARgFAdQgDAdASAWQARAWAdAFQAdADAWgSQAWgRAFgdQADgdgSgWQgRgWgdgFIgJAAQgXAAgTAPgACKh+QgUAKgIAWQgIAUAJAXQALAVAWAHQAUAIAXgKQAUgKAJgVQAHgVgJgWQgLgVgWgIQgJgDgJAAQgMAAgNAFgAieicQgWAFgOATQgMAUADAWQAFAWATAOQAUANAWgEQAWgFAOgTQANgUgEgWQgEgWgTgOQgQgKgQAAIgLABgAgMjeQgRAOgEAYQgCAYAOARQAOASAXADQAXADASgOQASgOADgXQACgYgOgSQgNgRgYgEIgHAAQgTAAgPALg");
	this.shape.setTransform(37.2,37.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#58595B").s().p("AgDAlQgigHABghQAIgiAhABQAhAIgBAhQgHAgggAAIgBAAg");
	this.shape_1.setTransform(37.2,37.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,74.4,74.4);


(lib.wheel01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4B7A22").s().p("AhBDNQgPgHADgPIAMgmQgqgUgZglIgjARQgQAGgHgOQgGgOANgJIAjgSQgQgqAJgtIglgNQgPgGAEgPQAFgPAQADIAmAMQAUgqAmgZIgSgjQgHgQAOgHQAPgGAJANIASAjQAqgQAtAJIAMglQAHgPAQAEQAOAFgDAQIgMAmQAqAUAZAmIAjgSQAPgHAJAOQAFAPgNAJIgjASQAQAqgJAtIAmAMQAOAHgDAQQgHAOgPgDIgmgMQgUAqglAZIARAjQAGAPgOAJQgOAFgJgNIgSgjQgqAQgtgJIgNAmQgFALgLAAIgFAAgAg2BcQgEAUATAJQAUAEAJgTQAEgVgTgHIgIgCQgOAAgHAQgAAkBJQgRALAHAUQAMARATgHQARgMgHgTQgIgMgMAAQgFAAgGACgAhmAaQgSAMAIATQAKARAUgHQARgLgHgUQgIgMgMAAQgFAAgFACgABOAZQgFAVATAIQAUAFAJgTQAEgUgTgIIgIgCQgOAAgGAPgAgVgrQgRAJgIAUQgFATAIARQAJASAUAGQATAHARgKQASgJAGgTQAHgTgKgRQgJgRgTgIQgIgCgHAAQgLAAgKAFgAh3gnQgFAUATAJQAUAEAJgTQAEgUgTgJIgIgBQgOAAgGAQgABThCQgSALAIATQALATAUgJQARgKgHgUQgIgMgMAAQgFAAgGACgAg4hwQgRAKAHAUQALARATgHQATgLgJgTQgHgNgMAAQgFAAgGADgAAMhpQgGAUATAJQAVAEAIgTQAFgUgTgIIgIgCQgOAAgGAQg");
	this.shape.setTransform(20.5,20.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4B7A22").s().p("AgHAXQgUgJAFgVQAJgUAUAFQAVAJgFAUQgHARgPAAIgIgBg");
	this.shape_1.setTransform(20.5,20.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,41,41);


(lib.Wheeel02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EF4136").s().p("AhRAcIBLhyIBYA7IhLBxg");
	this.shape.setTransform(25.4,46.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EF4136").s().p("AhTAHIA9hXIBqBLIg9BWg");
	this.shape_1.setTransform(46.6,42.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EF4136").s().p("AhTAdIBQh1IBXA8IhQB1g");
	this.shape_2.setTransform(44.7,20.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EF4136").s().p("AhSAFIBAhUIBkBKIg/BWg");
	this.shape_3.setTransform(21,24.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFCF21").s().p("AgFA0QgWgEgNgQQgNgRACgUQADgWARgNQAQgNAVACQAWADANARQANAQgCAVQgEAWgQANQgOALgSAAIgFAAg");
	this.shape_4.setTransform(34.4,34.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EF4136").s().p("AgnFYQgbgGABgbIAGg2QgngJgigUIggAsQgSAUgXgOQgUgSAOgXIAggrQgegcgVgkIgxAVQgaAIgNgXQgIgaAYgMIAxgWQgLglAAgoIg2gGQgagGABgaQAGgbAaABIA2AGQAJgnAUgiIgrggQgUgSAOgXQASgUAWAOIAsAgQAcgeAkgVIgWgxQgIgaAYgNQAZgIANAYIAVAxQAmgLAoAAIAGg2QAFgaAbABQAaAGgBAaIgGA2QAoAJAiAUIAggrQASgUAXAOQAUASgOAWIghAsQAfAcAUAkIAygWQAZgIANAYQAIAZgXANIgyAVQALAmAAAoIA2AGQAaAFAAAbQgGAagbgBIg2gGQgJAogUAiIAsAgQAUASgOAXQgSAUgXgOIgrghQgcAfgkAUIAVAyQAIAZgXANQgaAIgMgXIgWgyQglALgoAAIgGA2QgGAagZAAIgBAAgAiBikQhCA0gNBYQgIBYA0BCQA0BCBYAMQBYAJBCg0QBCg0AMhZQAJhYg0hBQg0hChZgNIgYgBQhJAAg4Atg");
	this.shape_5.setTransform(34.4,34.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EF4136").s().p("AgQCPQg8gJgkgtQgjgtAFg8QAJg8AtgkQAtgjA8AFQA8AJAkAtQAjAtgFA8QgJA8gtAkQgnAegyAAIgQAAg");
	this.shape_6.setTransform(34.3,34.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,68.8,68.8);


(lib.Tween7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhMCcIgJgDIADgMIAIACIAKABQAVAAAOgSQAOgQAJgbIAGgUIhZjbIAPAAIA3CNIAMAdIAMAeIABAAIALgeIAKgdIAxiNIAOAAIhWD0QgFARgJAQQgJAQgOAKQgNAKgTABIgLgCg");
	this.shape.setTransform(5,28.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AA/BuIAAiIQABgjgNgSQgMgSgcAAQgTAAgRALQgRALgVAWIAACjIgNAAIAAjWIAMAAIABAiIABAAQARgRASgLQASgLAVAAQAhAAAQAUQAQAUAAAqIAACJg");
	this.shape_1.setTransform(-16.2,23.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AguBrQgOgGgHgNQgJgNAAgUQAAgkAigTQAjgSBHgHQAAgTgDgQQgFgRgLgLQgLgLgXAAQgOAAgOAEQgNAEgLAGQgLAGgGAGIgIgLQAIgGALgGQALgGAQgFQAPgEARgBQAZABAOAKQAPAMAFASQAHASgBAWIAACLIgLAAIgCgeIgBAAQgRAOgUAKQgUALgUAAQgRAAgPgGgAgKAAQgcAJgMANQgMAOAAATQAAAQAHAKQAGAKALAFQAMAEANAAQASAAATgJQASgJAWgSIAAhOQgvAFgbAJg");
	this.shape_2.setTransform(-39.7,23.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhXCgIAAk6IAMAAIABAcIABAAQARgNATgKQATgKATAAQAdAAAUANQATAOAJAZQAKAYAAAiQgBAkgNAZQgNAagVAOQgWANgZABQgQAAgQgIQgRgHgSgMIAAAoIAABRgAgiiJQgTAKgVASIAACEQAUAQASAHQARAHANAAQAXAAASgNQASgOAKgXQAKgWAAgeQAAgcgHgWQgHgWgQgNQgQgMgbgBQgQAAgSAKg");
	this.shape_3.setTransform(-61,28.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AB+BuIAAiIQAAgjgMgSQgNgSgaAAQgQAAgRALQgRALgSAWIAACjIgNAAIAAiIQAAgjgMgSQgNgSgaAAQgQAAgRALQgRALgTAWIAACjIgNAAIAAjWIAMAAIABAiIABAAQAPgRASgLQASgLASAAQAaAAAOAMQAOAMAEAVQATgVASgMQATgMASAAQAgAAAQAUQAQAUAAAqIAACJg");
	this.shape_4.setTransform(-92,23.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AguBkQgWgOgNgZQgNgZgBgjQABgkANgZQANgZAWgNQAVgNAZgBQAaABAVANQAWANANAZQANAZABAkQgBAjgNAZQgNAZgWAOQgVANgaAAQgZAAgVgNgAgphXQgRAOgLAWQgKAXgBAdQABAdAKAXQALAWARAMQATANAWAAQAXAAATgNQASgMALgWQAKgXAAgdQAAgdgKgXQgLgWgSgOQgTgMgXAAQgWAAgTAMg");
	this.shape_5.setTransform(-122.3,23.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AguCGQgbgTgPgiQgQgjAAguQAAgvAQgiQAPgjAcgSQAcgTAlAAQAaABATAKQATALAMANIgJAKQgMgPgRgIQgRgIgVAAQghAAgZAQQgYASgNAfQgOAfAAArQABAqANAgQANAfAYASQAYARAgABQAYAAASgKQATgJARgTIAJAJQgRATgVAMQgVALgdAAQgjAAgcgUg");
	this.shape_6.setTransform(-146.4,19.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgECGQgLgIgEgOQgFgOAAgSIAAiRIgiAAIAAgLIAigCIACg/IAMAAIAAA/IA/AAIAAANIg/AAIAACSQAAAOADALQADALAHAGQAIAGAQAAQAGAAAHgCIAPgFIAEALIgTAGQgJADgFAAQgUgBgKgHg");
	this.shape_7.setTransform(68.9,-23.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AA/BuIAAiIQABgjgNgSQgMgSgcAAQgTAAgRALQgRALgVAWIAACjIgNAAIAAjWIAMAAIABAiIABAAQARgRASgLQASgLAVAAQAhAAAQAUQAQAUAAAqIAACJg");
	this.shape_8.setTransform(50.1,-21.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AglBjQgWgOgNgZQgNgYgBgjQABgjANgZQANgZAUgOQAWgNAXgBQAmABAVAYQAWAaAAAwIAAAHIgBAHIidAAQAAAcAKAXQALAXASAMQAUANAYAAQASAAAPgFQAOgGANgIIAGALQgMAIgPAGQgPAGgZABQgaAAgWgOgABKgLQgBgsgSgWQgSgWgfAAQgSAAgSALQgQAKgMAUQgLAUgCAbICRAAIAAAAg");
	this.shape_9.setTransform(27.7,-20.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AB+BuIAAiIQAAgjgMgSQgNgSgaAAQgQAAgRALQgRALgSAWIAACjIgNAAIAAiIQAAgjgMgSQgNgSgaAAQgQAAgRALQgRALgTAWIAACjIgNAAIAAjWIAMAAIABAiIABAAQAPgRASgLQASgLASAAQAaAAAOAMQAOAMAEAVQATgVASgMQATgMASAAQAgAAAQAUQAQAUAAAqIAACJg");
	this.shape_10.setTransform(-1.4,-21.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhXCgIAAk6IAMAAIABAcIABAAQARgNATgKQATgKATAAQAdAAAUANQATAOAJAZQAKAYAAAiQgBAkgNAZQgNAagVAOQgWANgZABQgQAAgQgIQgRgHgSgMIAAAoIAABRgAgiiJQgTAKgVASIAACEQAUAQASAHQARAHANAAQAXAAASgNQASgOAKgXQAKgWAAgeQAAgcgHgWQgHgWgQgNQgQgMgbgBQgQAAgSAKg");
	this.shape_11.setTransform(-30.9,-16.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgvBkQgVgOgNgZQgNgZAAgjQAAgkANgZQANgZAVgNQAWgNAZgBQAaABAWANQAVANANAZQANAZABAkQgBAjgNAZQgNAZgVAOQgWANgaAAQgZAAgWgNgAgohXQgTAOgKAWQgLAXAAAdQAAAdALAXQAKAWATAMQASANAWAAQAYAAASgNQASgMAKgWQALgXAAgdQAAgdgLgXQgKgWgSgOQgSgMgYAAQgWAAgSAMg");
	this.shape_12.setTransform(-56,-20.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgKCeQgGgGAAgQIAAksIAOAAIAAEvQgBAHADADQABADAFAAIADAAIAFAAIACALIgFABIgGABQgKAAgFgHg");
	this.shape_13.setTransform(-72.3,-26.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AglBjQgWgOgNgZQgNgYgBgjQABgjANgZQANgZAVgOQAUgNAYgBQAlABAWAYQAVAaABAwIAAAHIgBAHIidAAQAAAcAKAXQAKAXATAMQAUANAYAAQATAAAOgFQAPgGAMgIIAGALQgMAIgPAGQgPAGgZABQgaAAgWgOgABJgLQAAgsgSgWQgSgWgfAAQgSAAgRALQgSAKgLAUQgLAUgCAbICQAAIAAAAg");
	this.shape_14.setTransform(-88.7,-20.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgHBsIhSjWIAQAAIAzCKIAMAfIAKAeIABAAIALgeIAMgfIAziKIAOAAIhRDWg");
	this.shape_15.setTransform(-109.3,-20.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AglBjQgWgOgNgZQgNgYgBgjQABgjANgZQANgZAUgOQAWgNAXgBQAmABAVAYQAWAaAAAwIAAAHIgBAHIidAAQAAAcAKAXQALAXASAMQAUANAYAAQASAAAPgFQAOgGANgIIAGALQgMAIgPAGQgPAGgZABQgaAAgWgOgABKgLQgBgsgSgWQgSgWgfAAQgSAAgSALQgQAKgMAUQgLAUgCAbICRAAIAAAAg");
	this.shape_16.setTransform(-129.8,-20.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AhjCVIAAkoIBCAAQAuAAAdASQAdATAPAgQAOAhAAAtQAAAsgOAhQgPAigdATQgdATguAAgAhUCIIAyAAQApAAAbgSQAagSAMgeQANgggBgmQABgngNgfQgMgegagSQgbgRgpAAIgyAAg");
	this.shape_17.setTransform(-153.4,-25);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AhXCgIAAk6IAMAAIABAcIABAAQARgNATgKQATgKATAAQAdAAAUANQATAOAJAZQAKAYAAAiQgBAkgNAZQgNAagVAOQgWANgZABQgQAAgQgIQgRgHgSgMIAAAoIAABRgAgiiJQgTAKgVASIAACEQAUAQASAHQARAHANAAQAXAAASgNQASgOAKgXQAKgWAAgeQAAgcgHgWQgHgWgQgNQgQgMgbgBQgQAAgSAKg");
	this.shape_18.setTransform(-187.8,-16.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AhXCgIAAk6IAMAAIABAcIABAAQARgNATgKQATgKATAAQAdAAAUANQATAOAJAZQAKAYAAAiQgBAkgNAZQgNAagVAOQgWANgZABQgQAAgQgIQgRgHgSgMIAAAoIAABRgAgiiJQgTAKgVASIAACEQAUAQASAHQARAHANAAQAXAAASgNQASgOAKgXQAKgWAAgeQAAgcgHgWQgHgWgQgNQgQgMgbgBQgQAAgSAKg");
	this.shape_19.setTransform(-212.1,-16.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("ABiCVIglhrIh5AAIglBrIgPAAIBrkoIAMAAIBpEogAA4AdIgUg5IgSg0IgRg0IgBAAIgQA0IgSA0IgVA5IBvAAg");
	this.shape_20.setTransform(-236.7,-25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-250.2,-56.4,336.7,105.1);


(lib.Tween5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCF21").s().p("AgnBmQgTgIgOgNIAJgKQANALAQAIQAQAIAXAAQARAAAMgGQAMgGAGgKQAGgLAAgMQAAgOgIgJQgIgJgMgHQgMgGgNgEIgfgMQgPgHgLgLQgKgLAAgSQAAgOAHgNQAIgMAPgIQAOgHAVAAQAQAAAPAGQAQAFALAKIgIAKQgKgIgNgFQgMgGgQAAQgRAAgLAGQgLAGgGAJQgFAKAAAKQAAANAHAIQAIAIALAGIAYAKIAhAMQAQAHALAMQAKAMABAUQAAAQgJANQgIANgPAIQgPAIgWAAQgXAAgUgIg");
	this.shape.setTransform(159.7,-2.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCF21").s().p("AgsBpQgOgGgIgNQgJgMAAgUQAAgjAigTQAhgRBGgIQABgRgEgRQgEgQgLgLQgMgLgWAAQgOAAgNAEQgNAEgKAGQgLAGgGAGIgHgLQAHgFALgGQALgHAPgEQAPgFAQAAQAZAAAOALQAOALAGASQAGASAAAVIAACHIgMAAIgCgcIAAAAQgRAOgTAJQgUAKgUAAQgRAAgNgFgAgKAAQgbAJgMANQgMANAAASQABARAGAJQAGAKALAFQALAEANAAQASAAASgJQATgJAUgSIAAhLQguAFgaAIg");
	this.shape_1.setTransform(139.8,-2.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFCF21").s().p("AgkBhQgWgNgNgZQgMgYgBgjQABghAMgZQANgYAUgOQAVgNAXAAQAlAAAVAZQAUAYABAvIAAAHIgBAGIiZAAQAAAdAKAWQAKAWASAMQATANAYAAQASAAAOgFQAOgGAMgIIAGALQgLAIgPAGQgQAGgXAAQgaAAgVgNgABIgKQAAgsgTgVQgRgWgeAAQgTAAgQALQgRAKgLAUQgLATgBAbICNAAIAAAAg");
	this.shape_2.setTransform(119.7,-2.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFCF21").s().p("Ag9CFQgXgbgBg2QABgiAMgYQANgZAVgNQAVgOAaAAQASAAAPAHQAQAHAQAMIgBgnIAAhaIANAAIAAE+IgMAAIgBgcIgBAAQgOANgRAJQgSAKgVAAQgoAAgXgcgAAIguQgWABgSANQgSAMgKAWQgKAWAAAcQAAAdAIAWQAJAWAQAMQARAMAWABQATAAARgKQARgJASgSIAAiCQgSgPgQgHQgOgHgPAAIgCAAg");
	this.shape_3.setTransform(96.1,-7.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFCF21").s().p("AgGCRIAAkhIANAAIAAEhg");
	this.shape_4.setTransform(80.2,-6.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFCF21").s().p("AgECDQgLgIgEgNQgEgOAAgSIAAiNIgiAAIAAgLIAigCIACg+IALAAIAAA+IA9AAIAAANIg9AAIAACPQAAANADALQADALAHAFQAIAHAPAAQAGAAAHgCIAOgGIAFALIgTAHIgOABQgTAAgKgHg");
	this.shape_5.setTransform(60.3,-5.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFCF21").s().p("AgsBpQgOgGgIgNQgJgMAAgUQAAgjAigTQAhgRBGgIQABgRgEgRQgEgQgLgLQgMgLgWAAQgOAAgNAEQgNAEgKAGQgLAGgGAGIgHgLQAHgFALgGQALgHAPgEQAPgFAQAAQAZAAAOALQAOALAGASQAGASAAAVIAACHIgMAAIgCgcIAAAAQgRAOgTAJQgUAKgUAAQgRAAgNgFgAgKAAQgbAJgMANQgMANAAASQABARAGAJQAGAKALAFQALAEANAAQASAAASgJQATgJAUgSIAAhLQguAFgaAIg");
	this.shape_6.setTransform(42.1,-2.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFCF21").s().p("AgkBhQgWgNgNgZQgMgYgBgjQABghAMgZQANgYAVgOQAUgNAXAAQAlAAAVAZQAVAYAAAvIAAAHIgBAGIiaAAQAAAdAKAWQALAWASAMQATANAYAAQASAAAOgFQAOgGANgIIAFALQgLAIgPAGQgQAGgXAAQgZAAgWgNgABIgKQgBgsgRgVQgSgWgeAAQgSAAgRALQgRAKgKAUQgMATgCAbICOAAIAAAAg");
	this.shape_7.setTransform(22,-2.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFCF21").s().p("AguBsIAAjSIALAAIACAoIABAAQAKgUAQgMQAOgMASgBIALABQAEABAGADIgEAMIgJgDIgJgBQgPAAgOANQgQANgNAfIAACRg");
	this.shape_8.setTransform(7.1,-2.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFCF21").s().p("AgtCEQgbgTgPgiQgPgiAAgtQAAguAPghQAQgiAcgSQAdgSAlAAQAUAAAOAFQAPAFALAIQAKAIAIAIIgJAJQgLgMgRgJQgQgJgZAAQgiAAgZAQQgZARgNAfQgNAeAAAqQAAApAMAfQANAfAZARQAYARAhAAQAVAAASgGQATgGALgMIAAhfIhIAAIAAgNIBWAAIAABxQgNAPgVAIQgWAJgcAAQgkAAgcgSg");
	this.shape_9.setTransform(-15.3,-6.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFCF21").s().p("AguBsIAAjSIALAAIACAoIABAAQAKgUAPgMQAOgMAUgBIAKABQAFABAFADIgDAMIgJgDIgKgBQgPAAgPANQgPANgNAfIAACRg");
	this.shape_10.setTransform(-41.1,-2.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFCF21").s().p("Ag6BYQgQgTAAgpIAAiHIAOAAIAACFQgBAjANARQAMASAbAAQASAAARgLQARgLATgYIAAidIANAAIAADSIgLAAIgCgkIgBAAQgQASgRAMQgSALgUAAQghAAgPgUg");
	this.shape_11.setTransform(-61.7,-2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFCF21").s().p("AgtBhQgWgNgMgYQgNgZgBgiQABgjANgZQAMgYAWgNQAUgNAZAAQAZAAAVANQAWANAMAYQANAZAAAjQAAAigNAZQgMAYgWANQgVANgZAAQgZAAgUgNgAgohUQgRAMgLAWQgKAWAAAdQAAAdAKAWQALAVARANQATAMAVAAQAXAAARgMQATgNAJgVQALgWAAgdQAAgdgLgWQgJgWgTgMQgRgNgXAAQgVAAgTANg");
	this.shape_12.setTransform(-84.7,-2.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFCF21").s().p("AhKCZIgKgDIAEgNIAIADIAJABQAVgBANgQQAPgRAIgaIAGgTIhXjXIAPAAIA1CKIAMAcIALAeIACAAIAKgeIAKgcIAwiKIAOAAIhUDvQgFARgJAPQgJAQgNAKQgNAKgTAAIgKgBg");
	this.shape_13.setTransform(-105.7,2.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFCF21").s().p("AgXCiIAAjFIgdAAIAAgLIAdgCIAAg0QAAgfANgPQALgPAXABQAHAAAHABQAIACAHAEIgEALQgHgEgGgBIgNgBQgSAAgHANQgIANAAAYIAAAyIAxAAIAAANIgxAAIAADFg");
	this.shape_14.setTransform(-128.1,-7.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFCF21").s().p("AguBhQgUgNgNgYQgNgZgBgiQABgjANgZQANgYAUgNQAVgNAZAAQAZAAAWANQAUANANAYQANAZAAAjQAAAigNAZQgNAYgUANQgWANgZAAQgZAAgVgNgAgohUQgRAMgLAWQgKAWAAAdQAAAdAKAWQALAVARANQASAMAWAAQAXAAARgMQASgNAKgVQALgWAAgdQAAgdgLgWQgKgWgSgMQgRgNgXAAQgWAAgSANg");
	this.shape_15.setTransform(-146.6,-2.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFCF21").s().p("AgKCbQgFgHAAgPIAAkmIANAAIAAEpQAAAHACADQABADAEAAIADAAIAFgBIADAMIgFABIgGAAIgCABQgIAAgFgHg");
	this.shape_16.setTransform(193.7,-50.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFCF21").s().p("AgsBpQgOgGgIgNQgJgMAAgUQAAgjAigTQAhgRBGgIQABgRgEgRQgEgQgLgLQgMgLgWAAQgOAAgNAEQgNAEgKAGQgLAGgGAGIgHgLQAHgFALgGQALgHAPgEQAPgFAQAAQAZAAAOALQAOALAGASQAGASAAAVIAACHIgMAAIgCgcIAAAAQgRAOgTAJQgUAKgUAAQgRAAgNgFgAgKAAQgbAJgMANQgMANAAASQABARAGAJQAGAKALAFQALAEANAAQASAAASgJQATgJAUgSIAAhLQguAFgaAIg");
	this.shape_17.setTransform(176.6,-45.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFCF21").s().p("AgGCTIAAjRIAMAAIAADRgAgJh4QgFgEAAgHQAAgHAFgEQAEgEAFAAQAGAAAEAEQAFAEAAAHQAAAHgFAEQgEADgGABQgFgBgEgDg");
	this.shape_18.setTransform(161.2,-49.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFCF21").s().p("AgECDQgLgIgEgNQgEgOAAgSIAAiNIgiAAIAAgLIAigCIACg+IALAAIAAA+IA9AAIAAANIg9AAIAACPQAAANADALQADALAHAFQAIAHAPAAQAGAAAHgCIAOgGIAFALIgTAHIgOABQgTAAgKgHg");
	this.shape_19.setTransform(150.1,-48.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFCF21").s().p("AA+BsIAAiFQABgjgNgRQgMgRgbAAQgSAAgRAKQgRALgUAVIAACgIgNAAIAAjSIALAAIACAiIABAAQAQgRARgLQATgKAUgBQAhAAAPAUQAPATAAApIAACHg");
	this.shape_20.setTransform(131.7,-45.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFCF21").s().p("AgkBhQgWgNgNgZQgNgYAAgjQAAghANgZQANgYAUgOQAVgNAXAAQAlAAAUAZQAVAYABAvIAAAHIgBAGIiZAAQAAAdAKAWQAJAWATAMQATANAYAAQASAAAOgFQAOgGAMgIIAHALQgMAIgPAGQgPAGgYAAQgaAAgVgNgABIgKQAAgsgTgVQgRgWgeAAQgTAAgQALQgRAKgLAUQgLATgBAbICNAAIAAAAg");
	this.shape_21.setTransform(109.7,-45.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFCF21").s().p("AgECDQgLgIgEgNQgEgOAAgSIAAiNIgiAAIAAgLIAigCIACg+IALAAIAAA+IA9AAIAAANIg9AAIAACPQAAANADALQADALAHAFQAIAHAPAAQAGAAAHgCIAOgGIAFALIgTAHIgOABQgTAAgKgHg");
	this.shape_22.setTransform(93.1,-48.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFCF21").s().p("AgtBhQgWgNgNgYQgMgZAAgiQAAgjAMgZQANgYAWgNQAUgNAZAAQAZAAAVANQAWANAMAYQANAZAAAjQAAAigNAZQgMAYgWANQgVANgZAAQgZAAgUgNgAgnhUQgTAMgKAWQgKAWAAAdQAAAdAKAWQAKAVATANQARAMAWAAQAWAAATgMQARgNALgVQAKgWAAgdQAAgdgKgWQgLgWgRgMQgTgNgWAAQgWAAgRANg");
	this.shape_23.setTransform(74.3,-45.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFCF21").s().p("AhYCRIAAkhIBMAAQAwgBAaATQAbASAAArQAAAqgbAUQgaAUgwAAIg9AAIAACAgAhJAFIA3AAQAvAAAWgQQAXgRAAglQAAgZgKgPQgKgPgUgGQgVgGgfAAIg3AAg");
	this.shape_24.setTransform(52.9,-49.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFCF21").s().p("AgkBhQgWgNgNgZQgNgYAAgjQAAghANgZQANgYAUgOQAVgNAXAAQAlAAAVAZQAUAYABAvIAAAHIgBAGIiZAAQgBAdAKAWQAKAWATAMQATANAYAAQASAAAOgFQAPgGAMgIIAFALQgLAIgPAGQgPAGgYAAQgaAAgVgNgABIgKQgBgsgRgVQgSgWgeAAQgTAAgQALQgQAKgMAUQgKATgCAbICNAAIAAAAg");
	this.shape_25.setTransform(20.9,-45.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFCF21").s().p("AA+CfIAAiGQABgigNgRQgMgRgbAAQgSAAgRALQgRAKgUAVIAACgIgNAAIAAk9IANAAIAABeIAAAwQARgRARgMQATgKAUgBQAhAAAPAUQAPATAAAoIAACIg");
	this.shape_26.setTransform(-1.1,-50.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFCF21").s().p("AgECDQgLgIgEgNQgEgOAAgSIAAiNIgiAAIAAgLIAigCIACg+IALAAIAAA+IA9AAIAAANIg9AAIAACPQAAANADALQADALAHAFQAIAHAPAAQAGAAAHgCIAOgGIAFALIgTAHIgOABQgTAAgKgHg");
	this.shape_27.setTransform(-19.1,-48.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFCF21").s().p("AgkBhQgWgNgNgZQgMgYgBgjQABghAMgZQANgYAVgOQAUgNAXAAQAlAAAUAZQAWAYAAAvIAAAHIgBAGIiaAAQAAAdAKAWQALAWASAMQATANAYAAQASAAAOgFQAOgGANgIIAFALQgLAIgPAGQgQAGgXAAQgZAAgWgNgABIgKQgBgsgRgVQgSgWgeAAQgSAAgRALQgRAKgKAUQgMATgCAbICOAAIAAAAg");
	this.shape_28.setTransform(-45,-45.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFCF21").s().p("AhLBpIAAgHICAi+IhyAAIAAgMICEAAIAAAHIiAC+ICFAAIAAAMg");
	this.shape_29.setTransform(-64.1,-45.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFCF21").s().p("AgGCTIAAjRIAMAAIAADRgAgJh4QgFgEAAgHQAAgHAFgEQAEgEAFAAQAGAAAEAEQAFAEAAAHQAAAHgFAEQgEADgGABQgFgBgEgDg");
	this.shape_30.setTransform(-77.7,-49.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFCF21").s().p("AgKCbQgFgHAAgPIAAkmIANAAIAAEpQAAAHACADQABADAEAAIADAAIAFgBIADAMIgFABIgGAAIgCABQgIAAgFgHg");
	this.shape_31.setTransform(-86.8,-50.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFCF21").s().p("AgsBpQgOgGgIgNQgJgMAAgUQAAgjAigTQAhgRBGgIQABgRgEgRQgEgQgLgLQgMgLgWAAQgOAAgNAEQgNAEgKAGQgLAGgGAGIgHgLQAHgFALgGQALgHAPgEQAPgFAQAAQAZAAAOALQAOALAGASQAGASAAAVIAACHIgMAAIgCgcIAAAAQgRAOgTAJQgUAKgUAAQgRAAgNgFgAgKAAQgbAJgMANQgMANAAASQABARAGAJQAGAKALAFQALAEANAAQASAAASgJQATgJAUgSIAAhLQguAFgaAIg");
	this.shape_32.setTransform(-103.9,-45.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFCF21").s().p("AgkBhQgWgNgNgZQgNgYAAgjQAAghANgZQANgYAUgOQAVgNAXAAQAlAAAUAZQAWAYAAAvIAAAHIgBAGIiaAAQAAAdALAWQAJAWATAMQATANAYAAQASAAAOgFQAOgGAMgIIAHALQgMAIgPAGQgPAGgYAAQgaAAgVgNgABIgKQAAgsgTgVQgRgWgeAAQgSAAgRALQgQAKgLAUQgLATgDAbICOAAIAAAAg");
	this.shape_33.setTransform(-123.9,-45.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFCF21").s().p("ABICRIhRiJIhAAAIAACJIgPAAIAAkhIBQAAQAqgBAaASQAZASAAAoQAAAigWAUQgUATgkADIBSCKgAhJgDIA8AAQAnAAAWgQQAWgRAAghQAAgigWgPQgWgOgnAAIg8AAg");
	this.shape_34.setTransform(-145.2,-49.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-160.3,-80.3,369.1,102.6);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFB699").s().p("AABBYQizgHh+gwQh/gwgehIQBwAcCcASQCcARCpABQCtgBCdgTQguA9h8AkQhzAiiXAAIgZAAg");
	this.shape.setTransform(46.2,8.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,92.4,17.6);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFB699").s().p("AAABdQi7gGiBg1QiBgzgVhMQBvAcCdASQCdASCrABQCygBCfgUQgnBBh/AoQh2AmigAAIgXgBg");
	this.shape.setTransform(46.7,9.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,93.5,18.7);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFB699").s().p("AABBaQi3gGiAgyQiAgxgahKQBwAbCdASQCcASCqABQCwgBCdgUQgrA/h9AmQh0AjibAAIgYAAg");
	this.shape.setTransform(46.5,9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,92.9,18.1);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFE6B3").ss(20,1,1).p("AcFoJQgFn2jwmVQjwmVmVjwQmVjvn2gGQn1AGmVDwQmVDvjwGVQjvGVgGH2QACFTByEpQByEqDODuQBGBSBqBtQBpBuBbBvQBaBuAXBWQATBaAJB3QAJB3AHCFQAICeAPBNQAPBNAmBdQBNC9KgAEIAAABQAEgBADAAQAEABAEAAIAAgBQKhgEBNi9QAlhdAPhNQAQhNAHieQAHiFAJh3QAJh3AUhaQAWhWBahuQBbhvBqhuQBqhtBGhSIgDABQDOjvBykqQBykpAClTg");
	this.shape.setTransform(189.7,241.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,379.4,483.7);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFB699").s().p("AgECQQjJgIiEg6QiFg7gDhSQACgrArglQBvAYCQAQQCRAQCaABQCpgBCYgTQAbAgAAAjQgHBSiHA0QiAAxi7AAIgVAAg");
	this.shape.setTransform(47.4,14.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,94.8,28.8);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6FD8E5").s().p("AhECtQBbgzgPhiQgNhhgdg4QAGgJApg4IAHAAIgFAQIAmBzQAZBKAQA3QAHAagBANQgJA3iRAZQgJAGgLADIgQABQgbAAAxgWg");
	this.shape.setTransform(10,19.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,20.1,39.1);


(lib.shin03 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCF21").s().p("AAIB6IgzjsQgCgRAQgFQARgCAFAQIAzDsQADARgRAFIgEABQgOgBgEgOg");
	this.shape.setTransform(110.3,13.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCF21").s().p("AgpCFQgQgGAEgRIBIjmQAGgQARAEQAPAGgDARIhIDmQgEANgOAAIgFgBg");
	this.shape_1.setTransform(177,17.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFCF21").s().p("AhmBfQgLgOAMgNICxiiQAPgLAMAMQAKANgLANIiyCjQgGAFgGAAQgJAAgFgGg");
	this.shape_2.setTransform(232.3,54);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFCF21").s().p("AhjBhQgLgNALgNICtioQANgLANALQALAOgLANIitCoQgGAFgHAAQgIAAgFgGg");
	this.shape_3.setTransform(47,229);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFCF21").s().p("Ah1AtQgOgBgEgOQgDgRAQgFIDsgzQARgCAGAQQACARgRAFIjsA0IgDAAg");
	this.shape_4.setTransform(261.7,112.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFCF21").s().p("AiHAiQgCgQAQgGIDqg7QARgCAFAQQADARgQAFIjqA7IgFAAQgNAAgFgOg");
	this.shape_5.setTransform(13.6,171.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFCF21").s().p("ABuA2IjmhIQgQgHAEgQQAGgQARAEIDmBIQAQAGgEARQgEAMgNABIgCAAIgEgBg");
	this.shape_6.setTransform(258,177.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFCF21").s().p("ABvAzIjohBQgQgHAEgQQAGgQAQADIDpBBQAQAGgDARQgFANgNABIgGgBg");
	this.shape_7.setTransform(13.7,104.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFCF21").s().p("ABEBmIiiiyQgLgNALgNQAOgKANALICiCyQALAOgMAMQgFAFgHAAQgIAAgGgGg");
	this.shape_8.setTransform(222.9,232.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFCF21").s().p("ABIBlIipivQgLgNALgMQANgLANALICpCuQALANgLANQgGAFgHAAQgIAAgFgFg");
	this.shape_9.setTransform(47.8,47);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,275.3,243.2);


(lib.shin01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCF21").s().p("AhzC6QgOgLAIgPIDUlTQAKgOAPAIQAOAKgIAQIjUFTQgGAIgKABQgFgBgEgCg");
	this.shape.setTransform(246.1,45.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCF21").s().p("AhtC2QgOgKAHgQIDIlKQALgOAPAHQAOALgIAPIjIFLQgGAJgKAAQgFAAgEgDg");
	this.shape_1.setTransform(93.6,292.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFCF21").s().p("Ai/BnQgHgQAPgJIFei8QAPgGAKAOQAGAQgOAJIleC7QgEADgFAAQgKAAgGgKg");
	this.shape_2.setTransform(296.9,102.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFCF21").s().p("Ai7BmQgHgPAOgKIFXi6QAQgGAJAOQAHAQgOAJIlXC6QgEACgFAAQgKAAgGgKg");
	this.shape_3.setTransform(41.1,240.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFCF21").s().p("ADFAYImKgLQgRgCgBgQQACgRASgBIGJALQARACABARQgCAQgRABIAAAAIAAAAg");
	this.shape_4.setTransform(311.9,176.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFCF21").s().p("AjFANQgRgCgBgQQACgRARgBIGKALQARACABAQQgCARgRABg");
	this.shape_5.setTransform(21.6,168.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFCF21").s().p("ACcB3IlLjNQgOgKAIgPQAKgOAQAHIFLDNQANALgHAPQgGAJgKAAQgFAAgFgDg");
	this.shape_6.setTransform(288.2,247.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFCF21").s().p("ACgB4IlTjPQgOgLAIgPQAKgOAQAIIFTDPQANAKgHAQQgGAIgKABQgFAAgFgDg");
	this.shape_7.setTransform(40.9,95.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFCF21").s().p("ABKC0Ii0lVQgHgQAPgKQAPgGAKAOIC0FWQAHAQgPAJQgEACgEAAQgLAAgGgKg");
	this.shape_8.setTransform(232.8,297);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFCF21").s().p("ABRC4IjBleQgHgQAOgJQAQgHAKAOIDAFfQAHAPgOAKQgEACgFAAQgLAAgFgKg");
	this.shape_9.setTransform(94.7,41.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFCF21").s().p("AgUDKIAFmTQACgRAQgCQARACABARIgFGTQgCARgQACQgRgCgBgRg");
	this.shape_10.setTransform(168.8,22.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,333.5,316);


(lib.screen3text03 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AgqBoQgVgIgPgNIASgYQAOALAPAHQAPAHASAAQAVgBALgIQAKgKAAgPQAAgKgHgIQgHgHgLgFQgMgFgLgEQgPgGgPgHQgOgHgKgMQgJgMAAgRQAAgRAIgPQAJgNAQgIQARgHAWgBQAUABARAGQARAHANALIgSAWQgKgJgMgEQgMgGgOAAQgUABgJAIQgKAKAAAMQABAKAGAGQAHAGALAGIAWAJQAQAGAPAHQAOAGAKAMQAKAMAAAVQAAARgJAOQgJAPgSAJQgRAIgZAAQgWAAgVgIg");
	this.shape.setTransform(191.4,5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("AAxBuIAAiCQABgegKgNQgKgOgVgBQgPABgOAIQgNAIgQARIAACaIgkAAIAAjWIAeAAIADAgIACAAQAPgQARgKQASgKAUAAQAiAAAQAVQAQAVAAApIAACHg");
	this.shape_1.setTransform(170.4,4.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFF00").s().p("AgwBjQgWgNgOgZQgOgZAAgjQAAgjAOgZQAOgZAWgNQAWgOAaAAQAbAAAWAOQAWANAOAZQAOAZAAAjQAAAjgOAZQgOAZgWANQgWANgbAAQgaAAgWgNgAgfhGQgOAKgIATQgHARgBAZQABAkARAWQAQAXAbABQAcgBARgXQAQgWABgkQAAgZgIgRQgIgTgOgKQgNgLgTAAQgRAAgOALg");
	this.shape_2.setTransform(146.3,5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFF00").s().p("AgSCYIAAjVIAjAAIAADVgAgRhvQgHgGAAgLQAAgLAHgGQAHgGAKAAQALAAAGAGQAIAGAAALQAAALgIAGQgGAGgLAAQgKAAgHgGg");
	this.shape_3.setTransform(129.1,0.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFF00").s().p("AgUB4QgOgUABggIAAh1IggAAIAAgbIAhgDIAFg7IAdAAIAAA7IA6AAIAAAeIg6AAIAAB2QAAATAHALQAIALASAAIAMgCIAMgEIAHAbQgJAEgKACQgKACgKAAQghAAgOgTg");
	this.shape_4.setTransform(116.4,2.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFF00").s().p("AhEBYQgQgVAAgpIAAiHIAkAAIAACDQAAAdAKAOQAJANAWABQAPgBANgIQAOgJAOgTIAAiXIAkAAIAADWIgdAAIgEgiIgBAAQgPASgRAKQgRALgUgBQgiABgQgWg");
	this.shape_5.setTransform(96.6,5.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFF00").s().p("AgTCTQgKgNABgXIAAkNIAjAAIAAEQQAAAIACADQADAFAFAAIADAAIAFgBIAEAbIgIADIgMAAQgUAAgIgMg");
	this.shape_6.setTransform(80.2,0.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFF00").s().p("AgwBjQgWgNgOgZQgOgZAAgjQAAgjAOgZQAOgZAWgNQAWgOAaAAQAbAAAWAOQAWANAOAZQAOAZAAAjQAAAjgOAZQgOAZgWANQgWANgbAAQgaAAgWgNgAgfhGQgOAKgIATQgHARgBAZQABAkARAWQAQAXAbABQAcgBARgXQAQgWABgkQAAgZgIgRQgIgTgOgKQgNgLgTAAQgRAAgOALg");
	this.shape_7.setTransform(61.7,5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFF00").s().p("Ag2CKQgagMgTgTIAWgaQAQARAUAJQAVAKAWAAQAdAAAPgNQAQgMAAgWQAAgOgGgJQgHgJgKgHIgZgMIgpgSQgNgEgOgKQgNgJgJgPQgJgOAAgVQAAgWAMgRQAMgRAUgKQAVgKAZAAQAaAAAWAJQAWAKAPAQIgTAYQgNgNgRgHQgQgHgUAAQgYAAgOALQgPALAAAUQAAAOAHAIQAHAJALAGQALAGAMAFIAoARQARAIAOAIQANAKAIAOQAIAPAAAVQAAAXgMATQgMASgWALQgWALgfAAQgdAAgagLg");
	this.shape_8.setTransform(38.2,1.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFF00").s().p("AgkBhQgWgNgNgZQgMgYgBgjQABghAMgZQANgYAVgOQAUgNAXAAQAlAAAUAZQAWAYAAAvIAAAHIgBAGIiaAAQAAAdAKAWQALAWASAMQATANAYAAQASAAAOgFQAOgGANgIIAFALQgLAIgPAGQgQAGgXAAQgZAAgWgNgABIgKQgBgsgRgVQgSgWgeAAQgSAAgRALQgRAKgKAUQgMATgCAbICOAAIAAAAg");
	this.shape_9.setTransform(7.6,5.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFF00").s().p("AhVCdIAAk0IALAAIACAcIABAAQAQgNATgKQASgJATgBQAdAAATAOQASANAJAYQAKAYAAAgQgBAkgMAYQgNAagVANQgVAOgZAAQgPAAgQgHQgRgHgRgMIAAAnIAABQgAghiGQgSAKgVARIAACCQAUAPAQAHQARAHANAAQAWgBASgMQASgNAJgXQAKgWABgeQAAgbgHgVQgHgVgQgNQgQgMgaAAQgPAAgSAJg");
	this.shape_10.setTransform(-14.2,9.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFF00").s().p("AgsBpQgOgGgIgNQgJgMAAgUQAAgjAigTQAhgRBGgIQABgRgEgRQgEgQgLgLQgMgLgWAAQgOAAgNAEQgNAEgKAGQgLAGgGAGIgHgLQAHgFALgGQALgHAPgEQAPgFAQAAQAZAAAOALQAOALAGASQAGASAAAVIAACHIgMAAIgCgcIAAAAQgRAOgTAJQgUAKgUAAQgRAAgNgFgAgKAAQgbAJgMANQgMANAAASQABARAGAJQAGAKALAFQALAEANAAQASAAASgJQATgJAUgSIAAhLQguAFgaAIg");
	this.shape_11.setTransform(-38.2,5.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFF00").s().p("AA+CfIAAiGQAAghgMgSQgMgRgbAAQgTAAgQAKQgRALgUAVIAACgIgNAAIAAk9IANAAIAABfIAAAvQARgSASgKQARgLAVgBQAgABAQATQAPAUAAAnIAACIg");
	this.shape_12.setTransform(-59.9,-0.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFF00").s().p("AgnBmQgTgIgOgNIAJgKQANALAQAIQAQAIAXAAQARAAAMgGQAMgGAGgKQAGgLAAgMQAAgOgIgJQgIgJgMgHQgMgGgNgEIgfgMQgPgHgLgLQgKgLAAgSQAAgOAHgNQAIgMAPgIQAOgHAVAAQAQAAAPAGQAQAFALAKIgIAKQgKgIgNgFQgMgGgQAAQgRAAgLAGQgLAGgGAJQgFAKAAAKQAAANAHAIQAIAIALAGIAYAKIAhAMQAQAHALAMQAKAMABAUQAAAQgJANQgIANgPAIQgPAIgWAAQgXAAgUgIg");
	this.shape_13.setTransform(-80.5,5.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFF00").s().p("AgnCbQgQgGgQgMIgBAAIgCAUIgLAAIAAk9IANAAIAABeIgBAqQARgOATgKQATgKATAAQAdAAATANQASANAJAZQAKAWAAAhQgBAkgMAZQgNAZgVAOQgVANgZAAQgPABgRgHgAgiglQgSALgUARIAACCQATAPARAHQARAGANAAQAWAAASgMQASgOAJgWQAKgXABgeQAAgbgHgVQgHgUgQgNQgQgNgaAAQgPABgTAIg");
	this.shape_14.setTransform(-100.2,0);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFF00").s().p("AgkBhQgWgNgNgZQgMgYgBgjQABghAMgZQANgYAUgOQAVgNAXAAQAlAAAVAZQAUAYABAvIAAAHIgBAGIiZAAQgBAdALAWQAJAWATAMQATANAYAAQASAAAOgFQAPgGALgIIAGALQgLAIgPAGQgPAGgYAAQgZAAgWgNgABIgKQgBgsgRgVQgSgWgeAAQgTAAgQALQgQAKgMAUQgLATgBAbICNAAIAAAAg");
	this.shape_15.setTransform(-123.2,5.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFF00").s().p("ABJCRIg4jPIgIghIgIggIgBAAIgIAgIgJAhIg3DPIgOAAIhDkhIAPAAIAmCvIAVBfIACAAIALgwIAMgvIAvivIAPAAIAvCvIAZBfIABAAIAKgwIAKgvIAnivIAOAAIhCEhg");
	this.shape_16.setTransform(-150.7,1.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFF00").s().p("ABOCIQgOgJgRgOQgQARgTAKQgSAKgYAAQgWAAgSgJQgTgJgMgSQgKgSgBgYQAAgSAJgQQAIgPAOgNQAOgMAQgLQgKgTgFgSQgGgTABgRQAAgcAQgSQAPgRAaAAQAVAAAMAOQALAOAAAXQAAASgJAPQgLAPgOANQgPAOgRAMQAQAdAVAcQAVAbAYAWQAQgVAMgZQAMgZAIgcIANAAQgJAdgNAcQgNAbgQAWQAOANAPAJQAPAJAMAFIgFAMQgNgFgQgJgAhIASQgLAMgIANQgGANAAAPQAAAVAJAPQAJAPAPAIQAQAIATAAQATAAAQgJQASgKAOgPQgYgWgWgcQgWgcgRgdQgOAKgLALgAgniCQgJAHgFALQgFALAAAOQAAAQAFAQQAEARAIARIAdgXQAMgMAJgNQAIgNABgQQAAgJgEgKQgDgIgIgGQgGgGgMAAQgOAAgKAHg");
	this.shape_17.setTransform(-188,1.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-202.9,-29.6,405.9,59.3);


(lib.screen3text02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FFCC").s().p("AgkBhQgWgNgNgZQgMgYgBgjQABghAMgZQANgYAVgOQAUgNAXAAQAlAAAUAZQAWAYAAAvIAAAHIgBAGIiaAAQABAdAJAWQALAWASAMQATANAYAAQASAAAOgFQAPgGAMgIIAGALQgMAIgPAGQgPAGgYAAQgZAAgWgNgABIgKQAAgsgTgVQgRgWgeAAQgTAAgQALQgRAKgKAUQgMATgCAbICOAAIAAAAg");
	this.shape.setTransform(135.1,26.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00FFCC").s().p("AhVCdIAAk0IALAAIACAcIABAAQAQgNATgKQASgJATgBQAdAAATAOQASANAJAYQAKAYAAAgQgBAkgMAYQgNAagVANQgVAOgZAAQgPAAgQgHQgRgHgRgMIAAAnIAABQgAghiGQgSAKgVARIAACCQAUAPAQAHQARAHANAAQAWgBASgMQASgNAJgXQAKgWABgeQAAgbgHgVQgHgVgQgNQgQgMgaAAQgPAAgSAJg");
	this.shape_1.setTransform(113.3,31.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00FFCC").s().p("AgsBpQgOgGgIgNQgJgMAAgUQAAgjAigTQAhgRBGgIQABgRgEgRQgEgQgLgLQgMgLgWAAQgOAAgNAEQgNAEgKAGQgLAGgGAGIgHgLQAHgFALgGQALgHAPgEQAPgFAQAAQAZAAAOALQAOALAGASQAGASAAAVIAACHIgMAAIgCgcIAAAAQgRAOgTAJQgUAKgUAAQgRAAgNgFgAgKAAQgbAJgMANQgMANAAASQABARAGAJQAGAKALAFQALAEANAAQASAAASgJQATgJAUgSIAAhLQguAFgaAIg");
	this.shape_2.setTransform(89.3,26.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00FFCC").s().p("AA+CfIAAiGQAAgigMgRQgMgRgbAAQgTAAgQALQgRAKgUAVIAACgIgNAAIAAk9IANAAIAABeIAAAwQARgRARgMQASgKAVAAQAggBAQAUQAPATAAApIAACHg");
	this.shape_3.setTransform(67.6,21.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#00FFCC").s().p("AgnBmQgTgIgOgNIAJgKQANALAQAIQAQAIAXAAQARAAAMgGQAMgGAGgKQAGgLAAgMQAAgOgIgJQgIgJgMgHQgMgGgNgEIgfgMQgPgHgLgLQgKgLAAgSQAAgOAHgNQAIgMAPgIQAOgHAVAAQAQAAAPAGQAQAFALAKIgIAKQgKgIgNgFQgMgGgQAAQgRAAgLAGQgLAGgGAJQgFAKAAAKQAAANAHAIQAIAIALAGIAYAKIAhAMQAQAHALAMQAKAMABAUQAAAQgJANQgIANgPAIQgPAIgWAAQgXAAgUgIg");
	this.shape_4.setTransform(47,26.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#00FFCC").s().p("AgkBhQgWgNgNgZQgMgYgBgjQABghAMgZQANgYAUgOQAVgNAXAAQAlAAAVAZQAUAYABAvIAAAHIgBAGIiZAAQgBAdALAWQAJAWATAMQATANAYAAQASAAAOgFQAPgGALgIIAGALQgLAIgPAGQgPAGgYAAQgZAAgWgNgABIgKQgBgsgRgVQgSgWgeAAQgTAAgQALQgQAKgMAUQgLATgBAbICNAAIAAAAg");
	this.shape_5.setTransform(28,26.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#00FFCC").s().p("AgKCbQgFgHAAgPIAAkmIANAAIAAEpQAAAHACADQABADAEAAIADAAIAFgBIADAMIgFABIgGAAIgCABQgIAAgFgHg");
	this.shape_6.setTransform(12.9,21.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#00FFCC").s().p("AgGCTIAAjRIAMAAIAADRgAgJh4QgFgEAAgHQAAgHAFgEQAEgEAFAAQAGAAAEAEQAFAEAAAHQAAAHgFAEQgEADgGABQgFgBgEgDg");
	this.shape_7.setTransform(2.2,22.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#00FFCC").s().p("AgnCbQgQgHgQgLIgBAAIgCATIgLAAIAAk9IANAAIAABfIgBAqQARgOATgKQATgKATAAQAdAAATAOQASAMAJAYQAKAXAAAhQgBAkgMAZQgNAagVANQgVANgZAAQgPAAgRgGgAgigkQgSAKgUARIAACBQATAQARAHQARAHANAAQAWgBASgNQASgNAJgXQAKgWABgeQAAgbgHgVQgHgVgQgMQgQgMgaAAQgPgBgTAKg");
	this.shape_8.setTransform(-13.6,21.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#00FFCC").s().p("AguBhQgUgNgNgYQgNgZgBgiQABgjANgZQANgYAUgNQAVgNAZAAQAZAAAWANQAUANANAYQANAZAAAjQAAAigNAZQgNAYgUANQgWANgZAAQgZAAgVgNgAgohUQgRAMgLAWQgKAWAAAdQAAAdAKAWQALAVARANQASAMAWAAQAXAAARgMQASgNAKgVQALgWAAgdQAAgdgLgWQgKgWgSgMQgRgNgXAAQgWAAgSANg");
	this.shape_9.setTransform(-38.1,26.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#00FFCC").s().p("ABgCRIAAjJIAAgmIABgmIgBAAIgXA/IhBC2IgQAAIhBi2IgWg/IgDAAIACAmIABAmIAADJIgOAAIAAkhIAXAAIA/CvIAXBCIABAAIAXhCIA/ivIAWAAIAAEhg");
	this.shape_10.setTransform(-65,22.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#00FFCC").s().p("AgjBjQgWgOgNgYQgNgZgBgkQABgjANgZQAPgZAXgNQAXgNAbAAQAVAAAQAIQAPAHALAKIgSAYQgKgIgKgGQgKgFgOAAQgTAAgOAKQgPALgIASQgJATAAAXQAAAmASAWQARAWAeAAQAPAAANgGQAMgHAKgIIAQAXQgOANgSAIQgSAHgTAAQgdAAgWgNg");
	this.shape_11.setTransform(186.2,-16.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#00FFCC").s().p("AgRCYIAAjVIAjAAIAADVgAgRhvQgHgGAAgLQAAgLAHgGQAHgGAKAAQALAAAHAGQAHAGAAALQAAALgHAGQgHAGgLAAQgKAAgHgGg");
	this.shape_12.setTransform(170.3,-21.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#00FFCC").s().p("Ag6BtIAAjUIAeAAIADAnIACAAQAKgVAPgMQAQgLASgBIANABQAFACAFACIgHAfIgKgCIgKgBQgOAAgPALQgOAMgLAaIAACIg");
	this.shape_13.setTransform(159.1,-16.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#00FFCC").s().p("AgUB4QgOgUABggIAAh1IggAAIAAgbIAhgDIAFg7IAdAAIAAA7IA6AAIAAAeIg6AAIAAB2QAAATAHALQAIALASAAIAMgCIAMgEIAHAbQgJAEgKACQgKACgKAAQghAAgOgTg");
	this.shape_14.setTransform(142.4,-19.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#00FFCC").s().p("AAxBtIAAiBQABgegKgOQgKgOgVAAQgPAAgOAJQgNAJgQAPIAACaIgkAAIAAjUIAeAAIADAeIACAAQAPgPARgKQASgKAUgBQAiABAQAVQAQAVAAApIAACGg");
	this.shape_15.setTransform(122.9,-16.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#00FFCC").s().p("AgnBjQgXgNgOgZQgNgZgBgkQABgiANgZQAOgZAWgOQAWgNAXAAQAqAAAWAbQAWAbAAAuIgBALIgBAIIiPAAQACAjATAUQATAUAeAAQAQAAANgEQANgFAMgIIAMAYQgNAJgSAHQgRAGgWAAQgcAAgXgNgAA7gPQAAghgOgRQgNgRgaAAQgOAAgNAIQgNAHgJAPQgJAPgCAWIBxAAIAAAAg");
	this.shape_16.setTransform(100,-16.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#00FFCC").s().p("AgtCEQgcgSgRgiQgQghAAgvQABguAQghQAQghAdgSQAegSAkAAQAZAAAVAKQATALAOAOIgVAYQgMgNgOgHQgOgHgRAAQgbAAgVAOQgVAOgLAaQgLAaAAAkQAAAkALAaQAKAaAVAPQAUAOAbAAQAUAAAQgIQAQgIAOgQIAUAXQgQATgXALQgVALgbAAQgkAAgdgRg");
	this.shape_17.setTransform(76.9,-20.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#00FFCC").s().p("AgxAOIAAgbIBjAAIAAAbg");
	this.shape_18.setTransform(57.2,-17);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#00FFCC").s().p("Ag6BtIAAjUIAeAAIADAnIABAAQAMgVAOgMQAQgLASgBIANABQAFACAFACIgHAfIgJgCIgLgBQgOAAgPALQgNAMgMAaIAACIg");
	this.shape_19.setTransform(45.6,-16.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#00FFCC").s().p("AgnBjQgXgNgOgZQgNgZgBgkQABgiANgZQAOgZAWgOQAWgNAXAAQAqAAAWAbQAWAbAAAuIgBALIgBAIIiPAAQACAjATAUQATAUAeAAQAQAAANgEQANgFAMgIIAMAYQgNAJgSAHQgRAGgWAAQgcAAgXgNgAA7gPQAAghgOgRQgNgRgaAAQgOAAgNAIQgNAHgJAPQgJAPgCAWIBxAAIAAAAg");
	this.shape_20.setTransform(25.4,-16.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#00FFCC").s().p("ABvBtIAAiBQAAgegJgOQgKgOgUAAQgNAAgNAJQgNAJgPAPIAACaIgjAAIAAiBQAAgegKgOQgJgOgVAAQgMAAgNAJQgOAJgPAPIAACaIgkAAIAAjUIAeAAIADAeIACAAQANgPARgKQARgKATgBQAYABAPAKQANALAGAUQARgTARgLQARgLATgBQAhABAQAVQARAVAAApIAACGg");
	this.shape_21.setTransform(-3.8,-16.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#00FFCC").s().p("AgwBjQgWgOgOgYQgOgZAAgkQAAgjAOgZQAOgZAWgNQAWgNAaAAQAbAAAWANQAWANAOAZQAOAZAAAjQAAAkgOAZQgOAYgWAOQgWANgbAAQgaAAgWgNgAgfhHQgOALgIASQgHATgBAXQABAmARAWQAQAWAbAAQAcAAARgWQAQgWABgmQAAgXgIgTQgIgSgOgLQgNgKgTAAQgRAAgOAKg");
	this.shape_22.setTransform(-34.1,-16.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#00FFCC").s().p("AgUB4QgOgUABggIAAh1IggAAIAAgbIAhgDIAFg7IAdAAIAAA7IA6AAIAAAeIg6AAIAAB2QAAATAHALQAIALASAAIAMgCIAMgEIAHAbQgJAEgKACQgKACgKAAQghAAgOgTg");
	this.shape_23.setTransform(-52.8,-19.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#00FFCC").s().p("AgqBoQgVgJgPgNIASgYQAOAMAPAHQAPAHASAAQAVAAALgKQAKgJAAgOQAAgLgHgHQgHgIgLgFQgMgGgLgEQgPgFgPgGQgOgIgKgLQgJgMAAgTQAAgQAIgOQAJgOAQgIQARgIAWAAQAUAAARAHQARAHANAKIgSAXQgKgIgMgGQgMgEgOgBQgUAAgJAKQgKAIAAANQABAKAGAHQAHAFALAFIAWAKQAQAGAPAHQAOAGAKANQAKAMAAATQAAASgJAPQgJAOgSAIQgRAJgZAAQgWAAgVgIg");
	this.shape_24.setTransform(-69.8,-16.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#00FFCC").s().p("AhEBZQgQgWAAgpIAAiGIAkAAIAACBQAAAeAKAOQAJANAWAAQAPABANgJQAOgJAOgTIAAiWIAkAAIAADUIgeAAIgDghIgBAAQgPASgRAKQgRALgUAAQgigBgQgUg");
	this.shape_25.setTransform(-91,-16.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#00FFCC").s().p("AgsCEQgdgSgQgiQgRghAAgvQAAguARghQARghAdgSQAcgSAlAAQAaAAATAKQAVALAMAOIgUAYQgMgNgNgHQgPgHgSAAQgaAAgVAOQgUAOgMAaQgLAaAAAkQAAAkALAaQALAaAUAPQAUAOAaAAQAVAAAQgIQAQgIANgQIAVAXQgQATgXALQgVALgcAAQgjAAgcgRg");
	this.shape_26.setTransform(-114.4,-20.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#00FFCC").s().p("Ag9CGQgXgcgBg2QAAgjANgXQANgZAVgNQAWgOAZAAQASAAAQAHQAPAHAPAMIgBgnIAAhaIAOAAIAAE9IgMAAIgCgcIAAAAQgOAOgRAKQgRAJgXABQgnAAgXgcgAAIgtQgWgBgSANQgSANgKAWQgLAWAAAcQABAdAIAWQAJAVAQANQAQAMAXABQASAAASgKQARgJARgTIAAiBQgRgQgQgGQgOgHgPAAIgCABg");
	this.shape_27.setTransform(-149,-21.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#00FFCC").s().p("AA+BsIAAiFQABgjgNgRQgMgRgbAAQgTAAgQAKQgRALgUAVIAACgIgNAAIAAjSIALAAIACAiIABAAQAQgRARgLQASgKAVgBQAgAAAQAUQAPATAAApIAACHg");
	this.shape_28.setTransform(-171.3,-16.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#00FFCC").s().p("AgsBpQgOgGgIgNQgJgMAAgUQAAgjAigTQAhgRBGgIQABgRgEgRQgEgQgLgLQgMgLgWAAQgOAAgNAEQgNAEgKAGQgLAGgGAGIgHgLQAHgFALgGQALgHAPgEQAPgFAQAAQAZAAAOALQAOALAGASQAGASAAAVIAACHIgMAAIgCgcIAAAAQgRAOgTAJQgUAKgUAAQgRAAgNgFgAgKAAQgbAJgMANQgMANAAASQABARAGAJQAGAKALAFQALAEANAAQASAAASgJQATgJAUgSIAAhLQguAFgaAIg");
	this.shape_29.setTransform(-194.2,-16.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-206.8,-51.3,413.6,102.6);


(lib.screen3text01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgzCGQgegSgSgiQgRgigBgwQABguARgjQASgiAcgSQAdgTAgAAQAzAAAdAjQAdAiABBBIgBAJIgBAJIjVAAQAAAoAOAeQAOAfAaARQAZASAiAAQAZAAAUgIQAUgHAQgMIAIAQQgPALgVAIQgVAIghABQgkAAgegTgABjgOQAAg9gZgeQgYgegqAAQgaAAgXAPQgXAOgPAbQgPAbgDAmIDEAAIAAAAg");
	this.shape.setTransform(111.8,7.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgJCSIhvkjIAVAAIBFC8IAPArIAPAoIACAAIAPgoIAPgrIBGi8IATAAIhtEjg");
	this.shape_1.setTransform(83.8,7.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgJDMIAAkjIASAAIAAEjgAgNinQgGgGgBgJQABgKAGgFQAGgGAHAAQAJAAAGAGQAGAFAAAKQAAAJgGAGQgGAFgJABQgHgBgGgFg");
	this.shape_2.setTransform(64.2,1.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgGC1QgPgKgFgTQgHgTABgZIAAjFIgvAAIAAgOIAvgDIAChVIAQAAIAABVIBWAAIAAARIhWAAIAADHQAAATADAPQAFAOAKAJQALAIAVAAQAJAAAKgDIATgHIAGAQIgZAIQgMADgIAAQgbAAgOgLg");
	this.shape_3.setTransform(48.8,3.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag+CRQgTgIgLgSQgMgRAAgcQAAgwAvgaQAugZBigKQAAgYgEgXQgHgXgPgPQgQgOgegBQgUAAgSAGQgSAGgPAIQgOAIgJAHIgKgOQAJgHAQgJQAPgJAVgGQAVgHAXAAQAiAAATAPQAUAPAIAZQAIAZAAAeIAAC8IgQAAIgCgnIgBAAQgXASgbAOQgbANgdABQgWAAgUgIgAgOAAQglAMgRASQgQATAAAZQAAAWAJAOQAJAOAPAGQAPAGARAAQAaAAAZgNQAagMAdgZIAAhpQhAAHglAMg");
	this.shape_4.setTransform(23.5,7.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgJCSIhvkjIAVAAIBFC8IAPArIAPAoIACAAIAPgoIAPgrIBGi8IATAAIhtEjg");
	this.shape_5.setTransform(-2.8,7.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhACHQgdgSgRgiQgSgiAAgwQAAgwASgjQARgiAdgSQAegSAiAAQAjAAAdASQAeASARAiQASAjAAAwQAAAwgSAiQgRAigeASQgdASgjAAQgiAAgegSgAg3h1QgZARgOAfQgPAeAAAoQAAAoAPAeQAOAfAZARQAZARAeAAQAfAAAZgRQAZgRAOgfQAOgeABgoQgBgogOgeQgOgfgZgRQgZgSgfAAQgeAAgZASg");
	this.shape_6.setTransform(-31.9,7.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("ABWCVIAAi4QABgxgRgYQgRgYgmAAQgZAAgYAPQgXAPgcAdIAADeIgSAAIAAkiIAQAAIACAuIABAAQAXgXAYgPQAZgPAdAAQAtAAAVAbQAVAbAAA4IAAC7g");
	this.shape_7.setTransform(-64,6.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("ABWCVIAAi4QABgxgRgYQgRgYgmAAQgZAAgYAPQgXAPgcAdIAADeIgSAAIAAkiIAQAAIACAuIABAAQAXgXAYgPQAZgPAdAAQAtAAAVAbQAVAbAAA4IAAC7g");
	this.shape_8.setTransform(-96.1,6.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgJDJIAAmRIATAAIAAGRg");
	this.shape_9.setTransform(-119.2,1.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-128,-40.3,256.1,80.7);


(lib.screen2text03 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#33FF33").s().p("Ag6BYQgQgTAAgpIAAiHIAOAAIAACFQgBAjANARQAMASAbAAQASAAARgLQARgLATgYIAAidIANAAIAADSIgLAAIgCgkIgBAAQgQASgRAMQgSALgUAAQghAAgPgUg");
	this.shape.setTransform(356.7,35);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#33FF33").s().p("AgtBhQgVgNgNgYQgNgZgBgiQABgjANgZQANgYAVgNQAUgNAZAAQAZAAAWANQAUANANAYQANAZAAAjQAAAigNAZQgNAYgUANQgWANgZAAQgZAAgUgNgAgohUQgRAMgLAWQgKAWAAAdQAAAdAKAWQALAVARANQATAMAVAAQAXAAARgMQATgNAJgVQALgWAAgdQAAgdgLgWQgJgWgTgMQgRgNgXAAQgVAAgTANg");
	this.shape_1.setTransform(333.7,34.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#33FF33").s().p("AhKCZIgKgDIAEgNIAIADIAJABQAVgBANgQQAOgRAJgaIAGgTIhXjXIAPAAIA1CKIAMAcIAMAeIABAAIAKgeIAKgcIAwiKIAOAAIhUDvQgFARgJAPQgJAQgNAKQgNAKgTAAIgKgBg");
	this.shape_2.setTransform(312.7,39.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#33FF33").s().p("AguBsIAAjSIALAAIACAoIABAAQAKgUAQgMQANgMAUgBIAKABQAFABAFADIgDAMIgJgDIgKgBQgPAAgPANQgPANgNAfIAACRg");
	this.shape_3.setTransform(290.1,34.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#33FF33").s().p("AguBhQgUgNgOgYQgMgZAAgiQAAgjAMgZQAOgYAUgNQAWgNAYAAQAZAAAWANQAUANANAYQANAZABAjQgBAigNAZQgNAYgUANQgWANgZAAQgYAAgWgNgAgnhUQgSAMgKAWQgLAWAAAdQAAAdALAWQAKAVASANQARAMAWAAQAXAAASgMQARgNAKgVQALgWAAgdQAAgdgLgWQgKgWgRgMQgSgNgXAAQgWAAgRANg");
	this.shape_4.setTransform(269.5,34.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#33FF33").s().p("AgXChIAAjFIgdAAIAAgKIAdgCIAAg0QAAgfANgPQALgPAXAAQAHABAHACQAIABAHADIgEAMQgHgDgGgCIgNgBQgSAAgHANQgIANAAAYIAAAyIAxAAIAAAMIgxAAIAADFg");
	this.shape_5.setTransform(253.9,29.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#33FF33").s().p("AgqBoQgVgJgPgNIASgYQAOAMAPAHQAPAHASAAQAVAAALgKQAKgJAAgOQAAgLgHgHQgHgIgLgFQgMgGgLgEQgPgFgPgGQgOgIgKgLQgJgMAAgTQAAgQAIgOQAJgOAQgIQARgIAWAAQAUAAARAHQARAHANAKIgSAXQgKgIgMgGQgMgEgOgBQgUAAgJAKQgKAIAAANQABAKAGAHQAHAFALAFIAWAKQAQAGAPAHQAOAGAKANQAKAMAAATQAAASgJAPQgJAOgSAIQgRAJgZAAQgWAAgVgIg");
	this.shape_6.setTransform(229.1,34.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#33FF33").s().p("AgnBjQgXgNgOgZQgNgZgBgkQABgiANgZQAOgZAWgNQAWgOAXAAQAqAAAWAbQAWAbAAAuIgBALIgBAIIiPAAQACAjATAUQATAUAeAAQAQAAANgEQANgFAMgIIAMAYQgNAJgSAHQgRAGgWAAQgcAAgXgNgAA7gPQAAghgOgRQgNgRgaAAQgOAAgNAIQgNAHgJAPQgJAPgCAWIBxAAIAAAAg");
	this.shape_7.setTransform(209.2,34.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#33FF33").s().p("AgRCYIAAjVIAjAAIAADVgAgRhvQgHgGAAgLQAAgLAHgGQAHgGAKAAQALAAAHAGQAHAGAAALQAAALgHAGQgHAGgLAAQgKAAgHgGg");
	this.shape_8.setTransform(192.8,30.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#33FF33").s().p("Ag3CYQgUgHgLgMQgLgNAAgTQAAgNAIgNQAIgMAPgKIAAgCQgIgFgFgJQgGgIAAgNQAAgNAHgJQAIgLAIgFIAAgCQgLgJgIgPQgIgOgBgUQABgXALgRQALgRASgJQASgJAWgBQAJAAAHACIANADIBLAAIAAAcIgsAAQAIAIAFALQAEALAAAOQAAAXgKARQgLARgRAIQgSAJgVABQgIAAgIgCQgJgCgHgEQgGAFgEAGQgEAFAAAJQAAAKAIAGQAJAHAVAAIApAAQAlAAATAMQASAMAAAbQAAAUgNARQgNAQgYALQgZAKggAAQgaAAgUgHgAg9BOQgFAJAAAJQAAASARAKQAQAKAdAAQAUAAAPgHQAPgGAJgKQAIgJAAgMQAAgOgLgHQgLgGgVABIgkAAIgOgBIgOgDQgLAJgGAJgAgph2QgNANAAAXQAAAYANAOQANANATAAQASAAANgNQANgOAAgYQAAgXgNgNQgNgNgSAAQgTAAgNANg");
	this.shape_9.setTransform(177,39.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#33FF33").s().p("AgwBjQgWgOgOgYQgOgZAAgkQAAgjAOgZQAOgZAWgMQAWgOAaAAQAbAAAWAOQAWAMAOAZQAOAZAAAjQAAAkgOAZQgOAYgWAOQgWANgbAAQgaAAgWgNgAgfhHQgOALgIASQgHATgBAXQABAmARAWQAQAWAbAAQAcAAARgWQAQgWABgmQAAgXgIgTQgIgSgOgLQgNgKgTAAQgRAAgOAKg");
	this.shape_10.setTransform(153.2,34.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#33FF33").s().p("AgTCSQgJgMAAgXIAAkNIAjAAIAAEPQAAAJADAEQADADAEAAIADAAIAFAAIAEAbIgIACIgMABQgUAAgIgNg");
	this.shape_11.setTransform(136.7,29.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#33FF33").s().p("AgwBjQgWgOgOgYQgOgZAAgkQAAgjAOgZQAOgZAWgMQAWgOAaAAQAbAAAWAOQAWAMAOAZQAOAZAAAjQAAAkgOAZQgOAYgWAOQgWANgbAAQgaAAgWgNgAgfhHQgOALgIASQgHATgBAXQABAmARAWQAQAWAbAAQAcAAARgWQAQgWABgmQAAgXgIgTQgIgSgOgLQgNgKgTAAQgRAAgOAKg");
	this.shape_12.setTransform(118.2,34.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#33FF33").s().p("AAxBtIAAiBQABgegKgOQgKgOgVAAQgPAAgOAJQgNAJgQAPIAACaIgkAAIAAjUIAeAAIADAfIACAAQAPgQARgKQASgKAUgBQAiABAQAVQAQAVAAApIAACGg");
	this.shape_13.setTransform(94.4,34.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#33FF33").s().p("AAxCcIAAiCQABgdgKgOQgKgOgVAAQgPAAgOAJQgNAJgQAOIAACbIgkAAIAAk3IAkAAIAABVIgBAsQAPgPARgKQASgKAUgBQAiABAQAVQAQAVAAAoIAACHg");
	this.shape_14.setTransform(70.4,29.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#33FF33").s().p("AgjBjQgXgOgMgYQgNgZgBgkQABgjAOgZQAOgZAXgMQAXgOAbAAQAVAAAQAIQAPAHALAKIgSAYQgKgIgLgGQgJgFgNAAQgUAAgOAKQgPALgJASQgIATgBAXQABAmASAWQARAWAeAAQAPAAANgGQAMgHAKgIIAQAXQgPANgSAIQgRAHgUAAQgbAAgXgNg");
	this.shape_15.setTransform(48.7,34.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#33FF33").s().p("AgnBjQgXgNgOgZQgNgZgBgkQABgiANgZQAOgZAWgNQAWgOAXAAQAqAAAWAbQAWAbAAAuIgBALIgBAIIiPAAQACAjATAUQATAUAeAAQAQAAANgEQANgFAMgIIAMAYQgNAJgSAHQgRAGgWAAQgcAAgXgNgAA7gPQAAghgOgRQgNgRgaAAQgOAAgNAIQgNAHgJAPQgJAPgCAWIBxAAIAAAAg");
	this.shape_16.setTransform(27.5,34.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#33FF33").s().p("AgUB4QgOgUABggIAAh1IggAAIAAgbIAhgDIAFg7IAdAAIAAA7IA6AAIAAAeIg6AAIAAB2QAAATAHALQAIALASAAIAMgCIAMgEIAHAbQgJAEgKACQgKACgKAAQghAAgOgTg");
	this.shape_17.setTransform(9.7,31.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,379.3,59.3);


(lib.screen2text02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#33FFCC").s().p("AgOCCQgRgKgHgTQgIgTAAgaIAAhXIgeAAIAAgwIAigDIAHg6IA1AAIAAA6IA0AAIAAAzIg0AAIAABXQAAASAIAIQAHAIANAAIALgBIAKgDIAKAvIgVAFQgMADgQAAQgbAAgPgLg");
	this.shape.setTransform(433.6,75);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#33FFCC").s().p("AAiBwIAAh+QAAgYgHgJQgGgJgOAAQgLAAgJAGQgJAFgLAKIAACTIhBAAIAAjaIA1AAIAEAcIADAAQANgNARgKQARgJAVgBQAkABAQAXQAQAXAAApIAACHg");
	this.shape_1.setTransform(412.7,77.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#33FFCC").s().p("AgrBlQgZgOgOgZQgPgaAAgkQABgiAOgaQAPgZAXgOQAXgOAaAAQAfAAAVAOQAUANALAYQAKAYAAAdIgBAPIgCAMIiBAAQAEAYAPAMQAPALAVAAQAMAAAMgDQAMgEALgHIAWAnQgRAMgUAGQgVAGgTAAQgfAAgZgNgAgUg1QgLAKgEAWIBOAAQAAgTgJgMQgIgMgUAAQgOAAgMALg");
	this.shape_2.setTransform(388.6,77.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#33FFCC").s().p("AgfCfIAAjaIA/AAIAADagAgahkQgKgJAAgPQAAgQAKgJQALgJAPAAQARAAAKAJQAKAJAAAQQAAAPgKAJQgKAJgRAAQgPAAgLgJg");
	this.shape_3.setTransform(371.1,72.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#33FFCC").s().p("AgkBlQgYgOgOgZQgPgaAAgkQABgjAPgaQAQgZAZgOQAagNAeAAQATAAARAHQAQAHALALIgeAoQgHgHgIgDQgHgDgIAAQgYAAgMARQgOARAAAbQAAAdAOAQQANARAVAAQAMAAAKgFQAJgEAIgHIAaApQgQAOgTAHQgTAGgSAAQgeAAgYgNg");
	this.shape_4.setTransform(355.1,77.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#33FFCC").s().p("AgfCfIAAjaIA/AAIAADagAgahkQgKgJAAgPQAAgQAKgJQALgJAPAAQARAAAKAJQAKAJAAAQQAAAPgKAJQgKAJgRAAQgPAAgLgJg");
	this.shape_5.setTransform(338.4,72.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#33FFCC").s().p("AgvCdIAAinIgcAAIAAgwIAcgCIAAgMQAAgXAJgTQAHgTASgLQARgMAdAAQANAAAMADIATAFIgNAwIgLgEIgLgBQgLAAgHAHQgHAIAAAQIAAANIAoAAIAAAzIgoAAIAACng");
	this.shape_6.setTransform(326.1,72.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#33FFCC").s().p("AgvCdIAAinIgdAAIAAgwIAdgCIAAgMQABgXAHgTQAIgTASgLQARgMAdAAQAOAAALADIASAFIgLAwIgLgEIgMgBQgMAAgGAHQgHAIAAAQIAAANIAoAAIAAAzIgoAAIAACng");
	this.shape_7.setTransform(311.1,72.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#33FFCC").s().p("AgrBlQgZgOgOgZQgPgaAAgkQABgiAOgaQAPgZAXgOQAXgOAaAAQAfAAAVAOQAUANALAYQAKAYAAAdIgBAPIgCAMIiBAAQAEAYAPAMQAPALAVAAQAMAAAMgDQAMgEALgHIAWAnQgRAMgUAGQgVAGgTAAQgfAAgZgNgAgUg1QgLAKgEAWIBOAAQAAgTgJgMQgIgMgUAAQgOAAgMALg");
	this.shape_8.setTransform(291.1,77.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#33FFCC").s().p("AgOCCQgRgKgHgTQgIgTAAgaIAAhXIgeAAIAAgwIAigDIAHg6IA1AAIAAA6IA0AAIAAAzIg0AAIAABXQAAASAIAIQAHAIANAAIALgBIAKgDIAKAvIgVAFQgMADgQAAQgbAAgPgLg");
	this.shape_9.setTransform(262.2,75);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#33FFCC").s().p("AguBqQgXgIgRgOIAdgoQAPALAOAGQAOAFAOAAQANAAAHgEQAHgFgBgJQAAgHgGgFQgGgFgKgEIgVgJQgOgFgNgIQgNgHgJgNQgIgMgBgSQABgfAWgSQAXgTAlAAQAZAAATAIQATAJAOALIgdAmQgMgIgLgFQgMgFgLAAQgMAAgGAEQgGAFAAAIQAAAHAGAFQAGAEAJAEIAVAIQAOAEAOAIQANAIAJALQAIANABAUQAAAUgKAQQgLAQgUAJQgUAJgcAAQgWAAgWgIg");
	this.shape_10.setTransform(243.8,77.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#33FFCC").s().p("AgzBlQgYgOgPgZQgPgaAAgkQAAgjAPgaQAPgZAYgOQAYgNAbAAQAcAAAYANQAYAOAPAZQAPAaAAAjQAAAkgPAaQgPAZgYAOQgYANgcAAQgbAAgYgNgAgdgsQgKARAAAbQAAAdAKAQQAKARATAAQAUAAAKgRQAKgQAAgdQAAgbgKgRQgKgRgUAAQgTAAgKARg");
	this.shape_11.setTransform(222.3,77.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#33FFCC").s().p("ABgBwIAAh+QAAgYgGgJQgHgJgOAAQgIAAgJAFQgKAGgKAKIAACTIhAAAIAAh+QAAgYgGgJQgHgJgOAAQgIAAgJAFQgJAGgLAKIAACTIhAAAIAAjaIA1AAIAEAdIACAAQANgOAQgKQAQgJAVgBQAXABANAJQAPAJAIASQAOgPARgLQAQgKAWgBQAjABAQAXQARAXAAApIAACHg");
	this.shape_12.setTransform(191.3,77.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#33FFCC").s().p("AgkBhQgWgNgNgZQgMgYgBgjQABghAMgZQANgYAUgOQAVgNAXAAQAlAAAVAZQAUAYABAvIAAAHIgBAGIiZAAQAAAdAKAWQAKAWASAMQATANAYAAQASAAAOgFQAOgGAMgIIAGALQgLAIgPAGQgQAGgXAAQgaAAgVgNgABIgKQAAgsgTgVQgRgWgeAAQgTAAgQALQgRAKgLAUQgLATgBAbICNAAIAAAAg");
	this.shape_13.setTransform(153.5,78.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#33FFCC").s().p("AA+CfIAAiGQAAgigMgRQgMgRgbAAQgTAAgQALQgRAKgUAVIAACgIgNAAIAAk9IANAAIAABeIAAAwQARgRARgMQASgKAVgBQAgAAAQAUQAPATAAApIAACHg");
	this.shape_14.setTransform(131.5,72.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#33FFCC").s().p("AgECDQgLgIgEgNQgEgOAAgSIAAiOIgiAAIAAgKIAigCIACg+IALAAIAAA+IA9AAIAAAMIg9AAIAACQQAAANADALQADAKAHAGQAIAGAPABQAGAAAHgDIAOgEIAFAKIgTAHIgOABQgTAAgKgHg");
	this.shape_15.setTransform(113.5,75.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#33FFCC").s().p("Ag9CGQgXgcgBg2QAAgjANgXQANgZAVgNQAWgOAZAAQASAAAQAHQAPAHAPAMIAAgnIAAhaIANAAIAAE9IgMAAIgBgcIgBAAQgOAOgRAKQgRAJgXABQgnAAgXgcgAAIgtQgWgBgSANQgSANgKAWQgKAWAAAcQAAAdAIAWQAJAVAQANQAQAMAXABQASAAASgKQARgJASgTIAAiBQgSgQgQgGQgOgHgPAAIgCABg");
	this.shape_16.setTransform(265,29.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#33FFCC").s().p("AA+BsIAAiFQABgjgNgRQgMgRgbAAQgTAAgQAKQgRALgUAVIAACgIgNAAIAAjSIALAAIACAiIABAAQAQgRARgLQASgKAVgBQAgAAAQAUQAPATAAApIAACHg");
	this.shape_17.setTransform(242.7,34.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#33FFCC").s().p("AgsBpQgOgGgIgNQgJgMAAgUQAAgjAigTQAhgRBGgIQABgRgEgRQgEgQgLgLQgMgLgWAAQgOAAgNAEQgNAEgKAGQgLAGgGAGIgHgLQAHgFALgGQALgHAPgEQAPgFAQAAQAZAAAOALQAOALAGASQAGASAAAVIAACHIgMAAIgCgcIAAAAQgRAOgTAJQgUAKgUAAQgRAAgNgFgAgKAAQgbAJgMANQgMANAAASQABARAGAJQAGAKALAFQALAEANAAQASAAASgJQATgJAUgSIAAhLQguAFgaAIg");
	this.shape_18.setTransform(219.8,34.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#33FFCC").s().p("AgUB4QgOgUABggIAAh1IggAAIAAgbIAhgDIAFg7IAdAAIAAA7IA6AAIAAAeIg6AAIAAB2QAAATAHALQAIALASAAIAMgCIAMgEIAHAbQgJAEgKACQgKACgKAAQghAAgOgTg");
	this.shape_19.setTransform(193.3,31.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#33FFCC").s().p("AgqBoQgVgJgPgNIASgYQAOAMAPAHQAPAHASAAQAVAAALgKQAKgJAAgOQAAgLgHgHQgHgIgLgFQgMgGgLgEQgPgFgPgGQgOgIgKgLQgJgMAAgTQAAgQAIgOQAJgOAQgIQARgIAWAAQAUAAARAHQARAHANAKIgSAXQgKgIgMgGQgMgEgOgBQgUAAgJAKQgKAIAAANQABAKAGAHQAHAFALAFIAWAKQAQAGAPAHQAOAGAKANQAKAMAAATQAAASgJAPQgJAOgSAIQgRAJgZAAQgWAAgVgIg");
	this.shape_20.setTransform(176.3,34.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#33FFCC").s().p("AgnBjQgXgNgOgZQgNgZgBgkQABgiANgZQAOgZAWgNQAWgOAXAAQAqAAAWAbQAWAbAAAuIgBALIgBAIIiPAAQACAjATAUQATAUAeAAQAQAAANgEQANgFAMgIIAMAYQgNAJgSAHQgRAGgWAAQgcAAgXgNgAA7gPQAAghgOgRQgNgRgaAAQgOAAgNAIQgNAHgJAPQgJAPgCAWIBxAAIAAAAg");
	this.shape_21.setTransform(156.5,34.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#33FFCC").s().p("AAuBrIgfhyIgHgeIgHggIgBAAIgHAgIgIAeIgeByIgqAAIg8jVIAlAAIAgB7IAHAeIAGAdIACAAIAHgeIAHgdIAhh7IAjAAIAhB7IAHAeIAHAdIACAAIAHgdIAHgeIAfh7IAiAAIg5DVg");
	this.shape_22.setTransform(129.8,34.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#33FFCC").s().p("AgnBjQgXgNgOgZQgNgZgBgkQABgiANgZQAOgZAWgNQAWgOAXAAQAqAAAWAbQAWAbAAAuIgBALIgBAIIiPAAQACAjATAUQATAUAeAAQAQAAANgEQANgFAMgIIAMAYQgNAJgSAHQgRAGgWAAQgcAAgXgNgAA7gPQAAghgOgRQgNgRgaAAQgOAAgNAIQgNAHgJAPQgJAPgCAWIBxAAIAAAAg");
	this.shape_23.setTransform(103.1,34.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#33FFCC").s().p("AAxBtIAAiBQABgegKgOQgKgOgVAAQgPAAgOAJQgNAJgQAPIAACaIgkAAIAAjUIAeAAIADAfIACAAQAPgQARgKQASgKAUgBQAiABAQAVQAQAVAAApIAACGg");
	this.shape_24.setTransform(80.1,34.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#33FFCC").s().p("AgkBhQgWgNgNgZQgMgYgBgjQABghAMgZQANgYAUgOQAVgNAXAAQAlAAAVAZQAUAYABAvIAAAHIgBAGIiZAAQAAAdAKAWQAKAWASAMQATANAYAAQASAAAOgFQAOgGAMgIIAHALQgMAIgPAGQgQAGgXAAQgaAAgVgNgABIgKQAAgsgTgVQgRgWgeAAQgTAAgQALQgRAKgLAUQgLATgBAbICNAAIAAAAg");
	this.shape_25.setTransform(49.1,34.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#33FFCC").s().p("AA+CfIAAiGQAAghgMgSQgMgRgbAAQgTAAgQAKQgRALgUAVIAACgIgNAAIAAk9IANAAIAABeIAAAwQARgSARgLQASgKAVAAQAhgBAPAUQAPAUAAAoIAACHg");
	this.shape_26.setTransform(27.1,29.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#33FFCC").s().p("AgECDQgLgIgEgNQgEgOAAgSIAAiOIgiAAIAAgKIAigCIACg+IALAAIAAA+IA9AAIAAAMIg9AAIAACQQAAAOADAKQADAKAHAHQAIAFAPABQAGgBAHgCIAOgEIAFALIgTAGIgOACQgTgBgKgHg");
	this.shape_27.setTransform(9.1,32);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,453.4,102.6);


(lib.screen2text01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF33FF").s().p("AgUB4QgOgUABggIAAh1IggAAIAAgbIAhgDIAFg7IAdAAIAAA7IA6AAIAAAeIg6AAIAAB2QAAATAHALQAIALASAAIAMgCIAMgEIAHAbQgJAEgKACQgKACgKAAQghAAgOgTg");
	this.shape.setTransform(259.7,31.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF33FF").s().p("AAxBtIAAiBQABgegKgOQgKgOgVAAQgPAAgOAJQgNAJgQAPIAACaIgkAAIAAjUIAeAAIADAfIACAAQAPgQARgKQASgKAUgBQAiABAQAVQAQAVAAApIAACGg");
	this.shape_1.setTransform(240.2,34.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF33FF").s().p("AgnBjQgXgNgOgZQgNgZgBgkQABgiANgZQAOgZAWgNQAWgOAXAAQAqAAAWAbQAWAbAAAuIgBALIgBAIIiPAAQACAjATAUQATAUAeAAQAQAAANgEQANgFAMgIIAMAYQgNAJgSAHQgRAGgWAAQgcAAgXgNgAA7gPQAAghgOgRQgNgRgaAAQgOAAgNAIQgNAHgJAPQgJAPgCAWIBxAAIAAAAg");
	this.shape_2.setTransform(217.3,34.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF33FF").s().p("ABvBtIAAiBQAAgegJgOQgKgOgUAAQgNAAgNAJQgNAJgPAPIAACaIgjAAIAAiBQAAgegKgOQgJgOgVAAQgMAAgNAJQgOAJgPAPIAACaIgkAAIAAjUIAeAAIADAfIACAAQANgQARgKQARgKATgBQAYABAPAKQANALAGAUQARgTARgLQARgLATgBQAhABAQAVQARAVAAApIAACGg");
	this.shape_3.setTransform(188.1,34.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF33FF").s().p("AgnBjQgXgNgOgZQgNgZgBgkQABgiANgZQAOgZAWgNQAWgOAXAAQAqAAAWAbQAWAbAAAuIgBALIgBAIIiPAAQACAjATAUQATAUAeAAQAQAAANgEQANgFAMgIIAMAYQgNAJgSAHQgRAGgWAAQgcAAgXgNgAA7gPQAAghgOgRQgNgRgaAAQgOAAgNAIQgNAHgJAPQgJAPgCAWIBxAAIAAAAg");
	this.shape_4.setTransform(159,34.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF33FF").s().p("AgTCSQgKgMABgXIAAkNIAjAAIAAEPQAAAJACAEQADADAFAAIADAAIAFAAIAEAbIgIACIgMABQgTAAgJgNg");
	this.shape_5.setTransform(143.3,29.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF33FF").s().p("AhcCaIAAkuIAdAAIADAYIACAAQAOgMASgJQARgIASgBQAcABASANQATANAKAZQAKAYAAAhQgBAlgNAZQgNAagUANQgVAOgZAAQgNgBgPgGQgQgGgOgMIABAlIAABIgAgbh0QgOAHgPAPIAABvQAOAMAOAFQANAGALAAQAagBAQgWQASgWAAgoQAAgjgNgVQgNgWgeAAQgMAAgPAHg");
	this.shape_6.setTransform(125.3,38.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF33FF").s().p("ABvBtIAAiBQAAgegJgOQgKgOgUAAQgNAAgNAJQgNAJgPAPIAACaIgjAAIAAiBQAAgegKgOQgJgOgVAAQgMAAgNAJQgOAJgPAPIAACaIgkAAIAAjUIAeAAIADAfIACAAQANgQARgKQARgKATgBQAYABAPAKQANALAGAUQARgTARgLQARgLATgBQAhABAQAVQARAVAAApIAACGg");
	this.shape_7.setTransform(94.2,34.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF33FF").s().p("AgSCYIAAjVIAjAAIAADVgAgRhvQgHgGAAgLQAAgLAHgGQAHgGAKAAQALAAAGAGQAIAGAAALQAAALgIAGQgGAGgLAAQgKAAgHgGg");
	this.shape_8.setTransform(70.5,30.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF33FF").s().p("AgkBhQgWgNgNgZQgNgYAAgjQAAghANgZQANgYAUgOQAVgNAXAAQAlAAAVAZQAUAYABAvIAAAHIgBAGIiZAAQgBAdAKAWQAKAWATAMQATANAYAAQASAAAOgFQAPgGAMgIIAFALQgLAIgPAGQgPAGgYAAQgaAAgVgNgABIgKQgBgsgRgVQgSgWgeAAQgTAAgQALQgQAKgMAUQgKATgCAbICNAAIAAAAg");
	this.shape_9.setTransform(46.1,34.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF33FF").s().p("ABJCRIg4jPIgIghIgIggIgBAAIgIAgIgJAhIg3DPIgNAAIhFkhIAQAAIAmCvIAVBfIACAAIALgwIAMgvIAvivIAPAAIAvCvIAYBfIACAAIAKgwIAKgvIAnivIAOAAIhCEhg");
	this.shape_10.setTransform(18.6,30.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,278,59.3);


(lib.satr01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.star();
	this.instance.parent = this;
	this.instance.setTransform(-11.5,-12);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.5,-12,23,24);


(lib.mobile = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cell();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.745,0.745);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,256.4,462.8);


(lib.icon08_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.icon08();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,98,93);


(lib.icon07_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.icon07();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,98,93);


(lib.icon06_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.icon06();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,98,93);


(lib.icon05_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.icon05();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,98,93);


(lib.icon04_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.icon04();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,98,93);


(lib.icon03_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.icon03();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,98,93);


(lib.icon02_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.icon02();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,98,93);


(lib.icon01_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.icon01();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,98,93);


(lib.fire = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.rocketFire();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,74,111);


(lib.cloud = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cloud2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,173,96);


(lib.wheel = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// wheel06
	this.instance = new lib.wheel06("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(47,80.4,1,1,0,0,0,47,47);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:90},19).to({rotation:180},20).to({rotation:270},20).to({rotation:360},20).wait(1));

	// wheel04
	this.instance_1 = new lib.wheel04("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(63.7,163.6,1,1,0,0,0,22,22);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:-90},19).to({rotation:0},20).to({rotation:90},20).to({rotation:-90},20).wait(1));

	// Wheel03
	this.instance_2 = new lib.Wheel03("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(91.9,113.9,1,1,0,0,0,37.2,37.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:90},19).to({rotation:180},20).to({rotation:270},20).to({rotation:90},20).wait(1));

	// Wheeel02
	this.instance_3 = new lib.Wheeel02("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(115.4,53.5,1,1,0,0,0,34.4,34.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:-90,y:53.4},19).to({rotation:-180,x:115.3},20).to({rotation:-270,y:53.5},20).to({rotation:-360,x:115.4},20).wait(1));

	// wheel01
	this.instance_4 = new lib.wheel01("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(74.1,20.5,1,1,0,0,0,20.5,20.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({rotation:-90},9).to({rotation:-180},10).to({rotation:-270},10).to({rotation:-360},10).to({rotation:-450},10).to({rotation:-540},10).to({rotation:-630},10).to({rotation:-720},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,149.8,185.7);


(lib.text02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween5("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(160.3,80.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,369.1,102.6);


(lib.text01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween7("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(250.3,56.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,336.7,105.1);


(lib.stars = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// satr01
	this.instance = new lib.satr01("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(325.4,-64.3,1,1,0,0,0,0.3,-0.8);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(11).to({_off:false},0).to({regX:0.9,regY:-1.3,scaleX:1.74,scaleY:1.74,x:320.5,y:-66.8,alpha:1},4).to({regX:0.3,regY:-0.8,scaleX:1,scaleY:1,x:325.4,y:-64.3,alpha:0},5).wait(19).to({x:120.8,y:252.5},0).to({regX:0.8,scaleX:1.35,scaleY:1.35,x:118.7,y:244.7,alpha:1},4).to({regX:0.3,scaleX:1,scaleY:1,x:120.8,y:252.5,alpha:0},5).wait(7).to({x:328.7,y:196.4},0).to({regX:1.2,regY:-0.6,scaleX:1.57,scaleY:1.56,x:324.5,y:190.1,alpha:1},4).to({regX:0.3,regY:-0.8,scaleX:1,scaleY:1,x:328.7,y:196.4,alpha:0},5).to({_off:true},1).wait(15));

	// satr01
	this.instance_1 = new lib.satr01("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(52.6,-21.8,1,1,0,0,0,0.3,-0.8);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(33).to({_off:false},0).to({regX:0.8,regY:-1,scaleX:1.44,scaleY:1.43,x:51.7,y:-24.4,alpha:1},4).to({regX:0.3,regY:-0.8,scaleX:1,scaleY:1,x:52.6,y:-21.8,alpha:0},5).to({_off:true},1).wait(37));

	// satr01
	this.instance_2 = new lib.satr01("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(394.2,80.9,1,1,0,0,0,0.3,-0.8);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(17).to({_off:false},0).to({regX:1.4,regY:-0.2,scaleX:1.3,scaleY:1.3,x:389,y:77,alpha:1},4).to({regX:0.3,regY:-0.8,scaleX:1,scaleY:1,x:394.2,y:80.9,alpha:0},5).to({_off:true},1).wait(53));

	// satr01
	this.instance_3 = new lib.satr01("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(-21.2,198.2,1,1,0,0,0,0.3,-0.8);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regX:0,regY:-0.3,scaleX:1.26,scaleY:1.26,x:-21.1,y:192.4,alpha:1},4).to({regX:0.3,regY:-0.8,scaleX:1,scaleY:1,x:-21.2,y:198.2,alpha:0},5).wait(35).to({x:127.4,y:-146.8},0).to({regX:0.8,regY:-1.4,scaleX:1.3,scaleY:1.3,x:125.3,y:-147.8,alpha:1},4).to({regX:0.3,regY:-0.8,scaleX:1,scaleY:1,x:127.4,y:-146.8,alpha:0},5).wait(9).to({x:417.8,y:-176.5},0).to({regX:1.4,regY:-1.5,scaleX:1.17,scaleY:1.17,x:412.1,y:-177.1,alpha:1},4).to({regX:0.3,regY:-0.8,scaleX:1,scaleY:1,x:417.8,y:-176.5,alpha:0},5).wait(9));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33,187,23,24);


(lib.shin = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.shin01("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(166.8,158,0.816,0.816,0,0,0,166.7,158);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,x:166.7,alpha:1},14).wait(11).to({startPosition:0},0).to({regX:166.8,scaleX:1.17,scaleY:1.17,x:166.9,y:158.1,alpha:0},9).to({_off:true},1).wait(6));

	// Layer 1
	this.instance_1 = new lib.shin03("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(167,150.7,0.816,0.816,0,0,0,137.7,121.6);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(6).to({_off:false},0).to({scaleX:1,scaleY:1,y:149,alpha:1},14).wait(11).to({startPosition:0},0).to({regX:137.6,regY:121.5,scaleX:1.29,scaleY:1.29,x:166.9,y:148.9,alpha:0},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(30.8,29.1,272.1,257.8);


(lib.rocket02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.rocket2();
	this.instance.parent = this;
	this.instance.setTransform(0,-35);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

	// Layer 2
	this.instance_1 = new lib.fire("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(85,280.5,1,1,0,0,0,37,55.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regY:0,scaleY:0.72,y:225},0).wait(1).to({scaleY:1.3},0).wait(1).to({scaleY:0.27},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-35,167,371);


(lib.clouds = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// cloud
	this.instance = new lib.cloud("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(212.8,-37.4,0.92,0.92,0,0,0,86.5,48);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:212.7,y:73.5,alpha:1},4).to({y:461.8},14).to({x:212.8,y:628.1,alpha:0},6).wait(2).to({y:-37.4},0).to({x:212.7,y:73.5,alpha:1},4).to({y:461.8},14).to({x:212.8,y:628.1,alpha:0},6).wait(1).to({y:-37.4},0).to({x:212.7,y:73.5,alpha:1},4).to({regX:86.6,regY:48.1,x:212.8,y:350.9},10).wait(1));

	// cloud
	this.instance_1 = new lib.cloud("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(263.9,-47,1,1,0,0,0,86.5,48);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({_off:false},0).to({y:63.9,alpha:1},4).to({y:452.1},14).to({y:618.5,alpha:0},6).wait(1).to({y:-47},0).to({y:63.9,alpha:1},4).to({y:452.1},14).to({y:618.5,alpha:0},6).wait(1).to({y:-47},0).to({y:63.9,alpha:1},4).to({y:119.3},2).wait(1));

	// cloud
	this.instance_2 = new lib.cloud("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(131.9,597.7,0.855,0.855,0,0,0,86.5,48);
	this.instance_2.alpha = 0.172;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:625.4,alpha:0},1).wait(17).to({y:-40.1},0).to({y:70.8,alpha:1},4).to({x:131.8,y:459},14).to({x:131.9,y:625.4,alpha:0},6).wait(1).to({y:-40.1},0).to({y:70.8,alpha:1},4).to({x:131.8,y:459},14).to({x:131.9,y:569.9,alpha:0.332},4).wait(1));

	// cloud
	this.instance_3 = new lib.cloud("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(131.9,514.5,0.855,0.855,0,0,0,86.6,48.1);
	this.instance_3.alpha = 0.66;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regX:86.5,regY:48,y:625.4,alpha:0},4).wait(17).to({scaleX:1,scaleY:1,x:292.4,y:-33.5},0).to({y:77.4,alpha:1},4).to({y:465.6},14).to({y:632,alpha:0},6).wait(1).to({scaleX:0.86,scaleY:0.86,x:131.9,y:-40.1},0).to({y:70.8,alpha:1},4).to({x:131.8,y:459},14).to({regY:48.1,y:486.8,alpha:0.832},1).wait(1));

	// cloud
	this.instance_4 = new lib.cloud("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(70.1,-54.9,1.449,1.449,0,0,0,86.5,48.1);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(30).to({_off:false},0).to({regY:48,x:70.2,y:55.9,alpha:1},4).to({scaleX:1.45,scaleY:1.45,y:444.2},14).to({regY:48.1,scaleX:1.45,scaleY:1.45,x:70.1,y:610.6,alpha:0},6).to({_off:true},1).wait(11));

	// cloud
	this.instance_5 = new lib.cloud("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(212.9,378.7,0.92,0.92,0,0,0,86.7,48.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regX:86.5,regY:48,x:212.7,y:461.8},3).to({x:212.8,y:628.1,alpha:0},6).wait(29).to({scaleX:0.82,scaleY:0.82,x:363.6,y:-32.7},0).to({y:78.1,alpha:1},4).to({y:466.4},14).to({y:632.8,alpha:0},6).to({_off:true},1).wait(3));

	// cloud
	this.instance_6 = new lib.cloud("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(263.9,147.1,1,1,0,0,0,86.5,48);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({y:452.1},11).to({y:618.5,alpha:0},6).wait(24).to({scaleX:0.92,scaleY:0.92,x:53.6,y:-50.9},0).to({y:60,alpha:1},4).to({y:448.2},14).to({y:614.6,alpha:0},6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(57.8,-81.5,292.7,720.3);


(lib.cell_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 13 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgiGAWOMAAAgsbMBENAAAMAAAAsbg");
	mask.setTransform(129.1,36.8);

	// Layer 12
	this.instance = new lib.mobile("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(128.2,231.3,1,1,0,0,0,128.2,231.3);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(100));

	// icon08.png
	this.instance_1 = new lib.icon08_1("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-87.9,193.6,1,1,0,0,0,49,46.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:49.1,regY:46.6,scaleX:0.78,scaleY:0.78,guide:{path:[-87.9,193.6,-89.1,187.7,-89.1,181.4,-89.1,137.5,-27.2,106.4,33.2,76.1,118.3,75.4]}},24).to({regX:49,regY:46.5,scaleX:1,scaleY:1,guide:{path:[118.4,75.4,120.3,75.4,122.3,75.4,209.7,75.4,271.6,106.4,332.2,136.8,333.5,179.6]}},25).to({regX:49.1,regY:46.6,scaleX:1.38,scaleY:1.38,guide:{path:[333.5,179.5,333.5,180.4,333.5,181.4,333.5,225.3,271.6,256.4,209.7,287.5,122.3,287.5,119.2,287.5,116.2,287.5]}},25).to({scaleX:1.18,scaleY:1.18,guide:{path:[116.1,287.5,36.4,286.5,-21.6,259.2]}},13).to({regX:49,regY:46.5,scaleX:1,scaleY:1,guide:{path:[-21.6,259.3,-24.5,257.9,-27.3,256.5,-71.8,234.1,-84.2,205.1]}},12).wait(1));

	// icon07.png
	this.instance_2 = new lib.icon07_1("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-31.7,108.7,0.888,0.888,0,0,0,48.9,46.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({guide:{path:[-31.6,108.6,-29.5,107.4,-27.2,106.3,34.7,75.2,122.1,75.2,203.7,75.2,263,102.2]}},24).to({regX:49,scaleX:1.12,scaleY:1.12,guide:{path:[263.1,102.4,267.4,104.4,271.6,106.5,333.5,137.5,333.5,181.4,333.5,221.8,281.3,251.3]}},25).to({scaleX:1.38,scaleY:1.38,guide:{path:[281.3,251.3,276.7,253.9,271.6,256.4,209.7,287.5,122.3,287.5,119.3,287.5,116.4,287.5]}},12).to({scaleX:1.12,scaleY:1.12,guide:{path:[116.3,287.5,32.5,286.5,-27.2,256.4,-44.5,247.8,-56.9,238.1]}},13).to({regX:48.9,scaleX:0.89,scaleY:0.89,guide:{path:[-56.9,238,-89.1,213,-89.1,181.4,-89.1,139,-31.7,108.7]}},25).wait(1));

	// icon06.png
	this.instance_3 = new lib.icon06_1("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(-14.3,262.5,1,1,0,0,0,49,46.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regY:46.6,scaleX:0.89,scaleY:0.89,guide:{path:[-14.3,262.5,-21,259.6,-27.3,256.4,-89.1,225.3,-89.1,181.4,-89.1,138.2,-29.4,107.6]}},24).to({scaleY:0.89,guide:{path:[-29.4,107.5,-28.3,107,-27.2,106.4,34.7,75.3,122.1,75.3,207.7,75.3,268.8,105]}},25).to({regY:46.5,scaleX:1,scaleY:1,guide:{path:[268.9,105.1,270.2,105.7,271.6,106.4,333.5,137.4,333.5,181.4,333.5,225.3,271.6,256.4,264.9,259.8,258,262.7]}},25).to({regY:46.6,scaleX:1.38,scaleY:1.38,guide:{path:[258,262.8,200.3,287.5,122.3,287.5,119.3,287.5,116.3,287.5]}},13).to({regY:46.5,scaleX:1,scaleY:1,guide:{path:[116.2,287.5,41.5,286.6,-14.2,262.5]}},12).wait(1));

	// icon05.png
	this.instance_4 = new lib.icon05_1("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(114.7,75.4,0.779,0.779,0,0,0,49.1,46.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({scaleX:1,scaleY:1,guide:{path:[114.7,75.4,118.5,75.3,122.3,75.3,209.7,75.3,271.6,106.3,326.4,133.8,332.7,171.4]}},24).to({regX:49,scaleX:1.38,scaleY:1.38,guide:{path:[332.7,171.4,333.5,176.3,333.5,181.4,333.5,225.4,271.6,256.5,212.5,286.1,130.2,287.5]}},25).to({scaleX:0.89,scaleY:0.89,guide:{path:[130.2,287.5,126.2,287.5,122.2,287.5,34.6,287.5,-27.2,256.4,-89.1,225.3,-89.1,181.4,-89.1,147.9,-53.2,122]}},25).to({regX:48.9,scaleX:0.83,scaleY:0.83,guide:{path:[-53.3,122,-42,113.8,-27.2,106.4,-10.6,98,7.9,91.9]}},13).to({regX:49.1,scaleX:0.78,scaleY:0.78,guide:{path:[8,91.9,49.4,78.2,100,75.8]}},12).wait(1));

	// icon04.png
	this.instance_5 = new lib.icon04_1("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(259.3,100.7,0.888,0.888,0,0,0,49,46.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regX:49.1,scaleX:1,scaleY:1,guide:{path:[259.3,100.7,265.6,103.4,271.6,106.5,333.5,137.5,333.5,181.4,333.5,225.4,271.6,256.5,269.5,257.5,267.5,258.5]}},24).to({scaleX:1.38,scaleY:1.38,guide:{path:[267.4,258.5,206.8,287.5,122.2,287.5,118.5,287.5,114.9,287.5]}},13).to({regX:49,scaleX:1.12,scaleY:1.12,guide:{path:[114.8,287.5,43.6,286.4,-10.4,264.1]}},12).to({scaleX:1,scaleY:1,guide:{path:[-10.5,264.1,-19.1,260.5,-27.2,256.4,-89.1,225.3,-89.1,181.4,-89.1,137.4,-27.2,106.4,6.3,89.6,47.4,81.9]}},25).to({scaleX:0.89,scaleY:0.89,guide:{path:[47.5,81.8,82.2,75.3,122.2,75.3,178.4,75.3,224,88.1]}},25).wait(1));

	// icon03.png
	this.instance_6 = new lib.icon03_1("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(334.2,180,1,1,0,0,0,49,46.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({regX:49.1,regY:46.6,scaleX:1.38,scaleY:1.38,guide:{path:[333.5,179.9,333.5,180.7,333.5,181.4,333.5,225.3,271.6,256.4,209.7,287.5,122.3,287.5,119.5,287.5,116.7,287.5]}},24).to({regX:49,regY:46.5,scaleX:1,scaleY:1,guide:{path:[116.6,287.5,32.6,286.6,-27.2,256.4,-86.8,226.5,-89,184.6]}},25).to({guide:{path:[-89,184.7,-89.1,183.1,-89.1,181.4,-89.1,137.5,-27.2,106.4,34.7,75.4,122.2,75.4,154.9,75.4,184,79.7]}},25).to({regY:46.6,scaleX:0.89,scaleY:0.89,guide:{path:[184,79.6,227.5,86,263,102.2]}},13).to({regY:46.5,scaleX:1,scaleY:1,guide:{path:[262.9,102.2,267.3,104.2,271.6,106.3,330.3,135.9,333.3,177]}},12).wait(1));

	// icon02.png
	this.instance_7 = new lib.icon02_1("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(254.5,264.3,1,1,0,0,0,49,46.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({scaleX:1.38,scaleY:1.38,guide:{path:[254.5,264.2,197.9,287.5,122.2,287.5,121.9,287.5,121.6,287.5]}},12).to({scaleX:1,scaleY:1,guide:{path:[121.6,287.5,34.5,287.4,-27.2,256.4,-29.3,255.4,-31.4,254.3]}},12).to({guide:{path:[-31.4,254.3,-89.1,223.9,-89.1,181.4,-89.1,137.5,-27.3,106.5,-26.5,106,-25.6,105.6]}},25).to({guide:{path:[-25.5,105.5,35.9,75.3,122.1,75.3,206.5,75.3,267,104.1]}},25).to({guide:{path:[267,104.1,269.3,105.2,271.6,106.3,333.5,137.4,333.5,181.4,333.5,184.2,333.2,186.9]}},13).to({guide:{path:[333.3,187,329.6,226.7,273.6,255.5]}},12).wait(1));

	// icon01.png
	this.instance_8 = new lib.icon01_1("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(117.4,290.5,1.378,1.377,0,0,0,49.1,46.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({regY:46.6,scaleX:0.89,scaleY:0.89,guide:{path:[117.3,287.5,32.9,286.7,-27.2,256.4,-89.1,225.3,-89.1,181.4,-89.1,137.5,-27.2,106.4,34.2,75.5,121.1,75.3]}},49).to({scaleX:1.13,scaleY:1.13,guide:{path:[121.2,75.4,121.7,75.4,122.3,75.4,209.7,75.4,271.6,106.4,333.3,137.4,333.5,181.2]}},25).to({regY:46.5,scaleX:1.38,scaleY:1.38,guide:{path:[333.5,181.1,333.5,181.2,333.5,181.4,333.5,225.3,271.6,256.4,210.5,287.2,124.4,287.5]}},25).wait(1));

	// Layer 1
	this.instance_9 = new lib.mobile("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(128.2,231.3,1,1,0,0,0,128.2,231.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(100));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-136.9,0,520.1,462.8);


(lib.bullb = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.wheel();
	this.instance.parent = this;
	this.instance.setTransform(82.3,101.8,0.616,0.616,0,0,0,75.2,93.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.instance_1 = new lib.shin();
	this.instance_1.parent = this;
	this.instance_1.setTransform(83.9,79.6,0.616,0.616,0,0,0,166.9,158.3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#82334D").s().p("AhzAXQg4gHgkgKQgkgKgBgKIAAgQQADAKAkALQAkAJA4AHQA4AHA8AAQA9AAA2gHQA3gHAigJQAjgLADgKIAAAQQgBAKgjAJQgiALg3AHQg3AHg+ABQg9AAg5gIg");
	this.shape.setTransform(83.2,185.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#9B3248").s().p("AhjA0IAhgDQAjgDAlgRQAmgSAMgpIAmgVQAHAQgCAeQgCAcgiAPQgZAJgnACQgnADgfAAIgcAAg");
	this.shape_1.setTransform(95.3,181.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#9C7F61").s().p("Ah5AkQg8gIgngLQgogMgBgJIAAgTIACgUQAHAJAoAKQAoALA5AHQA5AHA8AAQA7AAA6gHQA4gHAngLQAogKAFgJIACAUIABATQgBAJgoALQgmAMg8AIQg7AIg+AAQg/AAg8gIg");
	this.shape_2.setTransform(83.3,174.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFE6B3").s().p("Ah5AkQg8gIgngLQgogMgBgJIAAgTIACgUQAHAJAoAKQAoALA5AHQA5AHA8AAQA7AAA6gHQA4gHAngLQAogKAFgJIACAUIABATQgBAJgoALQgmAMg8AIQg7AIg+AAQg/AAg8gIg");
	this.shape_3.setTransform(83.3,173.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#9B3248").s().p("AiPAZQhFgMgfgNQAAgeACgFQAGAJAkAJQAkAKA2AHQA2AGA6AAQA8gBA0gFQA0gHAjgKQAigJAHgJIAAAMIABAYQghANhCALQhDALhLABQhMgBhGgLg");
	this.shape_4.setTransform(83.2,178.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#82334D").s().p("AhzAWQg4gIgkgKQgkgJgBgKQAAgFACgJQAGAJAlAKQAkAKA2AGQA2AGA6ABQA7AAA1gIQA0gFAjgKQAjgKAGgJQACAJAAAFQgBAKgjAJQgiAKg3AHQg3AIg+ABQg9gBg5gHg");
	this.shape_5.setTransform(83,194.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#82334D").s().p("AhzAWQg4gHgkgLQgkgJgBgKQAAgFACgIQAGAIAlAKQAkAKA2AGQA2AGA6ABQA7AAA1gIQA0gFAjgKQAjgKAGgIQACAIAAAFQgBAKgjAJQgiALg3AGQg3AIg+AAQg9AAg5gHg");
	this.shape_6.setTransform(83,204.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#82334D").s().p("AhzAWQg4gIgkgKQgkgJgBgLQAAgFACgHQAGAJAlAJQAkAKA2AGQA2AHA6AAQA7gBA1gGQA0gGAjgKQAjgJAGgJQACAHAAAFQgBALgjAJQgiALg3AGQg3AIg+AAQg9AAg5gHg");
	this.shape_7.setTransform(83,213.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E04C5A").s().p("AgTAMIABgHIALgjIATAHQgJAeARAYQghgKgGgJg");
	this.shape_8.setTransform(60.7,200);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E04C5A").s().p("AgRAQQAAAAAAAAQAAgBAAAAQgBAAAAgBQAAAAgBgBIABgQIAAgcIAOAFIAPAEQgIAeARAYQghgJgEgHg");
	this.shape_9.setTransform(60.8,181.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E04C5A").s().p("AgUANIABgHIAMglIATAHQgJAgASAYQgjgKgGgJg");
	this.shape_10.setTransform(60.9,190.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E04C5A").s().p("AgTAMIABgHIALgjIATAHQgJAeARAYQghgKgGgJg");
	this.shape_11.setTransform(60.7,209.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E04C5A").s().p("AgLgXIATgHIAKAjIACAJIAAgCQgGAJghAKQARgYgJgeg");
	this.shape_12.setTransform(105.3,200.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E04C5A").s().p("AgKgWIAPgEIAOgFIAAAcIABAQQgBABAAAAQAAABgBAAQAAAAAAABQAAAAABAAQgFAHghAJQASgYgJgeg");
	this.shape_13.setTransform(105.8,181.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#E04C5A").s().p("AgLgXIASgHIALAjIADAJIgBgCQgGAJgiAKQASgYgJgeg");
	this.shape_14.setTransform(105.2,190.4);

	this.instance_2 = new lib.Symbol6("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(64.2,208.2,0.33,0.33,0,0,0,0.5,0.6);
	this.instance_2.alpha = 0.699;

	this.instance_3 = new lib.Symbol5("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(64.1,198.3,0.33,0.33,0,0,0,0.3,0.1);
	this.instance_3.alpha = 0.699;

	this.instance_4 = new lib.Symbol4("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(64.2,188.5,0.33,0.33,0,0,0,0.6,0.3);
	this.instance_4.alpha = 0.699;

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFE6B3").s().p("AAAL8IgBAAQjegBgag+QgMgfgFgZQgFgagCg0IgGhTQgCgngHgeQgHgcgeglQgegkgjgkQgjgkgXgbQhDhPgnhiQglhhgBhwQACilBPiGQBPiFCGhPQCFhPClgCQCmACCFBPQCGBPBPCFQBPCGACClQgBBwgmBhQgmBjhDBOIAAAAQgXAbgiAkQgjAkgfAkQgdAlgIAcQgFAegEAnIgFBTQgDA0gEAaQgGAZgMAfQgaA+jdABIgDAAgAjWqwQhkAqhRBQQhPBQgqBlQgqBlAABxQgBBmAkBcQAiBdBCBNIAJALIAmAoQAwAzAgAoQAgAoAJAhQALBBADBcQADAzAEAXQAFAXAMAbQgCACANAKQAOAKAvAKQAuAJBiABIADAAQBjgBAugJQAugKAOgKQAOgKgCgCQALgbAFgXQAEgXADgzQADhcANhBQAHghAggoQAggoAwgzIAagaIAUgZQBDhMAiheQAjhcAAhmQAAhxgqhlQgqhlhQhQQhPhQhmgqQhlgqhxAAQhwAAhmAqg");
	this.shape_15.setTransform(83.3,101.5);

	this.instance_5 = new lib.Symbol3("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(20.9,21.9,0.33,0.33,0,0,0,0.3,0.5);
	this.instance_5.alpha = 0.301;

	this.instance_6 = new lib.Symbol2("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(64,175.7,0.33,0.33,0,0,0,0.3,0.6);
	this.instance_6.alpha = 0.699;

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#9C7F61").s().p("AhzA+Qg4gIgkgLQgkgKgBgKIABgXIAAgrIABgZQAGAJAlAKQAkAJA2AHQA2AHA6AAQA7AAA1gHQA0gHAjgJQAjgKAGgJIABAZIAAArIABAXQgBAKgjAKQgiALg3AHQg3AHg+ABQg9AAg5gHg");
	this.shape_16.setTransform(83.2,180.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#9B3248").s().p("AhjA0IAhgDQAjgDAlgRQAmgSAMgpIAmgVQAHAQgCAeQgCAcgiAPQgZAJgnACQgnADgfAAIgcAAg");
	this.shape_17.setTransform(94.4,210.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#9B3248").s().p("AhjA0IAhgDQAjgDAlgRQAmgSAMgpIAmgVQAHAQgCAeQgCAcgiAPQgZAJgnACQgnADgfAAIgcAAg");
	this.shape_18.setTransform(94.4,201.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#9B3248").s().p("AhjA0IAhgDQAjgDAlgRQAmgSAMgpIAmgVQAHAQgCAeQgCAcgiAPQgZAJgnACQgnADgfAAIgcAAg");
	this.shape_19.setTransform(94.3,191.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#58595B").s().p("AgTDHQAAgzAChBQADhAAEhJQAHhvALhdIANAAQgQCBgFB7QgGB5gBBVIgBA6IgMABIABg8g");
	this.shape_20.setTransform(96.7,147.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAVEtIgDg4IgLidQgGhagKhlQgKhmgOhgIAMAAQAOBgAKBlQAKBlAHBaIALCcIADA8IgNgCg");
	this.shape_21.setTransform(68.8,143.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFCF21").s().p("AkqH/QiGhOhOiGQhPiGgCilQACilBPiFQBOiFCGhQQCGhPCkgCQClACCGBPQCFBQBPCFQBPCFACClQgCClhPCGQhPCGiFBOQiGBQilACQikgCiGhQg");
	this.shape_22.setTransform(82.3,84.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#91704F").s().p("AiYAZQg8gKgDgPQADgOA8gKQA9gKBbgBQBcABA8AKQA9AKADAOQgDAPg8AKQg9AKhcABQhbgBg9gKg");
	this.shape_23.setTransform(83.7,169.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFCF21").s().p("AAAETIgCAAQjdgCgag+QgMgegFgaQgFgZgDg0IgFhTQgDgngGgeQgIgcgdgkQgeglgjgkQgjgkgXgbIHABFIHBhFQgXAbgjAkQgjAkgeAlQgdAkgIAcQgGAegDAnIgFBTQgDA0gFAZQgFAagMAeQgaA+jdACIgDAAg");
	this.shape_24.setTransform(83.3,150.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#9B3248").s().p("AiIAZQhCgLgbgOIAGgSIAEgOIDeAgICEgMIBTgWIAMAlQgdANg9AJQg+AJhHABQhOAAhBgKg");
	this.shape_25.setTransform(82.9,206.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#E04C5A").s().p("AgLgXIATgHIAKAjIACAIIAAgBQgGAJghAKQARgYgJgeg");
	this.shape_26.setTransform(105.3,209.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#9C7F61").s().p("AhXBFQg6gEgvgJQgvgKgDgUQgBgEADgJIANgqIANglIgCgGIGxAAIgBAGIAMAlIAOAqIACANQgDASgxAJQgJAFgNABIgfADQg0AKhSABQghgBg7gDg");
	this.shape_27.setTransform(82.9,208.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#9B3248").s().p("AiIAYQhCgKgbgNIAGgTIAEgOIDeAhICEgNIBTgWIAMAlQgdANg9AJQg+AKhHAAQhOgBhBgKg");
	this.shape_28.setTransform(82.9,196.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#9C7F61").s().p("AhXBFQg6gEgvgJQgvgKgDgUQgBgEADgJIANgqIANglIgCgGIGxAAIgBAGIAMAlIAOAqIACANQgDASgxAJQgJAFgNABIgfADQg0AKhSABQghgBg7gDg");
	this.shape_29.setTransform(82.9,199.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#C54A51").s().p("AhhAbQg1gGghgPQgKgGgOgNIgQgQIG+gDQACABgMAQQgNAPgxAQQgxAQhqABQgoAAg1gGg");
	this.shape_30.setTransform(83.3,216.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#953551").s().p("Ag2AtQgngGgWgNQgMgIgMgSQgMgRgIgQIgJgQIFRAKIgUAdQgSAagSAOQgSAKggAEQghAFgUABIgEAAQgYAAgkgFg");
	this.shape_31.setTransform(83.2,221.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#9B3248").s().p("AiIAeQhBgKgcgOIAOgoIgCgGIGyAAIgCAGIAPArQgfANg8AJQg9AJhIABQhMgBhCgKg");
	this.shape_32.setTransform(83,186.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#9C7F61").s().p("AhXBFQg6gEgvgJQgvgKgDgUQgBgEADgJIANgqIANglIgCgGIGxAAIgBAGIAMAlIAOAqIACANQgDASgxAJQgJAFgNABIgfADQg0AKhSABQghgBg7gDg");
	this.shape_33.setTransform(82.9,189.6);

	this.instance_7 = new lib.Symbol1("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(100.9,182.5,0.33,0.33,0,0,0,0.5,0.3);
	this.instance_7.alpha = 0.301;

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#B13044").s().p("AiVAnQg8gPgDgYQADgWA8gQQA7gPBagBQBbABA7APQA9AQACAWQgCAYg9APQg7APhbABQhagBg7gPg");
	this.shape_34.setTransform(82.9,236.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_34},{t:this.instance_7},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.instance_6},{t:this.instance_5},{t:this.shape_15},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.bullb, new cjs.Rectangle(0,0,167.6,242), null);


(lib.rocket = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.instance = new lib.stars();
	this.instance.parent = this;
	this.instance.setTransform(-120.5,121,1,1,0,0,0,11.5,12);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(100));

	// Layer 3
	this.instance_1 = new lib.clouds();
	this.instance_1.parent = this;
	this.instance_1.setTransform(126.1,152.4,1,1,0,0,0,235.4,274.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(100));

	// Layer 1
	this.instance_2 = new lib.rocket02();
	this.instance_2.parent = this;
	this.instance_2.setTransform(83.5,149.5,1,1,0,0,0,83.5,149.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:120.9,y:110.7},30).to({x:75.2,y:87.2},34).to({x:83.5,y:149.5},35).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-165,-203.4,406.1,720.3);


// stage content:
(lib.home = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 5
	this.instance = new lib.screen2text03("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(895.4,347.5,1,1,0,0,0,184.3,29.7);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.instance_1 = new lib.screen3text03("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(976.1,326.7);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(159).to({_off:false},0).to({x:286.5,alpha:1},14).to({x:357.8},233).to({x:68.1,alpha:0},15).to({_off:true},1).wait(309));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(463).to({_off:false},0).to({x:313.6,alpha:1},16).to({x:511.6},210).to({x:43,alpha:0},16).to({_off:true},1).wait(25));

	// Layer 4
	this.instance_2 = new lib.text02("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-267.4,287.9,1,1,0,0,0,184.6,51.3);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.instance_3 = new lib.screen2text02("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(-302.1,252.7,1,1,0,0,0,210.8,51.3);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.instance_4 = new lib.screen3text02("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(-152.9,245.8);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({_off:false},0).to({x:508.6,alpha:1},11).to({x:412.6},2).to({x:268.6},104).to({x:1260.6,alpha:0},12).to({_off:true},1).wait(592));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(159).to({_off:false},0).to({x:331.3,alpha:1},14).to({x:227.5},233).to({x:898.5,alpha:0},15).to({_off:true},1).wait(309));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(463).to({_off:false},0).to({x:483.1,alpha:1},16).to({x:382.5},210).to({x:1085.4,alpha:0},16).to({_off:true},1).wait(25));

	// Layer 2
	this.instance_5 = new lib.text01("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(1240.6,191.3,1,1,0,0,0,168.3,52.6);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.instance_6 = new lib.screen2text01("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(1209.1,159.5,1,1,0,0,0,134.4,29.7);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.instance_7 = new lib.screen3text01("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(1088.4,154.1);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(9).to({_off:false},0).to({x:224.6,alpha:1},11).to({x:320.6},2).to({x:536.6},104).to({x:-207.4,alpha:0},12).to({_off:true},1).wait(592));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(159).to({_off:false},0).to({x:243.6,alpha:1},14).to({x:465.2},233).to({x:-150.9,alpha:0},15).to({_off:true},1).wait(309));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(463).to({_off:false},0).to({x:213.9,alpha:1},16).to({x:487.8},210).to({x:-175.5,alpha:0},16).to({_off:true},1).wait(25));

	// Layer 1
	this.instance_8 = new lib.bullb();
	this.instance_8.parent = this;
	this.instance_8.setTransform(828.4,263.6,2.247,2.247,0,0,0,83.8,121.2);
	this.instance_8.alpha = 0;

	this.instance_9 = new lib.cell_1();
	this.instance_9.parent = this;
	this.instance_9.setTransform(813.5,410.9,0.506,0.506,0,0,0,128.6,231.6);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.instance_10 = new lib.rocket();
	this.instance_10.parent = this;
	this.instance_10.setTransform(803.4,431,0.324,0.324,0,0,0,83.5,149.6);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({regX:83.9,scaleX:1.55,scaleY:1.55,x:828.6,alpha:1},9).to({scaleX:1.53,scaleY:1.53,x:828.4,y:263.4},127).to({regX:83.8,regY:121.1,scaleX:0.92,scaleY:0.92,x:828.3,y:263.5,alpha:0},10).to({_off:true},1).wait(584));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(147).to({_off:false},0).to({regX:128.3,regY:231.4,scaleX:0.81,scaleY:0.81,x:799.6,y:306.7,alpha:1},12).wait(263).to({regX:123.1,regY:231.3,scaleX:0.55,scaleY:0.55,x:807.9,y:366.5,alpha:0},22).to({_off:true},1).wait(286));
	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(445).to({_off:false},0).to({scaleX:0.78,scaleY:0.78,x:796.7,y:269,alpha:1},18).wait(242).to({y:117.2,alpha:0},18).to({_off:true},1).wait(7));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1152,266.3,376.5,543.8);
// library properties:
lib.properties = {
	width: 1024,
	height: 550,
	fps: 15,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/home_atlas_.png", id:"home_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;