import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  boxForm: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 15,
    alignItems: 'center',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingTop: 30
  },
  form: {
    flex: 1,
    width: '100%',
    alignItems: 'center'
  },
  formLabel: {
    color: '#000',
    width: '90%',
    fontSize: 18,
    paddingLeft: 10
  },
  formInput: {
    width: '90%',
    borderRadius: 50,
    backgroundColor: '#f6f6f6',
    height: 40,
    margin: 12,
    paddingLeft: 10
  },
  button: {
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    backgroundColor: '#ff0043',
    paddingTop: 14,
    paddingBottom: 14,
    marginTop: 30
  },
  textButton: {
    fontSize: 20,
    color: '#fff',
    width: '100%',
    textAlign: 'center'
  },
  errorMessage: {
    fontSize: 12,
    color: 'red',
    fontWeight: 'bold'
  }
});

export default styles;