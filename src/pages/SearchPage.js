import { useParams } from "react-router-dom"

const SearchPage = () => {
   const query = useParams();

   useEffect(() => {
       
   }, [])
   return (
       <h1>lololol</h1>

       <div className="search-movies">
       {/* <h2>Search results for:{query}</h2> */}
       {movie.filter(moviedata => moviedata.poster_path).map(moviedata => (
         <MovieCard data={moviedata} key={moviedata.id} />
       ))}
     </div>
   )
}

export default SearchPage