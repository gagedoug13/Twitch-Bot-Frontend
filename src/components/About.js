import React from 'react'
import Logo from './Logo'

export default function Welcome() {
    const twitchLoginUrl = 'https://id.twitch.tv/oauth2/authorize?response_type=code&client_id=fshwwwtjkuk4x4xda6wiz4mcfenicw&redirect_uri=http://localhost:3002&scope=channel:read:redemptions+user:read:email'

    return (
        <div className='welcomeDiv'>
            <Logo />
            <div className='aboutRobotDiv'>
                <h1 className='aboutRobotApe'>Robot Ape is a Twitch bot that allows you to exclusively save and access chat history, create a secret word with channel points, or have Robot Ape spam a word in chat via channel points. </h1>
            </div>
           
            <a href={twitchLoginUrl}><button className='signInButton'>Sign in with Twitch.</button></a>
        </div>
    )
}
