interface PageProps {
    params: {
        id: string
    }

}

const Post = (props: PageProps) => {
    return <p>Quest: {props.params.id}</p>
}

export default Post