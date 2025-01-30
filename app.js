let username = document.getElementById('username');
let userage = document.getElementById('age');
let usergender = document.getElementById('gender');
let userBloodGroup = document.getElementById('bloodgroup');

function submitForm() {
    let nameValue = username.value;
    let ageValue = userage.value;
    let genderValue = usergender.value;
    let bloodGroupValue = userBloodGroup.value;
    
    if (!nameValue || !ageValue || !genderValue || !bloodGroupValue) {
        document.getElementById('modal-body').innerText = "Please fill all fields";
        }

    let message = `Name: ${nameValue} <br> Age: ${ageValue} <br> Gender: ${genderValue} <br>`;

    switch (bloodGroupValue) {
        case 'O-':
            message += "DonateTo: O+, O-, A+, A-, B+, B-, AB+, AB-";
            break;
        case 'O+':
            message += "DonateTo: O+, A+, B+, AB+";
            break;
        case 'A-':
            message += "DonateTo: A+, A-, AB+, AB-";
            break;
        case 'A+':
            message += "DonateTo: A+, AB+";
            break;
        case 'B-':
            message += "DonateTo: B+, B-, AB+, AB-";
            break;
        case 'B+':
            message += "DonateTo: B+, AB+";
            break;
        case 'AB-':
            message += "DonateTo: AB+, AB-";
            break;
        case 'AB+':
            message += "DonateTo: AB+";
            break;
        default:
            
            return;
    }

    
    document.getElementById('modal-body').innerHTML = message;
    username.value = '';
    userage.value = '';
    usergender.value = '';
    userBloodGroup.value = '';
}
