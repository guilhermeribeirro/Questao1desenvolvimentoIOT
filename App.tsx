import React, {useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';



interface OlaProps{


    nomeProps:string

}

const Ola : React.FC<OlaProps> =({nomeProps}) => {
    const [contadorLikes, setContadorLikes]= useState<number>(0);

    const adicionarContadorLikes =() => setContadorLikes(contadorLikes + 1);
    const diminuirContadorLikes = () => setContadorLikes(contadorLikes -1);
    return (
        <View style = {styles.container}>

            <Text style = {styles.greeting}>


                Olá {nomeProps}, voce possui {contadorLikes} Likes.
            </Text>
            <View style = {styles.buttonContainer}>

                    <TouchableOpacity
                    onPress={adicionarContadorLikes}
                    style={[styles.button, {backgroundColor: 'blue'}]}
                >
                <Text style = {styles.buttonText}>Like</Text>

                </TouchableOpacity>
                <TouchableOpacity

                onPress={diminuirContadorLikes}
                style={[styles.button, {backgroundColor: 'red'}]}
>

                    <Text style={styles.buttonText}> Deslike</Text>
                    </TouchableOpacity>
                </View>
                </View>
                );



    
   }

const styles = StyleSheet.create({

container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

},

greeting: {

    fontSize: 20,
    fontWeight: 'bold',
    margin: 16,
},
buttonContainer: {

    flexDirection: 'column',
    alignItems: 'center',
    width: '80%',


},
button: {
    width: '100%',
    marginVertical: 5,
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
   
},

buttonText: {

    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
},
});

export default Ola;









