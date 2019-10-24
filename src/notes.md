What I did: 

    Adding in the thumbs and setting up the actions

        - added VOTE in actionTypes. I did VOTE rather than UPVOTE and DOWNVOTE because the route in the backend was set up in a way where we just pass in the direction when we call the corresponding function in the front end 
        - added vote and sendVoteToAPI functions in actions.js. I passed in votes into the payload for the vote function because the API call returns the updated number of votes.  
        - displayed votes and added thumbs up/down to PostDetail and HomePageList. Added styling to the thumbs
        - on PostDetail and HomePageList, I passed in the direction (up/down) when I specified onClick for the thumbs

