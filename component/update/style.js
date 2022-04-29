import {StyleSheet} from 'react-native'

export default StyleSheet.create({
    searchSection: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
         borderColor: '#dcdcdb',
         marginBottom: 20,
        borderRadius: 10,
        borderWidth: 1
        
    },
    searchIcon: {
        padding: 10,
    },
    input: {
        flex: 1,
        paddingTop: 12,
        paddingRight: 10,
        paddingBottom: 12,
        paddingLeft: 20,
        color: '#424242',
       
    },
container: {
    paddingTop: 40,
    paddingHorizontal: 20,
    height: '100%',
    backgroundColor: "white",
    paddingBottom: 200
},

top: {
    marginVertical: 16,
},
options: {
    marginVertical: 16,
    flex: 1,
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
    marginBottom: 50,

},
buttonText: {
    fontSize: 14,
    fontWeight: '600',
    color: 'white',
    
},
buttonText: {
    fontSize: 14,
    fontWeight: '600',
    color: 'white',
    
},
question: {
 fontSize: 18,  
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