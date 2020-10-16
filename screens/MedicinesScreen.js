import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';

export default class Clothes extends React.Component {
  constructor(){
    super()
    this.state = {
      name : '',
      contact : '',
      address : '',
      orphanage : '',
    }
  }
  goMain = () => {
    this.props.navigation.navigate('Main');
  };
  submit=()=>{
    db.collection('Food').add({
      'orphanage' : this.state.orphanage,
      'name' : this.state.name,
      'address' : this.state.address,
      'contact' : this.state.contact
    })
  }
  render() {
    return (
      <View>
        <AppHeader />
        <Header title = "Food donate"/>
          <TextInput 
          placeholder = "Name"
          style = {styles.inputBox}
          onChangeText = {(text)=>{
            this.setState({
              name : text
            })
          }}
          />
          <TextInput 
          placeholder = "Contact"
          style = {styles.inputBox}
          onChangeText = {(text)=>{
            this.setState({
              contact : text
            })
          }}
          />
          <TextInput 
          placeholder = "Address"
          style = {styles.inputBox}
          onChangeText = {(text)=>{
            this.setState({
              name : text
            })
          }}
          />
          <View>
            <TouchableOpacity style = {{justifyContent : 'center', alignItems : 'center', backgroundColor : 'yellow', padding : 10}}
            onPress = {()=>{
              this.submit()
            }}>
              <Text>Donate</Text>
            </TouchableOpacity>
          </View>
        <TouchableOpacity
          style={styles.main}
          onPress={() => {
            this.goMain();
          }}>
          <Text>Back</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  anjali: {
    backgroundColor: '#98fb98',
    alignItems: 'center',
    width: 200,
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#98fb98',
    marginTop : 20,
  },
  anjal: {
    backgroundColor: '#ffff99',
    alignItems: 'center',
    width: 200,
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#ffff99',
    marginTop : 20,
  },
  anja: {
    backgroundColor: '#ffb6c1',
    alignItems: 'center',
    width: 200,
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#ffb6c1',
    marginTop : 20,
  },
  an: {
    backgroundColor: '#d3d3d3',
    alignItems: 'center',
    width: 250,
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#d3d3d3',
    marginTop : 20,
  },
  ungli: {
    backgroundColor: '#ffa07a',
    alignItems: 'center',
    width: 200,
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#ffa07a',
      marginLeft: 100,
    marginTop : 20,
  },
  a: {
    backgroundColor: '#00ffff',
    alignItems: 'center',
    width: 200,
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#00ffff',
      marginLeft: 100,
    marginTop : 20,
  },
  ungl: {
    backgroundColor: '#ee82ee',
    alignItems: 'center',
    width: 200,
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#ee82ee',
      marginLeft: 100,
    marginTop : 20,
  },
  main: {
    backgroundColor: '#008080',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#008080',
    marginLeft: 150,
    marginTop: 50,
    width: 50,
  },
});
