import { AuthenticatedTemplate } from '@azure/msal-react';

import { NavigationBar } from './NavigationBar';

export const PageLayout = (props) => {
    return (
        <>
            <div className="w-[800px]">
              <NavigationBar />
            </div>
            {props.children}
            <br />
            <AuthenticatedTemplate>
                <footer>
                  Authenticated footer
                </footer>
            </AuthenticatedTemplate>
        </>
    );
}
