import React, { useEffect } from 'react'
import * as Sentry from '@sentry/react'
import {
    createRoutesFromChildren,
    matchRoutes,
    useNavigation,
    useNavigationType,
} from 'react-router-dom'
import { VITE_APP_NODE_ENV, VITE_APP_SENTRY_DNS } from './config'

if (VITE_APP_NODE_ENV === 'production')
    Sentry.init({
        dsn: VITE_APP_SENTRY_DNS,
        integrations: [
            // See docs for support of different versions of variation of react router
            // https://docs.sentry.io/platforms/javascript/guides/react/configuration/integrations/react-router/
            Sentry.reactRouterV6BrowserTracingIntegration({
                useEffect,
                useNavigation,
                useNavigationType,
                createRoutesFromChildren,
                matchRoutes,
            }),
            Sentry.replayIntegration(),
        ],

        tracesSampleRate: 1.0,
        profilesSampleRate: 1.0,
        replaysSessionSampleRate: 0.1,
        replaysOnErrorSampleRate: 1.0,
    })
