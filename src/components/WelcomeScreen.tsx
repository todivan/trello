import { Button } from 'react-bootstrap';
import React from "react";
import { useLogin } from '../hooks/useLogin';
import { useSignUpRedirect } from '../hooks/useSignUpRedirect';

const styles = {
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#f3f3f3'
    },
    content: {
        alignItems: 'center',
        margin: 'auto',
        maxWidth: 600
    },
    title: {
        color: '#333'
    },
    message: {
        fontSize: '18px',
        color: '#666'
    },
    buttonWrapper: {
        marginTop: '20px'
    },
    button: {
        margin: '10px'
    }
};

interface WelcomeScreenProps {
    logout: () => void;
  }




export const WelcomeScreen = ({ logout }: WelcomeScreenProps) => {
    const { login, isLoading, error } = useLogin();

    const { signUpRedirect} = useSignUpRedirect()

    return (
        <div style={styles.container}>
            <div style={styles.content}>
                <h1 style={styles.title}>Welcome to Trello!</h1>
                <p style={styles.message}>Please sign in or sign up to get started.</p>
                <div style={styles.buttonWrapper}>
                    <div>
                        <Button
                            className="contained"
                            variant="primary"
                            style={styles.button}
                            onClick={login} disabled={isLoading}
                        >
                            {isLoading ? "Logging in..." : "Sign in"}
                        </Button>
                        {error && <p style={{ color: "red" }}>Login failed: {error.message}</p>}
                    </div>

                    <div>
                    <Button
                        className="contained"
                        variant="primary"
                        style={styles.button}
                        onClick={signUpRedirect}
                    >
                        Sign Up
                    </Button>
                    {error && <p style={{ color: "red" }}>Sign-up failed: {error.message}</p>}
                    </div>
                </div>
            </div>
        </div>
    );
};
