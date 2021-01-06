import React, { useState, useEffect } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import mackMovies from '../../helper/mockMovies'
import MovieRow from '../../components/MovieRow'

const ReduxData = () => {
    const [movieApi, setMovieApi] = useState([]);
    // const [movie, setMovie] = useState({
    //     movies: mackMovies.Search,
    // });

    useEffect (async () => {
        const response = await fetch('http://www.omdbapi.com/?apikey=8a00c4a5&s=Batman');
        const data = await response.json();
        console.log(data.Search);
        setMovieApi( data.Search )
    }, []);

    // const { movies } = movie;
    return (
        <>
        {/* <View>
            {movies.map((moviees) => (
                <View key={moviees.imdbID}>
                    <Text>{moviees.Title}</Text>
                </View>
            ))}
        </View> */}
        <View>
            <FlatList
                data={movieApi}
                keyExtractor={(movie) => movie.imdbID }
                renderItem={({item,index})=>{
                    return(
                        <MovieRow item={item} />
                    )
                }}
            />
        </View>
        </>
    )
}

export default ReduxData;

const styles = StyleSheet.create({})
