import React,{useState,useContext,useEffect,useRef,useMemo,useCallback} from 'react'
import { StyleSheet, Image,View,Text,Dimensions,TouchableOpacity} from 'react-native'
import BottomSheet, { BottomSheetFlatList,BottomSheetSectionList } from '@gorhom/bottom-sheet';
import { Avatar,Icon} from 'react-native-elements';
import MapComponent from '../components/MapComponent'
import { colors,parameters } from '../global/styles'
import { rideData } from '../global/data';
import { OriginContext,DestinationContext } from '../contexts/contexts';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;


export default function RequestScreen({navigation,route}) {
    const {origin,dispatchOrigin} = useContext(OriginContext)
    const [userOrigin,setUserOrigin] = useState({latitude:origin.latitude,
                                                  longitude:origin.longitude})
    const {destination,dispatchDestination} = useContext(DestinationContext)
    const [userDestination,setUserDestination] = useState({latitude:destination.latitude,
                                                longitude:destination.longitude}) 
                                                
   const bottomsheet1 =useRef(1)  ;  
   
   const snapPoints1 = useMemo(()=>['70%'],[])
   const handleSheetChange1  = useCallback((index)=>{},[])

useEffect(()=>{
    setUserOrigin({latitude:origin.latitude,
        longitude:origin.longitude});
    setUserDestination({latitude:destination.latitude,
        longitude:destination.longitude})    
},[origin,destination])


const renderFlatListItems = useCallback(({item})=>(
    <View>
          <View style ={styles.view10}>
            <View style ={styles.view11}>
            <Icon 
                    type ="material-community"
                    name ="clock-time-four"
                    color ={colors.white}
                    size ={18}
                    />
            </View>
            <View>
                <Text style ={{fontSize:15,color:colors.grey1}}>{item.street}</Text> 
                <Text style ={{color:colors.grey4}}>{item.area}</Text> 
            </View>
        </View>
    </View>
),[])


    return (
        <View style ={styles.container}>
            <View style ={styles.view1}> 
                <Icon 
                    type ="material-community"
                    name ="arrow-left"
                    color ={colors.grey1}
                    size ={32} 
                />
            </View>
            <View style = {styles.view2}>
                <TouchableOpacity>
                    <View style ={styles.view3}>
                        <Avatar 
                            rounded
                            avatarStyle ={{}}
                            size ={30}
                            source = {require('../../assets/blankProfilePic.jpg')}
                            />
                          <Text style ={{marginLeft:5}}>For Someone</Text>
                          <Icon 
                              type ="material-community"
                              name ="chevron-down"
                              color ={colors.grey1}
                              size ={26}
                            />
                    </View>
                </TouchableOpacity>
                <View style ={styles.view4}>
                    <View>
                        <Image 
                            style = {styles.image1}
                            source ={require("../../assets/transit.png")}
                        />
                    </View>
                    <View>
                        <TouchableOpacity onPress ={()=>navigation.navigate("DestinationScreen")}>
                            <View style = {styles.view6}>
                                <Text style ={styles.text1}>From where</Text>
                            </View>
                        </TouchableOpacity>
                        <View style ={styles.view7}>
                        <TouchableOpacity>
                            <View style ={styles.view5}>
                                <Text style ={styles.text10}>...</Text>
                            </View>
                        </TouchableOpacity>
                        <View style ={styles.view8}>
                            <Icon 
                                type ="material-community"
                                name ="plus-thick"
                                color ={colors.black}
                                size ={25}
                                />   
                        </View>
                    </View>
                    </View>
                   
                </View>
            </View>
            <MapComponent userOrigin ={userOrigin} userDestination = {userDestination} />
            <BottomSheet
                ref={bottomsheet1}
                index={route.params.state}
                snapPoints = {snapPoints1}
                onChange={handleSheetChange1}

                >
                <BottomSheetFlatList 
                  keyboardShouldPersistTaps = 'always'  
                  data={rideData}
                  keyExtractor = {item=>item.id}
                  renderItem={renderFlatListItems}
                  contentContainerStyle ={styles.contentContainer}
                  ListHeaderComponent={<View style ={styles.view10}>
                                <View style ={styles.view11}>
                                    <Icon 
                                        type ="material-community"
                                        name ="star"
                                        color ={colors.white}
                                        size ={20}
                                        />
                                </View>
                                <View>
                                   <Text style ={styles.text9}>Saved Places</Text> 
                                </View>
                        </View>}
                ListFooterComponent={
                    <View>
                        <View style ={styles.view10}>
                            <View style ={styles.view11}>
                            <Icon 
                                    type ="material-community"
                                    name ="map-marker"
                                    color ={colors.white}
                                    size ={20}
                                    />
                            </View>
                            <View>
                                <Text style ={styles.text9}>Set location on map</Text> 
                            </View>
                        </View>
                        <View style ={styles.view10}>
                            <View style ={styles.view11}>
                            <Icon 
                                    type ="material-community"
                                    name ="skip-next"
                                    color ={colors.white}
                                    size ={20}
                                    />
                            </View>
                            <View>
                                <Text style ={styles.text9}>Enter destination later</Text> 
                            </View>
                        </View>
                    </View> 
                }        
                />
            </BottomSheet>
        </View>
    )
}






const styles = StyleSheet.create({
    container1:{flex:1,
        paddingTop:parameters.statusBarHeight,
        
    },

    container: {
        flex: 1,
        paddingTop:parameters.statusBarHeight
       
      },
      contentContainer: {
        flex: 1,
        alignItems: 'center',
       
      },

      view1:{
        position:"absolute",
        top:25,
        left:12,
        backgroundColor:colors.white,
        height:40,
        width:40,
        borderRadius:20,
        justifyContent:"center",
        alignItems:"center",
        marginTop:2, 
        zIndex: 8
        
      },

      view2:{
        height:SCREEN_HEIGHT*0.21,
        alignItems:"center",
        zIndex: 5,
        backgroundColor:colors.white
      },
      
      view3:{
          flexDirection:"row",
          alignItems:"center",
          marginTop:2,   
          marginBottom:10,
          backgroundColor: colors.white,
          //height:30,
          zIndex:10,
           
        
      },
      view4:{
            flexDirection:"row",
            alignItems:"center",
            
      },
      view5:{
          backgroundColor:colors.grey7,
          width:SCREEN_WIDTH*0.70,
          height:40,
          justifyContent:"center",
          marginTop:10,
          
      },
      view6:{
        backgroundColor:colors.grey6,
        width:SCREEN_WIDTH*0.70,
        height:40,
        justifyContent:"center",
        marginTop:10,
        paddingLeft:0
    },
      text1:{
          marginLeft:10,
          fontSize:16,
          color:colors.grey1
      },
    
      image1:{  height:70,
                width:30,
                marginRight:10,
                marginTop:10
            },
     view7:{
         flexDirection:"row",
         alignItems:"center"
     },
     view8:{
         marginLeft:10
     },
     view10:{
        alignItems:"center",
        flex:5,
        flexDirection:"row",
        paddingVertical:10,
        borderBottomColor:colors.grey5,
        borderBottomWidth:1,
        paddingHorizontal:15
     },
     view11:{
        backgroundColor:colors.grey,
        height:30,
        width:30,
        borderRadius:15,
        alignItems:"center",
        justifyContent:"center",
        marginRight:15,
        marginTop:15,
     },

     contentContainer: {
        backgroundColor: 'white',
      },

    view12:{
        alignItems:"center",
        paddingVertical:10,
        borderBottomWidth:1,
        borderBottomColor:colors.grey4
    },

    text2:{
        fontSize:18,
        color:colors.grey1
    },
    text3:{
        fontSize:16,
        color:colors.black,
        fontWeight:"bold",
        marginRight:5,
     
    },

    text4:{color:colors.grey2,
        marginTop:4
                },

    view13:{
        flexDirection:"row",
        alignItems:"flex-start",
        justifyContent:"space-between",
        paddingHorizontal:15,
        paddingVertical:5
    },

    button1:{
        height:40,
        width:100,
        backgroundColor:colors.grey6,
        borderRadius:20,
        alignItems:"center",
        justifyContent:"center",
        marginTop:20
     },

    button2:{
        height:50,
        backgroundColor:colors.grey10,
        alignItems:"center",
        justifyContent:"center",
        marginTop:20,
        marginHorizontal:30
     },

    
  
     button1Text:{
       
       fontSize:17,
       marginTop:-2,
       color:colors.black
  
     },

     button2Text:{
        color:colors.white,
        fontSize:23,
        marginTop:-2,
       
   
      },

      
    view14:{
     
    
      alignItems:"center",
      flex:5,
      flexDirection:"row"
    },
    view15:{
      backgroundColor:colors.grey6,
      height:40,
      width:40,
      borderRadius:20,
      alignItems:"center",
      justifyContent:"center",
      marginRight:20
      
    },

    view16:{
        flexDirection:"row",
        alignItems:"baseline"
    },

    text5:{
        fontSize:12,
        color:colors.black,
        marginLeft:3,
        fontWeight:"bold",
        paddingBottom:1
        
    },
    
    view17:{
        
      },

    view18:{
      
    

      },

    view19:{flex:1.7,
        alignItems:"flex-end",
      
    },

    icon:{paddingBottom:2},

    image2:{height:60,width:60 },

    view20:{marginRight:10 },

    text6:{
        fontSize:15,
        color:colors.black,
        fontWeight:"bold", 
    },

    view21:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        marginHorizontal:30,
        marginTop:15
    },

 view22:{
        alignItems:"center",
        marginBottom:-20
 },

 sectionHeaderContainer: {
    backgroundColor: "white",
    marginTop:30,
    paddingLeft:15
  },

 text7 : {
    fontSize:28,
    color:colors.black,
    marginRight:5,
 
},

text8:{
    fontSize:15,
    color:colors.grey2,
    textDecorationLine:"line-through"
 
 
},

button3:{
   
    height:60,
    backgroundColor:colors.black,
    alignItems:"center",
    justifyContent:"center",
    width:SCREEN_WIDTH-110,
    marginBottom:10
 },

view23:{
   flexDirection:"row", 
   backgroundColor:colors.cardbackground,
  // elevation:10,
   justifyContent:"space-between",
   alignItems:"flex-end",
   paddingHorizontal:20,
   height:80,
  
},

button2Image:{
    height:55,
    width:55,
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:colors.grey6,
    marginBottom:10,
    
}
,
text9:{fontSize:15,
       color:colors.grey1
    },


    map:{
        marginVertical: 0,
        width:SCREEN_WIDTH,
        zIndex: -1
      }, 
      
      centeredView: {
        zIndex:14
      },
      modalView: {
        marginHorizontal: 20,
        marginVertical:60,
        backgroundColor: "white",
        borderRadius: 20,
        paddingHorizontal: 20,
        paddingVertical:20,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        zIndex:16
      }, 
      
      view24:{
        flexDirection:"row",
        justifyContent:"space-between",
       marginVertical:15,
        paddingHorizontal:20   
    }, 
    
    view25:{
        flexDirection:'row',
       alignItems:"baseline"
    },

    flatlist:{
        marginTop:20
    },

   text10:{color:colors.grey2,
           paddingLeft:10
        }
    
})




