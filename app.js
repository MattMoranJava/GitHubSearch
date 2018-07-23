//Init github
const github = new GitHub;
// Init UI
const ui = new UI;

// Search Input
const searchUser = document.getElementById('searchUser');
//Search input event listener
searchUser.addEventListener('keyup', (e) => {
    //Get input text
    const userText = e.target.value;
    if (userText !== '') {
        // Make http call
        github.getUser(userText).then(data => {
            if(data.profile.message === 'Not Found'){
                //Show Alert in the UI
                ui.showAlert('User not found', 'alert alert-danger');
            } else {
                // Show the profile in the UI
                ui.showProfile(data.profile);
                ui.showRepos(data.repos);
            }
        })
    } else {
        // Clear the profile
        ui.clearProfile();
    }
});