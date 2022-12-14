export const styleSheet = {
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column',
        height: '600px',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },


    containerBottom: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column',
        height: '200px',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        background: "#181b34",
        color: 'white'
    },

    login__cover: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column',
        height: '80%',
        width: '30%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '7px', 
        boxShadow: '1px 2px 7px #F4AAB9',
        border: '2px solid rgb(226, 226, 226)',
        marginRight: '15%',
    },

    login__image: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '80%',
        width: '30%',
        backgroundSize: 'cover',
        backgroundPosition: 'bottom center',
        marginLeft: '8%',
    },

    title__container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '35%',
    },

    titles: {   
        fontWeight: 'bold',
        color: 'rebeccapurple',
        fontSize: '30px'
    },

    userIcon:{
        color: 'rebeccapurple',
        fontSize: '140',
       
    },

    form__container: {
        display: 'flex',
        flexDirection: 'column',
        height: '55%',
        width: '100%',
 
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    btn__container: {
        height: '30%',
        width: '55%'
    },

    buttons: {
        width: '100%',
        height: '45px',
        padding: '10px',
        border: 'none',
        backgroundColor: 'rebeccapurple',
        color: 'white',
        borderRadius: '3px',
        fontSize: '18px',
        marginTop: "15px",
        marginBottom: '30px',
        fontWeight: 'bold',
        cursor: 'pointer'
        
    },

    bottomSpan:{
        color: 'white',
        fontSize: '14px',
        fontFamily: 'Noto Sans, sans-serif'
    }
}