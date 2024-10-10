import { MsalProvider, AuthenticatedTemplate, useMsal, UnauthenticatedTemplate } from '@azure/msal-react';
 import { Container, Button } from 'react-bootstrap';
 import { PageLayout } from './components/PageLayout';
 import { IdTokenData } from './components/DataDisplay';
 import { loginRequest } from './authConfig';

 //import './styles/App.css';
import { PublicClientApplication } from '@azure/msal-browser';

 /**
  * Most applications will need to conditionally render certain components based on whether a user is signed in or not. 
  * msal-react provides 2 easy ways to do this. AuthenticatedTemplate and UnauthenticatedTemplate components will 
  * only render their children if a user is authenticated or unauthenticated, respectively. For more, visit:
  * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-react/docs/getting-started.md
  */
 const MainContent = () => {
     /**
      * useMsal is hook that returns the PublicClientApplication instance,
      * that tells you what msal is currently doing. For more, visit:
      * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-react/docs/hooks.md
      */
     const { instance } = useMsal();
     const activeAccount = instance.getActiveAccount();

     const handleRedirect = () => {
         instance
             .loginRedirect({
                 ...loginRequest,
                 prompt: 'create',
             })
             .catch((error) => console.log(error));
     };
     return (
         <div className="App">
             <AuthenticatedTemplate>
                 {activeAccount ? (
                     <Container>
                         <IdTokenData idTokenClaims={activeAccount.idTokenClaims} />
                     </Container>
                 ) : null}
             </AuthenticatedTemplate>
             <UnauthenticatedTemplate>
                 <Button className="signInButton" onClick={handleRedirect} variant="primary">
                     Sign up
                 </Button>
             </UnauthenticatedTemplate>
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
             <PageLayout>
                 <MainContent />
             </PageLayout>
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
