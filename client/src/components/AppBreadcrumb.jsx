import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import routes from '../routes'

import { CBreadcrumb, CBreadcrumbItem } from '@coreui/react'

const AppBreadcrumb = () => {
    const currentLocation = useLocation().pathname
    const navigate = useNavigate()

    const getRouteName = (pathname, routes) => {
        const currentRoute = routes.find((route) => route.path === pathname)
        return currentRoute ? currentRoute.name : pathname.split('/').pop()
    }

    const toPascalCase = (s) => {
        return s.replace(/\w+/g, function (w) {
            return w[0].toUpperCase() + w.slice(1).toLowerCase()
        })
    }

    const getBreadcrumbs = (location) => {
        const breadcrumbs = []
        location.split('/').reduce((prev, curr, index, array) => {
            const currentPathname = `${prev}/${curr}`
            const routeName = toPascalCase(
                getRouteName(currentPathname, routes).replaceAll('-', ' '),
            )
            routeName &&
                breadcrumbs.push({
                    pathname: currentPathname,
                    name: routeName,
                    active: index + 1 === array.length ? true : false,
                })
            return currentPathname
        })
        return breadcrumbs
    }

    const breadcrumbs = getBreadcrumbs(currentLocation)

    return (
        <CBreadcrumb className="my-0">
            <CBreadcrumbItem onClick={() => navigate('/dashboard')}>Home</CBreadcrumbItem>
            {breadcrumbs.map(
                (breadcrumb, index) =>
                    breadcrumb.pathname !== '/dashboard' && (
                        <CBreadcrumbItem
                            {...(breadcrumb.active
                                ? { active: true }
                                : { onClick: () => navigate(breadcrumb.pathname) })}
                            key={index}
                            style={{ cursor: breadcrumb.active ? 'default' : 'pointer' }}
                        >
                            {breadcrumb.name}
                        </CBreadcrumbItem>
                    ),
            )}
        </CBreadcrumb>
    )
}

export default React.memo(AppBreadcrumb)
