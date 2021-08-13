import { useState, useEffect } from "react"
import axios from "axios"

export default function useAuth(code) {

    const [accessToken, setAccessToken] = useState()
    //const [expiresIn, setExpiresIn] = useState()

    useEffect(() => {
        axios
            .post("http://localhost:3000/login", {
                code,
            })
            .then(res => {
                console.log(res.data)
                setAccessToken(res.data.accessToken)
                //setExpiresIn(res.data.expiresIn)
                window.history.pushState({}, null, "/")
            })
            .catch(
                (err) => {
                    console.error(err);
                }
                // () => {
                //     window.location = "/"
            )
    }, [code])

    return accessToken;
}