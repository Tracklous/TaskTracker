import React, { useState, useEffect } from 'react';
import { View, TextInput } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import styles from './SearchBar.styles';
import { searchQueryAction } from '../../redux/searchBarSlice/SearchBar.action';

const SearchBar = () => {
    const dispatch = useDispatch();
    const [searchQuery, setSearchQuery] = useState('');
    const trackerReducer = useSelector(({ trackerReducer }) => trackerReducer);

    useEffect(() => {
        dispatch(searchQueryAction(searchQuery));
    }, [searchQuery, trackerReducer])

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.searchInput}
                value={searchQuery}
                onChangeText={(val => setSearchQuery(val))}
                placeholder={"Search based on title & description"}
            />
        </View>
    );
};

export default SearchBar;