const fetches = []

function addFetch(url: string){
  fetches.push(fetch(url))
}

addFetch("https://onion-test.nakasyou.repl.co")

await Promise.all(fetches)
