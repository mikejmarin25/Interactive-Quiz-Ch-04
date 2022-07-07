var formEl = $('#score-form');
var nameInputEl = $('#player-name');
var scoreInputEL = $('#scores');
var scoreListEl = $('#score-list');

var printSkills = function(name, score) {
    var listEl = $('<li>');
    var listDetail = name.concat(' scored ', score, ' points');
    listEl.addClass('list-group-item').text(listDetail);
    listEl.appendTo(scoreListEl);
};

var handleFormSubmit = function(event) {
    event.preventDefault();
    var nameInput = nameInputEl.val();
    var scoreInput  = scoreInputEL.val();
    if (!nameInput || !scoreInput) {
        console.log('You need to fill out the form!');
        return;
    }
    printSkills(nameInput, scoreInput);
    nameInputEl.val('');
    scoreInputEL.val('');
};

formEl.on('submit', handleFormSubmit);

function goBack(){

    window.location.href = "index.html";
}