interface PageProps {
    params: {
        id: string
    }

}

const Post = (props: PageProps) => {
    return <p>Location: {props.params.id}</p>
}

export default Post
