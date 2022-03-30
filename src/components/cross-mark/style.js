import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    containerCross: {
        // display: 'flex',
        // flexDirection: 'column',
        // alignItems: 'center',
        // justifyContent: 'center',
    },

    right: {
        backgroundColor: "#fff",
        width: 44.54,
        height: 5.57,
        transform: [{skewY: "-45deg"}],
        borderRadius: 15,
    },
    
    left: {
        backgroundColor: '#fff',
        width: 44.54,
        height: 5.57,
        marginTop: -5.57,
        transform: [{skewY: "45deg"}],
        borderRadius: 15,
    }
});


export default styles;


// .container-cross {
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;
//   }
  
//   .right {
//       background-color: #fff;
//       width: 44.54px;
//       height: 5.57px;
//       transform: rotate(45deg);
//       border-radius: 15px;
//   }
  
//   .left {
//       background-color: #fff;
//       width: 44.54px;
//       height: 5.57px;
//       margin-top: -5.57px;
//       transform: rotate(-45deg);
//       border-radius: 15px;
//   }