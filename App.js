import React, { useState, useEffect } from "react";
import { View, Text} from 'react-native';
import CircleComponent from "./src/components/circle-mark";
import CrossComponent from "./src/components/cross-mark/CrossComponent";
import Square from "./src/components/square/SquareComponent";
import ResetButton from './src/components/reset-button';


function App() {
  const [isCross, setIsCross] = useState(false);

  const initialElement = new Array(9).fill(null).map((item, index) => {
    return {
      id: index,
      value: "",
      hightlight: false,
    };
  });

  const [elements, setElements] = useState(initialElement);
  const [winner, setWinner] = useState([]);

  const checkWinner = () => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        elements[a].value &&
        elements[a].value === elements[b].value &&
        elements[a].value === elements[c].value
      ) {
        setWinner([a, b, c]);
      }
    }
    return null;
  };

  useEffect(() => {
    checkWinner();
  }, [elements]);

  const onPress = (index) => {
    if (winner.length == 3) {
      return;
    }

    setElements((prevElem) => {
      let newArr = prevElem.map((item) => {
        if (item.id == index && item.value == "") {
          if (isCross) {
            item.value = "x";
          } else {
            item.value = "o";
          }
        }
        return item;
      });
      return newArr;
    });
    setIsCross((prev) => !prev);
  };

  const refreshHandle = () => {
    setElements(initialElement);
    setWinner([]);
  };

  return (
    <View style = {{ backgroundColor: "#FF0266", flex: 1, justifyContent: 'center', alignItems: "center"}}>
        {/* <div>Status</div> */}
        <View
          style = {{
            flexWrap: "wrap",
            height: 330
          }}
        >
          {elements.map(({ value, id }) => (
          <Square
            key={id}
            value={value}
            handleClick={() => onPress(id)}
            highlight={winner.indexOf(id) !== -1}
          />
          ))}
        </View>
        <ResetButton handlePress = {refreshHandle} />
    </View>

  )
}

export default App;