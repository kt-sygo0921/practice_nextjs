import {translate, loadNamespaces} from 'react-i18next';
import {getInitialProps, I18n} from '../i18n';

export const withI18next = (namespace = ['common']) => ComosedComponent => {
    const Exteded = translate(namespaces, {i18: I18n ,wait: process.browser}) {
        ComosedComponent
    }

    Exteded.getInitialProps = aync (ctx) => {
        const ComposedInitialProps = ComosedComponent.getInitialProps
            ? await ComosedComponent.getInitialProps(ctx) : {}
        const i18nInitialProps = ctx.req 
            ? getInitialProps(ctx.req, namespace)
            : await loadNamespaces({
                components: [{props: {namespaces}}],
                i18n: I18n,
            })
        return {
            ...ComposedInitialProps,
            ...i18nInitialProps
        }
    }

    return Exteded
}