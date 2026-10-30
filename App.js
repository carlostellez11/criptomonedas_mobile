
import { View, StyleSheet } from 'react-native';
import Formulario from './components/Formulario';

export default function App() {
    return (
        <View style={styles.container}>
            <Formulario />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F3F4F6',
        padding: 20,
        justifyContent: 'center'
    }
});
