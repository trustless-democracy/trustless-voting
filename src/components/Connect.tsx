import { useAccount, useConnect, useDisconnect } from 'wagmi'

export function Connect() {
  const { connector, isConnected, address } = useAccount()
  const { connect, connectors, isLoading, pendingConnector } = useConnect({
    onError: error => {
      console.error(error)
      alert("Please connect again after page reloaded")
      location.reload()
    }
  })
  const { disconnect } = useDisconnect()

  return (
    <div>
      <div>
        {isConnected && <>
          <button onClick={() => disconnect()}>
            Disconnect
          </button>
            {/*{address}*/}
        </>}

        {!isConnected && (
            <button onClick={() => connect({ connector: connectors[0] })}>
                Connect
                {isLoading && connectors[0].id === pendingConnector?.id && ' (connecting)'}
            </button>
        )}

        {/*{!isConnected && isLoading && (
            <div>Connecting...</div>
        )}*/}

        {/*{connectors
          .filter((x) => x.ready && x.id !== connector?.id)
          .map((x) => (
            <button key={x.id} onClick={() => connect({ connector: x })}>
              {x.name}
              {isLoading && x.id === pendingConnector?.id && ' (connecting)'}
            </button>
          ))}*/}
      </div>

      {/*{error && <div>{error.message}</div>}*/}
    </div>
  )
}
