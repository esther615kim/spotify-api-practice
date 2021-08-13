//require("dotenv").config()
const express = require("express")
const cors = require("cors")
const SpotifyWebApi = require("spotify-web-api-node")

const app = express();
app.use(cors());

app.post("/login", (req, res) => {
    const code = req.body.code;
    const spotifyApi = new SpotifyWebApi({
        // redirectUri: process.env.REDIRECT_URI,
        // clientId: process.env.CLIENT_ID,
        // clientSecret: process.env.CLIENT_SECRET,
        redirectUri: "http://localhost:3000",
        clientId: '3526863773be43cba404c0dff3437ec4',
        clientSecret: '5234d4154be94e1d8ddda2fbf2e3cdbf'
    });

    //     spotifyApi
    //         .authorizationCodeGrant(code)
    //         .then(data => {
    //             res.json({
    //                 spotifyApi.setAccessToken(data.body['access_token']),
    //                 accessToken: data.body.access_token,
    //                 refreshToken: data.body.refresh_token,
    //                 expiresIn: data.body.expires_in,
    //             })
    //         })
    //         .catch((err) => {
    //             res.sendStatus(400)
    //         })
    // })


    spotifyApi.authorizationCodeGrant(code)
        .then(function (data) {
            // Set the access token on the API object to use it in later calls
            spotifyApi.setAccessToken(data.body['access_token']);
            spotifyApi.setRefreshToken(data.body['refresh_token']);
            res.redirect('/');
        }, function (err) {
            console.log('Something went wrong!', err);
        });
