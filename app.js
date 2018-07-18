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

            } else {
                // Show the profile in the UI
                ui.showProfile(data.profile);
            }
        })
    } else {
        // Clear the profile
    }
});