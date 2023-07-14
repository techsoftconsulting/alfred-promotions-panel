import { Box } from '@main-components/Base/Box';
import AppLayout from '@main-components/Layout/AppLayout';
import ScrollView from '@main-components/Utilities/ScrollView';
import React from 'react';
import { GeneralSettings } from '@modules/user/ui/screens/SettingsScreen/components/tabs/GeneralSettings';


export default function SettingsScreen() {
    return (
            <AppLayout
                    title={'Ajustes'}
                    loading={false}
                    noPadding
            >
                <Box
                        flex={1}
                        pl={'m'}
                        mb={'m'}
                        bg={'white'}
                        pt={'m'}
                >
                    <ScrollView>
                        <GeneralSettings />
                    </ScrollView>
                </Box>
            </AppLayout>
    );
}

