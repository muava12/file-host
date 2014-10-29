
var IMG_YHOO = "<img style='border:0;padding:0' src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/";
var IMG_GOGL = "<img style='border:0;padding:0' src='http://blogspot-emoticon.googlecode.com/hg/";
    
document.getByClassName = function(className){
    var aReturn = new Array();
    var elements = document.getElementsByTagName("*");
	var classes;
	var i, j;
	
    for(i = 0;i < elements.length;i++){
        if(elements[i].className.indexOf(" ") >= 0){
            classes = elements[i].className.split(" ");
            for(j = 0;j < classes.length;j++){
                if(classes[j] == className)
                    aReturn.push(elements[i]);
            }
        }
        else if(elements[i].className == className)
            aReturn.push(elements[i]);
    }
    return aReturn;
};

function loopContent(){
  var def = ['post-body','entry-content','comment-body','comment','comments'];
  var content;
  var i, j;
  
  for(i=0;i<def.length;i++)
  {
	content = document.getByClassName(def[i]);
	for(j=0;j<content.length;j++) {
        content[j].innerHTML = setEmoticon(content[j].innerHTML);
	}
  }
}

function setEmoticon(s){
	s = s.replace(/:D/g, IMG_YHOO + "1.gif'/>");				// :D
	
	s = s.replace(/:\)|=\)/g, IMG_YHOO + "1.gif'/>");           // :)
	
	s = s.replace(/:p|=p/ig, IMG_YHOO + "1.gif'/>");			// :P
	
	s = s.replace(/:\(|=\(/g, IMG_YHOO + "2.gif'/>");			// :(
	
	s = s.replace(/;\)/g, IMG_YHOO + "3.gif'/>");				// ;)
	
	s = s.replace(/:\)\)|=\)\)/g, IMG_YHOO + "24.gif'/>");      // =))
	
	s = s.replace(/B\)|B-\)/ig, IMG_YHOO + "24.gif'/>");        // B) atau B-)
	
	s = s.replace(/&gt;:O/ig, IMG_YHOO + "14.gif'/>");			// >:O Angry
	
	s = s.replace(/&gt;=\)/g, IMG_YHOO + "19.gif'/>");			// >=) Evil
	
	s = s.replace(/:o|=o/ig, IMG_YHOO + "13.gif'/>");			// :O
	
	s = s.replace(/:-s/ig, IMG_YHOO + "18.gif'/>");				// :-s
	
	s = s.replace(/:\|/g, IMG_YHOO + "22.gif'/>");				// :|
	
	s = s.replace(/:\//g, IMG_YHOO + "27.gif'/>");              // :/
    
	return s;
}

function addLoadEvent(func) {
  var oldonload = window.onload;
  if (typeof window.onload != 'function') {
    window.onload = func;
  } else {
    window.onload = function() {
      oldonload();
      func();
    };
  }
}

addLoadEvent(function(){
	loopContent();
});
