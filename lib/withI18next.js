import {translate, loadNamespaces} from 'react-i18next';
import {getInitialProps, I18n} from '../i18n';

export const withI18next = (namespaces = ['common']) => ComosedComponent => {
    const Extended = translate(namespaces, { i18n: I18n, wait: process.browser })(
        ComosedComponent
    )
    Extended.getInitialProps = async (ctx) => {
        const ComposedInitialProps = ComosedComponent.getInitialProps
            ? await ComosedComponent.getInitialProps(ctx) : {}

        const i18nInitialProps = ctx.req 
            ? getInitialProps(ctx.req, namespaces)
            : await loadNamespaces({
                components: [{props: {namespaces}}],
                i18n: I18n,
            });
        return {
            ...ComposedInitialProps,
            ...i18nInitialProps
        }
    }
    return Extended
}