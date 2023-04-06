// Get the necessary HTML elements
const searchForm = document.querySelector('#search-form');
const usernameInput = document.querySelector('#username');
const userInfoContainer = document.querySelector('#user-info');
const avatarImg = document.querySelector('#avatar');
const nameHeading = document.querySelector('#name');
const bioParagraph = document.querySelector('#bio');
const reposParagraph = document.querySelector('#repos');
const followersList = document.querySelector('#followers');


searchForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const username = usernameInput.value;

    try {
        // Fetch user data 
        const response = await fetch(`https://api.github.com/users/${username}`);

        // console.log(response)
        
        // Check status
        if (response.ok) {
            // data as JSON
            const data = await response.json();
            console.log(data)

            
            avatarImg.src = data.avatar_url;
            nameHeading.textContent = data.name;
            bioParagraph.textContent = data.bio;
            reposParagraph.textContent = `Public Repositories: ${data?.public_repos}`;
            followersList.innerHTML = `Followers (${data?.followers}): `;

            // Display the user info container
            userInfoContainer.classList.remove('hidden');
        } else {
            throw new Error('User not found');
        }
    } catch (error) {
        console.error(error.message);
    }
});
