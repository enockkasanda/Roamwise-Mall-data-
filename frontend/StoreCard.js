import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; //importing fontAwesome provided by expo

export default function StoreCard({ store }) {
return (
    <View style={styles.card}>{/*container for the whole store card*/}
    <Text style={styles.name}>{store.name} - {store.category}</Text> {/*store name and category */}
    <View style={styles.row}> {/*a row for clock icon and opening/closing time*/}
        <Text><FontAwesome name="clock-o" size={16} color="black" /></Text> {/*clock */}
        <Text>{store.openTime} - {store.closeTime}</Text> {/*times */}
    </View>
    <Text style={styles.floor}>Floor {store.floor}</Text> {/*floor */}
    </View>
);
}

//styles for storeCards component
const styles = StyleSheet.create({
card: { //card container styling
    backgroundColor: '#f9f9f9',
    padding: 12,
    margin: 10,
    borderRadius: 8,
},
name: { //name styling
    fontWeight: 'bold',
    fontSize: 16,
},
row: { //row layout
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
},
floor: { //floor styling
    marginTop: 4,
    fontStyle: 'italic',
},
});
