import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  TouchableOpacity,
} from 'react-native';

export default class Clothes extends React.Component {
  goMain = () => {
    this.props.navigation.navigate('Main');
  };
  ammaVodi() {
    alert(
      'Website : http://www.ammaodiorphanage.org/index.html, Adress : Siddhartha Nagar, Benz Circle, Vijayawada, Andhra Pradesh 520010, Ph No. : 99850 74355. For more details, Please visit the Website'
    );
  }
  apple() {
    alert(
      'Adress : Gunadala, Vijayawada, 520010; Ph No. : 92464 32716; Timings : 8am - 8pm'
    );
  }
  suraksha() {
    alert(
      'Address: Sri Ramachandra Nagar, Vijayawada, Andhra Pradesh 520007;  Timings : 24 hrs; Ph No. : 094922 56390'
    );
  }
  ananta() {
    alert(
      'Address: 21-10/2, K L Rao Colony, Budameru Katta, Gandhi Nagar, Gandhi Nagar, Vijayawada, Andhra Pradesh 520003; Ph No : 093462 52278'
    );
  }
  sc() {
    alert(
      'Address: power grid line, Ramavarapadu, Vijayawada, Andhra Pradesh 521107; Ph No. : 0866 245 0500; Timings : 24 hrs'
    );
  }
  gg() {
    alert(
      'Address: Old Bus Stand, Road, Hanumanpet, Vijayawada, Andhra Pradesh 520002; Timings : 24 hrs'
    );
  }
  amma(){
    alert(
      'Address: # 29-26-51A, Tagore Hospital Road, Jadagamvari Street, Suryaraopet, Vijayawada, Andhra Pradesh 520002, Timings : 24 hrs; Ph No. : 073068 99899'
    );
  }
  render() {
    return (
      <View>
        <TouchableOpacity style={styles.anjali} onPress={this.ammaVodi}>
          <Text>Amma vodi orphanage</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.anjal} onPress={this.apple}>
          <Text>Apple Foundation</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.anja} onPress = {this.suraksha}>
          <Text>Suraksha Oldage Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.an} onPress = {this.ananta}>
          <Text>Ananta Lakshmi Seva Sangam</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.a} onPress = {this.amma}>
          <Text>Amma Nursing Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.ungl} onPress = {this.sc}>
          <Text>Street Children Rehabilitation Center</Text>
        </TouchableOpacity>
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
  a: {
    backgroundColor: '#00ffff',
    alignItems: 'center',
    width: 200,
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#00ffff',
    margnLeft: 100,
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
    margnLeft: 100,
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
