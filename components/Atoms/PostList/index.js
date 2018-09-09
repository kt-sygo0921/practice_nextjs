import {graphql} from 'react-apollo';
import gql from 'graphql-tag';
import ErrorMessage from '../ErrorMessage';
import PostUpvoter from '../PostUpvoter';
import { Object } from 'glamorous';

const POSTS_PER_PAGE = 10;

function PostList({
    data: {loading, error, allPosts, _allPostMeta},
    loadMorePosts
}) {
    if(error) return <ErrorMessage message='Error loading posts.' />
    if(allPosts && allPosts.length) {
        const areMorePosts = allPosts.length < _allPostMeta.count;
        return (
            <section>
                <ul>
                    {allPosts.map((post, index) => {
                        <li key={post.id}>
                            <div>
                                <span>{index + 1}.</span>
                                <a href={post.url}>{post.title}</a>
                                <PostUpvoter id={post.id} votes={post.votes} />
                            </div>
                        </li>
                    })}
                </ul>
                {areMorePosts ? (
                    <button onClick={() => loadMorePosts()}>
                        {' '}
                    </button>
                ) : (
                    ''
                )}
            </section>
        )
    }
    return <div>Loading</div>
}

export const allPosts = gql`
    query allPosts($first: Int!, $skip: Int!) {
        allPosts(orderBy: createdAt_DESC, first: $first, skip: $skip) {
            id
            title
            votes
            url
            createdAt
        }
        _allPostMeta {
            count
        }
    }
`

export const allPostsQueryVars = {
    skip: 0,
    first: POSTS_PER_PAGE
}

export default graphql(allPosts, {
    options: {
        variables:allPostsQueryVars
    },
    props: ({data}) => ({
        data,
        loadMorePosts: () => {
            return data.fetchMore({
                variables: {
                    skip: data.allPosts.length
                },
                updateQuery: (previousResult, {fetchMoreResult}) => {
                    if(!fetchMoreResult) {
                        return previousResult
                    }
                    return Object.assing({}, previousResult, {
                        allPosts: [...previousResult.allPosts, ...fetchMoreResult.allPosts]
                    })
                }
            })
        }
    })
})(PostList)