import React from 'react';
import {View, SafeAreaView, Text, StyleSheet, FlatList, Image, Dimensions} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from './colors';
import plants from './plants';
const width = Dimensions.get('window').width / 2 - 30;
import placeholder from '../assets/default-product-image.png';

const HomeScreen = ({navigation}) => {
  // const [catergoryIndex, setCategoryIndex] = React.useState(0);

  // const categories = ['POPULAR', 'ORGANIC', 'INDOORS', 'SYNTHETIC'];

  // const CategoryList = () => {
  //   return (
  //     <View style={style.categoryContainer}>
  //       {categories.map((item, index) => (
  //         <TouchableOpacity
  //           key={index}
  //           activeOpacity={0.8}
  //           onPress={() => setCategoryIndex(index)}>
  //           <Text
  //             style={[
  //               style.categoryText,
  //               catergoryIndex === index && style.categoryTextSelected,
  //             ]}>
  //             {item}
  //           </Text>
  //         </TouchableOpacity>
  //       ))}
  //     </View>
  //   );
  // };

  const Card = ({plant}) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.navigate('Details', plant)}>
        <View style={style.card}>
          <View style={{alignItems: 'flex-end'}}>
            <View
              style={{
                width: 30,
                height: 30,
                borderRadius: 20,
                justifyContent: 'center',
                alignItems: 'center',
                // backgroundColor: plant.like
                //   ? 'rgba(245, 42, 42,0.2)'
                //   : 'rgba(0,0,0,0.2) ',
              }}>
              {/* <Icon
                name="favorite"
                size={18}
                color={plant.like ? COLORS.red : COLORS.black}
              /> */}
            </View>
          </View>

          <View
            style={{
              height: 100,
              alignItems: 'center',
            }}>
            <Image
              source={placeholder}
              // source={plant.img}
              style={{flex: 1, resizeMode: 'contain'}}
            />
          </View>

          <Text style={{fontWeight: 'bold', fontSize: 17, marginTop: 10}}>
            {plant.name}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 5,
            }}>
            <Text style={{fontSize: 19, fontWeight: 'bold'}}>
              ${plant.price}
            </Text>
            {/* <View
              style={{
                height: 25,
                width: 25,
                backgroundColor: COLORS.blue,
                borderRadius: 5,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{fontSize: 22, color: COLORS.white, fontWeight: 'bold'}}>
                +
              </Text>
            </View> */}
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView
      style={{flex: 1, paddingHorizontal: 20, backgroundColor: COLORS.white}}>
      <View style={style.header}>
        <View>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>Find the best deal with</Text>
          <Text style={{fontSize: 38, color: COLORS.blue, fontWeight: 'bold'}}>
            Product Searcher
          </Text>
        </View>
        {/* <Icon name="shopping-cart" size={28} /> */}
      </View>
      <View style={{marginTop: 15, flexDirection: 'row'}}>
        <View style={style.searchContainer}>
          {/* <Icon name="search" size={25} style={{marginLeft: 20}} /> */}
          <TextInput placeholder="Search your product" style={style.input} />
        </View>
        <View style={style.searchBtn}>
          <Icon name="search" size={30} color={COLORS.white} />
        </View>
      </View>
      {/* <CategoryList /> */}
      <FlatList
        columnWrapperStyle={{justifyContent: 'space-between'}}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          marginTop: 10,
          paddingBottom: 50,
        }}
        numColumns={2}
        data={plants}
        renderItem={({item}) => {
          return <Card plant={item} />;
        }}
      />
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  categoryContainer: {
    flexDirection: 'row',
    marginTop: 30,
    marginBottom: 20,
    justifyContent: 'space-between',
  },
  categoryText: {fontSize: 16, color: 'grey', fontWeight: 'bold'},
  categoryTextSelected: {
    color: COLORS.blue,
    paddingBottom: 5,
    borderBottomWidth: 2,
    borderColor: COLORS.blue,
  },
  card: {
    height: 225,
    backgroundColor: COLORS.light,
    width,
    marginHorizontal: 2,
    borderRadius: 10,
    marginBottom: 20,
    padding: 15,
  },
  header: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  searchContainer: {
    height: 50,
    backgroundColor: COLORS.light,
    borderRadius: 10,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  input: {
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,
    color: COLORS.dark,
    marginLeft: 20,
  },
  searchBtn: {
    marginLeft: 10,
    height: 50,
    width: 50,
    borderRadius: 10,
    backgroundColor: COLORS.blue,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default HomeScreen;