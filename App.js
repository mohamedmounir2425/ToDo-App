import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Todo } from "./Components/Todo";
import { MaterialIcons } from '@expo/vector-icons'
import { TaskItem } from "./Components/todoItem";


export default function App(props) {
  const [tasks, setTasks] = useState([])
  const [flag, setFlag] = useState(false)
  const [emptyTask, setEmptyTask] = useState(false)


  const addTaskToArray = (value) => {
    setTasks([...tasks, value])
    setFlag(false)

  }

  const addEmptyTask = (flag) => {

    setEmptyTask(flag)

  }

  const deleteTask = (deleteIndex) => {
    setTasks(tasks.filter((val, idx) => idx != deleteIndex));
  };
  return (
    <View style={styles.container}>
      <View style={{ color: 'white', marginTop: 60 }}>
        <Text style={{ color: "#009688", fontSize: 24, fontWeight: '800', textAlign: 'center' }} >ToDo APP</Text>
      </View>
      <Todo addTaskToArray={addTaskToArray} addEmptyTask={addEmptyTask} />
      {/* <Text>{tasks}</Text> */}
      {/* <StatusBar style="light" backgroundColor="" /> */}

      {flag && <View>
        <Text style={styles.emptyError}>Tasks Cleared</Text>
      </View>}
      {emptyTask && <View >
        <Text style={styles.emptyError}>Enter Your ToDo !</Text>
      </View>}



      <ScrollView>
        {tasks.map((task, idx) => {
          return (
            <View>
              <TaskItem
                index={idx + 1}
                task={task}
                deleteTask={() => {
                  deleteTask(idx);
                }}
              />
            </View>
          );
        })}
      </ScrollView>
    
      {/* <View style={styles.btn}>
        <Button
          title="Clear"
          color={"black"}
          onPress={() => {
            setTasks([]);
            setFlag(true)
          }}
        />
      </View> */}


      {/* <View  style={{justifyContent:"center",textAlign:'center' }}>


      <TouchableOpacity
        onPress={() => {
          setTasks([]);
          setFlag(true)
        }}
        style={{width:200}}
        >
        <View style={styles.btn}>
          <Text style={{ color: 'white', fontSize: 24, fontWeight: '800' }}>Clear</Text>
        </View>

      </TouchableOpacity>
        </View> */}
      <View >
   <View style={styles.btn}>
        <Button
          title="Clear"
          color={"red"}
          onPress={() => {
            setTasks([]);
            setFlag(true)
          }}
        />
        </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  error: {
    textAlign: 'center',
    color: '#C0392B',
    fontSize: 30,
  },
  emptyError: {
    textAlign: 'center',
    color: '#C0392B',
    fontSize: 25,
  },
  btn: {
    backgroundColor: "red",
    width: 200,
 
    fontSize: 20,
    borderRadius: 24,
    overflow: "hidden",
    margin: 20,
  },
})