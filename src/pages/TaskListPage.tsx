import { FAB } from "@rneui/themed";
import { useQuery } from "@tanstack/react-query";
import { FlatList, SafeAreaView, Text, View } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler";

const TaskListPage = (props: any) => {
    const { data, isFetching, isFetched } = useQuery({
        queryKey: ['taskList'],
        queryFn: async () => {
            const task = await fetch('https://dummyjson.com/todos').then((value) => {
                return value.json();
            })

            return task;
        }
    });

    if (isFetching) {
        return <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
            <Text>Fetching data ....</Text>
        </View>
    }

    return (
        <View>
            <FlatList
                data={data.todos}
                style={{ paddingVertical: 20, paddingBottom: 30 }}
                renderItem={({ item }) => {

                    return (
                        <TouchableOpacity
                            style={{
                                paddingHorizontal: 16, paddingVertical: 10,
                                marginHorizontal: 16,
                                marginBottom: 10,
                                backgroundColor: 'white',
                                borderRadius: 8

                            }}
                            onPress={() => props.navigation.navigate('TaskFormPage', { todo: item })}>
                            <Text style={{ fontWeight: '600', fontSize: 17, color: '#454545' }}>{item.todo}</Text>
                            <Text style={{ fontWeight: '300', color: 'red' }}>{item.completed ? 'Completed' : 'Incompleted'}</Text>
                        </TouchableOpacity>
                    )
                }}
            />
            <FAB
                visible={true}
                onPress={() => props.navigation.navigate('TaskFormPage')}
                placement="right"
                title="Add Notes"
                color="blue"
            />
        </View>
    )
}

export default TaskListPage;