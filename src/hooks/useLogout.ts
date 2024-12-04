import { useMsal } from '@azure/msal-react';

export default function useLogout () {
    const { instance } = useMsal();

    function logoutRedirect () {
        instance.logoutRedirect().catch((error) => console.log(error));
    }

    return logoutRedirect;
}
