export const styleSheet = {
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column',
        height: '90vh',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },


    login__cover: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column',
        height: '90%',
        width: '50%',
        alignItems: 'center',
        justifyContent: 'space-around',
        borderRadius: '5px', 
        boxShadow: '1px 2px 7px #F4AAB9',
        border: '2px solid rgb(226, 226, 226)',
        marginRight: '5%',
    },
    login__image: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '90%',
        width: '30%',
        backgroundSize: 'cover',
        backgroundPosition: 'bottom center',
        marginLeft: '8%',
    },
    title__container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
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
        width: '80%',
        //alignItems: 'center',
        justifyContent: 'space-around',
        height: '90%',
    },
    btn__container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center', 
        width: '55%',
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
    },

}