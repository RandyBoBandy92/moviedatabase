import { useState } from "react"
import Header from "../components/Header"

const FavouritesPage = () => {
    const [favourites, setFavourites] = useState([])
    return (
        <>
        <Header/>
        <main className="favourites-page">

        </main>
        </>
    )
}

export default FavouritesPage