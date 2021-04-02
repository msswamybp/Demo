import React, { Component } from 'react'
import { View, Text, StyleSheet, Button, TouchableOpacity, Image, TextInput, Dimensions } from 'react-native'



class LoginPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            validated: false,

        }
    }
    validatedinput() {
        if (this.state.email == '') {
            alert('enter valid email');
        }
        else if (this.state.email.indexOf('@') === -1) {
            alert('enter valid email')
        }
        else if (this.state.email.indexOf('.com') === -1) {
            alert('enter valid email')
        }
        else if (this.state.password.length < 4) {
            alert('enter valid password')
        }
        else {
            return true
        }

    }
    submit = async event => {
        var bol = this.validatedinput();

        if (bol) {
            //var l = await login(this.state.email, this.state.password);
            if (!bol) {
                alert("login is invalid")
            }
            else {
                this.setState({ email: '' })
                this.setState({ password: '' })
                this.props.navigation.navigate('Homepage')



            }
        }

    }

    render() {
        return (
            <View style={{ flex: 1, }}>


                <View style={{ alignItems: 'center', justifyContent: 'center', alignSelf: 'center', paddingTop: Dimensions.get('window').height * 0.1 }}>


                    <View style={{ paddingBottom: Dimensions.get('window').height * 0.05 }}>
                        <Text style={{ color: 'green', fontSize: 25 }}>Demo App</Text>
                    </View>
                    <View style={{

                        alignItems: 'center', justifyContent: 'center', alignSelf: 'center',
                        borderWidth: 1, borderColor: 'gray',
                        height: Dimensions.get('window').height * 0.1, width: Dimensions.get('window').width * 0.7, borderRadius: 10,
                    }}>

                        <TextInput
                            ref={input => { this.textInput = input }}
                            style={{ fontSize: 20 }}
                            autoFocus={true}
                            placeholder="Email id"
                            placeholderTextColor='grey'
                            onChangeText={(email) => this.setState({ email })}
                            value={this.state.email === undefined ? email : this.state.email}
                        />
                    </View>
                    <View style={{ paddingBottom: Dimensions.get('window').height * 0.05 }}>
                    </View>
                    <View style={{
                        alignItems: 'center', justifyContent: 'center', alignSelf: 'center',
                        borderWidth: 1, borderColor: 'gray',
                        height: Dimensions.get('window').height * 0.1, width: Dimensions.get('window').width * 0.7, borderRadius: 10,
                    }}>

                        <TextInput
                            secureTextEntry={true}
                            // ref={input => { this.textInput = input }}
                            style={{ fontSize: 20 }}
                            autoFocus={true}
                            placeholder="Password"
                            placeholderTextColor='grey'
                            onChangeText={(password) => this.setState({ password })}
                            value={this.state.password === undefined ? password : this.state.password}
                        />
                    </View>
                    <View style={{ paddingBottom: Dimensions.get('window').height * 0.05 }}>
                    </View>
                    <View >
                        <TouchableOpacity  >
                            <Text >Forgot password?</Text>
                        </TouchableOpacity>
                    </View>

                    <View >
                        <TouchableOpacity onPress={() => this.submit()} >
                            <Text style={{ color: 'green', fontSize: 25 }}>Login</Text>
                        </TouchableOpacity>
                    </View>


                </View>

            </View >
        )
    }
}
export default LoginPage