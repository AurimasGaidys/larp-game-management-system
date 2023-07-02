import { Suspense, use } from "react"
import { onGetLocation } from "../../../../dataLayer/apiService"

interface PageProps {
    params: {
        id: string
    }
}

const Loading = () => {
    return <h2>🌀 Loading...</h2>;
}

const Location = ({ id }: { id: string }) => {
    if (id === '') {
        return null;
    }

    const location = use(onGetLocation(id));
    return <p>Location: {location.data}</p>
}

const Page = (props: PageProps) => {

    return <Suspense fallback={<Loading />}>
        <Location id={props.params.id} />
    </Suspense>
}

export default Page
