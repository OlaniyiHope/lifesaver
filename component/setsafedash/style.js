import {StyleSheet} from 'react-native'

export default StyleSheet.create({
    searchSection: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
         borderColor: '#dcdcdb',
        borderRadius: 10,
        borderWidth: 1
        
    },
    searchIcon: {
        fontSize: 17,
        marginRight: 20
        
    },
    input: {
        flex: 1,
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        marginBottom: 12,
        paddingLeft: 20,
        color: '#424242',
       
    },
placeholder:{ 
marginLeft: 10,
    },
container: {
    paddingTop: 40,
    paddingHorizontal: 20,
    backgroundColor: "white",
    marginBottom: 300
    
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
    borderRadius: 12,
    alignItems: 'center',

},
button2: {

    backgroundColor: "#fff",
    padding: 12,
    width: "100%",
    paddingHorizontal: 16,
    borderRadius: 12,
    borderColor: "black",
    alignItems: 'center',

},
buttonText: {
    fontSize: 14,
    fontWeight: '600',
    color: 'white',
lineHeight: 20,
textAlign: "center",


},

question: {
    fontWeight: '300',
    fontSize: 14,
    lineHeight: 17,
    color: '#9C9C9C',
    marginBottom: 12,
},
questions: {
    marginBottom: 20,
 fontSize: 20,
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
},
question3: {
    color: "red",
    marginBottom: 50
}


});