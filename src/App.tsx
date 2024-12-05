import './App.css'
import { MsalProvider, AuthenticatedTemplate, useMsal, UnauthenticatedTemplate } from '@azure/msal-react';
import { HelloWorld} from './components/HelloWorld';
import { PageLayout } from './components/PageLayout';
import { loginRequest } from './authConfig';


const MainContent = () => {
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
                      <HelloWorld />
                ) : null}
            </AuthenticatedTemplate>
            <UnauthenticatedTemplate>
                <button className="signInButton" onClick={handleRedirect} variant="primary">
                    Sign up
                </button>
            </UnauthenticatedTemplate>
        </div>
    );
};


function App({instance}) {
  return (
          <MsalProvider instance={instance}>
    <PageLayout>
      
      <MainContent />
    </PageLayout>
        </MsalProvider>
  )
}

export default App
