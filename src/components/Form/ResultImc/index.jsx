import { Text, View, TouchableOpacity, Share } from 'react-native';
import styles from './style';

export default function ResultImc({ messageImc, result }) {
  const onShare = async () => {
    await Share.share({
      message: `Meu imc hoje é: ${result}.`
    })
  }

  return (
    <View style={styles.result}>
      <View style={styles.boxShare}>
        {result && (
          <TouchableOpacity style={styles.share} onPress={onShare}>
            <Text style={styles.shareText}>Share</Text>
          </TouchableOpacity>
        )}
      </View>
      <Text style={styles.information}>{messageImc}</Text>
      <Text style={styles.number}>{result}</Text>
    </View>
  )
}