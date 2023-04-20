import { Text, TextInput, View, TouchableOpacity, Keyboard, Vibration, Pressable } from 'react-native';
import ResultImc from './ResultImc';
import { useState } from 'react';
import styles from './style';

export default function Form() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [message, setMessage] = useState('Preencha o peso e a altura...');
  const [imc, setImc] = useState(null);
  const [textButton, setTextButton] = useState('Calcular');
  const [errorMessage, setErrorMessage] = useState(null);

  const imcCalculator = () => {
    let heightFormat = height.replace(',', '.');
    return setImc((weight / (heightFormat * heightFormat)).toFixed(2));
  };

  const verification = () => {
    if (!height || !weight) {
      Vibration.vibrate(100);
      setErrorMessage('Campo obrigatório*')
    }
  }

  const validationImc = () => {
    Keyboard.dismiss()
    if (weight && height) {
      imcCalculator();
      setHeight(null);
      setWeight(null);
      setMessage('Seu imc é igual a:')
      setTextButton('Calcular Novamente');
      setErrorMessage(null);
      return
    }
    setImc(null);
    verification();
    setTextButton('Calcular');
    setMessage('Preencha o peso e a altura...');
  }

  return (
    <Pressable onPress={Keyboard.dismiss} style={styles.boxForm}>
      <View style={styles.form}>
        <Text style={styles.formLabel}>Altura</Text>
        {errorMessage && <Text style={styles.errorMessage}>{errorMessage}</Text>}
        <TextInput
          maxLength={4}
          style={styles.formInput}
          value={height}
          onChangeText={setHeight}
          placeholder="Ex. 1.80"
          keyboardType="numeric"
        />
        <Text style={styles.formLabel}>Peso</Text>
        {errorMessage && <Text style={styles.errorMessage}>{errorMessage}</Text>}
        <TextInput
          maxLength={6}
          style={styles.formInput}
          value={weight}
          onChangeText={setWeight}
          placeholder="Ex. 80.300"
          keyboardType="numeric"
        />
        <TouchableOpacity
          style={styles.button}
          onPress={validationImc}
        >
          <Text style={styles.textButton}>{textButton}</Text>
        </TouchableOpacity>
      </View>
      <ResultImc messageImc={message} result={imc} />
    </Pressable>
  );
}