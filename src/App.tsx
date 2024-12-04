import { MsalProvider } from '@azure/msal-react';
import { Container, ThemeProvider } from 'react-bootstrap';

// import './styles/App.css';
import { PublicClientApplication } from '@azure/msal-browser';
import theme from './theme/Theme';
import SearchAppBar from './components/MenuBar/AppBar';
import { ListProvider } from './context/ListsContext';
import MainContent from './components/Board/MainContent';
import { WelcomeScreen } from './components/WelcomeScreen';
import useUserData from './hooks/useUserData';
import useLogout from './hooks/useLogout';

/**
  * Most applications will need to conditionally render certain components based on whether a user is signed in or not.
  * msal-react provides 2 easy ways to do this. AuthenticatedTemplate and UnauthenticatedTemplate components will
  * only render their children if a user is authenticated or unauthenticated, respectively. For more, visit:
  * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-react/docs/getting-started.md
  */
const AppContent = () => {
    /**
      * useMsal is hook that returns the PublicClientApplication instance,
      * that tells you what msal is currently doing. For more, visit:
      * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-react/docs/hooks.md
      */
    const activeAccount = useUserData();
    const logout = useLogout();

    return (
        <div className="App">
            {activeAccount ? (
                <Container>
                    <ThemeProvider theme={theme}>
                        <SearchAppBar />
                        <ListProvider>
                            <MainContent />
                        </ListProvider>
                    </ThemeProvider>
                </Container>
            )

                : <WelcomeScreen logout ={logout} />}
            {/* create custom component for public and private layout */}
        </div>
    );
};

/**
  * msal-react is built on the React context API and all parts of your app that require authentication must be
  * wrapped in the MsalProvider component. You will first need to initialize an instance of PublicClientApplication
  * then pass this to MsalProvider as a prop. All components underneath MsalProvider will have access to the
  * PublicClientApplication instance via context as well as all hooks and components provided by msal-react. For more, visit:
  * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-react/docs/getting-started.md
  */
const App = ({ instance }: { instance: PublicClientApplication }) => {
    return (
        <MsalProvider instance={instance}>
            {/* <PageLayout> */}
            <AppContent />
            {/* </PageLayout> */}
        </MsalProvider>
    );
};

export default App;

// import { ThemeProvider } from 'styled-components';
// import { ListProvider } from './context/ListsContext';
// import theme from './theme/Theme';
// import SearchAppBar from './components/MenuBar/AppBar';
// import MainContent from './components/Board/MainContent';
// import { type ReactNode } from 'react';

// const rootStyles = {
//     backgroundColor: '#333333',
//     width: '100vw',
//     minHeight: '100vh',
//     padding: '5px'
// };

// function App (): ReactNode {
//     return (
//         <div className="App" style={rootStyles}>
//             <ThemeProvider theme={theme}>
//                 <SearchAppBar />

//                 <ListProvider>
//                     <MainContent />
//                 </ListProvider>
//             </ThemeProvider>
//         </div>
//     );
// }

// export default App;
