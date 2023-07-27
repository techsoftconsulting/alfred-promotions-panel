import AppDrawer from '@main-components/Base/AppDrawer';
import AppDrawerContent from '@main-components/Base/AppDrawer/components/AppDrawerContent';
import { useTheme } from '@shared/ui/theme/AppTheme';
import { Icon } from '@main-components/Base/Icon';
import useGetIdentity from '@modules/auth/application/use-get-identity';
import useGetRestaurantById from '@modules/user/application/use-get-restaurant-by-id';
import * as React from 'react';

export const DRAWER_WIDTH = 320;
export const FOOTER_HEIGHT = 65;

export default function Layout() {
    const theme = useTheme();

    const { identity } = useGetIdentity();
    const { data: restaurant } = useGetRestaurantById(identity?.restaurantId, { enabled: !!identity });
    //
    // console.log(identity?.toPrimitives().type);
    const role = identity?.toPrimitives().type;

    const ADM_PROMO_MENU = [
        <AppDrawer.Screen
                name={'index'}
                options={{
                    drawerIcon: (props: any) => (
                            <Icon
                                    name={'ios-megaphone-outline'}
                                    type={'ionicon'}
                                    color={props.color ?? 'white'}
                                    numberSize={20}
                            />
                    ),
                    title: 'Promociones',
                    headerTitle: '',
                    headerShown: false
                }}
        />,
        <AppDrawer.Screen
                name={'account'}
                options={{
                    drawerIcon: (props: any) => (
                            <Icon
                                    name={'user-cog'}
                                    type={'font-awesome-5'}
                                    color={props.color ?? 'white'}
                                    numberSize={20}
                            />
                    ),
                    title: 'Cuenta',
                    headerTitle: '',
                    headerShown: false
                }}
        />
    ];

    const SADMIN_MENU = [
        <AppDrawer.Screen
                name={'index'}
                options={{
                    drawerIcon: (props: any) => (
                            <Icon
                                    name={'ios-megaphone-outline'}
                                    type={'ionicon'}
                                    color={props.color ?? 'white'}
                                    numberSize={20}
                            />
                    ),
                    title: 'Promociones',
                    headerTitle: '',
                    headerShown: false
                }}
        />,

        <AppDrawer.Screen
                name={'reservations'}
                options={{
                    drawerIcon: (props: any) => (
                            <Icon
                                    name={'calendar'}
                                    type={'font-awesome'}
                                    color={props.color ?? 'white'}
                                    numberSize={20}
                            />
                    ),
                    title: 'Reservas realizadas',
                    headerTitle: '',
                    headerShown: false
                }}
        />,

        <AppDrawer.Screen
                name={'settings'}
                options={{
                    drawerIcon: (props: any) => (
                            <Icon
                                    name={'cog'}
                                    type={'font-awesome'}
                                    color={props.color ?? 'white'}
                                    numberSize={20}
                            />
                    ),
                    title: 'Ajustes',
                    headerTitle: '',
                    headerShown: false
                }}
        />,

        <AppDrawer.Screen
                name={'users'}
                options={{
                    drawerIcon: (props: any) => (
                            <Icon
                                    name={'users'}
                                    type={'font-awesome-5'}
                                    color={props.color ?? 'white'}
                                    numberSize={20}
                            />
                    ),
                    title: 'Usuarios',
                    headerTitle: '',
                    headerShown: false
                }}
        />,
        <AppDrawer.Screen
                name={'account'}
                options={{
                    drawerIcon: (props: any) => (
                            <Icon
                                    name={'user-cog'}
                                    type={'font-awesome-5'}
                                    color={props.color ?? 'white'}
                                    numberSize={20}
                            />
                    ),
                    title: 'Cuenta',
                    headerTitle: '',
                    headerShown: false
                }}
        />
    ];

    return (
            <AppDrawer
                    drawerContent={(props) => {
                        return (
                                <AppDrawerContent {...props} name={restaurant?.name}
                                        logoUrl={restaurant?.logoUrl}
                                />
                        );
                    }}
                    screenOptions={{
                        drawerStyle: {
                            maxWidth: DRAWER_WIDTH,
                            position: 'fixed',
                            left: 0,
                            backgroundColor: theme.colors.primaryMain
                        },
                        sceneContainerStyle: {
                            left: DRAWER_WIDTH,
                            width: `calc(100% - ${DRAWER_WIDTH}px)`
                        },
                        drawerType: 'permanent'
                    }}
            >
                {role == 'ADMIN' ? SADMIN_MENU : ADM_PROMO_MENU}
            </AppDrawer>
    );
}

