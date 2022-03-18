// Welcome message
$('#hero')
	.children()
	.eq(0)
	.after('<p>' + 'Welcome to Project Tracker' + '</p>');

// update timer
setInterval(() => {
	$('#time-display').text(moment().format('h:mm:ss a'));
}, 1000);

// datepicker widget from jQuery UI
$(function () {
	$('#due-date-input').datepicker();
});

//
$('#project-form').on('submit', function (e) {
	e.preventDefault();
	// capture the form's input elements

	var projectName = $('#project-name-input').val();
	var projectType = $('#project-type-input').val();
	var hourlyRate = $('#hourly-rate-input').val();
	var dueDate = $('#due-date-input').val();
	var daysUntil = moment(dueDate).fromNow();
	var potentialTotalEarnings = 20 * parseInt(hourlyRate);
	printData(projectName, projectType, hourlyRate, dueDate, daysUntil, potentialTotalEarnings);

	$('#project-name-input').val('');
	$('#project-type-input').val('');
	$('#hourly-rate-input').val('');
	$('#due-date-input').val('');
	$('#project-modal').modal('toggle');
});

function printData(projectName, projectType, hourlyRate, dueDate, daysUntil, potentialTotalEarnings) {
	//  create a new table row on the page
	var tr = $('<tr>');

	tr.append(`<td>${projectName}</td><td>${projectType}</td><td>${hourlyRate}</td><td>${dueDate}</td><td>${daysUntil}</td><td>${potentialTotalEarnings}</td>`);

	var td = $('<td>');
	var button = $('<button>');
	button.attr('id', 'deleteButton');
	button.addClass('deleteButton');
	button.html('<i class="fa-solid fa-trash-can"></i>');
	createDeleteButton(button);
	td.append(button);
	tr.append(td);
	$('#project-display').append(tr);
}

// pseudocode

function removeTableRow() {
	console.log('hello');
	$(this).parents('tr').remove();
}
function createDeleteButton(element) {
	element.on('click', removeTableRow);
}
