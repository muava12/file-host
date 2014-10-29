/*--
  created by glenn s
  website http://www.gimanacara.com
--*/

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
}

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
	s = s.replace(/&gt;=\)/g, IMG_YHOO + "19.gif'/>");	// >=)
	s = s.replace(/o:\)/ig, IMG_YHOO + "25.gif'/>");	// o:)
	s = s.replace(/\\:D\//ig, IMG_YHOO + "69.gif'/>");	// \:D/
	s = s.replace(/&gt;:O/ig, IMG_YHOO + "14.gif'/>");	// >:O
	
	s = s.replace(/:'\(/ig, IMG_YHOO + "20.gif'/>");	// :'(
	
	s = s.replace(/;\)/g, IMG_YHOO + "3.gif'/>");	// ;)
	
	s = s.replace(/:\)\)|=\)\)/g, IMG_YHOO + "24.gif'/>"); // =))
	
	s = s.replace(/:\)|=\)/g, IMG_YHOO + "1.gif'/>"); 	// :)
	s = s.replace(/:\(|=\(/g, IMG_YHOO + "2.gif'/>");	// :(
	
	s = s.replace(/:D/g, IMG_YHOO + "4.gif'/>");	// :D
	s = s.replace(/=D/g, IMG_YHOO + "21.gif'/>");	// =D
	s = s.replace(/:p|=p/ig, IMG_YHOO + "10.gif'/>");	// :P
	
	s = s.replace(/x_x/ig, IMG_YHOO + "109.gif'/>");	// X_X
	
	s = s.replace(/:o|=o/ig, IMG_YHOO + "13.gif'/>");	//:O
	
	s = s.replace(/\(y\)/ig, IMG_YHOO + "113.gif'/>");	// (y)
	s = s.replace(/\(n\)/ig, IMG_YHOO + "112.gif'/>");	// (n)
	
	s = s.replace(/:\*/g, IMG_YHOO + "11.gif'/>");	// :*
	
	s = s.replace(/#:-s/ig, IMG_YHOO + "18.gif'/>");	//	#:-s
	
	s = s.replace(/:&amp;|=&amp;/g, IMG_YHOO + "31.gif'/>");	// 	:&
	s = s.replace(/B-\)/ig, IMG_YHOO + "16.gif'/>");	// B-)
	
	s = s.replace(/\(\*\)/g, IMG_YHOO + "79.gif'/>");	// (*)
	s = s.replace(/&lt;3&lt;3/g, IMG_YHOO + "8.gif'/>");	// <3<3
	s = s.replace(/&lt;\\3/g, IMG_YHOO + "12.gif'/>");	// <\3
	s = s.replace(/~o\)/ig, IMG_YHOO + "57.gif'/>");	// ~o)
	
	s = s.replace(/\\m\//ig, IMG_YHOO + "111.gif'/>");	// \m/

	s = s.replace(/&lt;:-P/ig, IMG_YHOO + "36.gif'/>");	// <:-P
	
	s = s.replace(/\({}\)/ig, IMG_YHOO + "6.gif'/>");	// ({})
	
	s = s.replace(/\=\-c/ig, IMG_YHOO + "101.gif'/>");	// =-c
	
	s = s.replace(/@};-/g, IMG_YHOO + "53.gif'/>");	// @};-
	s = s.replace(/&gt;:\//g, IMG_YHOO + "27.gif'/>");	// >:/
	
	s = s.replace(/:\|/g, IMG_YHOO + "22.gif'/>");	// :|
	
	s = s.replace(/&lt;3/g, IMG_GOGL + "emoc.heart.gif'/>");	// <3
	s = s.replace(/&lt;\/3/g, IMG_GOGL + "emoc.brokenheart.gif'/>");	// </3
	
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
    }
  }
}

addLoadEvent(function(){
	loopContent();
});
