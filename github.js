class GitHub {
    constructor() {
        this.client_id = '64e8ada040d19ecb6d88';
        this.client_secret = '11c090d1b04ec9f1c6058a5526ac01c14ed1811d';

    }

    async getUser(user){
        const profileResponse  = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();

        return {
            profile
        }
    }
}