//Hotel Room Booking

//introducing variables
const singleRoomCost = 250000;
const doubleRoomCost = 35000;
const tripleRoomCost = 40000;
const extraBedCost = 8000;
const num_KidCost = 5000;
let promoCode;
let loyaltyPoints;
let totalCost;
let totalLoyaltyPoints;
let bookingData = 0;


//get references to the interactive elements
//Room booking form
const roomForm = document.getElementById("form-1");

const Name = document.getElementById("name");
const Email = document.getElementById("email");

const checkInDate = document.getElementById("check-in-date");
const checkOutDate = document.getElementById("check-out-date");

const numAdults = document.getElementById("num-adults");
const numKids = document.getElementById("num-kids");

const numSingle = document.getElementById("single");
const numDouble = document.getElementById("double");
const numTriple = document.getElementById("triple");

const wifi = document.getElementById("req-1");
const poolView = document.getElementById("req-2");
const gardenView = document.getElementById("req-3");

const extraBeds = document.getElementById("extra-beds");
promoCode = document.getElementById("promo-code");

const currentBooking = document.getElementById("room-booking-output");
const overallBooking = document.getElementById("overall-output");
const overallBookingSection = document.getElementById("overall-output-section");

const btnRoomBooking = document.getElementById("book-now1");

//listen for events
window.addEventListener("load",init);
roomForm.addEventListener("input",updateOutput);
btnRoomBooking.addEventListener("click",displayOverallBooking);

//function for init
function init() {
    totalCost = 0;
}

//function for the total cost button
function updateOutput(event) {
    event.preventDefault();

    console.log("Total Cost");
    //calculation of the total cost
    let totalCost = (singleRoomCost*numSingle.value) + (doubleRoomCost*numDouble.value) + (tripleRoomCost*numTriple.value) + (num_KidCost*numKids.value) +
                    (extraBedCost*extraBeds.value)

    //promo code
    if(promoCode.value === "123"){
        totalCost = totalCost - totalCost*5/100;
    }

currentBooking.innerHTML =    `<tr>
                                    <td>Check In Date</td>
                                    <td>${checkInDate.value}</td>
                                    </tr>
                                    <tr>
                                    <td>Check Out Date</td>
                                    <td>${checkOutDate.value}</td>
                                    </tr>
                                    <tr>
                                    <td>Number of Adults</td>
                                    <td>${numAdults.value}</td>
                                    </tr>
                                    <tr>
                                    <td>Number of Kids</td>
                                    <td>${numKids.value}</td>
                                    </tr>
                                    <tr>
                                    <td>NO. of Single Rooms</td>
                                    <td>${numSingle.value}</td>
                                    </tr>
                                    <tr>
                                    <td>NO. of Double Rooms</td>
                                    <td>${numDouble.value}</td>
                                    </tr>
                                    <tr>
                                    <td>NO. of Triple Roos</td>
                                    <td>${numTriple.value}</td>
                                    </tr>
                                    <tr>
                                    <td>NO. of Extra Beds</td>
                                    <td>${extraBeds.value}</td>
                                    </tr>
                                    <tr>
                                    <td>Need WiFi ?</td>
                                    <td>${wifi.checked ? 'Yes' : 'No'}</td>
                                    </tr>
                                    <tr>
                                    <td>Need Pool View ?</td>
                                    <td>${poolView.checked ? 'Yes' : 'No'}</td>
                                    </tr>
                                    <tr>
                                    <td>Need Garden View ?</td>
                                    <td>${gardenView.checked ? 'Yes' : 'No'}</td>
                                    </tr>
                                    <tr>
                                    <td>Total Booking Cost</td>
                                    <td>LKR\t\t\t${totalCost.toFixed(2)}</td>
                               </tr>`
}

//overall booking output table
function displayOverallBooking(event) {
    event.preventDefault();
    

    console.log("Overall booking cost");
    totalRooms = parseInt(numSingle.value) + parseInt(numDouble.value) + parseInt(numTriple.value);

    let totalCost = (singleRoomCost*numSingle.value) + (doubleRoomCost*numDouble.value) + (tripleRoomCost*numTriple.value) + (num_KidCost*numKids.value) +
                    (extraBedCost*extraBeds.value)

                    if(promoCode.value === "123"){
                        totalCost = totalCost - totalCost*5/100;
                    }

                    //local storage dictionary
                    bookingData = {
                        name: Name.value,
                        email: Email.value,
                        check_in_date: checkInDate.value,
                        check_out_date: checkOutDate.value,
                        no_of_adults: numAdults.value,
                        no_of_kids: numKids.value,
                        no_of_singleRooms: numSingle.value,
                        no_of_doubleRooms: numDouble.value,
                        no_of_tripleRooms: numDouble.value,
                        no_of_extraBeds: extraBeds.value,
                        need_wifi: wifi.checked ? 'Yes' : 'No',
                        need_poolView: poolView.checked ? 'Yes' : 'No',
                        need_gardenView: gardenView.checked ? 'Yes' : 'No',
                        totalCost: totalCost.toFixed(2),
                    };

    overallBooking.innerHTML = `<tr>
                                    <td>Name</td>
                                    <td>${Name.value}</td>
                                </tr>
                                <tr>
                                    <td>Email</td>
                                    <td>${Email.value}</td>
                                </tr>
                                <tr>
                                    <td>Check In Date</td>
                                    <td>${checkInDate.value}</td>
                                </tr>
                                <tr>
                                    <td>Check Out Date</td>
                                    <td>${checkOutDate.value}</td>
                                </tr>
                                <tr>
                                    <td>Number of Adults</td>
                                    <td>${numAdults.value}</td>
                                </tr>
                                <tr>
                                    <td>Number of Kids</td>
                                    <td>${numKids.value}</td>
                                </tr>
                                <tr>
                                    <td>NO. of Single Rooms</td>
                                    <td>${numSingle.value}</td>
                                </tr>
                                <tr>
                                    <td>NO. of Double Rooms</td>
                                    <td>${numDouble.value}</td>
                                </tr>
                                <tr>
                                    <td>NO. of Triple Rooms</td>
                                    <td>${numTriple.value}</td>
                                </tr>
                                <tr>
                                    <td>Total Rooms</td>
                                    <td>${totalRooms}</td>
                                </tr>
                                <tr>
                                    <td>NO. of Extra Beds</td>
                                    <td>${extraBeds.value}</td>
                                </tr>
                                <tr>
                                    <td>Need WiFi ?</td>
                                    <td>${wifi.checked ? 'Yes' : 'No'}</td>
                                </tr>
                                <tr>
                                    <td>Need Pool View ?</td>
                                    <td>${poolView.checked ? 'Yes' : 'No'}</td>
                                </tr>
                                <tr>
                                    <td>Need Garden View ?</td>
                                    <td>${gardenView.checked ? 'Yes' : 'No'}</td>
                                </tr>
                                <tr>
                                    <td>Total Booking Cost</td>
                                    <td>LKR\t\t\t${totalCost.toFixed(2)}</td>
                                </tr>`

                               //reset form
                               currentBooking.innerHTML ="";
                               roomForm.reset();
                               overallBookingSection.style.display = 'block';

                               //book now button clicked page scroll to the output section
                               overallBookingSection.scrollIntoView({ behavior: 'smooth' });
}






//Hotel Adventure Booking

//introducing variables
const divingLocalAdult = 5000;
const divingLocalKid = 2000;
const divingForeignAdult = 10000;
const divingForeignKid = 5000;

const guideAdult = 1000;
const guideKid = 500;

let ad_numAdults;
let numHrs;
let ad_numKids;

let adventureTotalCost;

//get references to the interactive elements
//Adventure booking form
const adventureForm = document.getElementById("form-2");

const adName = document.getElementById("ad-name");
const adEmail = document.getElementById("ad-email");
const adNumber = document.getElementById("ad-number");
const adDate = document.getElementById("ad-date");
const hours = document.getElementById("ad-duration");

const adNationality = document.getElementById("ad-nationality");

const adKids = document.getElementById("ad-kids");
const adAdults = document.getElementById("ad-adults");

const adGuideKid = document.getElementById("guide-kid");
const adGuideAdult = document.getElementById("guide-adult");

const adOutput = document.getElementById("adventure-booking-output");

//inputs and selectors
adNumber.addEventListener("input", updateOutputAd);
adDate.addEventListener("change", updateOutputAd);
adNationality.addEventListener("change", updateOutputAd);
adKids.addEventListener("input", updateOutputAd);
adAdults.addEventListener("input", updateOutputAd);
adGuideKid.addEventListener("change", updateOutputAd);
adGuideAdult.addEventListener("change", updateOutputAd);

window.addEventListener("load",load);
adventureForm.addEventListener("input",updateOutputAd);

function load() {
    adventureTotalCost = 0;
}

//adventure booking  
function updateOutputAd() {
    
    // Extract values from input fields
    ad_numAdults = parseInt(adAdults.value) || 0;
    numHrs = parseInt(hours.value) || 1;
    ad_numKids = parseInt(adKids.value) || 0;
    
    if (adNationality.value === "Local"){
        adventureTotalCost = (ad_numAdults*divingLocalAdult + ad_numKids*divingLocalKid )* numHrs + 
                             (adGuideKid.checked ? guideKid : 0)*numHrs + (adGuideAdult.checked ? guideAdult : 0)*numHrs;
    } else if(adNationality.value === "Foreign"){
        adventureTotalCost = (ad_numAdults*divingForeignAdult + ad_numKids*divingForeignKid )* numHrs + 
                             (adGuideKid.checked ? guideKid : 0)*numHrs + (adGuideAdult.checked ? guideAdult : 0)*numHrs;
    }

    //adventure current booking output table
    adOutput.innerHTML =    `<tr>
                                <td>Name</td>
                                <td>${adName.value}</td>
                            </tr>
                            <tr>
                                <td>Email</td>
                                <td>${adEmail.value}</td>
                            </tr>
                            <tr>
                                <td>Telephone Number</td>
                                <td>${adNumber.value}</td>
                            </tr>
                            <tr>
                                <td>Date</td>
                                <td>${adDate.value}</td>
                            </tr>
                            <tr>
                                <td>Duration</td>
                                <td>${hours.value}</td>
                            </tr>
                            <tr>
                                <td>Nationality</td>
                                <td>${adNationality.value}</td>
                            </tr>
                            <tr>
                                <td>No. of Adults</td>
                                <td>${adAdults.value}</td>
                            </tr>
                            <tr>
                                <td>No. of Kids</td>
                                <td>${adKids.value}</td>
                            </tr>
                            <tr>
                                <td>Need adult guide?</td>
                                <td>${adGuideAdult.checked ? 'Yes' : 'No'}</td>
                            </tr>
                            <tr>
                                <td>Need kid guide?</td>
                                <td>${adGuideKid.checked ? 'Yes' : 'No'}</td>
                            </tr>
                            <tr>
                                <td>Total Booking Cost</td>
                                <td>LKR\t\t\t${adventureTotalCost.toFixed(2)}</td>
                            </tr>`
}

//popup message
const btnAdventure = document.getElementById("book-now2");
const popup = document.getElementById("popupContainer");
const popupContent = document.getElementById("popupDetails");
const popupSummery = document.getElementById("summery");
const okbtn = document.getElementById("ok");

btnAdventure.addEventListener("click",openPopup);
okbtn.addEventListener("click",closePopup);

function openPopup(event) {
    if(adventureForm.checkValidity()){
        event.preventDefault();

        ad_numAdults = parseInt(adAdults.value) || 1;
        numHrs = parseInt(hours.value) || 1;
        ad_numKids = parseInt(adKids.value) || 1;

        popupContent.innerHTML = `${adName.value} your Diving Adventure is booked Successfully <br>
                                Booking Summery as follows,`;

        popupSummery.innerHTML =  `Date :--------------------------\t\t\t${adDate.value}<br>
                                   Nationality :------------------\t\t\t ${adNationality.value}<br>
                                   No. of Adults :---------------\t\t\t${ad_numAdults}<br>
                                   No. of Kids :-----------------\t\t\t${ad_numKids}<br>
                                   Adult Guide :----------------\t\t\t ${adGuideAdult.checked ? 'Needed' : 'Not needed'}<br>
                                   Kid Guide :-------------------\t\t\t ${adGuideKid.checked ? 'Needed' : 'Not needed'}<br>
                                   Hours :------------------------ ${hours.value} hrs<br>
                                   Total Adventure Cost :------\t\t ${adventureTotalCost.toFixed(2)}
                                    `;

                                   //reset form
                                   adOutput.innerHTML ="";
                                   adventureForm.reset();

        document.body.style.pointerEvents = 'none';

        popup.classList.add("open-popupcontainer");
        popup.style.pointerEvents = 'auto';
    }else {
        //alert("Please fill the form completely");
    }
}

function closePopup() {
    popup.classList.remove("open-popupcontainer");
    document.body.style.pointerEvents = 'auto';
}




//Add to favourite button(to save local storage)
const btnAddToFavo = document.getElementById("favourite");

btnAddToFavo.addEventListener("click",storeBookingData);

function storeBookingData(event) {
    event.preventDefault();

    let totalCost = (singleRoomCost*numSingle.value) + (doubleRoomCost*numDouble.value) + (tripleRoomCost*numTriple.value) + (num_KidCost*numKids.value) +
    (extraBedCost*extraBeds.value)

        // Save booking data to local storage
        if(bookingData != 0){
            alert("Your booking added to favourites !");
        }
    
        localStorage.setItem('roomBookingData', JSON.stringify(bookingData));
}



//get loyalty point button 
const btnCheckLoyalty = document.getElementById("loyalty");

btnCheckLoyalty.addEventListener("click",checkLoyalty);

function checkLoyalty() {

    loyaltyPoints = 0;

totalLoyaltyPoints = totalRooms*20;

    if(totalRooms >3){
        alert('Your loyalty points: '+ totalLoyaltyPoints);

    }else{
        alert('no loyalty points');
    }
}