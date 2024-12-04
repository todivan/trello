import { useMsal } from '@azure/msal-react';

export default function useUserData () {
    const { instance } = useMsal();
    return instance.getActiveAccount();
}
