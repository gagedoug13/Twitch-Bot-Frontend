import React from 'react'

export default function Welcome() {
    return (
        <div className='welcomeDiv'>
            <h1 className='welcomeMessage'>To get started</h1>
            <a href='https://twitch.com'><button className='signInButton'>Sign in with Twitch.</button></a>
        </div>
    )
}
