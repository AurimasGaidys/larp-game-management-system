// import { AppProps } from "next/app"
import { RecoilRoot } from "recoil"

const MyApp = ({ Component, pageProps }: any) => {
    return <RecoilRoot>
        <Component {...pageProps} />
    </RecoilRoot>
}

export default MyApp;