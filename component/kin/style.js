import {StyleSheet} from 'react-native'

export default StyleSheet.create({
container: {
    paddingTop: 40,
    paddingHorizontal: 20,
 marginBottom: 250,
 backgroundColor: "white",
 paddingBottom: 10
},
top: {
    marginVertical: 16,
},
options: {
    marginVertical: 16,
    flex: 1,
},
input: {
    marginBottom: 20,
    height: 40,
    padding: 24,
    borderColor: '#dcdcdb',
    borderRadius: 10,
    borderWidth: 1
 },
bottom:{
marginTop: 10,
paddingVertical: 16,
justifyContent: "space-between",
flexDirection: "row",
},
button: {

    backgroundColor: "#FF4500",
    padding: 12,
    width: "100%",
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: 'center',

},
button2: {

    backgroundColor: "#fff",
    padding: 12,
    width: "100%",
    paddingHorizontal: 16,
    borderRadius: 8,
    borderColor: "black",
    alignItems: 'center',

},
buttonText: {
    fontSize: 14,
    fontWeight: '600',
    color: 'white',
    
},
buttonText2: {
    fontSize: 14,
    fontWeight: '600',
    color: 'red',
    
},
question: {
 fontSize: 13,  
 marginBottom: 10, 
},
questions: {
    marginBottom: 40,
 fontSize: 24,
 textAlign: "center"   
},
option: {
    fontSize: 18,
    fontWeight: '500',
    color: "white"
},
optionBottom: {
    paddingVertical: 12,
    marginVertical: 6,
    backgroundColor: "#34A0A4",
    paddingHorizontal: 12,
    borderRadius: 12
},
fave: {
    color: "black"
}


});