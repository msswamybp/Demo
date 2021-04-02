
import React, { Component } from 'react';
import {
    View,
    Image,
    Text,
    ActivityIndicator,
    ImageBackground,
    BackHandler,
    Dimensions,
    SafeAreaView,
    ScrollView,
    TouchableOpacity

} from 'react-native';



class HomeDetaile extends Component {




    render() {
        return (
            <View style={{
                flex: 1,
            }}>
                <View style={{
                    height: Dimensions.get('window').height * 0.1,
                    width: Dimensions.get('window').width,
                    alignItems: 'flex-start', justifyContent: 'center',
                    marginLeft: Dimensions.get('window').width * 0.02,
                }}>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('Homepage')}>
                        <View>
                            <Text style={{ fontSize: 15 }}>Back</Text>
                        </View>
                    </TouchableOpacity>

                    <View style={{ borderWidth: 1 }} />
                </View>

                <ScrollView>
                    {/* <Image
                        style={{
                            height: Dimensions.get('window').height * 0.4,
                            width: Dimensions.get('window').width * 0.75,
                            resizeMode: 'contain',
                            alignSelf: 'center'
                        }}
                        source={this.props.navigation.state.params.icon} /> */}
                    <Image
                        style={{
                            width: Dimensions.get('window').width * 0.75, height: Dimensions.get('window').height * 0.4
                            , resizeMode: 'contain', alignSelf: 'center'
                        }}
                        source={{ uri: this.props.navigation.state.params.images }}
                    />
                    <View style={{ marginLeft: Dimensions.get('window').width * 0.1 }}>
                        <Text style={{
                            alignItems: 'flex-start', justifyContent: 'center', fontWeight: 'bold'
                        }}>
                            name:{this.props.navigation.state.params.name}
                        </Text>
                    </View>
                    <View style={{ marginLeft: Dimensions.get('window').width * 0.1 }}>
                        <Text style={{
                            alignItems: 'flex-start', justifyContent: 'center', fontWeight: 'bold'
                        }}>
                            business_status: {this.props.navigation.state.params.business_status}
                        </Text>
                    </View>
                    <View style={{ marginLeft: Dimensions.get('window').width * 0.1 }}>
                        <Text style={{
                            alignItems: 'flex-start', justifyContent: 'center', fontWeight: 'bold'
                        }}>
                            user_ratings_total:  {this.props.navigation.state.params.user_ratings_total}
                        </Text>
                    </View>
                    <View style={{ marginLeft: Dimensions.get('window').width * 0.1 }}>
                        <Text style={{
                            alignItems: 'flex-start', justifyContent: 'center', fontWeight: 'bold'
                        }}>
                            scope:   {this.props.navigation.state.params.scope}
                        </Text>
                    </View>
                    <View style={{ marginLeft: Dimensions.get('window').width * 0.1 }}>
                        <Text style={{
                            alignItems: 'flex-start', justifyContent: 'center', fontWeight: 'bold'
                        }}>
                            rating: {this.props.navigation.state.params.rating}
                        </Text>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

export default HomeDetaile