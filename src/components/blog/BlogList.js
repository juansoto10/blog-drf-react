import LoadingCard from 'components/loaders/LoadingCard';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { get_blog_list, get_blog_list_page } from 'redux/actions/blog';

function BlogList({
    blog_list,
    get_blog_list,
    get_blog_list_page
}) {
    useEffect(() => {
        get_blog_list()
    }, [])

    return(
        <div>
            {
                blog_list ?
                <>List</>
                :
                <LoadingCard />
            }
        </div>
    )
}

const mapStateToProps = state => ({
    blog_list: state.blog.blog_list
})

export default connect(mapStateToProps, {
    get_blog_list,
    get_blog_list_page
})(BlogList)
