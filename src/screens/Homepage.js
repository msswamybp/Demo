import React, { Component } from "react";
import { View, Text, TouchableOpacity, FlatList, Dimensions, Image, TextInput, ScrollView } from 'react-native'
import CardComponent from './CardComponent'
class Homepage extends Component {

    state = {
        arr: [],
        name: '',
        //  text: '',
        searchIndex: true,
        isSearch: false
    };

    componentDidMount() {
        fetch('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=47.6204,-122.3491&radius=2500&type=restaurant&key=AIzaSyD0AQBJ_BwInY5Tv_0tqGPJIWL7FcllnH0', {
            method: 'GET',
        })
            .then(response => response.json())
            .then(json => {
                this.setState({ arr: json.results })
                this.setState({ arr1: json.results })

            })
            .catch(error => {
                console.error(error);
            });
    }
    renderarr() {
        console.log(this.state.arr);

        return (
            <View >
                <FlatList
                    horizontal={false}
                    keyExtractor={(item, index) => index.toString()}
                    data={this.state.arr1}
                    renderItem={({ item, index }) => {
                        // console.log(item.name, "  ", item.icon, " ", item.rating, " ");

                        return (
                            <CardComponent
                                name={item.name}
                                icon={item.icon}
                                rating={item.rating}
                                scope={item.scope}
                                business_status={item.business_status}
                                user_ratings_total={item.user_ratings_total}
                                navigation={this.props.navigation}
                            />
                        );
                    }}
                />
            </View>
        );
    }
    searchbar() {
        return (
            <View
                style={
                    {
                        height: Dimensions.get('window').height * 0.1, width: Dimensions.get('window').width * 0.95,
                        borderColor: 'gray',
                        borderWidth: 1,
                        borderRadius: 10,
                        flexDirection: 'row'
                    }
                }>

                <Image
                    style={{
                        width: Dimensions.get('window').width * 0.01, height: Dimensions.get('window').height * 0.01
                        , resizeMode: 'contain'
                    }}
                    source={{ uri: 'https://icon-library.com/icon/search-bar-icon-png-2.html' }}
                />
                <TextInput

                    ref={input => { this.textInput = input }}
                    style={{ fontSize: 20 }}
                    autoFocus={true}
                    placeholder="Search for restaurants"
                    placeholderTextColor='grey'
                    onChangeText={(text) => this.filter(text)}
                    value={this.state.text}
                />

            </View>
        )
    }
    filter(param) {
        // this.setState({
        //     canBeCleared: param.length > 0,
        // });
        var textvalues = param
        this.setState({ name: textvalues })
        var textparam = param.trim()

        if (textparam.length === 0) {
            this.setState({ searchIndex: true })
        }
        else {
            this.setState({ searchIndex: false })
        }
        var testboolen = isNullOrWhitespace(param)
        function isNullOrWhitespace(input) {

            if (typeof input === 'undefined' || input == null) return true;

            return input.replace(/\s/g, '').length < 1;
        }

        if (!testboolen) {
            var NoteArray = []
            var text = param.trim()
            if (text.toString().length >= 1) {
                this.setState({ isSearch: true })
                var dataarray = Object.keys(this.state.arr).map((notes) => {
                    NoteArray.push(this.state.arr[notes])
                    var data = NoteArray.filter(function (item) {
                        //  console.log('item', item);

                        return item.name.toLowerCase().indexOf(text.toLowerCase()) !== -1
                    })
                    // console.log('uuuuu', data);


                    this.setState({ arr1: data })
                })
                // this.setState({ click: true })
            }
            else {
                // this.setState({ isSearch: false })
                // this.setState({ click: true })
            }
        }
        else {

            this.setState({ arr1: this.state.arr })
        }
    }

    render() {
        if (this.state.arr.length > 0) {
            return (
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', paddingTop: Dimensions.get('window').height * 0.02 }}>


                    {this.searchbar()}
                    <ScrollView>
                        <View style={{ alignItems: 'center', justifyContent: 'center', }} >

                            {this.renderarr()}
                        </View>
                    </ScrollView>

                </View >

            )
        }
        else {
            return (
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
                </View>
            )
        }
    }
}
export default Homepage