function getFormvalue() {
    //Write your code here
	event.preventDefault();
	const form = document.getElementById('form1');
	const fName = form.elements['fname'].value;
	const lName = form.elements['lname'].value;

	
	alert(fName + ' ' + lName);

}
