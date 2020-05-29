
document.body.addEventListener('keydown',function(e){
	switch(e.keyCode){
		case 65:
	document.getElementById('square').classList.add('animation');
	document.getElementById('clap').play();
	break;
	    case 83:
    document.getElementById('square2').classList.add('animation');
	document.getElementById('hihat').play();
	break;
	case 68:
    document.getElementById('square3').classList.add('animation');
	document.getElementById('kick').play();
	break;
	case 70:
    document.getElementById('square4').classList.add('animation');
	document.getElementById('openhat').play();
	break;
	case 71:
    document.getElementById('square5').classList.add('animation');
	document.getElementById('boom').play();
	break;
	case 72:
    document.getElementById('square6').classList.add('animation');
	document.getElementById('ride').play();
	break;
	case 74:
    document.getElementById('square7').classList.add('animation');
	document.getElementById('snare').play();
	break;
	case 75:
    document.getElementById('square8').classList.add('animation');
	document.getElementById('tom').play();
	break;
	case 76:
    document.getElementById('square9').classList.add('animation');
	document.getElementById('tink').play();
	break;
	default:
		console.log('You pressed a wrong key')
	}
	
})

document.body.addEventListener('keyup',function(e){
	switch(e.keyCode){
		case 65:
	document.getElementById('square').classList.remove('animation');
	break;
	    case 83:
    document.getElementById('square2').classList.remove('animation');
	
	break;
	case 68:
    document.getElementById('square3').classList.remove('animation');
	
	break;
	case 70:
    document.getElementById('square4').classList.remove('animation');
	
	break;
	case 71:
    document.getElementById('square5').classList.remove('animation');
	
	break;
	case 72:
    document.getElementById('square6').classList.remove('animation');
	
	break;
	case 74:
    document.getElementById('square7').classList.remove('animation');
	
	break;
	case 75:
    document.getElementById('square8').classList.remove('animation');
	
	break;
	case 76:
    document.getElementById('square9').classList.remove('animation');

	break;
	default:
		console.log('You pressed a wrong key')
	}
	
})