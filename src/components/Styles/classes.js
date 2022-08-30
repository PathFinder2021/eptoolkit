import Colors from './colors';

export const overviewContainer = () => {
    return {
        marginTop: -32,
        borderRadius: 15,
        borderTopRightRadius: 0,
        border: "3px solid",
        borderColor: Colors.primaryColor1,
        backgroundColor: Colors.secondaryColor1,
        boxShadow: "0px 10px 10px -5px #00000040",
        "&:hover": {
            cursor: "default"
        }
    }
}

export const overviewTitleContainer = () => {
    return {
        borderTopLeftRadius: 13,
        borderBottom: "3px solid",
        borderBottomColor: Colors.primaryColor1,
        backgroundColor: "white",
    }
}

export const overviewIcon = () => {
    return {
        verticalAlign: 'middle',
        fontSize: 50,
        textAlign: "center",
        margin: 10,
        marginLeft: 43,
    }
}

export const stepperTopContainer = () => {
    return {
        borderRadius: 15,
        border: "3px solid",
        borderBottomRightRadius: 0,
        borderBottomLeftRadius: 0,
        marginBottom: "-3px",
        borderColor: Colors.primaryColor1,
        backgroundColor: Colors.secondaryColor1,
        "&:hover": {
            cursor: "default"
        }
    }
}

export const stepperTopTitleContainer = () => {
    return {
        borderTopLeftRadius: 13,
        borderTopRightRadius: 13,
        borderBottom: "3px solid",
        borderBottomColor: Colors.primaryColor1,
        backgroundColor: "white",
    }
}

export const stepperBottomContainer = () => {
    return {
        borderRadius: 15,
        border: "3px solid",
        borderTopRightRadius: 0,
        borderTopLeftRadius: 0,
        boxShadow: "0px 10px 10px -5px #00000040",
        marginTop: "-3px",
        borderColor: Colors.primaryColor1,
        backgroundColor: Colors.secondaryColor1,
        "&:hover": {
            cursor: "default"
        }
    }
}

export const linkButton = () => {
    return {
        color: 'white',
        backgroundColor: Colors.primaryColor1,
        fontWeight: "bold",
        fontSize: 18,
        textAlign: "center",
        border: 'none',
        borderRadius: 20,
        padding: "8px 15px",
        verticalAlign: 'middle',
        textTransform: "none",
        transitionDuration: "150ms",
        transitionProperty: "background-color",
        '&:hover': {
            backgroundColor: Colors.primaryColorHover,
            transitionDuration: "150ms",
            transitionProperty: "background-color",
        },
    }
}

export const retrofitLinkButton = () => {
    return {
        color: 'black',
        backgroundColor: Colors.themeRetrofitting,
        fontWeight: "bold",
        fontSize: 18,
        width: "110px",
        textAlign: "center",
        border: '2px solid black',
        borderRadius: 20,
        padding: "8px 15px",
        verticalAlign: 'middle',
        transitionDuration: "150ms",
        transitionProperty: "background-color",
        '&:hover': {
            backgroundColor: Colors.themeRetrofittingHover,
            transitionDuration: "150ms",
            transitionProperty: "background-color",
        },
    }
}