import { Alert, Text, TextInput, View } from "react-native"
import ReactNativeBiometrics from "react-native-biometrics";
import { TouchableOpacity } from "react-native-gesture-handler";

const AuthenticationPage = (props: { navigation: any }) => {
    const rnBiometric = new ReactNativeBiometrics();

    const loginWithBiometric = async () => {
        const { available } = await rnBiometric.isSensorAvailable();

        if (!available) {
            Alert.alert('Biometric Authentication Unavailable')
            return;
        };

        rnBiometric.simplePrompt({ promptMessage: 'Confirmation the biomtric' }).then(({ success }) => {
            if (success) {
                props.navigation.replace('TaskListPage')
            }
        }).catch(() => {
            Alert.alert('Biometric Authentication Failed')
        })

    }

    return (
        <View style={{ justifyContent: 'center', alignContent: 'center', flex: 1, paddingHorizontal: 20 }}>
            <Text>Input password</Text>


            <TextInput
                style={{
                    borderWidth: 0.5,
                    paddingHorizontal: 16,
                    paddingVertical: 12,
                    borderRadius: 8,
                    marginTop: 5
                }}
                placeholder="Input Notes"
                onChangeText={() => { }}
                value={""}
            />
            <TouchableOpacity
                style={{
                    marginVertical: 30,
                    paddingVertical: 12,
                    paddingHorizontal: 20,
                    backgroundColor: 'blue',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 8
                }}
                onPress={() => {
                    props.navigation.replace('TaskListPage')
                }} >
                <Text style={{ color: 'white' }}>Login</Text>
            </TouchableOpacity>

            <Text style={{ alignSelf: 'center', }} >or</Text>


            <TouchableOpacity
                style={{
                    marginTop: 30,
                    paddingVertical: 12,
                    paddingHorizontal: 20,
                    backgroundColor: 'blue',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 8
                }}
                onPress={loginWithBiometric} >
                <Text style={{ color: 'white' }}>Use Biometric Sign in</Text>
            </TouchableOpacity>
        </View>
    )
}

export default AuthenticationPage;