import React from 'react';
import EmailLogin from '@modules/auth/ui/screens/EmailLogin';
import Head from 'expo-router/head';

export default function LoginRoute() {
    return (
            <>
                <Head>
                    <link
                            href={`${__DEV__ ? '../public/' : ''}general.css`}
                            rel='stylesheet'
                    />
                    <link
                            href={`${__DEV__ ? '../public/' : ''}ReactCrop.css`}
                            rel='stylesheet'
                    />
                </Head>
                <EmailLogin />
            </>
    );
}