import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    button: {
        width: 210,
        height: 50,
        borderRadius: 8,
        backgroundColor: "#1e90ff",
        justifyContent: "center",
        alignItems: "center",
        fontWeight: 'bold',
        marginTop: 20
    },
    disabled:{
        width: 210,
        height: 50,
        borderRadius: 8,
        backgroundColor: "#aaa",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
    },
    buttonText: {
        color: "#fff",
        fontFamily: 'Roboto_500Medium',
        fontWeight: 'bold',
    },
    avatar: {
        width: 210,
        height: 210,
        marginBottom: 45,
        resizeMode: "cover",
        borderRadius: 20
    },
    selectObjs:{
        justifyContent: "center",
        flexDirection: "row",
        alignItems: "center"
    },
    buttonIcon:{
        width: 70,
        height: 70,
        margin: 8, 
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 60,
        backgroundColor: "#1e90ff"
    },
    select:{
        flexDirection: 'row',
        width: 210,
        alignItems: "center",
        justifyContent: "center"
    },
    item:{
        width: '48%',
        height: 50,
        color: '#5271ff'
    }
  });


export default styles;