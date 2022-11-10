const liftContainer = document.getElementById("lift-container");
const submitBtn = document.getElementById("submit");
const floorValue = document.getElementById("no-of-floors");
const liftValue = document.getElementById("no-of-lifts");


submitBtn.addEventListener("click", function(event){
    event.preventDefault();
    // console.log(floorValue.value);
    // console.log(liftValue.value);

    // If inputs are empty, stop the button from clicking
    // submitBtn.disabled = true;
    // if(floorValue.value === "" && liftValue.value === ""){
    //     submitBtn.disabled = true;
    //     event.preventDefault();
    //     event.stopPropagation();
    //     console.log(submitBtn.disabled);    
    // }else{
    //     submitBtn.disabled = false;
    //     console.log(submitBtn.disabled);    
    // }

    // Creating floor container
    let floor = document.createElement("div");
    floor.className = "floor";
    floor.id = "floors";
    // console.log(floor)

    // Creating floor Btns container
    let floorBtns = document.createElement("div");
    floorBtns.className = "floor-container";
    floorBtns.id = "floor-btns";
    // console.log(floorBtns);

    // Up Btn
    let upBtn = document.createElement("button");
    upBtn.className = "floor-btn btn-up";
    upBtn.innerText = "Up";
    // console.log(upBtn)
    
    // Down Btn
    let downBtn = document.createElement("button");
    downBtn.className = "floor-btn btn-down";
    downBtn.innerText = "Down";
    // console.log(downBtn);

    // Appending Up and Down Btns to floorBtns container
    floorBtns.append(upBtn, downBtn);
    // console.log(floorBtns)
   
    // Creating liftDoors container
    let liftDoorContainer = document.createElement("div");
    liftDoorContainer.className = "lift";
    liftDoorContainer.id = "lifts";
    // console.log(liftDoorContainer);

    // Creating liftDoors space
    let liftDoors = document.createElement("span");
    liftDoors.className = "doors";
    // console.log(liftDoors)
    
    // Creating Left Door
    let lDoor = document.createElement("span");
    lDoor.className = "left-door";
    
    // Creating Right Door
    let rDoor = document.createElement("span");
    rDoor.className = "right-door";

    // Appending Left and Right door to liftDoors space
   liftDoors.append(lDoor, rDoor);
    // console.log(liftDoors)

    // Appending liftDoors space to lift Container
    liftDoorContainer.append(liftDoors);
    // console.log(liftDoorContainer)

    // Creating floorNum Container
    let flrNumCnt = document.createElement("div");
    flrNumCnt.className = "floor-name";
    flrNumCnt.id = "floor-number";
    // console.log(flrNumCnt)

    // Creating floorNum para
    let floorNum = document.createElement("p");
    floorNum.innerText = "Floor 1";
    // console.log(floorNum)

    // Appending floorNum para to flrNum cnt
    flrNumCnt.appendChild(floorNum);
    // console.log(flrNumCnt)

    // Appending floorBtns cnt, lftdoor cnt, flrnum cnt to floor cnt
    floor.append(floorBtns, liftDoorContainer, flrNumCnt);
    // console.log(floor)

    // Finally appending floor cnt to lift cnt
    liftContainer.appendChild(floor);
    // console.log(liftContainer);
});

function generateLifts(){
    
}

function generateFloors(){

}