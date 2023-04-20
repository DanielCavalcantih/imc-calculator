import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  result: {
    flex: 1,
    marginTop: 20,
    paddingTop: 15,
    alignItems: 'center',
    width: '100%'
  },
  number: {
    fontSize: 48,
    color: '#ff0043',
    fontWeight: 'bold'
  },
  information: {
    fontSize: 18,
    color: '#ff0043',
    fontWeight: 'bold'
  },
  boxShare: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 10
  },
  share: {
    backgroundColor: '#1877f2',
    borderRadius: 50,
    paddingBottom: 5,
    paddingTop: 5,
  },
  shareText: {
    width: '100%',
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
    paddingHorizontal: 30
  }
});

export default styles;