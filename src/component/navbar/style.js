
export const styleSheet = {

    container: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        width: '100%'
       
    },

    boxbar: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        background: "#15151e",
        height: '80px',
        boxShadow: '-2px 6px 9px -4px #a7a7d7',
        borderBottom: '3px solid #a7a7d7'
       
    },

    link__cover: {
        textDecoration: "none",
        color:'white',
        height: '100%',
        borderRadius: '5px',
        fontFamily: 'Tahoma',
        '&:hover': {
            backgroundColor: '#34344b',
            borderBottom: '5px solid #c10b0b',
            color: 'red'
         },
    },

    btnList: {
        color:'white',
        height: '100%',
        fontWeight: 'bold'
    },

   

    btn__container: {
        height: '20%',
    }
}