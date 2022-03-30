import React from "react";
import { View, Text, Button, TouchableWithoutFeedback   } from 'react-native';
import styles from './style.js';
import CrossComponent from '../cross-mark';
import CircleComponent from "../circle-mark";


const SquareButton = ({ value = "x", handleClick = () => console.log("sadas"), highlight }) => {
    return (
        <View>
           <View
                // style={styles.square}
                style = {highlight ? [styles.active, styles.square] : styles.square}
                onStartShouldSetResponder={handleClick}
            >
                {value == "x" ? (
                    <CrossComponent />
                ) : value == "o" ? (
                    <CircleComponent />
                ) : undefined}
            </View>
        </View>
    )
}

export default SquareButton;