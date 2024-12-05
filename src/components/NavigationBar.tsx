import { AuthenticatedTemplate, UnauthenticatedTemplate, useMsal } from '@azure/msal-react';
import { loginRequest } from '../authConfig';

export const NavigationBar = () => {
    const { instance } = useMsal();

    const handleLoginRedirect = () => {
        instance.loginRedirect(loginRequest).catch((error) => console.log(error));
    };

    const handleLogoutRedirect = () => {
        instance.logoutRedirect().catch((error) => console.log(error));
    };

    return (
        <>
            <div bg="primary" variant="dark" className="w-full flex justify-between">
                <a className="flex items-center" href="/">
                    Testing Auth Platform on MSAL with React 
                </a>
                <AuthenticatedTemplate>
                    <div className="">
                        <button variant="warning" onClick={handleLogoutRedirect}>
                            Sign out
                        </button>
                    </div>
                </AuthenticatedTemplate>
                <UnauthenticatedTemplate>
                    <div className="">
                        <button onClick={handleLoginRedirect}>Sign in</button>
                    </div>
                </UnauthenticatedTemplate>
            </div>
        </>
    );
};
