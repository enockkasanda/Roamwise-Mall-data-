    import React, { useEffect, useState } from 'react';
    import { ScrollView, View, Text, ActivityIndicator, Button, StyleSheet } from 'react-native';
    import StoreCard from '../../components//StoreCard'; //reuseable to display each store

    export default function StoreList() {
    const [stores, setStores] = useState([]); //state to hold fetched stores
    const [loading, setLoading] = useState(true); //loading state
    const [error, setError] = useState(null); //error message, if any

    const fetchStores = async () => { //func to fetch stores from backend api
        setLoading(true);
        setError(null); //reset error state before each fetch
        try {
        const response = await fetch('http://192.168.8.102:8000/stores'); // replace IP
        if (!response.ok) throw new Error('Failed to fetch');
        const data = await response.json();
        setStores(data);
        } catch (err) {
        setError(err.message);
        }

        setLoading(false);
    };

    useEffect(() => { //set data
        fetchStores();
        }, []);

    if (loading) {
        return <ActivityIndicator style={styles.center} size="large" color="#0000ff" />;
    }

    if (error) { //error message and retry button if failed
        return (
        <View style={styles.center}>
            <Text style={styles.error}>Error: {error}</Text>
            <Button title="Retry" onPress={fetchStores} />
        </View>
        );
    }

    return ( //render list of stores and reload button
        <ScrollView>
        {stores.map((store, index) => (
            <StoreCard key={index} store={store} />
        ))}
        <View style={styles.reload}>
            <Button title="Reload" onPress={fetchStores} />
        </View>
        </ScrollView>
    );
}


    const styles = StyleSheet.create({ //layout styles
    center: {
        flex: 1,
        paddingTop: 100,
        alignItems: 'center',
    },
    error: {
        color: 'red',
        marginBottom: 10,
    },
    reload: {
        padding: 10,
        alignItems: 'center',
    },
    });
