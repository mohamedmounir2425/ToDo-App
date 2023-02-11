import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";





export const TaskItem = (props) => {
    const [flag, setFlag] = useState(false)
    const [toggleCheckBox, setToggleCheckBox] = useState(false)

  return (
    <View style={styles.container}>
      <View style={styles.item1}>
        <Text style={{fontSize:23 ,color: "#009688"}} >{props.index}</Text>
      </View>


      <View style={styles.item2}>
        <Text style={flag?{fontSize:23,color:'#CCD1D1' ,textDecorationLine:'line-through'}:{fontSize:23,color:'#515A5A'}}>{props.task}</Text>
      </View>

      <TouchableOpacity
              onPress={() => {
                  
        setFlag(!flag)
              }}
              style={styles.item3}
      >
       {flag? <MaterialIcons name="undo" size={35} color="#F4D03F" />:<MaterialIcons name="check" size={35} color="#2ECC71" />}
      </TouchableOpacity>
      {/* <TouchableOpacity
              onPress={() => {
                  
        setFlag(!flag)
              }}
              style={styles.item3}
      >
        <MaterialIcons name="check" size={35} color="#2ECC71" />
      </TouchableOpacity> */}
      <TouchableOpacity
        onPress={() => {
          props.deleteTask();
              }}
              style={styles.item3}
      >
        <MaterialIcons name="delete" size={35} color="red" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderWidth: 2,
        borderRadius: 10,
        borderColor: "#009688",
        marginVertical: 2,
        paddingHorizontal: 10,
        marginHorizontal: 20,
        backgroundColor:'#fff',
        // elevation: 40
        
    },
    item1: {
        padding: 2,
        alignItems: 'center',
        justifyContent: 'center',
        width: '5%',
      
    },
    item2: {
        padding: 2,
        alignItems: 'center',
        justifyContent: 'center',
        width: '75%',
    
        
    },
    item3: {
        padding: 2,
        alignItems: 'center',
        justifyContent: 'center',
        width:'10%'
        
    }

})