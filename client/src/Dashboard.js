import { useState, useEffect, React } from 'react';
import useAuth from './useAuth';
import SpotifyWebApi from "spotify-web-api-node";

const spotifyApi = new SpotifyWebApi({
    clientId: "3526863773be43cba404c0dff3437ec4",
})


export default function Dashboard({ code }) {
    console.log(code)
    const accessToken = useAuth(code);
    const [search, setSearch] = useState("");


    useEffect(() => {

        if (!accessToken) {
            console.log("토큰없담")
        }
        spotifyApi.searchTracks(search).then(res => {
            console.log(res.body.tracks.items)
        })

    })
    return (
        <div>
            <form type="search" value={search} onChange={
                e => setSearch(e.target.value)}>
                <input />
                <div>nothing found</div>
            </form>
        </div>
    )
}




// const accessToken = useAuth(code);
// const { search, setSearch } = useState("");
// //const [searchResults, setSearchResults] = useState([])

// useEffect(() => {
//     if (!accessToken) {
//         return
//     }
//     spotifyApi.setAccessToken(accessToken)
// }, [accessToken])

// useEffect(() => {
//     //if (!search) return setSearchResults([])
//     spotifyApi.searchTracks(search).then(res => {
//         console.log()
//     })

// })

// return (
//     <div>
//         <form type="search" value={search} onChange={
//             e => setSearch(e.target.value)}>
//             <input />
//         </form>
//     </div>
// )