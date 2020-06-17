import React from 'react'

export default function Welcome() {
    const twitchLoginUrl = 'https://id.twitch.tv/oauth2/authorize?response_type=code&client_id=fshwwwtjkuk4x4xda6wiz4mcfenicw&redirect_uri=http://localhost:3002&scope=channel:read:redemptions+user:read:email'

    return (
        <div className='welcomeDiv'>
            <h1 className='welcomeMessage'>To get started</h1>
            <a href={twitchLoginUrl}><button className='signInButton'>Sign in with Twitch.</button></a>
        </div>
    )
}
