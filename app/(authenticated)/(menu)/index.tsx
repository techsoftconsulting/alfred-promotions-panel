import useGetIdentity from '@modules/auth/application/use-get-identity';
import PromotionsScreen from '@modules/user/ui/screens/PromotionsScreen';

export default function DashboardRoute() {
    const { identity } = useGetIdentity();


    return (
            <PromotionsScreen />
    );
    /* if (!identity) return <Box></Box>;


     if (identity.isAdmin) {
         return <DashboardScreen />;
     }

     return (
             <InDevelopment />
     );*/
}