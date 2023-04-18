import * as React from 'react'
import { WagmiConfig } from 'wagmi'

import { client } from './wagmi'
import Page from "./pages";

function App() {
    const [mounted, setMounted] = React.useState(false)
    React.useEffect(() => setMounted(true), [])
    return (
        <WagmiConfig client={client}>
                <title>Trustless Voting</title>
            {mounted && <Page />}
        </WagmiConfig>
    )
}

export default App