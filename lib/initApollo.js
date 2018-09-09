import {ApolloClient} from 'apollo-client';
import {HttpLink} from 'apollo-link-http';
import {InMemoryCache} from 'apollo-cache-inmemory';
import fetch from 'isomorphic-unfetch';

let apolloClient = null;

if(!process.browser) {
    global.fetch = fetch
}

function create(initialState) {
    return new ApolloClient({
        connectToDevTools: process.browser,
        ssrMode: !process.browser,
        link: new HttpLink({
            url: 'https://api.graph.cool/simple/v1/cixmkt2ul01q00122mksg82pn', //ここに実際のURLを書くよ
            credentials: 'same-origin'
        }),
        cache: new InMemoryCache().restore(initialState || {})
    })
}

export default function initApollo(initialState) {
    if(!process.browser) {
        return create(initialState)
    }
    if(!apolloClient) {
        apolloClient = create(initialState)
    }
    return apolloClient;
}