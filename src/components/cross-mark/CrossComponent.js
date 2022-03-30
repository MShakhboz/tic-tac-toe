import React from "react";
import {View, Text} from 'react-native';
import styles from "./style.js";


const CrossComponent = () => {
    return (
        <View>
            <View style = {styles.right} />
            <View style = {styles.left} />
        </View>
    )
}

export default CrossComponent;