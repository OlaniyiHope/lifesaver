import {StyleSheet} from 'react-native'

export default StyleSheet.create({
container: {
    paddingTop: 40,
    paddingHorizontal: 20,
  marginBottom: 250,
  backgroundColor: "white",
  paddingBottom: 200,
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
input3: {
    height: 55,
borderRadius: 8,
 },
bottom:{
marginTop: 10,
paddingVertical: 16,
justifyContent: "space-between",
flexDirection: "row",
},
button: {

    backgroundColor: "#FF4500",
   
    width: 327,
    height: 45,
    paddingHorizontal: 16,
    borderRadius: 12,
    alignItems: 'center',

},
buttonText: {
    fontSize: 14,
    marginTop: 10,
    fontWeight: '600',
    color: 'white',
    
},
buttonText2: {
    fontSize: 14,
    fontWeight: '600',
    color: 'red',
textAlign: "center"
    
},

question: {
 fontSize: 14,  
 marginBottom: 10, 

color: '#9C9C9C',
},
questions: {
    fontWeight: '300',
lineHeight: 29,

color: '#1E1E24',
    marginBottom: 40,
 fontSize: 24,
 textAlign: "center"   
},
questions2: {
    fontWeight: '300',
    fontSize: 14,
    lineHeight: 20,
    
    
    textAlign: 'center'
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