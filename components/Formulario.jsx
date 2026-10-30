
import { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Alert
} from 'react-native';
import { Picker } from '@react-native-picker/picker';

const Formulario = () => {
    const [moneda, setMoneda] = useState('');
    const [criptomoneda, setCriptomoneda] = useState('');

    const cotizar = () => {
        Alert.alert('Aviso', 'Formulario creado');
    };

    return (
        <View style={styles.formulario}>

            <Text style={styles.label}>Moneda</Text>

            <Picker
                selectedValue={moneda}
                onValueChange={(itemValue) => setMoneda(itemValue)}
                style={styles.pickerInput}
            >
                <Picker.Item label="Seleccione" value="" />
                <Picker.Item label="Dólar USD" value="USD" />
                <Picker.Item label="Peso Mexicano MXN" value="MXN" />
                <Picker.Item label="Euro EUR" value="EUR" />
                <Picker.Item label="Libra Esterlina GBP" value="GBP" />
                <Picker.Item label="Criptomonedas" value="CRIPTO" />
            </Picker>

            <Text style={styles.label}>Seleccione</Text>

            <Picker
                selectedValue={criptomoneda}
                onValueChange={(itemValue) => setCriptomoneda(itemValue)}
                style={styles.pickerInput}
            >
                <Picker.Item label="Seleccione" value="" />
            </Picker>

            <TouchableOpacity
                style={styles.btnCotizar}
                onPress={cotizar}
            >
                <Text style={styles.textCotizar}>Cotizar</Text>
            </TouchableOpacity>

        </View>
    );
};

const styles = StyleSheet.create({
    formulario: {
        width: '100%',
    },
    label: {
        textTransform: 'uppercase',
        color: '#5E49E2',
        fontWeight: '700',
        fontSize: 22,
        marginVertical: 20
    },
    pickerInput: {
        height: 50,
        backgroundColor: '#FFF'
    },
    btnCotizar: {
        backgroundColor: '#5E49E2',
        padding: 10,
        marginTop: 20
    },
    textCotizar: {
        color: '#FFF',
        fontSize: 18,
        textTransform: 'uppercase',
        textAlign: 'center'
    }
});

export default Formulario;
