var bulletPosition = 4;

const spinChamber = () => {
	var chamberPosition = Math.floor((Math.random() * 6) + 1);
	return chamberPosition;
};

// Remove the // below and complete the commented lines
const fireGun = (spinnerPosition) => {
    if (bulletPosition == spinChamber){
       console.log("You're dead!");
    }
    else{
        console.log("Keep playing :)");
    }
    
    
};
console.log(fireGun());
//console.log(fireGun(...));