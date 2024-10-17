import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles({
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: '100vh'
    },

    card: {
        width: "50%",
        paddingInline: "20px",
        background: "white",
        borderRadius:"10px"
    },

    heading: {
        fontWeight: "bold",
        marginTop: '30px'
    },

    text: {
        marginBottom: "15px",
        borderRadius: 4
    },

    label: {
        marginTop: "10px"
    },

    form: {
        width: "100%"
    },

    form1: {
        display: 'block',
    },

    btn: {
        border: "none",
        marginInline: "auto",
        background: "linear-gradient(to right, #e57373, #f44336, #d32f2f )",
        '&:hover': {
            background: " #d32f2f"
        },
        textAlign: "center",
        marginTop: "20px",
        marginBottom: "30px",
        borderRadius: "6px",

    },

    btn_text: {
        color: "white",
        fontWeight: "bold"

    }

})


export default useStyles