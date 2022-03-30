import React from "react";
import {View, Text, Button} from 'react-native';
import styles from "./style.js";


const ResetButton = ({ handlePress }) => {
    return (
        <View style = {styles.resetButton}>
            <Button title="Reset" onPress={handlePress}/>
        </View>
    )
}

export default ResetButton;