import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import { MaterialIcons } from '@expo/vector-icons'
import { useState } from "react"

export const Todo = (props) => {
    const [task,setTask] = useState()

    return (
        <View style={styles.container}>
            <TextInput style={styles.input} placeholder="Enter Your Task Here..."
                onChangeText={(txt) => {
               setTask(txt)
           }}
            value={task}
            />

            <TouchableOpacity
                onPress={() => {
                    if (task != null) {
                        props.addTaskToArray(task)
                        props.addEmptyTask(false)
                        setTask(null)
                    } else {
                        props.addEmptyTask(true)
                    }
                    
                }}
                
            >
                <View style={styles.btn}>
                <MaterialIcons name="add" color="white" size={22} />
                </View>

            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // marginTop: 20,
        flexDirection:'row',
        justifyContent: 'space-between',
        marginHorizontal: 10,
        marginVertical:20
        
    },
    input: {
        borderWidth: 2,
       backgroundColor:'#fff',
        padding: 5,
        borderRadius: 15,
        paddingLeft: 10,
        width: "80%",
		borderWidth: 2,
		borderColor: "#fff",
		borderRadius: 15,
		padding: 4,
		paddingStart: 10,
        elevation: 40,
        marginLeft:20
    },
    btn: {
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 8,
		backgroundColor: "#009688",
		borderRadius: 10,
		paddingVertical: 10,
        paddingHorizontal: 12,
        marginStart: 20,
        elevation: 40

     
        
    }
})