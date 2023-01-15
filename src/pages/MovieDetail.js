import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { MovieState } from '../movieState'
import { Detail, HeadLine, Awards, ImageDisplay } from "../style/style";
import Award from "./Award";
import { pageAnimation } from "./animation";

const MovieDetail = () => {
    const location = useLocation()
    const url = location.pathname
    const [movies, setMovies] = useState(MovieState)
    const [movie, setMovie] = useState(null)

    useEffect(() => {
        const currentMovie = movies.filter((stateMovie) => stateMovie.url === url)
        setMovie(currentMovie[0])
    }, [movies, url])
    return (
        <>
            {movie && (
                <Detail variants={pageAnimation} initial='hidden' animate='show'>
                    <HeadLine>
                        <h2>{movie.title}</h2>
                        <img src={movie.mainImg} alt="" />
                    </HeadLine>
                    <Awards>
                        {movie.awards.map((award) => (
                            <Award
                                title={award.title}
                                description={award.description}
                                key={award.title}
                            />
                        ))}
                    </Awards>
                    <ImageDisplay>
                        <img src={movie.secondaryImg} alt="" />
                    </ImageDisplay>
                </Detail>
            )}
        </>

    )
}
export default MovieDetail