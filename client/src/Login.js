import React from 'react'

const AUTH_URL = "https://accounts.spotify.com/authorize?client_id=3526863773be43cba404c0dff3437ec4&response_type=code&redirect_uri=http://localhost:3000&score=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state"

export default function Login() {
    return (
        <div>
            <button><a href={AUTH_URL}>LOGIN WITH SPOTIFY</a></button>
        </div>
    )
}

