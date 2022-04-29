import {StyleSheet} from 'react-native'

export default StyleSheet.create({
container: {
paddingTop: 40,
paddingHorizontal: 20,
height: '100%',
backgroundColor: "white",
paddingBottom: 200,
},
title:{
    marginTop: 10,
    color: 'red',
    fontSize: 16,
    fontWeight: "600",
lineHeight: 20,
/* identical to box height, or 143% */

textAlign: 'center',
   
},
title2:{
    marginTop: 10,
   
    fontSize: 20,
    textAlign: "center",
    width: "97%",
    fontWeight: "300",
 
lineHeight: 29,

color: '#1E1E24',
   
},
titlecontainer: {
    alignItems: "center",
    justifyContent: "center"
},
banner:{
    height: 200,
    width: 200,
    marginTop: 30,
},
bannercontainer:{
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
},
button: {
    width: "100%",
    backgroundColor: "#FF4500",
    padding: 14,
    borderRadius: 16,
    marginTop: 100,
    textAlign: "center"
},
button2: {
    width: "100%",
    backgroundColor: "#fff",
    padding: 14,
    borderRadius: 16,
    alignItems: 'center',  
},
buttonText: {
    fontSize: 18,
    fontWeight: '600',
    color: 'white',
    textAlign: "center",
    marginBottom: 0,
},
buttonText2: {
    fontSize: 18,
    fontWeight: '600',
    color: 'black',
    marginBottom: 0,
}
});