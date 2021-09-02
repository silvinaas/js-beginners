function getColor(selection)
{
	switch(selection){
		// Add more options here
		case 'blue': return true;
		break;

		case 'red': return true;
		break;

		case 'green': return true;
		break;

	    default:
	    	return false;  //returns false because the user picked an unavailable color
	    break;               
	}
}

var colorname = prompt('What color do you want?').trim();
colorname = colorname.toLowerCase();
var isAvailable = getColor(colorname);

if(isAvailable)
	console.log('Good news! That color is available');
else 
	console.log('We are sorry, that color is not available');
