export async function getDataPrueba(url) {
    const res = await fetch(url, {
        headers: {
            "Authorization": "Bearer 2861|71cMVUWNgT6Bovm4fNUxkADKfZdMDbqUoZ9qGMrD"
        }
    })
    const data = await res.json()
    return data
}