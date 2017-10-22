console.log('I am logged in!');
/* General Procedure */
// var moduleBox = document.getElementById('moduleUL');
// var cdcButton = moduleBox.getElementsByTagName("a")[1];
// cdcButton.click();
// showMenu('26','11','https://erp.iitkgp.ernet.in/TrainingPlacementSSO/TPStudent.jsp','','Y', 'CDC', 'Student', 'Application of Placement/Internship');

/* Recursive function to wait for "CDC" button to appear since it's loaded 
via AJAX afterwards, click through it afterwards */
var scriptString = ` var moduleBox;
function clickThrough(time) {
    if(document.getElementById("moduleUL").getElementsByTagName("a")[1] !== undefined) {
        moduleBox = document.getElementById("moduleUL").getElementsByTagName("a")[1];
        moduleBox.click();
        showMenu('26','11','https://erp.iitkgp.ernet.in/TrainingPlacementSSO/TPStudent.jsp','','Y', 'CDC', 'Student', 'Application of Placement/Internship');
        return;
    }
    else {
        setTimeout(function() {
            clickThrough(time);
        }, time);
    }
}
clickThrough(25); `;
var scriptNode = document.createElement('script');
scriptNode.textContent = scriptString;
document.body.appendChild(scriptNode);
