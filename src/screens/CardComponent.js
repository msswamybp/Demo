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
    TouchableOpacity

} from 'react-native';
// import Images from './../config/images';
// import images from './../config/images';

class CardComponent extends Component {

    render() {

        return (
            <View
                style={{
                    height: Dimensions.get('window').height * 0.27, width: Dimensions.get('window').width * 0.9

                }}>
                <TouchableOpacity
                    style={{

                        height: Dimensions.get('window').height * 0.27, width: Dimensions.get('window').width * 0.9
                    }}
                    onPress={() => this.props.navigation.navigate('HomeDetaile', {
                        name: this.props.name,
                        images: this.props.icon,
                        rating: this.props.rating,
                        scope: this.props.scope,
                        business_status: this.props.business_status,
                        user_ratings_total: this.props.user_ratings_total
                    })}>
                    <View style={{ flexDirection: 'row' }}>
                        <Image
                            style={{
                                width: Dimensions.get('window').width * 0.2, height: Dimensions.get('window').height * 0.2
                                , resizeMode: 'contain'
                            }}
                            source={{ uri: this.props.icon }}
                        />
                        <View style={{
                            flexDirection: 'column',
                            alignItems: 'flex-start', justifyContent: 'center',
                            marginLeft: Dimensions.get('window').width * 0.02,

                        }}>
                            <View style={{
                                flexDirection: 'row'
                            }}>
                                <Text >name:</Text>
                                <Text style={{ fontWeight: 'bold' }}>name:{this.props.name}</Text>
                            </View>
                            < View style={{
                                flexDirection: 'row'
                            }}>
                                <Text >status:</Text>
                                <Text style={{ fontWeight: 'bold' }}>{this.props.business_status}</Text>
                            </View>
                            < View style={{
                                flexDirection: 'row'
                            }}>
                                <Text >scope:</Text>
                                <Text style={{ fontWeight: 'bold' }}>{this.props.scope}</Text>
                            </View>
                            <View>
                                <Text style={{ fontWeight: 'bold' }}>{this.props.user_ratings_total}</Text>
                            </View>
                        </View>
                        <View style={{
                            height: Dimensions.get('window').height * 0.05, width: Dimensions.get('window').height * 0.05,
                            position: 'absolute',
                            backgroundColor: 'green',
                            right: 0,
                        }}>
                            <View style={{ alignItems: 'center', justifyContent: 'center', }} >

                                <Text style={{ color: 'white' }}>{this.props.rating}</Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
                <View style={{ borderWidth: 1 }} />
            </View >
        )
    }
}
export default CardComponent