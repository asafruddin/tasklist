
import { useState } from "react";
import { Alert, Text, TextInput, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const TaskFormPage = (props: { route: any, navigation: any }) => {
    const todo = props.route.params?.todo;

    const [notes, setNotes] = useState(todo == undefined ? '' : todo.todo);

    const submitNotes = async () => {
        if (todo == undefined) {
            return fetch('https://dummyjson.com/todos/add', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    todo: notes,
                    completed: false,
                    userId: 5
                })
            })
                .then(res => {


                    return res.status;
                })
                .catch(console.log);
        }

        return fetch(`https://dummyjson.com/todos/${todo.id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                completed: false,
                todo: notes
            })
        })
            .then(res => {
                return res.status;
            })
            .catch(console.log);
    }




    return (
        <View style={{ flex: 1, justifyContent: 'center', paddingHorizontal: 20 }}>
            <Text>{todo != undefined ? "Edit Notes" : 'Input Notes'}</Text>
            <TextInput
                style={{
                    borderWidth: 0.5,
                    paddingHorizontal: 16,
                    paddingVertical: 12,
                    borderRadius: 8,
                    marginTop: 5
                }}
                placeholder="Input Notes"
                onChangeText={(text: string) => {
                    setNotes(text);
                }}
                value={notes}
            />

            <TouchableOpacity
                onPress={async () => {
                    const data = await submitNotes();
                    if (data === 200) {
                        props.navigation.pop();
                    } else {
                        Alert.alert('Failed to submit')
                    }

                }}
                style={{
                    marginTop: 30,
                    paddingVertical: 12,
                    paddingHorizontal: 20,
                    backgroundColor: 'blue',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 8
                }}>
                <Text style={{ color: 'white', fontWeight: '500' }}>Submit</Text>
            </TouchableOpacity>
        </View>
    );
}

export default TaskFormPage;