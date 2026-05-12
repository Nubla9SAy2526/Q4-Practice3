function verifysection(){
    var sectioncode = document.getElementById('displayInput').value;
    
    switch (sectioncode){
        case "F":
            document.getElementById('result').innerHTML= window.alert ("You're checking the Fiction Section");
            break;

        case "N":
        document.getElementById('result').innerHTML=
        window.alert ("You're checking the Non-Fiction Section");
        break;

        case "R":
        document.getElementById('result').innerHTML=
        window.alert ("You're checking the Reference Section");
        break;

        default:
        document.getElementById('result').innerHTML=
        window.alert ("Invalid Section Entry");
    }
}