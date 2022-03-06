import React from 'react';
import { FacebookProvider, Page } from 'react-facebook';
 
export default function FacebookPage() {
    return (
        <FacebookProvider appId="895361817967300">
            <Page 
                href="https://www.facebook.com/WeAreSimpleTravelers" 
                adapt_container_width="true" 
                // width={400}
            />
        </FacebookProvider>    
    );
}
