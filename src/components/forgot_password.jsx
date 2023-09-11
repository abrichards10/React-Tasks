import * as React from 'react';
import {Field, Form, FormSpy} from 'react-final-form';
import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {AppBar, Paper} from "@mui/material";
import TextField from "@mui/material/TextField";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    FormFeedback,
} from 'reactstrap';
import Container from "@mui/material/Container";
import {useNavigate} from "react-router-dom";
import {createTheme, ThemeProvider} from "@mui/material/styles";
const ForgotPassword = () => {
    const [sent, setSent] = React.useState(false);

    const validate = (values: { [index: string]: string }) => {
        // const errors = required(['email'], values);
        //
        // if (!errors.email) {
        //     const emailError = email(values.email);
        //     if (emailError) {
        //         errors.email = emailError;
        //     }
        // }
        //
        // return errors;
    };

    let navigate = useNavigate();
    const handleSubmit = () => {
        // TODO: This is where you would store the login info in a db if needed
        // setSent(true);
        navigate("/login_demo")
    };

// TODO: MOVE TO ANOTHER FILE
// APPForm Function
    function AppForm(props: React.HTMLAttributes<HTMLDivElement>) {
        const { children } = props;

        return (
            <Box
                sx={{
                    display: 'flex',
                    backgroundImage: 'url(/static/onepirate/appCurvyLines.png)',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                <Container maxWidth="sm">
                    <Box sx={{ mt: 7, mb: 12 }}>
                        <Paper
                            background="light"
                            sx={{ py: { xs: 4, md: 8 }, px: { xs: 3, md: 6 } }}
                        >
                            {children}
                        </Paper>
                    </Box>
                </Container>
            </Box>
        );
    }

    const defaultTheme = createTheme({
            palette: {
                primary: {
                    main: "#6e588f",
                },
                secondary: {
                    main: "#6e588f",
                },
            },
        }
    );


    return (
        <ThemeProvider theme={defaultTheme}>
        <React.Fragment>
            <AppBar />
            <AppForm>
                <React.Fragment>
                    <Typography variant="h3" gutterBottom marked="center" align="center">
                        Forgot your password?
                    </Typography>
                    <Typography variant="body2" align="center">
                        {"Enter your email address below and we'll " +
                            'send you a link to reset your password.'}
                    </Typography>
                </React.Fragment>
                <Form
                    onSubmit={handleSubmit}
                    subscription={{ submitting: true }}
                    validate={validate}
                >
                    {({ handleSubmit: handleSubmit2, submitting }) => (
                        <Box component="form" onSubmit={handleSubmit2} noValidate sx={{ mt: 6 }}>
                            <Field
                                autoFocus
                                autoComplete="email"
                                component={TextField}
                                disabled={submitting || sent}
                                fullWidth
                                label="Email"
                                margin="normal"
                                name="email"
                                required
                                size="large"
                            />
                            <FormSpy subscription={{ submitError: true }}>
                                {({ submitError }) =>
                                    submitError ? (
                                        <FormFeedback error sx={{ mt: 2 }}>
                                            {submitError}
                                        </FormFeedback>
                                    ) : null
                                }
                            </FormSpy>
                            <Button onClick={handleSubmit}
                                sx={{ mt: 3, mb: 2 }}
                                // disabled={submitting || sent}
                                size="large"
                                color="secondary"
                                fullWidth
                            >
                                 {submitting || sent ? 'In progress…' : 'Send reset link'}

                            </Button>
                        </Box>
                    )}
                </Form>
            </AppForm>
            {/*<AppFooter />*/}
        </React.Fragment>
        </ThemeProvider>
    );
}
export default ForgotPassword;