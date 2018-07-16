//Init github
const github = new GitHub;

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
            }
        })
    } else {
        // Clear the profile
    }
});