export default async function handler(req, res) {

    const response = await fetch(
        "https://gist.githubusercontent.com/dancabral610-ctrl/6ac8ae154ea0bfb940f46d46f842ff60/raw/24761fee1eec0a6e0f73c5aba4079ff3d1e9e5a2/gistfile1.txt"
    )

    const text = await response.text()

    res.setHeader("Content-Type", "text/plain")
    res.status(200).send(text)
}
